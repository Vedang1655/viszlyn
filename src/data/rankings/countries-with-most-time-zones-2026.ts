import { RankingArticle } from "./types";

const SRC = "IANA time zone database; national time regulations; timeanddate.com";

export const countriesWithMostTimeZones2026: RankingArticle = {
  slug: "countries-with-most-time-zones-2026",

  metaTitle: "Which Country Has the Most Time Zones? The Top 10 Ranked | Viszlyn",
  metaDescription:
    "France has the most time zones in the world: 12, thanks to its overseas territories. Russia and the US have 11 each, the UK and Australia 9. The top 10, ranked.",
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
  dataPeriod: "Standard time in use in November 2026",
  heroImage: {
    src: "/heroes/countries-with-most-time-zones-2026.png",
    ogSrc: "/heroes/countries-with-most-time-zones-2026-og.png",
    alt: "A wall of world clocks, each filled to the number of time zones in a country out of 12: France 12, Russia 11, United States 11, United Kingdom 9, Australia 9, Canada 6, New Zealand 5, Brazil 4, Mexico 4 and Denmark 4.",
  },

  quickAnswer:
    "France has the most time zones of any country: 12, counting its overseas territories, from UTC−10 in French Polynesia to UTC+12 in Wallis and Futuna. Russia and the United States have 11 each, the United Kingdom and Australia 9 each, and Canada 6. Without their overseas territories, Russia has the most, with 11.",
  introParagraph:
    "A country's number of time zones is the number of different standard-time offsets from Coordinated Universal Time (UTC) in use across its territory. For countries with overseas territories, the count includes them, which is why France, the United Kingdom and Denmark rank so high despite having a single time zone at home. Daylight saving time is not counted as an extra zone. The counts follow the IANA time zone database, which computers and phones use to keep local time, checked against national time rules and timeanddate.com.",
  calloutBox: {
    label: "Without overseas territories, Russia leads",
    body: "Counting only each country's main territory, Russia has the most time zones, 11, from UTC+2 in Kaliningrad to UTC+12 in Kamchatka. The United States has 6 across its 50 states, Canada 6, and Australia 4 official zones plus Eucla's unofficial UTC+8:45. France, the United Kingdom and Denmark have one each. China, one of the world's largest countries, uses a single time zone, UTC+8, for the whole country.",
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
    { rank: 6, name: "Canada", value: "6", raw: 6, countries: [{ name: "Canada", flagCode: "ca" }] },
    { rank: 7, name: "New Zealand", value: "5", raw: 5, countries: [{ name: "New Zealand", flagCode: "nz" }] },
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
      countries: [{ name: "Brazil", flagCode: "br" }],
    },
    {
      rank: 7,
      name: "New Zealand",
      earnings: "5 time zones",
      category: "Oceania",
      origin: "UTC−11, UTC−10, UTC+12, UTC+12:45, UTC+13",
      blurb: "New Zealand itself has two time zones: UTC+12 and UTC+12:45 on the Chatham Islands. Its Pacific territories and associated states, Niue, the Cook Islands and Tokelau, add three more.",
      standoutFact: "In summer, the Chatham Islands move to UTC+13:45, an offset used nowhere else in the world.",
      sourceTag: SRC,
      countries: [{ name: "New Zealand", flagCode: "nz" }],
    },
    {
      rank: 6,
      name: "Canada",
      earnings: "6 time zones",
      category: "Americas",
      origin: "UTC−8 to UTC−3:30",
      blurb: "Canada has six time zones, all on its own territory, from Pacific Time (UTC−8) in British Columbia to Newfoundland Time (UTC−3:30).",
      standoutFact: "Newfoundland Time is half an hour ahead of Atlantic Time, a half-hour offset rather than the usual full hour.",
      sourceTag: SRC,
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
      countries: [{ name: "Australia", flagCode: "au" }],
    },
    {
      rank: 4,
      rankLabel: "=4",
      name: "United Kingdom",
      earnings: "9 time zones",
      category: "Europe",
      origin: "UTC−8 to UTC+6",
      blurb: "The United Kingdom itself uses one time zone, Greenwich Mean Time (UTC+0). Its overseas territories, from the Pitcairn Islands (UTC−8) to the British Indian Ocean Territory (UTC+6), bring the total to nine.",
      standoutFact: "The prime meridian, the zero line from which time zones are counted, runs through Greenwich in London.",
      sourceTag: SRC,
      countries: [{ name: "United Kingdom", flagCode: "gb" }],
    },
    {
      rank: 3,
      rankLabel: "=2",
      name: "United States",
      earnings: "11 time zones",
      category: "Americas",
      origin: "UTC−12 to UTC+12",
      blurb: "The 50 states span six time zones, from Hawaii (UTC−10) to Eastern Time (UTC−5). US territories add five more: UTC−12 on the uninhabited Baker and Howland islands, UTC−11 in American Samoa, UTC−4 in Puerto Rico and the US Virgin Islands, UTC+10 in Guam and the Northern Mariana Islands, and UTC+12 on Wake Island.",
      standoutFact: "From UTC−12 to UTC+12, US territory covers a full 24 hours of offsets.",
      sourceTag: SRC,
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
      countries: [{ name: "Russia", flagCode: "ru" }],
    },
    {
      rank: 1,
      name: "France",
      earnings: "12 time zones",
      category: "Europe",
      origin: "UTC−10 to UTC+12",
      blurb: "Metropolitan France has a single time zone, UTC+1. Its overseas territories add 11 more, from French Polynesia (UTC−10) in the Pacific to Wallis and Futuna (UTC+12), via the Caribbean, South America and the Indian Ocean.",
      standoutFact: "French Polynesia's Marquesas Islands use UTC−9:30, a half-hour offset. In summer, Saint Pierre and Miquelon moves to UTC−2, giving France a 13th local time.",
      sourceTag: SRC,
      countries: [{ name: "France", flagCode: "fr" }],
    },
  ],

  keyTakeaway: {
    stat: "12",
    label: "Time zones in France, counting its overseas territories",
    comparisonStat: "1",
    comparisonLabel: "Time zone in China, one of the world's largest countries",
    note: "Russia and the United States both have 11 time zones. Without overseas territories, Russia leads with 11 and France has just one.",
  },

  sourceNote: {
    dataPeriod: "Standard time in use in November 2026",
    lastUpdated: "November 16, 2026",
    sources:
      "IANA time zone database (tzdata); national time regulations; timeanddate.com, \"Which Country Has the Most Time Zones?\".",
    methodology:
      "A time zone is counted for each distinct standard-time offset from UTC used anywhere in a country's territory, including overseas territories, dependencies and associated states, but not Antarctic territorial claims. Daylight saving time is not counted as a separate zone, even where it creates an offset that is not used as standard time (noted in the entries). Australia's count includes the unofficial UTC+8:45 used around Eucla. Counts for some countries differ between sources depending on which territories they include; Denmark's reflects Greenland's 2023 change from UTC−3 to UTC−2.",
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
        "Six: Pacific, Mountain, Central, Eastern, Atlantic and Newfoundland time, from UTC−8 to UTC−3:30.",
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
