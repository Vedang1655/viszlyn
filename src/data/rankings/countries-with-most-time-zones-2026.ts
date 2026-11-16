import { RankingArticle } from "./types";

const SRC = "IANA time zone database; national time regulations; timeanddate.com";

export const countriesWithMostTimeZones2026: RankingArticle = {
  slug: "countries-with-most-time-zones-2026",

  metaTitle: "Which Country Has the Most Time Zones? The Top 10 Ranked | Viszlyn",
  metaDescription:
    "France has the most time zones in the world: 12, thanks to its overseas territories. Russia and the US have 11 each, the UK and Australia 9, Canada and New Zealand 5. The top 10, ranked.",
  ogTitle: "The Countries With the Most Time Zones",
  ogDescription:
    "Not Russia: France has the most time zones, 12, from French Polynesia to New Caledonia. Russia and the US follow with 11 each.",
  twitterTitle: "Which Country Has the Most Time Zones?",
  twitterDescription:
    "France 12, Russia 11, US 11, UK 9, Australia 9. The countries with the most time zones, ranked.",

  eyebrow: "World",
  title: "The 10 Countries With the Most Time Zones",
  dek: "Russia is the world's widest country, but France has more time zones, thanks to islands and territories scattered across the Pacific, Atlantic and Indian oceans. Here are the 10 countries whose territory spans the most time zones.",
  publishedDate: "November 16, 2026",
  lastUpdated: "November 16, 2026",
  dataPeriod: "Time-zone rules in force in November 2026; seasonal daylight-saving offsets excluded",
  heroImage: {
    src: "/heroes/countries-with-most-time-zones-2026.png",
    ogSrc: "/heroes/countries-with-most-time-zones-2026-og.png",
    alt: "A wall of world clocks, each filled to the number of time zones in a country out of 12: France 12, Russia 11, United States 11, United Kingdom 9, Australia 9, Canada 5, New Zealand 5, Brazil 4, Mexico 4 and Denmark 4.",
  },

  quickAnswer:
    "France has the most distinct time-zone offsets of any country: 12, counting its overseas territories, from UTC−10 in French Polynesia to UTC+12 in Wallis and Futuna. Russia and the United States follow with 11 each. The United Kingdom and Australia have nine each, while Canada and New Zealand have five each under the November 2026 rules. Without overseas territories, Russia has the most, with 11.",
  introParagraph:
    "A country's number of time zones is the number of different standard-time offsets from Coordinated Universal Time (UTC) in use across its territory. For countries with overseas territories, the count includes them, which is why France, the United Kingdom and Denmark rank so high despite having a single time zone at home. Daylight saving time is not counted as an extra zone. The counts follow the IANA time zone database, which computers and phones use to keep local time, checked against national time rules and timeanddate.com.",
  calloutBox: {
    label: "Without overseas territories, Russia leads",
    body: "Counting only each country's main territory, Russia has the most time zones, 11, from UTC+2 in Kaliningrad to UTC+12 in Kamchatka. The United States has 6 across its 50 states, Canada 5, and Australia 4 official zones plus Eucla's unofficial UTC+8:45. France, the United Kingdom and Denmark have one each. China, one of the world's largest countries, uses a single time zone, UTC+8, for the whole country.",
  },

  chartTitle: "Number of time zones (standard time), including overseas territories",
  chartSource: "IANA time zone database; timeanddate.com",
  chartTapNote: "Tap any country to see its time zones.",
  entryValueLabel: "Time zones:",
  chartItems: [
    { rank: 1, name: "France", value: "12", raw: 12, countries: [{ name: "France", flagCode: "fr" }] },
    { rank: 2, rankLabel: "=2", name: "Russia", value: "11", raw: 11, countries: [{ name: "Russia", flagCode: "ru" }] },
    { rank: 3, rankLabel: "=2", name: "United States", value: "11", raw: 11, countries: [{ name: "United States", flagCode: "us" }] },
    { rank: 4, rankLabel: "=4", name: "United Kingdom", value: "9", raw: 9, countries: [{ name: "United Kingdom", flagCode: "gb" }] },
    { rank: 5, rankLabel: "=4", name: "Australia", value: "9", raw: 9, countries: [{ name: "Australia", flagCode: "au" }] },
    { rank: 6, rankLabel: "=6", name: "Canada", value: "5", raw: 5, countries: [{ name: "Canada", flagCode: "ca" }] },
    { rank: 7, rankLabel: "=6", name: "New Zealand", value: "5", raw: 5, countries: [{ name: "New Zealand", flagCode: "nz" }] },
    { rank: 8, rankLabel: "=8", name: "Brazil", value: "4", raw: 4, countries: [{ name: "Brazil", flagCode: "br" }] },
    { rank: 9, rankLabel: "=8", name: "Mexico", value: "4", raw: 4, countries: [{ name: "Mexico", flagCode: "mx" }] },
    { rank: 10, rankLabel: "=8", name: "Denmark", value: "4", raw: 4, countries: [{ name: "Denmark", flagCode: "dk" }] },
  ],

  detailedEntries: [
    {
      rank: 10,
      rankLabel: "=8",
      name: "Denmark",
      earnings: "4 time zones",
      category: "Europe",
      origin: "UTC−4, UTC−2, UTC+0, UTC+1",
      blurb: "Denmark itself uses a single time zone, UTC+1. Greenland and the Faroe Islands, both part of the Kingdom of Denmark, add three more: UTC−4 at Pituffik in northwest Greenland, UTC−2 for most of Greenland, and UTC+0.",
      standoutFact: "Most of Greenland switched its standard time from UTC−3 to UTC−2 in 2023, which changed Denmark's set of time zones.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-with-most-time-zones-2026/denmark.webp", "width": 1200, "height": 778, "alt": "Nyhavn harbour in Copenhagen at sunset", "author": "Moahim", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:2018_-_Nyhavn_on_sunset.jpg", "caption": "Nyhavn, Copenhagen."},
      countries: [{ name: "Denmark", flagCode: "dk" }],
    },
    {
      rank: 9,
      rankLabel: "=8",
      name: "Mexico",
      earnings: "4 time zones",
      category: "Americas",
      origin: "UTC−8 to UTC−5",
      blurb: "Mexico has four time zones, from UTC−8 in Baja California to UTC−5 in Quintana Roo, home of Cancún.",
      standoutFact: "Mexico abolished daylight saving time in 2022 for most of the country; it now survives only in municipalities near the US border.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-with-most-time-zones-2026/mexico.webp", "width": 1200, "height": 1600, "alt": "Angel of Independence monument in Mexico City", "author": "GusVal96", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Angel_de_la_Independencia_CDMX.jpg", "caption": "Angel of Independence, Mexico City."},
      countries: [{ name: "Mexico", flagCode: "mx" }],
    },
    {
      rank: 8,
      rankLabel: "=8",
      name: "Brazil",
      earnings: "4 time zones",
      category: "Americas",
      origin: "UTC−5 to UTC−2",
      blurb: "Brazil spans four time zones, from UTC−5 in the western state of Acre to UTC−2 on its Atlantic islands, such as Fernando de Noronha.",
      standoutFact: "Brazil abolished daylight saving time in 2019.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-with-most-time-zones-2026/brazil.webp", "width": 1200, "height": 1799, "alt": "Christ the Redeemer statue above Rio de Janeiro", "author": "Arne Müseler", "license": "CC BY-SA 3.0 de", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Christ_the_Redeemer_-_Cristo_Redentor.jpg", "caption": "Christ the Redeemer, Rio de Janeiro."},
      countries: [{ name: "Brazil", flagCode: "br" }],
    },
    {
      rank: 7,
      rankLabel: "=6",
      name: "New Zealand",
      earnings: "5 time zones",
      category: "Oceania",
      origin: "UTC−11, UTC−10, UTC+12, UTC+12:45, UTC+13",
      blurb: "New Zealand itself has two time zones: UTC+12 and UTC+12:45 on the Chatham Islands. Tokelau, a New Zealand territory, and the associated states of Niue and the Cook Islands, which are self-governing in free association with New Zealand, add three more.",
      standoutFact: "In summer, the Chatham Islands move to UTC+13:45, an offset used nowhere else in the world.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-with-most-time-zones-2026/new-zealand.webp", "width": 1200, "height": 1600, "alt": "Auckland's Sky Tower seen from below", "author": "PLBechly", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:2020_Auckland_Sky_Tower.jpg", "caption": "Sky Tower, Auckland."},
      countries: [{ name: "New Zealand", flagCode: "nz" }],
    },
    {
      rank: 6,
      rankLabel: "=6",
      name: "Canada",
      earnings: "5 time zones",
      category: "Americas",
      origin: "UTC−7 to UTC−3:30",
      blurb: "Canada uses five distinct UTC offsets under the rules in force in November 2026, from UTC−7 in British Columbia to UTC−3:30 in Newfoundland. British Columbia (UTC−7), Alberta (UTC−6) and Manitoba (UTC−5) stopped changing their clocks on November 1, 2026, so some of Canada's traditional time-zone labels now share the same offset.",
      standoutFact: "Newfoundland Time is half an hour ahead of Atlantic Time, a half-hour offset rather than the usual full hour.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-with-most-time-zones-2026/canada.webp", "width": 1200, "height": 902, "alt": "Centre Block and Peace Tower on Parliament Hill, Ottawa", "author": "Saffron Blaze", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Centre_Block_-_Parliament_Hill.jpg", "caption": "Parliament Hill's Peace Tower, Ottawa."},
      countries: [{ name: "Canada", flagCode: "ca" }],
    },
    {
      rank: 5,
      rankLabel: "=4",
      name: "Australia",
      earnings: "9 time zones",
      category: "Oceania",
      origin: "UTC+5 to UTC+11",
      blurb: "Australia has nine time zones counting its external territories: Heard and McDonald Islands (UTC+5), the Cocos (Keeling) Islands (UTC+6:30), Christmas Island (UTC+7), Norfolk Island (UTC+11) and, on the mainland and nearby, UTC+8, UTC+8:45, UTC+9:30, UTC+10 and UTC+10:30.",
      standoutFact: "It has three unusual offsets: UTC+9:30 in central Australia, UTC+10:30 on Lord Howe Island and an unofficial UTC+8:45 used around Eucla on the Nullarbor Plain.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-with-most-time-zones-2026/australia.webp", "width": 1200, "height": 900, "alt": "Sydney Opera House seen across the water from Circular Quay", "author": "Kgbo", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_from_Circular_Quay,_2023,_01.jpg", "caption": "Sydney Opera House, Sydney."},
      countries: [{ name: "Australia", flagCode: "au" }],
    },
    {
      rank: 4,
      rankLabel: "=4",
      name: "United Kingdom",
      earnings: "9 time zones",
      category: "Europe",
      origin: "UTC−8 to UTC+6",
      blurb: "The United Kingdom itself uses one time zone, Greenwich Mean Time (UTC+0). Its overseas territories and dependencies range from the Pitcairn Islands (UTC−8) to the British Indian Ocean Territory (UTC+6), with the Sovereign Base Areas of Akrotiri and Dhekelia in Cyprus (UTC+2) among the offsets in between, bringing the total to nine.",
      standoutFact: "The prime meridian, the zero line from which time zones are counted, runs through Greenwich in London.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-with-most-time-zones-2026/uk.webp", "width": 1200, "height": 1388, "alt": "Elizabeth Tower (Big Ben), London", "author": "Julian Herzog", "license": "CC BY 4.0", "licenseUrl": "https://creativecommons.org/licenses/by/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Big_Ben_Elizabeth_Tower_London_2023_01.jpg", "caption": "Elizabeth Tower, home of Big Ben, London."},
      countries: [{ name: "United Kingdom", flagCode: "gb" }],
    },
    {
      rank: 3,
      rankLabel: "=2",
      name: "United States",
      earnings: "11 time zones",
      category: "Americas",
      origin: "UTC−12 to UTC+12",
      blurb: "The 50 states span six time zones, from Hawaii (UTC−10) to Eastern Time (UTC−5). US territories add five more: UTC−12, the offset listed for the uninhabited Baker and Howland islands, UTC−11 in American Samoa, UTC−4 in Puerto Rico and the US Virgin Islands, UTC+10 in Guam and the Northern Mariana Islands, and UTC+12 on Wake Island.",
      standoutFact: "From UTC−12 to UTC+12, US territory covers a full 24 hours of offsets.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-with-most-time-zones-2026/usa.webp", "width": 800, "height": 600, "alt": "The four-faced clock at Grand Central Terminal, New York", "author": "Jared Kofsky", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Clock_at_Grand_Central_Terminal_NY.JPG", "caption": "The clock at Grand Central Terminal, New York."},
      countries: [{ name: "United States", flagCode: "us" }],
    },
    {
      rank: 2,
      rankLabel: "=2",
      name: "Russia",
      earnings: "11 time zones",
      category: "Europe / Asia",
      origin: "UTC+2 to UTC+12",
      blurb: "Russia has 11 time zones, all on its own continuous territory apart from the Kaliningrad exclave, from UTC+2 in Kaliningrad to UTC+12 in Kamchatka and Chukotka.",
      standoutFact: "Russia abolished daylight saving time and has used permanent standard time since October 26, 2014.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-with-most-time-zones-2026/russia.webp", "width": 1024, "height": 768, "alt": "Spasskaya clock tower of the Moscow Kremlin at night", "author": "Gilad Rom", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Kremlin_Clock_tower_at_night.jpg", "caption": "The Kremlin's Spasskaya clock tower, Moscow."},
      countries: [{ name: "Russia", flagCode: "ru" }],
    },
    {
      rank: 1,
      name: "France",
      earnings: "12 time zones",
      category: "Europe",
      origin: "UTC−10 to UTC+12",
      blurb: "Metropolitan France has a single time zone, UTC+1. Its overseas territories add 11 more, from French Polynesia (UTC−10) in the Pacific to Wallis and Futuna (UTC+12), via the Caribbean, South America and the Indian Ocean. Two are easy to miss: uninhabited Clipperton Island (UTC−8) and the French Southern Territories (UTC+5).",
      standoutFact: "French Polynesia's Marquesas Islands use UTC−9:30, a half-hour offset. In summer, Saint Pierre and Miquelon moves to UTC−2, giving France a 13th local time.",
      sourceTag: SRC,
      image: {"src": "/rankings/countries-with-most-time-zones-2026/france.webp", "width": 1200, "height": 1182, "alt": "Champ de Mars in Paris seen from the Eiffel Tower", "author": "Diliff, edited by Fir0002", "license": "CC BY 2.5", "licenseUrl": "https://creativecommons.org/licenses/by/2.5", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Champ_de_Mars_from_the_Eiffel_Tower_-_July_2006_edit.jpg", "caption": "Paris, seen from the Eiffel Tower."},
      countries: [{ name: "France", flagCode: "fr" }],
    },
  ],

  keyTakeaway: {
    stat: "12",
    label: "Time zones in France, counting its overseas territories",
    comparisonStat: "1",
    comparisonLabel: "Time zone in China, one of the world's largest countries",
    note: "Russia and the United States each have 11 distinct offsets under this ranking's inclusion rules. Without overseas territories, Russia leads with 11 and France has just one. Canada and New Zealand each have five.",
  },

  sourceNote: {
    dataPeriod: "Time-zone rules in force in November 2026; seasonal daylight-saving offsets excluded",
    lastUpdated: "November 16, 2026",
    sources:
      "IANA time zone database (tzdata); national time regulations; timeanddate.com, \"Which Country Has the Most Time Zones?\".",
    methodology:
      "We count each distinct base UTC offset used across a country's territory, overseas territories, dependencies and associated states, using the time-zone rules in force in November 2026. Seasonal daylight-saving changes are not counted as additional time zones. Permanent year-round offsets are counted, even where a government has adopted what was previously daylight-saving time as its new fixed time. We include regularly used nonstandard offsets, such as Australia's UTC+8:45 around Eucla. The count also includes uninhabited territories where a time offset is assigned or commonly listed, including Baker and Howland Islands and Wake Island in the US. Antarctic territorial claims are not counted. Because countries and sources differ in how they treat dependencies and uninhabited islands, totals may vary.",
    sourceLinks: [
      { label: "IANA: Time Zone Database", href: "https://www.iana.org/time-zones" },
      { label: "timeanddate.com: Which Country Has the Most Time Zones?", href: "https://www.timeanddate.com/time/country-with-the-most-time-zones.html" },
    ],
  },

  faqItems: [
    {
      question: "Which country has the most time zones?",
      answer:
        "France, with 12, counting its overseas territories such as French Polynesia, New Caledonia, Réunion and French Guiana. Metropolitan France itself has a single time zone, UTC+1.",
    },
    {
      question: "How many time zones does Russia have?",
      answer:
        "Eleven, from UTC+2 in Kaliningrad to UTC+12 in Kamchatka and Chukotka. Without overseas territories, Russia has more time zones than any other country.",
    },
    {
      question: "How many time zones does the US have?",
      answer:
        "Eleven including US territories, or six across the 50 states: Hawaii, Alaska, Pacific, Mountain, Central and Eastern time.",
    },
    {
      question: "How many time zones does Canada have?",
      answer:
        "Five distinct offsets since November 1, 2026: UTC−7, UTC−6, UTC−5, UTC−4 and UTC−3:30 (Newfoundland). British Columbia, Alberta and Manitoba stopped changing their clocks on November 1, 2026, so British Columbia no longer uses UTC−8.",
    },
    {
      question: "Why does China have only one time zone?",
      answer:
        "China uses Beijing time, UTC+8, across the whole country, even though its territory is wide enough to span several time zones.",
    },
  ],

  relatedLinks: [
    { title: "The 15 Most Populous Countries in the World in 2026", href: "/rankings/most-populous-countries-2026" },
    { title: "The 10 Most Visited Countries in the World", href: "/rankings/most-visited-countries-2026" },
    { title: "The Most Popular Baby Names in Every Canadian Province", href: "/rankings/most-popular-baby-names-canada-provinces-2026" },
    { title: "The 25 Largest Economies in the World in 2026", href: "/rankings/largest-economies-world-2026" },
  ],
};
