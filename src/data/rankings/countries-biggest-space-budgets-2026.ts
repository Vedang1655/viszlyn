import { RankingArticle } from "./types";

const OECD = "OECD, The Space Economy at a Glance 2026 (civil space budget, 2025)";
const FX = "Converted to US$ by Viszlyn at ECB reference rates of November 20, 2026";
const P = "/rankings/countries-biggest-space-budgets-2026";

export const countriesBiggestSpaceBudgets2026: RankingArticle = {
  slug: "countries-biggest-space-budgets-2026",

  metaTitle: "The 10 Countries With the Biggest Space Budgets (2026) | Viszlyn",
  metaDescription:
    "NASA leads the world with a US$24.44 billion FY2026 budget. Discover the 10 biggest published civil space budgets, from France and Germany to India and Japan.",
  ogTitle: "Which Countries Spend the Most on Space?",
  ogDescription:
    "NASA dominates civil space spending. Explore the biggest published national and agency-level space budgets, converted into US dollars.",
  twitterTitle: "The World's Biggest Civil Space Budgets",
  twitterDescription:
    "NASA: $24.44B. France: $2.79B. Germany: $2.70B. Explore 10 major government civil space budgets in 2026.",

  eyebrow: "Money",
  title: "The 10 Countries With the Biggest Civil Space Budgets",
  dek: "NASA's budget alone is nearly twice the combined published budgets of the next nine entries. Here are ten major national civil space programmes, using official budget documents and OECD figures, converted into US dollars at a common exchange rate.",
  publishedDate: "November 21, 2026",
  lastUpdated: "November 21, 2026",
  dataPeriod: "Latest official civil space budgets (2025 or fiscal 2025–27), converted at ECB rates of November 20, 2026",
  heroImage: {
    src: "/heroes/countries-biggest-space-budgets-2026.webp",
    ogSrc: "/heroes/countries-biggest-space-budgets-2026-og.png",
    alt: "Rockets sized by each country's civil space budget: United States (NASA) US$24.44 billion, France $2.79 billion, Germany $2.70 billion, Italy $2.16 billion, India $1.48 billion, United Kingdom $1.02 billion, Japan (JAXA) $974 million, Canada $951 million, South Korea $764 million, Netherlands $296 million.",
  },

  quickAnswer:
    "The United States spends the most on civil space: NASA's budget for fiscal 2026 is US$24,438.3 million, set by Public Law 119-74. France is second with €2,537.4 million (about US$2.79 billion) for CNES in 2025, followed by Germany (about US$2.70 billion), Italy (about US$2.16 billion) and India (about US$1.48 billion). China and Russia are not ranked because they do not publish consolidated civil space budget figures that can be compared with the others.",
  introParagraph:
    "This ranking compares published civil space budget measures: the budgets of national space agencies and civil space programmes, not military space spending. Each figure comes from an official source: the US appropriations act for NASA, CNES's annual report, India's Union Budget, Japan's science ministry (MEXT), the UK Space Agency's audited accounts, and the OECD's compilation of national civil space budgets for Germany, Italy, Canada, South Korea and the Netherlands. Every figure is converted to US dollars using the same European Central Bank reference rates from November 20, 2026. This provides a common currency basis, although the scope of the published budgets differs between countries, as explained in each entry.",
  calloutBox: {
    label: "Why China and Russia are not on the list",
    body: "China and Russia do not publish consolidated civil space budget figures in a directly comparable form. Both are major space powers, but their publicly available spending information cannot be reliably compared with the national civil space budgets in this ranking, so they are left out rather than given estimated figures. For scale, the consultancy Novaspace estimates that governments worldwide spent US$137.4 billion on space in 2025, civil and defence combined, with defence making up 54% (Novaspace press release, January 20, 2026).",
  },

  chartTitle: "Civil government space budgets (US$ millions)",
  chartSource: "Official budgets (US, France, India, Japan, UK) and OECD (others); converted at ECB rates of Nov 20, 2026. Coverage differs by country: see each entry and the methodology",
  chartTapNote: "Tap any country to jump to its details below.",
  entryValueLabel: "Civil space budget:",
  chartItems: [
    { rank: 1, name: "United States", value: "$24,438.3M", raw: 24438.3, countries: [{ name: "United States", flagCode: "us" }] },
    { rank: 2, name: "France", value: "$2,788.6M", raw: 2788.6, countries: [{ name: "France", flagCode: "fr" }] },
    { rank: 3, name: "Germany", value: "$2,700.0M", raw: 2700.0, countries: [{ name: "Germany", flagCode: "de" }] },
    { rank: 4, name: "Italy", value: "$2,163.1M", raw: 2163.1, countries: [{ name: "Italy", flagCode: "it" }] },
    { rank: 5, name: "India", value: "$1,478.9M", raw: 1478.9, countries: [{ name: "India", flagCode: "in" }] },
    { rank: 6, name: "United Kingdom", value: "$1,017.8M", raw: 1017.8, countries: [{ name: "United Kingdom", flagCode: "gb" }] },
    { rank: 7, name: "Japan", value: "$973.9M", raw: 973.9, countries: [{ name: "Japan", flagCode: "jp" }] },
    { rank: 8, name: "Canada", value: "$951.3M", raw: 951.3, countries: [{ name: "Canada", flagCode: "ca" }] },
    { rank: 9, name: "South Korea", value: "$763.8M", raw: 763.8, countries: [{ name: "South Korea", flagCode: "kr" }] },
    { rank: 10, name: "Netherlands", value: "$296.1M", raw: 296.1, countries: [{ name: "Netherlands", flagCode: "nl" }] },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Netherlands",
      earnings: "US$296.1 million (€269.4 million)",
      category: "Europe",
      origin: "Civil government space budget, 2025 (OECD)",
      blurb: "The Netherlands' civilian government space budget was €269.4 million in 2025, according to the OECD. It covers contributions to the European Space Agency (ESA) and Eumetsat, plus an estimated contribution to the EU Space Programme.",
      standoutFact: "The OECD notes that ESA contributions make up the main bulk of the Dutch civil space budget.",
      sourceTag: `${OECD}; ${FX}`,
      image: { src: `${P}/netherlands.webp`, width: 1200, height: 795, alt: "Dutch ESA astronaut André Kuipers looking through a window of the International Space Station", author: "NASA", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Andre_Kuipers_ISS.jpg", caption: "Dutch ESA astronaut André Kuipers aboard the ISS." },
      countries: [{ name: "Netherlands", flagCode: "nl" }],
    },
    {
      rank: 9,
      name: "South Korea",
      earnings: "US$763.8 million (₩1,023 billion)",
      category: "Asia",
      origin: "Civil institutional space budget, 2025 (OECD)",
      blurb: "South Korea's civilian institutional space budget reached ₩1,023 billion in 2025, according to the OECD, mainly for space industry and satellite development, followed by space transportation.",
      standoutFact: "A separate figure, not the same measure as the OECD's 2025 total: the 2026 budget of Korea's space agency KASA alone is ₩1.1201 trillion, as confirmed by the National Assembly on December 2, 2025 (Dong-A Science).",
      sourceTag: `${OECD}; ${FX}`,
      image: { src: `${P}/south-korea.webp`, width: 1200, height: 800, alt: "Falcon 9 rocket launching South Korea's Danuri lunar orbiter", author: "U.S. Space Force photo by Joshua Conti", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Korea_Pathfinder_Lunar_Orbiter_(KPLO)_Launches_from_Cape_Canaveral_Space_Force_Station_(7353885).jpeg", caption: "Launch of South Korea's Danuri lunar orbiter, 2022." },
      countries: [{ name: "South Korea", flagCode: "kr" }],
    },
    {
      rank: 8,
      name: "Canada",
      earnings: "US$951.3 million (C$1,361 million)",
      category: "Americas",
      origin: "Civil institutional space budget, 2025 (OECD)",
      blurb: "Canada's civilian institutional space budget was C$1,361 million in 2025, according to the OECD, covering the Canadian Space Agency and federal space spending, including Canada's ESA cooperation programmes.",
      standoutFact: "The OECD says 2025 was raised by increased investment in ESA programmes and space exploration, and that the figure may not capture all space-related funding.",
      sourceTag: `${OECD}; ${FX}`,
      image: { src: `${P}/canada.webp`, width: 1200, height: 800, alt: "Canadarm2 robotic arm on the International Space Station above Earth", author: "NASA", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:ISS-66_The_International_Space_Station's_Canadarm2_robotic_arm.jpg", caption: "Canada's Canadarm2 on the International Space Station." },
      countries: [{ name: "Canada", flagCode: "ca" }],
    },
    {
      rank: 7,
      name: "Japan",
      earnings: "US$973.9 million (¥154.5 billion)",
      category: "Asia",
      origin: "JAXA initial budget, fiscal 2025 (MEXT)",
      blurb: "Japan's space agency JAXA had an initial budget of ¥154.5 billion for fiscal 2025, according to Japan's science ministry (MEXT). This is JAXA's budget only: it leaves out a ¥60.0 billion supplementary budget and other ministries' civil space programmes, because Japan publishes no official civil-only total for the whole government.",
      standoutFact: "Japan has launched a Space Strategy Fund of ¥1 trillion over ten years to support private-sector and university space technology (Cabinet Office).",
      sourceTag: `MEXT, Space Development and Utilization Subcommittee, document 102-5 (February 4, 2026); ${FX}`,
      image: { src: `${P}/japan.webp`, width: 1200, height: 801, alt: "Japanese H-IIB rocket on the launch pad at Tanegashima", author: "Shinntarou", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:H-ⅡBロケット8号機.jpg", caption: "An H-IIB rocket at the Tanegashima Space Center." },
      countries: [{ name: "Japan", flagCode: "jp" }],
    },
    {
      rank: 6,
      name: "United Kingdom",
      earnings: "US$1,017.8 million (£775.5 million)",
      category: "Europe",
      origin: "UK Space Agency spending, 2025–26 (audited outturn)",
      blurb: "The UK Space Agency spent £775.5 million in the year to March 31, 2026, according to its audited annual accounts. This is the agency's spending, not every pound of UK government civil space spending. £601.7 million of that, about 78%, was the UK's subscription to the European Space Agency.",
      standoutFact: "It was the agency's last annual report as a standalone body: the UK Space Agency merged into the Department for Science, Innovation and Technology on April 1, 2026.",
      sourceTag: `UK Space Agency, Annual Report and Accounts 2025–26; ${FX}`,
      image: { src: `${P}/united-kingdom.webp`, width: 1200, height: 675, alt: "Latitude Navier rocket engine test firing at SaxaVord Spaceport in Shetland", author: "Latitude", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Latitude_Navier_engine_firing_test_at_SaxaVord_Spaceport_1.jpg", caption: "Engine test at SaxaVord Spaceport, Shetland." },
      countries: [{ name: "United Kingdom", flagCode: "gb" }],
    },
    {
      rank: 5,
      name: "India",
      earnings: "US$1,478.9 million (₹13,705.63 crore)",
      category: "Asia",
      origin: "Department of Space, Budget Estimates 2026–27",
      blurb: "India's Department of Space, which runs ISRO, has a budget of ₹13,705.63 crore for 2026–27 in the Union Budget: ₹7,329.71 crore of revenue spending and ₹6,375.92 crore of capital spending.",
      standoutFact: "That is up from actual spending of ₹11,518.65 crore in 2024–25, according to the same budget document.",
      sourceTag: `Union Budget 2026–27, Demand No. 95 (Department of Space); ${FX}`,
      image: { src: `${P}/india.webp`, width: 1200, height: 900, alt: "Satellite view of the Satish Dhawan Space Centre on India's east coast", author: "Planet Labs, Inc.", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Satish_Dhawan_Space_Centre,_India_by_Planet_Labs.jpg", caption: "The Satish Dhawan Space Centre, Sriharikota, from orbit." },
      countries: [{ name: "India", flagCode: "in" }],
    },
    {
      rank: 4,
      name: "Italy",
      earnings: "US$2,163.1 million (€1,968.2 million)",
      category: "Europe",
      origin: "Civil space budget, 2025 (OECD)",
      blurb: "Italy's civilian space budget was €1,968.2 million in 2025, according to the OECD. It covers the Italian Space Agency (ASI) and ministry space spending, including Italy's contribution to ESA, which is channelled through ASI.",
      standoutFact: "The International Space Station's Cupola, its seven-window observation module, was built in Turin, Italy.",
      sourceTag: `${OECD}; ${FX}`,
      image: { src: `${P}/italy.webp`, width: 1200, height: 797, alt: "The Cupola observation module of the International Space Station with its shutters open", author: "NASA", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cupola_ISS_open_shutters.jpg", caption: "The Italian-built Cupola on the ISS." },
      countries: [{ name: "Italy", flagCode: "it" }],
    },
    {
      rank: 3,
      name: "Germany",
      earnings: "US$2,700.0 million (€2,456.8 million)",
      category: "Europe",
      origin: "Civil government space budget, 2025 (OECD)",
      blurb: "Germany's civilian government space budget reached €2,456.8 million in 2025, according to the OECD, including national activities, contributions to ESA and Eumetsat, and an estimated contribution to the EU Space Programme.",
      standoutFact: "Germany is ESA's biggest backer: it subscribed €5.067 billion for 2026–2028 at ESA's 2025 ministerial council.",
      sourceTag: `${OECD}; ${FX}`,
      image: { src: `${P}/germany.webp`, width: 1200, height: 798, alt: "The European Columbus laboratory module being prepared at Kennedy Space Center", author: "NASA/Jim Grossmann", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Columbus_at_Kennedy_Space_Center.jpg", caption: "The Columbus laboratory, built in Bremen, Germany." },
      countries: [{ name: "Germany", flagCode: "de" }],
    },
    {
      rank: 2,
      name: "France",
      earnings: "US$2,788.6 million (€2,537.4 million)",
      category: "Europe",
      origin: "CNES total budget, 2025",
      blurb: "France's space agency CNES had a total budget of €2,537.4 million in 2025, according to its annual report. This is the whole CNES budget, not a civil-only government allocation: it includes €562.9 million of external contract revenue and France's €897.1 million contribution to ESA, which CNES pays.",
      standoutFact: "CNES also carries out defence-related work (€682.1 million in 2025, under its \"Defence and strategic independence\" theme) and publishes no civil-only split, so France's figure is the agency's total budget.",
      sourceTag: `CNES, Annual Report 2025 (2025 budget, p. 11); ${FX}`,
      image: { src: `${P}/france.webp`, width: 1200, height: 1119, alt: "Ariane 5 rocket launching the James Webb Space Telescope from French Guiana", author: "NASA/Bill Ingalls", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:James_Webb_Space_Telescope_Launch_(NHQ202112250013).jpg", caption: "An Ariane 5 launches the James Webb Space Telescope from Kourou, 2021." },
      countries: [{ name: "France", flagCode: "fr" }],
    },
    {
      rank: 1,
      name: "United States",
      earnings: "US$24,438.3 million",
      category: "Americas",
      origin: "NASA appropriation, fiscal 2026",
      blurb: "Congress gave NASA US$24,438.3 million for fiscal 2026 in Public Law 119-74, enacted on January 23, 2026. The biggest accounts are Exploration (US$7,783.0 million), Science (US$7,250.0 million) and Space Operations (US$4,175.0 million).",
      standoutFact: "NASA's FY2026 budget alone is about 1.86 times the combined published budgets of the other nine entries (US$13,133.5 million, calculated). The comparison is illustrative, because those figures have differing national and agency-level coverage.",
      sourceTag: "Public Law 119-74 (Commerce, Justice, Science and Related Agencies Appropriations Act, 2026)",
      image: { src: `${P}/united-states.webp`, width: 1200, height: 800, alt: "NASA's Space Launch System rocket lifting off on the Artemis II mission", author: "NASA/Michael DeMocker", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Artemis_II_launch_(SLS_MAF_20260401_ArtemisIILaunch_07).jpg", caption: "Artemis II launches from Kennedy Space Center, April 2026." },
      countries: [{ name: "United States", flagCode: "us" }],
    },
  ],

  keyTakeaway: {
    stat: "$24.44B",
    label: "NASA's budget for fiscal 2026",
    comparisonStat: "$13.13B",
    comparisonLabel: "The next nine countries combined (calculated)",
    note: "NASA's regular FY2026 appropriation is about 1.86 times the combined published budget figures of the other nine entries. This is an illustrative comparison, as the underlying national figures do not all have identical coverage. All US$ conversions and totals are Viszlyn calculations.",
  },

  sourceNote: {
    dataPeriod: "Latest official civil space budgets: US fiscal 2026; India 2026–27; UK 2025–26 outturn; Japan fiscal 2025; France and OECD countries 2025",
    lastUpdated: "November 21, 2026",
    sources:
      "United States: Public Law 119-74 (NASA accounts). France: CNES Annual Report 2025. India: Union Budget 2026–27, Notes on Demands for Grants, Demand No. 95. Japan: MEXT, Space Development and Utilization Subcommittee, 102nd meeting (February 4, 2026), document 102-5. United Kingdom: UK Space Agency Annual Report and Accounts 2025–26. Germany, Italy, Canada, South Korea and the Netherlands: OECD, The Space Economy at a Glance 2026, country profiles. Exchange rates: European Central Bank euro reference rates, November 20, 2026. Context: Novaspace press release, January 20, 2026.",
    methodology:
      "Countries are ranked by their civil government space budget: space agency and civil ministry spending, excluding military space. Each figure is the latest available from an official source, so fiscal years differ slightly between countries and are stated in each entry. Original-currency figures are as published; US dollar values are Viszlyn conversions at ECB reference rates of November 20, 2026 (US$ per €1: 1.0990), so they can differ slightly from US$ figures printed by the OECD. European countries' figures already include their contributions to the European Space Agency, so ESA's own budget is not added or ranked. Coverage differs between countries, so this is a comparison of published national and agency-level civil space budgets rather than a perfectly like-for-like one. Japan's figure is JAXA's initial budget only (it excludes a ¥60.0 billion supplementary budget and other ministries' programmes). The UK figure is UK Space Agency spending only. France's figure is the total CNES budget, which includes €682.1 million of defence-related work and €562.9 million of external contract revenue. The German, Italian, Canadian, South Korean and Dutch figures are the OECD's broader institutional civil budgets. The US figure is NASA's regular FY2026 appropriation, not every federal dollar available to NASA: it excludes about US$3.1 billion of extra NASA funding enacted separately in a 2025 reconciliation law. China and Russia are not ranked because they do not publish consolidated civil space budget figures in a directly comparable form.",
    sourceLinks: [
      { label: "US Public Law 119-74 (NASA appropriation, FY2026)", href: "https://www.govinfo.gov/content/pkg/PLAW-119publ74/pdf/PLAW-119publ74.pdf" },
      { label: "CNES Annual Report 2025", href: "https://cnes.fr/sites/default/files/2026-10/rapport-annuel-anglais-2025.pdf" },
      { label: "India Union Budget 2026–27: Department of Space (Demand No. 95)", href: "https://www.indiabudget.gov.in/doc/eb/sbe95.pdf" },
      { label: "MEXT: JAXA budget, document 102-5 (Japanese)", href: "https://www.mext.go.jp/content/20260204-mxt_uchukai01-000047103_10.pdf" },
      { label: "UK Space Agency Annual Report and Accounts 2025–26", href: "https://www.gov.uk/government/publications/uk-space-agency-annual-report-and-accounts-2025-2026/uk-space-agency-annual-report-2025-2026" },
      { label: "OECD: The Space Economy at a Glance 2026", href: "https://doi.org/10.1787/cbf9b240-en" },
      { label: "Novaspace: Global space spending reaches $137B (Jan 20, 2026)", href: "https://nova.space/press-release/global-space-spending-reaches-137b-marking-a-defense-led-era/" },
    ],
  },

  faqItems: [
    {
      question: "Which country spends the most on space?",
      answer:
        "The United States. NASA's budget for fiscal 2026 is US$24,438.3 million (Public Law 119-74), about 1.86 times the combined published budgets of the next nine entries in this ranking. That excludes US military space spending, which is counted separately.",
    },
    {
      question: "How much does China spend on space?",
      answer:
        "China does not publish a consolidated civil space budget in a form that can be compared with other countries' figures, so it is not ranked here. Estimates exist from private consultancies, but they are not official budget figures.",
    },
    {
      question: "What is ISRO's budget?",
      answer:
        "India's Department of Space, which runs ISRO, has a budget of ₹13,705.63 crore for 2026–27 (Union Budget, Budget Estimates), about US$1.48 billion at ECB rates of November 20, 2026 (Viszlyn conversion).",
    },
    {
      question: "How much does the world spend on space?",
      answer:
        "The consultancy Novaspace estimates that governments worldwide spent US$137.4 billion on space in 2025, with defence making up 54% (US$73.5 billion) and civil programmes 46% (US$63.7 billion). Among OECD countries alone, civil space budgets totalled an estimated US$46.4 billion in 2025 (OECD).",
    },
    {
      question: "Why isn't the European Space Agency on the list?",
      answer:
        "ESA is not a country, and its budget is mostly paid for by member countries. The European figures in this ranking already include each country's ESA contribution, so adding ESA's €8.26 billion 2026 budget would count the same money twice.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Countries With the Most Satellites in Orbit", href: "/rankings/countries-most-satellites-in-orbit-2026" },
    { title: "The 10 Most Distant Galaxies Ever Observed", href: "/rankings/most-distant-galaxies-ever-observed-2026" },
    { title: "The World's Nuclear Arsenals, Ranked (2026)", href: "/rankings/nuclear-arsenals-ranked-2026" },
    { title: "The 25 Largest Economies in the World in 2026", href: "/rankings/largest-economies-world-2026" },
  ],
};
