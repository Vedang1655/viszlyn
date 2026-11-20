import { RankingArticle } from "./types";

const SRC = "CelesTrak SATCAT (November 19, 2026 snapshot)";

export const countriesWithMostSatellitesInOrbit2026: RankingArticle = {
  slug: "countries-most-satellites-in-orbit-2026",

  metaTitle: "Which Country Has the Most Satellites? The Top 10 Ranked | Viszlyn",
  metaDescription:
    "The United States has 13,138 active satellites, about 75% of the world's 17,444, and 11,209 of them are SpaceX's Starlink. China has 1,613 and the UK 700. The top 10, ranked.",
  ogTitle: "The Countries With the Most Satellites in Orbit",
  ogDescription:
    "One country owns three of every four active satellites, and one company owns most of those. The US has 13,138, China 1,613, the UK 700.",
  twitterTitle: "Which Country Has the Most Satellites?",
  twitterDescription:
    "US 13,138, China 1,613, UK 700, Russia 392. Starlink alone is 64% of everything active in orbit. The top 10, ranked.",

  eyebrow: "World",
  title: "The 10 Countries With the Most Satellites in Orbit",
  dek: "Three of every four active satellites in orbit are American, and most of those belong to a single company. Here are the 10 countries with the most satellites, counted from CelesTrak's catalogue of everything in Earth orbit.",
  publishedDate: "November 20, 2026",
  lastUpdated: "November 20, 2026",
  dataPeriod: "CelesTrak SATCAT snapshot of November 19, 2026",
  heroImage: {
    src: "/heroes/countries-most-satellites-in-orbit-2026.png",
    ogSrc: "/heroes/countries-most-satellites-in-orbit-2026-og.png",
    alt: "Bar chart of active satellites by owner country, November 2026: United States 13,138 (including 11,209 Starlink), China 1,613, United Kingdom 700, Russia 392, Japan 148, Italy 89, France, Germany and India 78 each, South Korea 76. World total 17,444. Source: CelesTrak SATCAT.",
  },

  quickAnswer:
    "The United States has the most satellites in orbit: 13,138 active satellites, about 75% of the world total of 17,444, according to CelesTrak's SATCAT catalogue as of November 19, 2026. Most of them, 11,209, are SpaceX's Starlink satellites. China is second with 1,613 and the United Kingdom third with 700, of which 651 are OneWeb satellites.",
  introParagraph:
    "This ranking counts active satellites in Earth orbit by owner country, using CelesTrak's SATCAT, the public catalogue of man-made objects in space maintained by Dr T. S. Kelso, in a snapshot downloaded on November 19, 2026. A satellite counts as active if it is a payload still in Earth orbit with an operational status of operational, partially operational, backup, spare or extended mission. Rocket bodies, debris and dead satellites are excluded. Each satellite is credited to the single owner CelesTrak assigns it, so multinational fleets such as the European Space Agency's are counted under their own codes, not split between countries.",
  calloutBox: {
    label: "Take away Starlink, and the US lead shrinks",
    body: "SpaceX's Starlink constellation accounts for 11,209 of the United States' 13,138 active satellites, and 64.26% of all active satellites in the world (Viszlyn calculations). Without Starlink, the US total falls to 1,929, a share of 11.06%, although that would still rank first, ahead of China's 1,613. The pattern repeats in third place: 651 of the United Kingdom's 700 satellites are Eutelsat OneWeb's broadband constellation.",
  },

  chartTitle: "Active satellites in Earth orbit, by owner country",
  chartSource: "CelesTrak SATCAT, snapshot of November 19, 2026",
  chartTapNote: "Tap any country to jump to its details below.",
  entryValueLabel: "Active satellites:",
  chartItems: [
    { rank: 1, name: "United States", value: "13,138", raw: 13138, countries: [{ name: "United States", flagCode: "us" }] },
    { rank: 2, name: "China", value: "1,613", raw: 1613, countries: [{ name: "China", flagCode: "cn" }] },
    { rank: 3, name: "United Kingdom", value: "700", raw: 700, countries: [{ name: "United Kingdom", flagCode: "gb" }] },
    { rank: 4, name: "Russia", value: "392", raw: 392, countries: [{ name: "Russia", flagCode: "ru" }] },
    { rank: 5, name: "Japan", value: "148", raw: 148, countries: [{ name: "Japan", flagCode: "jp" }] },
    { rank: 6, name: "Italy", value: "89", raw: 89, countries: [{ name: "Italy", flagCode: "it" }] },
    { rank: 7, rankLabel: "=7", name: "France", value: "78", raw: 78, countries: [{ name: "France", flagCode: "fr" }] },
    { rank: 8, rankLabel: "=7", name: "Germany", value: "78", raw: 78, countries: [{ name: "Germany", flagCode: "de" }] },
    { rank: 9, rankLabel: "=7", name: "India", value: "78", raw: 78, countries: [{ name: "India", flagCode: "in" }] },
    { rank: 10, name: "South Korea", value: "76", raw: 76, countries: [{ name: "South Korea", flagCode: "kr" }] },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "South Korea",
      earnings: "76 active satellites",
      category: "Asia",
      origin: "Share of world total: 0.44% (calculated)",
      blurb: "South Korea takes the last place in the top 10 with 76 active satellites, just two behind the three countries tied above it.",
      standoutFact: "Spain is next below the top 10, with 59 active satellites.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-most-satellites-in-orbit-2026/south-korea.webp", "width": 1200, "height": 800, "alt": "Launch of the Koreasat-5A satellite aboard a Falcon 9 rocket", "author": "SpaceX", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Koreasat-5A_Mission_(38056454431).jpg", "caption": "Koreasat-5A launches aboard a Falcon 9."},
      countries: [{ name: "South Korea", flagCode: "kr" }],
    },
    {
      rank: 9,
      rankLabel: "=7",
      name: "India",
      earnings: "78 active satellites",
      category: "Asia",
      origin: "Share of world total: 0.45% (calculated)",
      blurb: "India is one of three countries tied on 78 active satellites, alongside France and Germany.",
      standoutFact: "India's spaceport, the Satish Dhawan Space Centre at Sriharikota, is pictured here from orbit.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-most-satellites-in-orbit-2026/india.webp", "width": 1200, "height": 900, "alt": "Satish Dhawan Space Centre in Sriharikota, India, seen from orbit", "author": "Planet Labs, Inc.", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Satish_Dhawan_Space_Centre,_India_by_Planet_Labs.jpg", "caption": "Satish Dhawan Space Centre, Sriharikota, seen from orbit."},
      countries: [{ name: "India", flagCode: "in" }],
    },
    {
      rank: 8,
      rankLabel: "=7",
      name: "Germany",
      earnings: "78 active satellites",
      category: "Europe",
      origin: "Share of world total: 0.45% (calculated)",
      blurb: "Germany is tied with France and India on 78 active satellites. Satellites owned by the European Space Agency are not included in Germany's total: they sit under ESA's own owner code.",
      standoutFact: "ESA itself has 69 active satellites under its own code, only nine fewer than Germany's national total.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-most-satellites-in-orbit-2026/germany.webp", "width": 1200, "height": 645, "alt": "Artist's impression of the TerraSAR-X and TanDEM-X satellites flying in formation", "author": "DLR", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:TDX-Formation.jpg", "caption": "Artist's impression: TerraSAR-X and TanDEM-X flying in formation."},
      countries: [{ name: "Germany", flagCode: "de" }],
    },
    {
      rank: 7,
      rankLabel: "=7",
      name: "France",
      earnings: "78 active satellites",
      category: "Europe",
      origin: "Share of world total: 0.45% (calculated)",
      blurb: "France is tied with Germany and India on 78 active satellites. Some French-linked fleets sit outside the French total, because multinational operators are catalogued under their own codes.",
      standoutFact: "Eutelsat, headquartered in Paris, has 28 active satellites catalogued under the multinational EUTE code rather than France.",
      sourceTag: SRC,
      countries: [{ name: "France", flagCode: "fr" }],
    },
    {
      rank: 6,
      name: "Italy",
      earnings: "89 active satellites",
      category: "Europe",
      origin: "Share of world total: 0.51% (calculated)",
      blurb: "Italy ranks sixth with 89 active satellites, ahead of the three countries tied on 78.",
      standoutFact: "Italy's COSMO-SkyMed Earth-observation satellites watch the planet day and night; one of its second-generation satellites is pictured launching here.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-most-satellites-in-orbit-2026/italy.webp", "width": 1200, "height": 801, "alt": "Night launch of the Falcon 9 carrying Italy's COSMO-SkyMed Second Generation satellite", "author": "U.S. Space Force photo by Joshua Conti", "license": "Public domain", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Space_Launch_Delta_45_Supports_Successful_Falcon_9_COSMO-SkyMed_Launch_(220131-F-KD758-192).jpg", "caption": "Italy's COSMO-SkyMed Second Generation satellite launches aboard a Falcon 9, January 31, 2022."},
      countries: [{ name: "Italy", flagCode: "it" }],
    },
    {
      rank: 5,
      name: "Japan",
      earnings: "148 active satellites",
      category: "Asia",
      origin: "Share of world total: 0.85% (calculated)",
      blurb: "Japan ranks fifth with 148 active satellites, the largest fleet in Asia after China's.",
      standoutFact: "Japan's QZSS positioning system, known as Michibiki, has operated as a four-satellite constellation since November 2018 and is being expanded into a seven-satellite constellation.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-most-satellites-in-orbit-2026/japan.webp", "width": 1200, "height": 798, "alt": "An H-IIA rocket on the launch pad at Tanegashima Space Center", "author": "Bill Ingalls", "license": "Public domain", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Global_Precipitation_Measurement_(GPM)_Mission_(12812960063).jpg", "caption": "An H-IIA rocket at Tanegashima Space Center."},
      countries: [{ name: "Japan", flagCode: "jp" }],
    },
    {
      rank: 4,
      name: "Russia",
      earnings: "392 active satellites",
      category: "Europe / Asia",
      origin: "Share of world total: 2.25% (calculated)",
      blurb: "Russia ranks fourth with 392 active satellites, counted on the same method as every other country in this ranking.",
      standoutFact: "CelesTrak has no owner code for Russia itself: Russian satellites are filed under CIS, which technically means the former USSR but in practice covers only Russian satellites, since Ukraine and Kazakhstan have their own codes.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-most-satellites-in-orbit-2026/russia.webp", "width": 1200, "height": 744, "alt": "A Soyuz rocket launching to the International Space Station from the Baikonur Cosmodrome", "author": "NASA/Joel Kowsky", "license": "Public domain", "sourceUrl": "https://commons.wikimedia.org/wiki/File:A_Soyuz_rocket_launches_to_the_ISS_with_Expedition_73_crew_members_on_April_8,_2025,_at_the_Baikonur_Cosmodrome.jpg", "caption": "A Soyuz rocket launches to the ISS from the Baikonur Cosmodrome, April 8, 2025."},
      countries: [{ name: "Russia", flagCode: "ru" }],
    },
    {
      rank: 3,
      name: "United Kingdom",
      earnings: "700 active satellites",
      category: "Europe",
      origin: "Share of world total: 4.01% (calculated)",
      blurb: "The United Kingdom ranks third with 700 active satellites, and the ranking is mostly one company's story: 651 of the 700 are Eutelsat OneWeb's broadband satellites, which CelesTrak catalogues under the UK.",
      standoutFact: "Under the OneWeb–Eutelsat merger announced in July 2022, OneWeb's headquarters remain in the UK, and the UK government retains a special share in the company.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-most-satellites-in-orbit-2026/uk.webp", "width": 1200, "height": 800, "alt": "Inside the OneWeb Satellites manufacturing facility in Florida", "author": "Anthony Quintano from Mount Laurel, United States", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:One_Web_Satellites_Florida_Headquarters_(52635628380).jpg", "caption": "Inside the OneWeb Satellites factory in Florida, where OneWeb's satellites are built."},
      countries: [{ name: "United Kingdom", flagCode: "gb" }],
    },
    {
      rank: 2,
      name: "China",
      earnings: "1,613 active satellites",
      category: "Asia",
      origin: "Share of world total: 9.25% (calculated)",
      blurb: "China ranks second with 1,613 active satellites, roughly one for every eight satellites owned by the United States.",
      standoutFact: "China completed its BeiDou global navigation constellation in June 2020; its third-generation system, BDS-3, has 30 satellites across three kinds of orbit.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-most-satellites-in-orbit-2026/china.webp", "width": 1200, "height": 675, "alt": "A Long March 2F rocket launching the Shenzhou 12 spacecraft from Jiuquan", "author": "中国新闻网", "license": "CC BY 4.0", "licenseUrl": "https://creativecommons.org/licenses/by/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Shenzhou_12_launch.jpg", "caption": "Shenzhou 12 lifts off from the Jiuquan Satellite Launch Center."},
      countries: [{ name: "China", flagCode: "cn" }],
    },
    {
      rank: 1,
      name: "United States",
      earnings: "13,138 active satellites",
      category: "Americas",
      origin: "Share of world total: 75.32% (calculated)",
      blurb: "The United States has 13,138 active satellites, more than four times as many as the other nine countries in this ranking combined (Viszlyn calculation).",
      standoutFact: "On October 19, 2025, a SpaceX Falcon 9 launch from Vandenberg carried the 10,000th Starlink satellite to reach orbit; it was also SpaceX's 132nd Falcon 9 launch of 2025, tying its own annual record.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-most-satellites-in-orbit-2026/usa.webp", "width": 1200, "height": 800, "alt": "A Falcon 9 rocket launching a batch of Starlink satellites", "author": "U.S. Space Force photo by Senior Airman Samuel Becker", "license": "Public domain", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Falcon_9_Starlink_10-59_Launch_(9391879).jpg", "caption": "A Falcon 9 launches a batch of Starlink satellites."},
      countries: [{ name: "United States", flagCode: "us" }],
    },
  ],

  keyTakeaway: {
    stat: "13,138",
    label: "Active satellites owned by the United States",
    comparisonStat: "64.26%",
    comparisonLabel: "Share of all active satellites that are SpaceX's Starlink (calculated)",
    note: "The US total is 75.32% of the world's 17,444 active satellites. Excluding Starlink, the US would have 1,929 satellites and an 11.06% share, and would still rank first, ahead of China's 1,613. All shares are Viszlyn calculations from the CelesTrak SATCAT snapshot of November 19, 2026.",
  },

  sourceNote: {
    dataPeriod: "CelesTrak SATCAT snapshot of November 19, 2026",
    lastUpdated: "November 20, 2026",
    sources:
      "CelesTrak SATCAT (Dr T. S. Kelso), full satellite catalogue downloaded November 19, 2026, with CelesTrak's SATCAT owner codes and format documentation. Country facts: Space.com (10,000th Starlink launch); Xinhua via the State Council Information Office (BeiDou); GOV.UK (OneWeb); Cabinet Office of Japan (QZSS).",
    methodology:
      "We counted payloads in the CelesTrak SATCAT snapshot of November 19, 2026 that are still in Earth orbit and carry an operational status code of + (operational), P (partially operational), B (backup/standby), S (spare) or X (extended mission). Rocket bodies, debris and non-operational satellites are excluded, as are payloads orbiting bodies other than Earth. CelesTrak assigns each satellite a single owner code: multinational organisations keep their own codes and are never split between member countries, so the European Space Agency's 69 active satellites appear under ESA rather than France, Germany or Italy, and ESA would rank 12th if owner codes were ranked alongside countries. CelesTrak has no owner code for Russia itself; Russian satellites sit under the code CIS, which technically means former USSR but in practice covers only Russian satellites, since Ukraine and Kazakhstan have their own codes. Russia's count is 392 on this counting method. Percentages and other derived figures are calculated by Viszlyn from the snapshot. The UCS Satellite Database was not used: it was last updated on May 1, 2023, and its updates are paused.",
    sourceLinks: [
      { label: "CelesTrak SATCAT (full catalogue)", href: "https://celestrak.org/pub/satcat.csv" },
      { label: "CelesTrak: SATCAT owner/source codes", href: "https://celestrak.org/satcat/sources.php" },
      { label: "CelesTrak: SATCAT format documentation", href: "https://celestrak.org/satcat/satcat-format.php" },
    ],
  },

  faqItems: [
    {
      question: "Which country has the most satellites in orbit?",
      answer:
        "The United States, with 13,138 active satellites as of November 19, 2026, about 75% of the world total of 17,444 (CelesTrak SATCAT; share calculated by Viszlyn). China is second with 1,613.",
    },
    {
      question: "How many satellites are in orbit in total?",
      answer:
        "17,444 active satellites were in Earth orbit in the CelesTrak SATCAT snapshot of November 19, 2026. That counts only payloads with an operational status: dead satellites, rocket bodies and debris are excluded, so the total number of man-made objects in orbit is much higher.",
    },
    {
      question: "How many Starlink satellites are in orbit?",
      answer:
        "11,209 active Starlink satellites were in orbit on November 19, 2026, all catalogued under the United States. That is 64.26% of all active satellites in the world (calculated by Viszlyn). Without Starlink, the US total would be 1,929.",
    },
    {
      question: "Why does the UK have so many satellites?",
      answer:
        "Because of OneWeb. 651 of the UK's 700 active satellites belong to Eutelsat OneWeb's broadband constellation, which CelesTrak catalogues under the United Kingdom, where OneWeb is headquartered.",
    },
    {
      question: "Why is Russia counted under the code CIS?",
      answer:
        "CelesTrak has no owner code for Russia itself. Russian satellites are filed under CIS, its code for the Commonwealth of Independent States (former USSR). In practice the code covers only Russian satellites, because other former Soviet states, such as Ukraine and Kazakhstan, have their own codes.",
    },
    {
      question: "Where are the European Space Agency's satellites counted?",
      answer:
        "Under ESA's own owner code, not under any country. ESA had 69 active satellites in the snapshot, which would place it 12th if owner codes were ranked alongside countries. The same applies to other multinational operators, such as Eutelsat and Intelsat.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Countries With the Most Lakes", href: "/rankings/countries-with-most-lakes-2026" },
    { title: "The 10 Countries With the Most Time Zones", href: "/rankings/countries-with-most-time-zones-2026" },
    { title: "The World's Nuclear Arsenals, Ranked (2026)", href: "/rankings/nuclear-arsenals-ranked-2026" },
    { title: "The 15 Most Populous Countries in the World in 2026", href: "/rankings/most-populous-countries-2026" },
  ],
};
