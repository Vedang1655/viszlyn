import { RankingArticle } from "./types";

const SRC = "Airline schedules (checked Nov 11, 2026); distances calculated by Viszlyn";

export const longestFlightsWorld2026: RankingArticle = {
  slug: "longest-flights-world-2026",

  metaTitle: "The 10 Longest Nonstop Flights in the World in 2026, Ranked | Viszlyn",
  metaDescription:
    "Singapore to New York (15,341 km, about 18–19 hours) is the world's longest nonstop flight. See the 10 longest flights operating in 2026, ranked by distance.",
  ogTitle: "The World's 10 Longest Nonstop Flights in 2026",
  ogDescription:
    "Singapore–New York tops the list at 15,341 km. Airspace closures in 2026 cut Doha–Auckland and made two Qantas routes one-way nonstops. The top 10, ranked.",
  twitterTitle: "Ranked: The World's 10 Longest Nonstop Flights",
  twitterDescription:
    "Singapore–New York 15,341 km, Singapore–Newark 15,337 km, Perth–London 14,508 km. The 10 longest nonstop flights operating in 2026.",

  eyebrow: "Travel",
  title: "The World's 10 Longest Nonstop Flights in 2026",
  dek: "Ranked by great-circle distance, with scheduled flight times from the airlines' own timetables. Singapore Airlines flies the two longest, and 2026's airspace closures reshaped the rest of the list.",
  publishedDate: "November 11, 2026",
  lastUpdated: "November 11, 2026",
  dataPeriod: "Flights scheduled for December 2026 to February 2027, checked November 11, 2026",
  heroImage: {
    src: "/heroes/longest-flights-world-2026.png",
    ogSrc: "/heroes/longest-flights-world-2026-og.png",
    alt: "Ten planes flying across a sunset sky, each trailing a contrail sized to its route distance, led by Singapore to New York at 15,341 km.",
    onPage: false,
  },

  quickAnswer:
    "The world's longest nonstop flight is Singapore Airlines' Singapore to New York JFK route, at 15,341 km. It is scheduled at 18 hours 15 minutes eastbound and 18 hours 55 minutes on the way back. Singapore to Newark is second, just 3.8 km shorter, and Qantas's Perth to London route is third at 14,508 km, though it currently flies nonstop only from London to Perth.",
  introParagraph:
    "This ranking lists the 10 longest regularly scheduled nonstop passenger flights operating in December 2026 to February 2027, ranked by great-circle distance: the shortest distance between the two airports over the Earth's surface. Viszlyn calculated each distance from the airports' published coordinates. Flight times are as shown on the airlines' own timetables on the dates checked; they vary by direction, because of prevailing winds, and by season. A route is included if it operates nonstop in at least one direction, the same rule used by aviation analytics firm OAG.",
  calloutBox: {
    label: "2026's airspace closures reshaped the list",
    body: "Qatar Airways' Doha to Auckland flight would rank 3rd at 14,534 km, but it is not scheduled nonstop in this period and now runs with a stop in Australia. Qantas's Perth to London and Perth to Paris flights have been routed via Singapore in the westbound direction since March 2026, according to Qantas's revised schedules as reported by Executive Traveller, so they fly nonstop only on the return leg to Perth. Qantas's Project Sunrise flights from Sydney to London, at about 17,021 km, would take 1st place, but they are not due to start until October 2027.",
  },

  chartTitle: "Great-circle distance between airports (km)",
  chartSource: SRC,
  chartTapNote: "Tap any flight to jump to its full breakdown below.",
  entryValueLabel: "Distance:",
  chartItems: [
    { rank: 1, name: "Singapore – New York (JFK)", value: "15,341 km", raw: 15340.6 },
    { rank: 2, name: "Singapore – Newark", value: "15,337 km", raw: 15336.8 },
    { rank: 3, name: "Perth – London", value: "14,508 km", raw: 14508.2 },
    { rank: 4, name: "Melbourne – Dallas", value: "14,476 km", raw: 14475.5 },
    { rank: 5, name: "Perth – Paris", value: "14,272 km", raw: 14272.2 },
    { rank: 6, name: "Auckland – New York (JFK)", value: "14,216 km", raw: 14215.5 },
    { rank: 7, name: "Dubai – Auckland", value: "14,199 km", raw: 14199.3 },
    { rank: 8, name: "Singapore – Los Angeles", value: "14,102 km", raw: 14101.5 },
    { rank: 9, name: "Sydney – Dallas", value: "13,808 km", raw: 13808.2 },
    { rank: 10, name: "Manila – New York (JFK)", value: "13,696 km", raw: 13695.6 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Manila – New York (JFK)",
      earnings: "13,696 km (8,510 miles)",
      category: "Philippine Airlines · Airbus A350",
      blurb: "Philippine Airlines' PR126 is scheduled at 15 hours 35 minutes from Manila to New York, and the return PR127 at 16 hours 50 minutes.",
      standoutFact: "It is the only route in the top 10 operated by a Southeast Asian airline other than Singapore Airlines, flying about four to five times a week.",
      sourceTag: "Philippine Airlines timetable",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Philippine_Airlines",
    },
    {
      rank: 9,
      name: "Sydney – Dallas",
      earnings: "13,808 km (8,580 miles)",
      category: "Qantas · QF7 / QF8",
      blurb: "Qantas's QF7 and QF8 connect Sydney with Dallas/Fort Worth. Qantas's flight-status tool confirmed the route operating on November 14, 2026; its December–February timetable could not be checked on the Qantas website.",
      standoutFact: "It is one of two Qantas routes to Dallas/Fort Worth in the top 10, alongside Melbourne–Dallas.",
      sourceTag: "Qantas flight status",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Qantas",
    },
    {
      rank: 8,
      name: "Singapore – Los Angeles",
      earnings: "14,102 km (8,762 miles)",
      category: "Singapore Airlines · Airbus A350-900",
      blurb: "Singapore Airlines' SQ38 is scheduled at 15 hours 10 minutes from Singapore to Los Angeles, and SQ37 at 17 hours 50 minutes on the way back.",
      standoutFact: "The return flight is scheduled 2 hours 40 minutes longer than the outbound, the biggest difference between directions among the top-10 flights with published timetables.",
      sourceTag: "Singapore Airlines timetable",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Singapore_Airlines",
    },
    {
      rank: 7,
      name: "Dubai – Auckland",
      earnings: "14,199 km (8,823 miles)",
      category: "Emirates · Airbus A380",
      blurb: "Emirates' EK448 is scheduled at 16 hours 10 minutes from Dubai to Auckland, and EK449 at 17 hours 10 minutes on the way back.",
      standoutFact: "It is the only route in the top 10 flown with a double-decker Airbus A380.",
      sourceTag: "Emirates timetable",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Emirates_(airline)",
    },
    {
      rank: 6,
      name: "Auckland – New York (JFK)",
      earnings: "14,216 km (8,833 miles)",
      category: "Air New Zealand · Boeing 787-9",
      blurb: "Air New Zealand's NZ2 is scheduled at 15 hours 45 minutes from Auckland to New York, and NZ1 at 18 hours 5 minutes on the way back. It flies three times a week.",
      standoutFact: "It is only 16 km longer than Dubai–Auckland in 7th place.",
      sourceTag: "Air New Zealand timetable",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Air_New_Zealand",
    },
    {
      rank: 5,
      name: "Perth – Paris",
      earnings: "14,272 km (8,868 miles)",
      category: "Qantas · Boeing 787-9 · nonstop one way only",
      blurb: "Qantas's QF34 flies nonstop from Paris to Perth. In the other direction, the flight has been routed via Singapore since March 2026, according to reporting on Qantas's revised schedules.",
      standoutFact: "It is one of two Qantas routes in the top 10 that currently fly nonstop in one direction only, both linking Perth with Europe.",
      sourceTag: "Executive Traveller, Simple Flying",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Qantas",
    },
    {
      rank: 4,
      name: "Melbourne – Dallas",
      earnings: "14,476 km (8,995 miles)",
      category: "Qantas · QF21 / QF22",
      blurb: "Qantas's QF21 and QF22 connect Melbourne with Dallas/Fort Worth. Qantas's flight-status tool confirmed the route operating on November 14, 2026; its December–February timetable could not be checked on the Qantas website.",
      standoutFact: "It is Qantas's longest route that currently flies nonstop in both directions.",
      sourceTag: "Qantas flight status",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Qantas",
    },
    {
      rank: 3,
      name: "Perth – London",
      earnings: "14,508 km (9,015 miles)",
      category: "Qantas · Boeing 787-9 · nonstop one way only",
      blurb: "Qantas's QF10 flies nonstop from London Heathrow to Perth. Flights from Perth to London have been routed via Singapore since March 2026, a change reported to remain in place until at least January 31, 2027.",
      standoutFact: "When it launched in 2018, it was the first regular nonstop link between Australia and Europe.",
      sourceTag: "Qantas flight status, Executive Traveller",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Qantas",
    },
    {
      rank: 2,
      name: "Singapore – Newark",
      earnings: "15,337 km (9,530 miles)",
      category: "Singapore Airlines · Airbus A350-900ULR",
      blurb: "Singapore Airlines' SQ22 is scheduled at 17 hours 50 minutes from Singapore to Newark, and SQ21 at 19 hours 10 minutes on the way back.",
      standoutFact: "At 19 hours 10 minutes, the Newark to Singapore flight has the longest scheduled time in the top 10, even though the route is 3.8 km shorter than Singapore–JFK.",
      sourceTag: "Singapore Airlines timetable",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Singapore_Airlines",
    },
    {
      rank: 1,
      name: "Singapore – New York (JFK)",
      earnings: "15,341 km (9,532 miles)",
      category: "Singapore Airlines · Airbus A350-900ULR",
      blurb: "Singapore Airlines' SQ24 is scheduled at 18 hours 15 minutes from Singapore to New York JFK, and SQ23 at 18 hours 55 minutes on the way back. It operates almost every day.",
      standoutFact: "Singapore Airlines flies three of the 10 longest routes. The two longest use a special ultra-long-range version of the Airbus A350.",
      sourceTag: "Singapore Airlines timetable",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Singapore_Airlines",
    },
  ],

  keyTakeaway: {
    stat: "15,341 km",
    label: "Singapore to New York JFK, the world's longest nonstop flight",
    comparisonStat: "17,021 km",
    comparisonLabel: "Sydney to London, Qantas's planned Project Sunrise route from October 2027",
    note: "Singapore Airlines and Qantas dominate the list, with three and four routes. The top two are only 3.8 km apart. The order could change soon: Qatar Airways' Doha–Auckland nonstop (14,534 km) is not currently scheduled, two Qantas routes fly nonstop only one way, and Qantas plans to launch Sydney–London nonstops in October 2027, with Sydney–New York to follow.",
  },

  sourceNote: {
    dataPeriod: "Schedules for December 2026 to February 2027, checked November 11, 2026",
    lastUpdated: "November 11, 2026",
    sources:
      "Flight times, aircraft and frequencies: the airlines' own websites and timetables (Singapore Airlines, Air New Zealand, Emirates, Philippine Airlines), checked November 11, 2026. Qantas routes: Qantas flight-status tool (November 14, 2026 flights), as Qantas's booking site could not be checked, plus reporting by Executive Traveller and Simple Flying on Qantas's revised Europe schedules. Project Sunrise: Qantas Newsroom (June 18, 2026). Airport coordinates: OurAirports open data. Cross-check: OAG.",
    methodology:
      "Routes are ranked by great-circle distance, calculated by Viszlyn with the haversine formula from OurAirports airport coordinates and a mean Earth radius of 6,371 km. Distances are rounded to the nearest kilometre in the chart; miles are converted from the unrounded figures. Actual flown distances are longer, because aircraft follow air routes and winds. OAG's published distances are about 8 km lower than ours because it uses slightly different airport reference points; this does not change the order. A route is included if it is a regularly scheduled nonstop passenger flight in at least one direction in December 2026 to February 2027. Perth–London and Perth–Paris currently fly nonstop only towards Perth. Flight times are as the airlines displayed them on the dates checked and vary by season. Just outside the top 10 are Johannesburg–Atlanta (Delta, 13,583 km) and Singapore–San Francisco (Singapore Airlines, 13,582 km), which are only 1.2 km apart.",
    sourceLinks: [
      { label: "OurAirports open data (airport coordinates)", href: "https://davidmegginson.github.io/ourairports-data/airports.csv" },
      { label: "OAG: The world's longest non-stop airline routes", href: "https://www.oag.com/blog/exploring-the-worlds-10-longest-non-stop-airline-routes" },
      { label: "Qantas Newsroom: Project Sunrise route announcement", href: "https://www.qantasnewsroom.com.au/media-releases/project-sunrise-route-announcement-toulouse" },
      { label: "Executive Traveller: Qantas London and Paris flight changes", href: "https://www.executivetraveller.com/news/qantas-london-paris-flight-changes" },
      { label: "Simple Flying: Qantas's nonstop Perth–London flight in 2026", href: "https://simpleflying.com/why-did-qantas-quietly-kill-its-nonstop-perth-london-flight-in-2026/" },
    ],
  },

  faqItems: [
    {
      question: "What is the longest flight in the world in 2026?",
      answer:
        "Singapore Airlines' nonstop flight between Singapore and New York JFK, at 15,341 km (9,532 miles). It is scheduled at 18 hours 15 minutes from Singapore and 18 hours 55 minutes from New York.",
    },
    {
      question: "Which flight takes the longest time?",
      answer:
        "Of the flights checked, Singapore Airlines' SQ21 from Newark to Singapore has the longest scheduled time, at 19 hours 10 minutes. Times change by direction and season because of winds.",
    },
    {
      question: "Is Qantas's Sydney to London nonstop flight operating?",
      answer:
        "Not yet. Qantas says its Project Sunrise flights between Sydney and London will start in October 2027, with Sydney–New York to follow. At about 17,021 km, Sydney–London would become the world's longest flight.",
    },
    {
      question: "Why isn't Doha to Auckland on the list?",
      answer:
        "Qatar Airways' Doha–Auckland route (14,534 km) would rank 3rd, but it is not scheduled as a nonstop flight between December 2026 and February 2027. It currently operates with a stop in Australia.",
    },
    {
      question: "What is the longest flight from the United States?",
      answer:
        "New York JFK to Singapore, at 15,341 km. The longest from Newark is Newark–Singapore (15,337 km), which also has the longest scheduled time on this list.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Busiest Airports in the World in 2026", href: "/rankings/busiest-airports-world-2026" },
    { title: "The World's Most Powerful Passports in 2026", href: "/rankings/most-powerful-passports-2026" },
    { title: "The 20 Tallest Buildings in the World in 2026", href: "/rankings/tallest-buildings-world-2026" },
    { title: "The 10 Most Visited Countries in the World", href: "/rankings/most-visited-countries-2026" },
  ],
};
