import { RankingArticle } from "./types";

const BOM = "Box Office Mojo, List of highest-grossing openings for films (studio-reported grosses)";
const SLUG = "biggest-entertainment-launches-2026";

export const biggestEntertainmentLaunches2026: RankingArticle = {
  slug: SLUG,

  metaTitle: "The 10 Biggest Entertainment Launches Ever: Films and Games (2026) | Viszlyn",
  metaDescription:
    "Avengers: Endgame leads the ranked first-3-days list at US$1.22 billion, but GTA VI made US$3.79 billion on day one. See the 10 biggest film and video game launches, with sources.",
  ogTitle: "The Biggest Entertainment Launches Ever",
  ogDescription:
    "Films and video games ranked by money earned in their first 3 days, plus where GTA VI's record US$3.79 billion day one fits in.",
  twitterTitle: "The 10 Biggest Entertainment Launches Ever",
  twitterDescription:
    "Avengers: Endgame US$1.22B. GTA V US$1B+. Spider-Man: Brand New Day US$932M. And GTA VI's US$3.79B day one: unranked, for now.",

  eyebrow: "Business",
  title: "The 10 Biggest Entertainment Launches Ever",
  dek: "Films and video games ranked by the money they earned worldwide in their first three days. GTA VI's day one alone, a company-estimated US$3.79 billion, is about 3.1 times the ranked No. 1, but no three-day figure exists yet, so it sits above the list, not in it.",
  publishedDate: "November 22, 2026",
  lastUpdated: "November 22, 2026",
  dataPeriod: "Launches from 2013 to 2026; figures as published through November 22, 2026",
  heroImage: {
    src: "/heroes/biggest-entertainment-launches-2026.png",
    ogSrc: "/heroes/biggest-entertainment-launches-2026-og.png",
    alt: "Bar chart of the biggest entertainment launches by first-3-days worldwide earnings: Avengers: Endgame US$1,223.6 million, GTA V over US$1,000 million, Spider-Man: Brand New Day US$932.1 million, Call of Duty: Modern Warfare II over US$800 million, Red Dead Redemption 2 over US$725 million, Avengers: Infinity War US$640.5 million, Spider-Man: No Way Home US$600.5 million, Call of Duty: Modern Warfare over US$600 million, Zootopia 2 US$560.3 million and Call of Duty: Black Ops III over US$550 million, beside a tall unranked bar for GTA VI's US$3.79 billion day-one retail sales.",
  },

  quickAnswer:
    "Among launches with a published first-three-days figure, Avengers: Endgame is No. 1: US$1,223,641,414 worldwide in its 2019 opening weekend (Box Office Mojo). The biggest video game with a three-day figure is Grand Theft Auto V, with more than US$1 billion in 2013 (Take-Two). GTA VI, released on November 19, 2026, reported day-one retail sales of US$3.79 billion (company estimate), more than any ranked launch made in three days, but no three-day total has been published, so it is not ranked.",
  introParagraph:
    "Big launches are measured in different ways: box office for films, retail sell-through for games, units for some albums. To compare them fairly, this ranking uses one yardstick: the money earned worldwide in the first three days, which for films means the opening weekend. Film figures are gross box office from Box Office Mojo. Game figures are the publisher's own announced worldwide sell-through, and publishers often give them only as thresholds such as \"more than $800 million\", so the true totals can be higher. Both sides are gross consumer spending, not company revenue. Music and tours are left out because none reports a worldwide first-three-days revenue figure.",
  calloutBox: {
    label: "Where is GTA VI?",
    body: "Grand Theft Auto VI launched on November 19, 2026. In a press release filed with the SEC on November 20, publisher Take-Two said its \"day one retail sales reached $3.79 billion\", footnoted as \"based on company estimates through end of day November 19th worldwide\". It also said 32.5 million units were sold pre-release. So the figure covers one day, counts pre-release sales and is gross retail spending, not Take-Two's net revenue. Even so, it is about 3.1 times Avengers: Endgame's three-day total (Viszlyn calculation). Because no first-three-days figure has been published as of November 22, 2026, GTA VI is not ranked here. We will update this page if one appears. For reference, the market-intelligence firm Sensor Tower estimated about US$2.36 billion for digital console sales alone through launch day, a narrower measure that excludes physical copies.",
  },

  chartTitle: "Worldwide earnings in the first 3 days (US$ millions)",
  chartSource: "Box Office Mojo (films); Take-Two and Activision (games, \"more than\" thresholds shown with +). Chart labels are rounded to US$0.1 million; exact figures are in each entry",
  chartTapNote: "Tap any title to jump to its details below.",
  entryValueLabel: "First 3 days, worldwide:",
  chartItems: [
    { rank: 1, name: "Avengers: Endgame (film, 2019)", value: "$1,223.6M", raw: 1223.641414 },
    { rank: 2, name: "Grand Theft Auto V (game, 2013)", value: "$1,000M+", raw: 1000 },
    { rank: 3, name: "Spider-Man: Brand New Day (film, 2026)", value: "$932.1M", raw: 932.091572 },
    { rank: 4, name: "Call of Duty: Modern Warfare II (game, 2022)", value: "$800M+", raw: 800 },
    { rank: 5, name: "Red Dead Redemption 2 (game, 2018)", value: "$725M+", raw: 725 },
    { rank: 6, name: "Avengers: Infinity War (film, 2018)", value: "$640.5M", raw: 640.521291 },
    { rank: 7, rankLabel: "=7", name: "Spider-Man: No Way Home (film, 2021)", value: "$600.5M", raw: 600.506041 },
    { rank: 8, rankLabel: "=7", name: "Call of Duty: Modern Warfare (game, 2019)", value: "$600M+", raw: 600 },
    { rank: 9, name: "Zootopia 2 (film, 2025)", value: "$560.3M", raw: 560.333554 },
    { rank: 10, name: "Call of Duty: Black Ops III (game, 2015)", value: "$550M+", raw: 550 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Call of Duty: Black Ops III",
      earnings: "More than US$550 million",
      category: "Video game · November 6, 2015",
      origin: "Activision, worldwide sales in the first three days",
      blurb: "Activision said Call of Duty: Black Ops III sold more than US$550 million worldwide in its first three days, based on sell-through estimates.",
      standoutFact: "In 2015, GameSpot noted it was unclear whether PlayStation 4 hardware bundle sales were counted in this figure, and Activision never clarified.",
      sourceTag: "GamesIndustry.biz, \"Black Ops 3 sells $550 million in three days\" (Activision announcement)",
    },
    {
      rank: 9,
      name: "Zootopia 2",
      earnings: "US$560,333,554",
      category: "Film · November 26, 2025",
      origin: "Worldwide opening, Box Office Mojo",
      blurb: "Zootopia 2 opened with US$158.8 million in North America (a five-day Thanksgiving frame) and US$401.5 million internationally, for a worldwide total of US$560,333,554 in Box Office Mojo's actuals.",
      standoutFact: "Disney's studio estimate on the Sunday was US$556 million (Comscore). The final figure replaced it. Because its North American opening covers five days, it is not a strict three-day number.",
      sourceTag: BOM,
    },
    {
      rank: 8,
      rankLabel: "=7",
      name: "Call of Duty: Modern Warfare (2019)",
      earnings: "More than US$600 million",
      category: "Video game · October 25, 2019",
      origin: "Activision, worldwide sell-through in the first three days",
      blurb: "Activision said Modern Warfare earned more than US$600 million in worldwide sell-through in its first three days, including retail and digital sales and the Defender DLC pack, based on retail customer sell-through information and Activision data and estimates.",
      standoutFact: "Activision never published an exact total, so its true figure could be above or below Spider-Man: No Way Home's US$600,506,041. The two are effectively tied.",
      sourceTag: "Activision, \"Call of Duty: Modern Warfare delivers blockbuster opening weekend\" (October 2019)",
    },
    {
      rank: 7,
      rankLabel: "=7",
      name: "Spider-Man: No Way Home",
      earnings: "US$600,506,041",
      category: "Film · December 17, 2021",
      origin: "Worldwide opening weekend, Box Office Mojo",
      blurb: "Spider-Man: No Way Home opened with US$600,506,041 worldwide in Box Office Mojo's studio-reported grosses.",
      standoutFact: "Its exact figure is just above Modern Warfare (2019)'s published threshold of \"more than US$600 million\", which is why the two share a rank.",
      sourceTag: BOM,
    },
    {
      rank: 6,
      name: "Avengers: Infinity War",
      earnings: "US$640,521,291",
      category: "Film · April 27, 2018",
      origin: "Worldwide opening weekend, Box Office Mojo",
      blurb: "Avengers: Infinity War opened with US$640,521,291 worldwide.",
      standoutFact: "It reached US$1 billion in 11 days.",
      sourceTag: BOM,
    },
    {
      rank: 5,
      name: "Red Dead Redemption 2",
      earnings: "Over US$725 million",
      category: "Video game · October 26, 2018",
      origin: "Take-Two Interactive / Rockstar Games, retail sell-through",
      blurb: "Take-Two reported that Red Dead Redemption 2 earned over US$725 million in worldwide retail sell-through in its first three days.",
      standoutFact: "One secondary page claims about US$752 million, but we found no primary or reputable source for it, so we use Take-Two's own US$725 million.",
      sourceTag: "Take-Two Interactive, investor release on Red Dead Redemption 2",
    },
    {
      rank: 4,
      name: "Call of Duty: Modern Warfare II",
      earnings: "More than US$800 million",
      category: "Video game · October 28, 2022",
      origin: "Activision, worldwide sell-through after the first three days",
      blurb: "Activision said Modern Warfare II earned more than US$800 million in worldwide sell-through following its first three days, based on reporting from digital and retail partners and Activision's internal estimates.",
      standoutFact: "It passed US$1 billion in 10 days.",
      sourceTag: "GamesBeat, \"Modern Warfare II tops $1B in 10 days\" (Activision figures)",
    },
    {
      rank: 3,
      name: "Spider-Man: Brand New Day",
      earnings: "US$932,091,572",
      category: "Film · July 31, 2026",
      origin: "Worldwide opening weekend, Box Office Mojo",
      blurb: "Spider-Man: Brand New Day opened with US$932,091,572 worldwide: US$360.1 million in North America and US$572 million internationally. The first report, based on Rentrak estimates, said US$927 million.",
      standoutFact: "It crossed US$1 billion on August 3, 2026, reported as six days, the second-fastest ever after Endgame. Six days counts from some markets opening on July 29; from the US release on July 31 it is four.",
      sourceTag: `${BOM}; Screen Daily (initial estimate)`,
    },
    {
      rank: 2,
      name: "Grand Theft Auto V",
      earnings: "More than US$1,000,000,000",
      category: "Video game · September 17, 2013",
      origin: "Take-Two Interactive, worldwide retail sell-through",
      blurb: "Take-Two said Grand Theft Auto V generated more than US$1 billion in worldwide retail sell-through in its first three days, according to company estimates. A more precise total was never published.",
      standoutFact: "Its day one was \"more than US$800 million\" in Take-Two's wording, excluding the later Japan and Brazil launches. Guinness World Records lists the precise figures as 11.21 million units and US$815.7 million in 24 hours.",
      sourceTag: "Take-Two Interactive, press release on GTA V sales (September 2013)",
    },
    {
      rank: 1,
      name: "Avengers: Endgame",
      earnings: "US$1,223,641,414",
      category: "Film · April 26, 2019 (US)",
      origin: "Worldwide opening weekend, Box Office Mojo",
      blurb: "Avengers: Endgame opened with US$1,223,641,414 worldwide in Box Office Mojo's studio-reported grosses, the biggest opening weekend for a film.",
      standoutFact: "It reached US$1 billion in five days, the fastest on this list. Because it opened on Wednesday, April 24 in many markets, its \"opening weekend\" spans up to five days there.",
      sourceTag: BOM,
    },
  ],

  keyTakeaway: {
    stat: "$3.79B",
    label: "GTA VI's day-one retail sales (company estimate, unranked)",
    comparisonStat: "$1.22B",
    comparisonLabel: "Avengers: Endgame's opening weekend, the biggest ranked total",
    note: "GTA VI's figure covers one day and includes pre-release sales; the ranked figures cover three days (an opening weekend for films). On those terms it is about 3.1 times Endgame's total (Viszlyn calculation). It will be ranked if a first-three-days figure is published.",
  },

  sourceNote: {
    dataPeriod: "Launches from 2013 to 2026; figures as published through November 22, 2026",
    lastUpdated: "November 22, 2026",
    sources:
      "Films: Box Office Mojo, List of highest-grossing openings for films (studio-reported worldwide grosses); Screen Daily for the initial Spider-Man: Brand New Day estimate. Video games: Take-Two Interactive (Grand Theft Auto V, Red Dead Redemption 2, Grand Theft Auto VI day one, SEC Form 8-K Exhibit 99.1, November 20, 2026); Activision (Call of Duty titles, via GamesBeat, GamesIndustry.biz and Activision's blog). Guinness World Records for GTA V's precise day-one figures. Sensor Tower, via Reuters, Deadline and GameSpot, for the third-party GTA VI estimate.",
    methodology:
      "Launches are ranked by the money earned worldwide in the first three days: for games, the publisher's announced worldwide sell-through (digital and physical combined); for films, the worldwide opening weekend as compiled by Box Office Mojo. Both are gross consumer spending, not company revenue. Most game figures are publisher estimates, and several are published only as thresholds (\"more than\"), entered here at the threshold value, so their true totals could be higher and close ranks should be read as approximate. Spider-Man: No Way Home and Call of Duty: Modern Warfare (2019) are shown as tied because Activision never published an exact total. Film openings are not a strict 72 hours: Avengers: Endgame, Zootopia 2 and Spider-Man: Brand New Day opened in some markets or frames earlier than their US release, so their windows run to four or five days. Figures are nominal US dollars with no inflation adjustment, so older launches are not scaled to today's prices. Launches that published only units, only a day-one figure or only shipments to retailers are excluded, as are albums and tours, which do not report a worldwide first-three-days revenue figure. GTA VI is shown separately because only a day-one figure exists.",
    sourceLinks: [
      { label: "Take-Two: GTA VI day-one retail sales (SEC Form 8-K, Exhibit 99.1)", href: "https://www.sec.gov/Archives/edgar/data/946581/000162828026075217/exhibit9918k.htm" },
      { label: "Box Office Mojo / Wikipedia: Highest-grossing openings for films", href: "https://en.wikipedia.org/wiki/List_of_highest-grossing_openings_for_films" },
      { label: "Screen Daily: Spider-Man: Brand New Day debut", href: "https://www.screendaily.com/news/spider-man-brand-new-day-swings-to-stunning-927m-debut-at-global-box-office-second-biggest-opening-of-all-time/5219050.article" },
      { label: "Take-Two Interactive: GTA V release figures", href: "https://ir.take2games.com/static-files/89147540-5f6a-4c86-bdd6-caeae6ea799a" },
      { label: "Take-Two Interactive: Red Dead Redemption 2", href: "https://ir.take2games.com/node/26401/pdf" },
      { label: "GamesBeat: Modern Warfare II tops $1B in 10 days", href: "https://gamesbeat.com/modern-warfare-ii-tops-1b-in-10-days/" },
      { label: "Activision: Call of Duty: Modern Warfare opening weekend", href: "https://blog.activision.com/content/atvi/activision/atvi-touchui/web/en/blog/call-of-duty/2019-10/CALL-OF-DUTY-MODERN-WARFARE-DELIVERS-BLOCKBUSTER-OPENING-WEEKEND" },
      { label: "GamesIndustry.biz: Black Ops III sells $550 million in three days", href: "https://www.gamesindustry.biz/black-ops-3-sells-usd550-million-in-three-days" },
    ],
  },

  faqItems: [
    {
      question: "What is the biggest entertainment launch ever?",
      answer:
        "On a first-three-days basis, Avengers: Endgame leads the ranked list with US$1,223,641,414 worldwide in its 2019 opening weekend. On a single day, GTA VI is bigger: Take-Two reports US$3.79 billion in day-one retail sales (a company estimate that includes pre-release sales), which it calls the biggest entertainment launch in history.",
    },
    {
      question: "How much did GTA VI make on its first day?",
      answer:
        "Take-Two said day-one retail sales reached US$3.79 billion, based on company estimates through the end of November 19, 2026, worldwide. It also said 32.5 million units were sold pre-release. The market-intelligence firm Sensor Tower separately estimated about US$2.36 billion for digital console sales alone through launch day.",
    },
    {
      question: "Why isn't GTA VI ranked in the top 10?",
      answer:
        "Because this ranking compares first-three-days earnings and, as of November 22, 2026, no three-day figure for GTA VI has been published. Its day-one figure alone is larger than any ranked three-day total, so it will take the top spot if a three-day number appears. We will update this page when it does.",
    },
    {
      question: "What was the biggest video game launch before GTA VI?",
      answer:
        "Among games with a published three-day figure, Grand Theft Auto V: more than US$1 billion in three days in 2013, according to Take-Two. It is followed by Call of Duty: Modern Warfare II (more than US$800 million) and Red Dead Redemption 2 (over US$725 million).",
    },
    {
      question: "Can you compare film box office with video game sales?",
      answer:
        "Only roughly. Both are gross consumer spending, so they are comparable at that level, but game figures are publisher estimates, often given as thresholds, while film figures are studio-reported grosses compiled by Box Office Mojo. Film opening weekends can also run up to five days in some markets, longer than a game's three days.",
    },
    {
      question: "Why aren't albums or concert tours on the list?",
      answer:
        "No album or tour reports a worldwide first-three-days revenue figure. Albums are reported in units or streams, and tour grosses are reported per leg or over weeks, so including them would mean inventing numbers.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Highest-Paid Athletes in 2026", href: "/rankings/highest-paid-athletes-2026" },
    { title: "The 10 Highest-Earning Creators in 2026", href: "/rankings/highest-earning-creators-2026" },
    { title: "The World's Most Valuable Companies (2026)", href: "/rankings/worlds-most-valuable-companies-2026" },
    { title: "The 10 Biggest Tech IPOs", href: "/rankings/biggest-tech-ipos-2026" },
  ],
};
