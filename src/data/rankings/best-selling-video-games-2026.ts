import { RankingArticle } from "./types";

const TT10Q = "Take-Two Interactive, Form 10-Q for the quarter ended September 30, 2026 (filed November 9, 2026)";
const NIN = "Nintendo, Top Selling Title Sales Units (IR financial data)";

export const bestSellingVideoGames2026: RankingArticle = {
  slug: "best-selling-video-games-2026",

  metaTitle: "The 10 Best-Selling Video Games of All Time (2026) | Viszlyn",
  metaDescription:
    "Minecraft leads with over 425 million copies, ahead of GTA V (over 230 million shipped) and Red Dead Redemption 2. See the 10 best-selling video games, with each publisher's official figures.",
  ogTitle: "The Best-Selling Video Games of All Time",
  ogDescription:
    "Minecraft, GTA V, Red Dead Redemption 2 and Wii Sports lead the list. Every figure is the publisher's own, with sold and shipped counts labelled.",
  twitterTitle: "The 10 Best-Selling Video Games Ever (2026)",
  twitterDescription:
    "Minecraft 425M+. GTA V 230M+ shipped. RDR2 85M+. Wii Sports 82.79M. The all-time top 10, from publishers' own figures.",

  eyebrow: "Tech",
  title: "The 10 Best-Selling Video Games of All Time",
  dek: "Minecraft has sold over 425 million copies, nearly twice GTA V's shipments. The rest of the top 10 ranges from Rockstar blockbusters to a Nintendo pack-in and a two-player physics game, each measured by its publisher's own lifetime figure.",
  publishedDate: "November 24, 2026",
  lastUpdated: "November 24, 2026",
  dataPeriod: "Latest publisher figures available as of November 24, 2026; individual figure dates vary",
  heroImage: {
    src: "/heroes/best-selling-video-games-2026.png",
    ogSrc: "/heroes/best-selling-video-games-2026-og.png",
    alt: "Pixel-art towers showing the best-selling video games by lifetime units: Minecraft over 425 million, GTA V over 230 million shipped, Red Dead Redemption 2 over 85 million shipped, Wii Sports 82.79 million, PUBG over 75 million, Mario Kart 8 Deluxe 72.00 million, Terraria 70 million, Skyrim and The Witcher 3 over 65 million each, and Human Fall Flat over 55 million, beside a photo of hands holding a game controller and a callout naming Minecraft as No. 1.",
  },

  quickAnswer:
    "Minecraft is the best-selling video game of all time, with over 425 million units sold according to Microsoft (October 2026). Grand Theft Auto V is second with over 230 million units sold-in, meaning shipped to retailers plus digital sales (Take-Two, November 2026), and Red Dead Redemption 2 third with more than 85 million. Wii Sports (82.79 million, including copies bundled with the Wii) and PUBG: Battlegrounds (more than 75 million paid copies) complete the top five.",
  introParagraph:
    "There is no single official league table for game sales, so this ranking uses the latest lifetime unit figure each publisher or platform holder has published for one game, in that company's own scope. Publishers count differently, and we label it on every entry. Take-Two reports \"sold-in\" units, meaning copies shipped to retailers plus digital sales, not copies bought by players. Nintendo's figures include digital copies and copies bundled with hardware. Most others simply say \"sold\". Where a publisher gives a threshold such as \"over 65 million\", we keep that wording, so close ranks should be read as approximate. Series and brand totals, player counts and free downloads are not counted.",
  calloutBox: {
    label: "Why isn't Tetris here?",
    body: "The Tetris Company reports more than 520 million copies sold worldwide, across a brand available on over 50 platforms. That is a brand-wide total covering many different games and releases by many licensees, not a figure for one specific game. EA separately reported over 100 million paid mobile downloads in January 2010, covering several of its own mobile Tetris games. Minecraft's total is different: it is one game, published by one company, across its editions. Because this ranking compares individual games with clearly attributable lifetime figures, neither Tetris aggregate is ranked here.",
  },

  chartTitle: "Lifetime units (millions)",
  chartSource: "Publisher and platform-holder figures (Microsoft, Take-Two, Nintendo, KRAFTON, Re-Logic, Bethesda, CD Projekt, Curve Games). \"+\" = publisher said \"over\" or \"more than\"",
  chartTapNote: "Tap any game to jump to its details below.",
  entryValueLabel: "Lifetime units:",
  chartItems: [
    { rank: 1, name: "Minecraft", value: "425M+", raw: 425 },
    { rank: 2, name: "Grand Theft Auto V (shipped)", value: "230M+", raw: 230 },
    { rank: 3, name: "Red Dead Redemption 2 (shipped)", value: "85M+", raw: 85 },
    { rank: 4, name: "Wii Sports (incl. console bundles)", value: "82.79M", raw: 82.79 },
    { rank: 5, name: "PUBG: Battlegrounds", value: "75M+", raw: 75 },
    { rank: 6, name: "Mario Kart 8 Deluxe", value: "72.00M", raw: 72 },
    { rank: 7, name: "Terraria", value: "70M", raw: 70 },
    { rank: 8, rankLabel: "=8", name: "The Elder Scrolls V: Skyrim", value: "65M+", raw: 65 },
    { rank: 9, rankLabel: "=8", name: "The Witcher 3: Wild Hunt", value: "65M+", raw: 65 },
    { rank: 10, name: "Human Fall Flat", value: "55M+", raw: 55 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Human Fall Flat",
      earnings: "Over 55 million copies",
      category: "Curve Games · 2016",
      origin: "Sold · across its platforms (no platform breakdown published)",
      blurb: "Curve Games announced 55 million units sold in January 2025, and its March 2026 Nintendo Switch 2 launch was still reported as \"over 55 million copies\". Curve has since used a 58 million figure, but its materials describe it in some places as players rather than copies, so we rank on the last figure clearly given as copies.",
      standoutFact: "Curve called it the third best-selling indie game when it announced the 55 million milestone.",
      sourceTag: "Curve Games, via PocketGamer.biz (January 2025) and Gematsu (March 2026)",
    },
    {
      rank: 9,
      rankLabel: "=8",
      name: "The Witcher 3: Wild Hunt",
      earnings: "Over 65 million copies",
      category: "CD Projekt Red · 2015",
      origin: "Sold · multi-platform (no edition breakdown published)",
      blurb: "CD Projekt reported more than 65 million copies of The Witcher 3 sold, a count as of May 28, 2026 published with its first-half 2026 results on September 2, 2026. The announcement does not give a breakdown by platform or edition.",
      standoutFact: "The whole Witcher series has passed 90 million copies. Skyrim and The Witcher 3 share eighth place because both publishers say only \"over 65 million\".",
      sourceTag: "CD Projekt, \"CD PROJEKT RED wraps up the first half of 2026\" (September 2, 2026)",
    },
    {
      rank: 8,
      rankLabel: "=8",
      name: "The Elder Scrolls V: Skyrim",
      earnings: "Over 65 million copies",
      category: "Bethesda Softworks · 2011",
      origin: "Sold · multi-platform (no edition breakdown published)",
      blurb: "Bethesda Game Studios said in July 2026 that Skyrim had sold over 65 million copies since its 2011 launch. The note does not say which re-releases or editions are included.",
      standoutFact: "In the same note, Bethesda confirmed The Elder Scrolls VI is now the studio's main focus.",
      sourceTag: "Bethesda Game Studios, \"A note from Bethesda Game Studios\" (July 17, 2026)",
    },
    {
      rank: 7,
      name: "Terraria",
      earnings: "70 million copies",
      category: "Re-Logic · 2011",
      origin: "Sold · PC 39.6 million, mobile 19.7 million, console 10.7 million",
      blurb: "Re-Logic marked Terraria's 15th anniversary in May 2026 by announcing 70 million copies sold, more than half of them on PC.",
      standoutFact: "It sold more on mobile (19.7 million) than on consoles (10.7 million).",
      sourceTag: "Re-Logic, \"Celebrating 15 years of Terraria\" (official forum, May 16, 2026); also reported by GamesRadar and PocketGamer.biz",
    },
    {
      rank: 6,
      name: "Mario Kart 8 Deluxe",
      earnings: "72.00 million",
      category: "Nintendo · 2017",
      origin: "Nintendo sales units · Switch, including digital and bundled copies",
      blurb: "Nintendo lists Mario Kart 8 Deluxe at 72.00 million units as of September 30, 2026, making it the best-selling game on the Nintendo Switch.",
      standoutFact: "This is the Switch version only. The original Mario Kart 8 on Wii U is counted separately.",
      sourceTag: `${NIN}, Nintendo Switch (as of September 30, 2026)`,
    },
    {
      rank: 5,
      name: "PUBG: Battlegrounds",
      earnings: "More than 75 million copies",
      category: "KRAFTON · 2017",
      origin: "Sold · paid PC and console copies before it went free-to-play",
      blurb: "KRAFTON said PUBG: Battlegrounds had sold more than 75 million copies on PC and consoles when it switched to free-to-play on January 12, 2022. Free players since then are not counted.",
      standoutFact: "The separate free mobile versions, PUBG Mobile and BGMI, are different games and are not included.",
      sourceTag: "KRAFTON press release (January 2022)",
    },
    {
      rank: 4,
      name: "Wii Sports",
      earnings: "82.79 million",
      category: "Nintendo · 2006",
      origin: "Nintendo sales units · Wii, including copies bundled with hardware",
      blurb: "Nintendo's Wii software table lists Wii Sports at 82.79 million units as of September 30, 2016, and notes that software units include copies bundled with hardware. The game came packed with the Wii console in many regions, so not all of these copies were bought on their own.",
      standoutFact: "Its total is higher than any Nintendo Switch game, including Mario Kart 8 Deluxe at 72.00 million.",
      sourceTag: `${NIN}, Wii (as of September 30, 2016)`,
    },
    {
      rank: 3,
      name: "Red Dead Redemption 2",
      earnings: "More than 85 million (shipped)",
      category: "Rockstar Games (Take-Two) · 2018",
      origin: "Sold-in · copies shipped to retailers plus digital sales",
      blurb: "Take-Two's quarterly filing of November 9, 2026 says Red Dead Redemption 2 has sold-in more than 85 million units. Take-Two cited a higher figure of over 89 million the same day.",
      standoutFact: "Red Dead Online came free with every copy before getting its own standalone release.",
      sourceTag: TT10Q,
    },
    {
      rank: 2,
      name: "Grand Theft Auto V",
      earnings: "Over 230 million (shipped)",
      category: "Rockstar Games (Take-Two) · 2013",
      origin: "Sold-in · copies shipped to retailers plus digital sales, across three console generations",
      blurb: "Take-Two's quarterly filing of November 9, 2026 says GTA V has sold-in over 230 million units, and Take-Two cited a figure of nearly 235 million in November 2026. It has been released across three generations of consoles.",
      standoutFact: "The wider Grand Theft Auto series had sold-in over 475 million units by Take-Two's November 9 filing. GTA VI, released November 19, 2026, sold 32.5 million units before launch.",
      sourceTag: TT10Q,
    },
    {
      rank: 1,
      name: "Minecraft",
      earnings: "Over 425 million copies",
      category: "Mojang Studios (Microsoft) · 2009 (full release 2011)",
      origin: "Sold · Microsoft's latest published total",
      blurb: "Microsoft said in autumn 2026 that Minecraft had grown from 350 million to over 425 million units sold. The announcement does not give a breakdown by platform or edition.",
      standoutFact: "That is nearly twice GTA V's shipments (Viszlyn calculation). Minecraft was first released in 2009, with its full release in 2011.",
      sourceTag: "Microsoft, Xbox Wire \"Introducing XP\" (October 8, 2026) and Minecraft Live (September 26, 2026)",
    },
  ],

  keyTakeaway: {
    stat: "425M+",
    label: "Minecraft's lifetime sales",
    comparisonStat: "230M+",
    comparisonLabel: "GTA V, the No. 2 game (shipped units)",
    note: "Minecraft's figure is units sold; GTA V's is sold-in (shipped to retailers plus digital sales), so the two are not counted in exactly the same way.",
  },


  sourceNote: {
    dataPeriod: "Latest publisher figures available as of November 24, 2026; individual figure dates vary",
    lastUpdated: "November 24, 2026",
    sources:
      "Microsoft (Xbox Wire, October 8, 2026); Take-Two Interactive (Form 10-Q, November 9, 2026; Form 8-K, November 20, 2026, for GTA VI); Nintendo (Top Selling Title Sales Units for Wii and Nintendo Switch); KRAFTON (January 2022); Re-Logic (May 2026); Bethesda Game Studios (July 2026); CD Projekt (September 2026); Curve Games (January 2025, as reported; March 2026 coverage); The Tetris Company (June 2026) and Electronic Arts (January 2010) for Tetris.",
    methodology:
      "This ranking uses the latest cumulative unit figure published by each game's publisher or platform holder as of November 24, 2026. We keep each company's wording and identify whether it reports units sold or sold-in (shipped). The figures are not perfectly comparable: Take-Two reports sold-in units, while Nintendo's software totals include digital copies and copies bundled with hardware or other products. Platform and edition coverage is stated for each game, and a figure is not assumed to cover every release unless the source says so: PUBG's figure covers paid PC and console copies, Mario Kart 8 Deluxe is the Switch release and Wii Sports is the Wii release. Where a company reports only a threshold such as \"over 65 million\", we keep that wording and show equal thresholds as tied. For Take-Two we use the figures in its SEC quarterly filing (GTA V over 230 million, RDR2 more than 85 million); Take-Two cited higher figures in November 2026 (nearly 235 million and over 89 million), which do not change the ranks. For Human Fall Flat we use the last figure Curve Games clearly gave as copies. Brand and series totals, player counts and free-to-play downloads are excluded, which is why Tetris is not ranked. GTA VI has no lifetime figure yet.",
    sourceLinks: [
      { label: "Xbox Wire: Introducing XP (Minecraft 425M+)", href: "https://news.xbox.com/en-us/2026/10/08/introducing-xp/" },
      { label: "Take-Two Form 10-Q, quarter ended Sept 30, 2026 (SEC)", href: "https://www.sec.gov/Archives/edgar/data/946581/000162828026072254/ttwo-20260930.htm" },
      { label: "Nintendo IR: Top selling titles, Nintendo Switch", href: "https://www.nintendo.co.jp/ir/en/finance/software/switch.html" },
      { label: "Nintendo IR: Top selling titles, Wii (Wii Sports 82.79M)", href: "https://www.nintendo.co.jp/ir/en/sale/software/wii.html" },
            { label: "KRAFTON: PUBG: Battlegrounds after going free-to-play", href: "https://krafton.com/zh/news/press/pubg-battlegrounds-sees-growth-following-its-recent-transition-to-free-to-play/" },
      { label: "Re-Logic: Celebrating 15 years of Terraria (official forum)", href: "https://forums.terraria.org/index.php?threads/celebrating-15-years-of-terraria.149950/" },
      { label: "GamesRadar: Terraria sells over 70 million copies", href: "https://www.gamesradar.com/games/simulation/as-terraria-sells-over-70-million-copies-devs-are-done-with-promising-final-updates-and-say-theyll-continue-beyond-1-4-6/" },
      { label: "Bethesda: A note from Bethesda Game Studios", href: "https://bethesda.net/en/article/7wrffyXajE4BmCLJVpOkcN/a-note-from-bethesda-game-studios" },
      { label: "CD Projekt: first half of 2026", href: "https://www.cdprojekt.com/en/media/news/cd-projekt-red-wraps-up-the-first-half-of-2026/" },
      { label: "Gematsu: Human Fall Flat Switch 2 Edition (over 55M copies, Mar 2026)", href: "https://www.gematsu.com/2026/03/human-fall-flat-nintendo-switch-2-edition-now-available" },
      { label: "PocketGamer.biz: Human Fall Flat has sold 55 million units (Jan 2025)", href: "https://www.pocketgamer.biz/curve-games-human-fall-flat-has-sold-55-million-units" },
      { label: "EA: Tetris surpasses 100 million paid mobile downloads (2010)", href: "https://news.ea.com/press-releases/press-releases-details/2010/Tetris-Game-Surpasses-100-Million-Paid-Mobile-Downloads-Is-the-Best-Selling-Mobile-Phone-Game-of-All-Time/default.aspx" },
      { label: "Take-Two Form 8-K, GTA VI launch (SEC)", href: "https://www.sec.gov/Archives/edgar/data/946581/000162828026075217/exhibit9918k.htm" },
    ],
  },

  faqItems: [
    {
      question: "What is the best-selling video game of all time?",
      answer:
        "Minecraft, with over 425 million units sold, according to Microsoft in autumn 2026. Grand Theft Auto V is second with over 230 million units sold-in, or shipped (Take-Two).",
    },
    {
      question: "Why isn't Tetris number one?",
      answer:
        "The Tetris Company reports more than 520 million copies sold, but that is a brand-wide total across many different Tetris games on over 50 platforms, not one game. EA's figure of over 100 million paid mobile downloads (2010) also combines several of its mobile Tetris games. This ranking compares individual games, so neither total is ranked.",
    },
    {
      question: "How many copies has GTA VI sold?",
      answer:
        "Take-Two said GTA VI sold 32.5 million units before its release on November 19, 2026. It has not yet published a lifetime figure. If it passes about 55 million, it would enter this top 10.",
    },
    {
      question: "What does \"sold-in\" or \"shipped\" mean?",
      answer:
        "Sold-in counts copies shipped to retailers plus digital sales, not necessarily copies bought by players yet. Take-Two uses this measure for GTA V and Red Dead Redemption 2, so their figures are labelled \"shipped\".",
    },
    {
      question: "Does Wii Sports really count?",
      answer:
        "Nintendo counts it, so it is ranked, but its 82.79 million units include copies bundled with the Wii console, which came packed with the game in many regions. Each entry in this list shows how its figure is counted.",
    },
    {
      question: "What is the best-selling Nintendo Switch game?",
      answer:
        "Mario Kart 8 Deluxe, with 72.00 million units as of September 30, 2026, ahead of Animal Crossing: New Horizons at 50.63 million.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Biggest Entertainment Launches Ever", href: "/rankings/biggest-entertainment-launches-2026" },
    { title: "The 10 Highest-Earning Creators in 2026", href: "/rankings/highest-earning-creators-2026" },
  ],
};
