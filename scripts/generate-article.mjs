#!/usr/bin/env node
/**
 * generate-article.mjs
 *
 * Calls the Claude API (with web search) to research and draft a new
 * Viszlyn ranking article, directly in the RankingArticle data format
 * used by src/app/rankings/[slug]/page.tsx.
 *
 * This script NEVER publishes anything by itself. It only writes a new
 * data file + registers it, on a branch, for a human to review via a
 * GitHub PR + Vercel preview before merging. See the "5 editorial rules"
 * baked into the system prompt below — these came from real mistakes
 * caught during manual article production and must not be relaxed.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=... node scripts/generate-article.mjs "Highest-Paid Musicians in 2026"
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const RANKINGS_DATA_DIR = path.join(REPO_ROOT, "src", "data", "rankings");
const INDEX_PATH = path.join(RANKINGS_DATA_DIR, "index.ts");
const TYPES_PATH = path.join(RANKINGS_DATA_DIR, "types.ts");

const topic = process.argv[2];
if (!topic) {
  console.error('Usage: node scripts/generate-article.mjs "Article topic here"');
  process.exit(1);
}

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("Missing ANTHROPIC_API_KEY environment variable.");
  process.exit(1);
}

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const TYPE_SCHEMA = fs.readFileSync(TYPES_PATH, "utf-8");

const SYSTEM_PROMPT = `You are the research and drafting assistant for Viszlyn (viszlyn.io), a data-visualization
rankings site in the style of Visual Capitalist. You are drafting ONE new ranking article.

You will output a single JSON object matching this exact TypeScript type (field names and
shapes must match exactly):

${TYPE_SCHEMA}

## The 5 non-negotiable editorial rules (each one exists because of a real mistake caught in review):

1. **Verify all math with shown arithmetic.** Before writing your final JSON, show your work in
   plain text: list every figure you're about to use, and manually compute any sums, ratios, or
   "Nx" comparisons you plan to state in the quickAnswer, keyTakeaway, or detailedEntries. Only
   use a computed comparison (e.g. "nearly 3x") if you've actually verified the division.

2. **Never invent source attribution.** Every sourceTag must name a real, findable source you
   actually used via web search — never guess or assume a plausible-sounding source. If you
   can't find a solid source for an entry, do not include that entry.

3. **Don't pad to a round list size without real sourcing.** If you can only find and verify
   8 solid entries instead of 10, output 8. A shorter, fully-verified list is always better than
   a padded one. Do not invent a 9th or 10th entry to hit a round number.

4. **Don't guess Wikipedia links.** Only include a wikipediaUrl field if you have used web
   search to confirm that exact URL resolves to the correct person or entity. If you're not
   certain, omit the field entirely rather than guess.

5. **Cross-check every figure against 2+ sources where possible.** Use web search to find
   multiple sources for each figure. Note in sourceTag which sources you actually cross-checked
   (e.g. "Forbes; Equilar 100" only if you genuinely checked both).

## Process:
1. Use web search extensively to research the topic — find real, current, verifiable data.
2. Write out your source list and the raw figures you found, in plain text.
3. Show your arithmetic for every computed claim (sums, ratios, "Nx" comparisons) in plain text.
4. Then output your final answer as a single fenced code block starting with \`\`\`json and
   ending with \`\`\`, containing ONLY the JSON object — no comments, no trailing commas.

## Style notes (match the existing site's voice):
- eyebrow is almost always "Money" for this site's rankings so far, but use your judgment if the topic doesn't fit.
- title format: "The 10 Highest-___ in 2026" (or fewer than 10 if the sourcing only supports fewer — see rule 3).
- quickAnswer: 2-4 sentences, states the #1 entry and one verified comparative stat.
- introParagraph: 1 paragraph of context about the topic and methodology.
- calloutBox is OPTIONAL — only include it if there's a genuinely notable exclusion or caveat worth explaining (like the Musk exclusion in the CEO article). Omit the field entirely otherwise.
- detailedEntries: ranked from LAST to FIRST (i.e. rank 10 or N first, rank 1 last in the array) matching the existing articles' ordering.
- Every detailedEntries item needs: rank, name, earnings (or equivalent value field matching "earnings" key), category, revenueSources, blurb, standoutFact, sourceTag. origin and wikipediaUrl are optional per rules above.
- faqItems: 3-5 items, matching the tone of existing FAQs (plain, direct answers).
- relatedLinks: link to 2-4 other real existing Viszlyn rankings if topically related (you can guess reasonable existing slugs like highest-paid-ceos-2026, highest-paid-athletes-2026, highest-earning-creators-2026, or invent forward-looking ones like the existing articles do for not-yet-built rankings).
- slug: kebab-case, ending in the relevant year if applicable.

Do not include any of the metaTitle/ogTitle/etc as placeholder text — write real, specific SEO copy following the pattern of the existing metaTitle/metaDescription/ogTitle/ogDescription/twitterTitle/twitterDescription fields (see examples of the shape expected in the type comments/existing site conventions: title includes "| Viszlyn" suffix for metaTitle only).`;

async function generateArticle() {
  console.log(`\nResearching: "${topic}"...\n`);

  const response = await client.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 32000,
    system: SYSTEM_PROMPT,
    tools: [{ type: "web_search_20250305", name: "web_search" }],
    messages: [
      {
        role: "user",
        content: `Research and draft a new Viszlyn ranking article on: "${topic}". Follow the process exactly: research with web search, show your source list and arithmetic in plain text, then output the final JSON code block.`,
      },
    ],
  });

  const textBlocks = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  console.log("=== Claude's research & verification notes ===\n");
  console.log(textBlocks);
  console.log("\n===============================================\n");

  if (response.stop_reason === "max_tokens") {
    console.error(
      "ERROR: The response was cut off because it hit the max_tokens limit before finishing.\n" +
      "This usually means the research notes + full JSON article together exceeded the token budget.\n" +
      "Try increasing max_tokens further in scripts/generate-article.mjs, or try a topic with fewer entries."
    );
    process.exit(1);
  }

  const jsonMatch = textBlocks.match(/```json\s*([\s\S]*?)\s*```/);
  if (!jsonMatch) {
    if (textBlocks.includes("```json")) {
      console.error(
        "ERROR: Found the start of a ```json block but no closing ``` — the response was likely truncated mid-JSON.\n" +
        "See the max_tokens note above."
      );
    } else {
      console.error("ERROR: Could not find a ```json code block in Claude's response.");
    }
    console.error("Nothing was written. Review the notes above and try again.");
    process.exit(1);
  }

  let articleData;
  try {
    articleData = JSON.parse(jsonMatch[1]);
  } catch (err) {
    console.error("ERROR: The JSON block did not parse:", err.message);
    process.exit(1);
  }

  validateArticle(articleData);

  writeArticleFile(articleData);
  updateRegistry(articleData);

  console.log(`\nDone. New article data file written for slug: ${articleData.slug}`);
  console.log(`Review it carefully before opening a PR — this is a DRAFT, not a publish.`);
}

function validateArticle(data) {
  const requiredTopLevel = [
    "slug", "metaTitle", "metaDescription", "ogTitle", "ogDescription",
    "twitterTitle", "twitterDescription", "eyebrow", "title", "dek",
    "publishedDate", "lastUpdated", "dataPeriod", "quickAnswer",
    "introParagraph", "chartTitle", "chartSource", "chartItems",
    "chartTapNote", "detailedEntries", "keyTakeaway", "sourceNote",
    "faqItems", "relatedLinks",
  ];

  const missing = requiredTopLevel.filter((key) => !(key in data));
  if (missing.length > 0) {
    console.error(`ERROR: Generated article is missing required fields: ${missing.join(", ")}`);
    process.exit(1);
  }

  if (!Array.isArray(data.chartItems) || data.chartItems.length < 3) {
    console.error("ERROR: chartItems must be an array with at least 3 entries.");
    process.exit(1);
  }

  if (data.chartItems.length !== data.detailedEntries.length) {
    console.error(
      `ERROR: chartItems (${data.chartItems.length}) and detailedEntries (${data.detailedEntries.length}) counts don't match.`
    );
    process.exit(1);
  }

  if (!Array.isArray(data.faqItems) || data.faqItems.length < 3) {
    console.error("ERROR: faqItems must have at least 3 items.");
    process.exit(1);
  }

  if (!/^[a-z0-9-]+$/.test(data.slug)) {
    console.error(`ERROR: slug "${data.slug}" is not valid kebab-case.`);
    process.exit(1);
  }

  for (const dateField of ["publishedDate", "lastUpdated"]) {
    const parsed = new Date(data[dateField]);
    if (Number.isNaN(parsed.getTime())) {
      console.error(
        `ERROR: ${dateField} value "${data[dateField]}" is not a parseable date. Use a format like "September 12, 2026".`
      );
      process.exit(1);
    }
  }

  const outPath = path.join(RANKINGS_DATA_DIR, `${data.slug}.ts`);
  if (fs.existsSync(outPath)) {
    console.error(`ERROR: A data file for slug "${data.slug}" already exists. Aborting to avoid overwrite.`);
    process.exit(1);
  }

  console.log("Validation passed: schema, entry counts, and slug all check out.");
  console.log("NOTE: This script cannot independently re-verify Claude's arithmetic or sourcing —");
  console.log("that's still on the human reviewer. Read the research notes above carefully.");
}

function toCamelCase(slug) {
  return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function writeArticleFile(data) {
  const varName = toCamelCase(data.slug);
  const content = `import { RankingArticle } from "./types";

export const ${varName}: RankingArticle = ${JSON.stringify(data, null, 2)};
`;
  const outPath = path.join(RANKINGS_DATA_DIR, `${data.slug}.ts`);
  fs.writeFileSync(outPath, content, "utf-8");
  console.log(`Wrote ${outPath}`);
}

function updateRegistry(data) {
  const varName = toCamelCase(data.slug);
  let indexContent = fs.readFileSync(INDEX_PATH, "utf-8");

  const importLine = `import { ${varName} } from "./${data.slug}";`;
  if (!indexContent.includes(importLine)) {
    indexContent = indexContent.replace(
      /(import \{ [^}]+ \} from "\.\/[^"]+";\n)(?!import)/,
      `$1${importLine}\n`
    );
  }

  indexContent = indexContent.replace(
    /(export const ALL_RANKING_ARTICLES: RankingArticle\[\] = \[\n)/,
    `$1  ${varName},\n`
  );

  fs.writeFileSync(INDEX_PATH, indexContent, "utf-8");
  console.log(`Updated ${INDEX_PATH} to register the new article.`);
}

generateArticle().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
