import { RankingArticle } from "./types";

const P = "/rankings/countries-longest-coastlines-2026";
const FB = "CIA World Factbook, final edition (January 2026), Coastline field, via the factbook.json archive";
const FBNOTE = (c: string) => `CIA World Factbook, final edition (January 2026), ${c} entry, via the factbook.json archive`;

export const countriesLongestCoastlines2026: RankingArticle = {
  slug: "countries-longest-coastlines-2026",

  metaTitle: "The 10 Countries With the Longest Coastlines (2026) | Viszlyn",
  metaDescription:
    "Canada has the world's longest coastline at 202,080 km, more than half the CIA World Factbook's world total. See the top 10, from Indonesia and Russia to Norway and China.",
  ogTitle: "Which Countries Have the Longest Coastlines?",
  ogDescription:
    "Canada's 202,080 km of coastline is about 3.7 times the next country's. See the 10 longest coastlines, and why Norway's number is so often different.",
  twitterTitle: "The 10 Longest Coastlines in the World",
  twitterDescription:
    "Canada: 202,080 km. Indonesia: 54,716 km. Russia: 37,653 km. The 10 countries with the longest coastlines, from one source.",

  eyebrow: "World",
  title: "The 10 Countries With the Longest Coastlines",
  dek: "Canada's coastline is 202,080 km long, more than half of the CIA World Factbook's world total and about 3.7 times the next country's. Here are the 10 longest coastlines, measured one consistent way.",
  publishedDate: "November 22, 2026",
  lastUpdated: "November 22, 2026",
  dataPeriod: "CIA World Factbook, final edition (January 2026)",
  heroImage: {
    src: "/heroes/countries-longest-coastlines-2026.png",
    ogSrc: "/heroes/countries-longest-coastlines-2026-og.png",
    alt: "Wavy shoreline bars showing the 10 longest coastlines: Canada 202,080 km, Indonesia 54,716 km, Russia 37,653 km, Philippines 36,289 km, Japan 29,751 km, Australia 25,760 km, Norway 25,148 km, United States 19,924 km, New Zealand 15,134 km and China 14,500 km, over a photo of Baffin Island's coast.",
  },

  quickAnswer:
    "Canada has the longest coastline in the world: 202,080 km, according to the CIA World Factbook. That is 56.76% of the Factbook's world total of 356,000 km (Viszlyn calculation) and about 3.7 times Indonesia's 54,716 km in second place. Russia (37,653 km), the Philippines (36,289 km) and Japan (29,751 km) complete the top five.",
  introParagraph:
    "A coastline has no single true length: the finer you measure, the longer it gets, because a smaller ruler follows more bays and inlets. That is why rankings from different sources disagree, sometimes wildly. This ranking uses one source for every country: the CIA World Factbook's Coastline field, from its final edition of January 2026 (the CIA closed the Factbook in February 2026). Island coastlines count when the Factbook includes them, which is why archipelagos like Indonesia, the Philippines and Japan rank so high. Only sovereign countries are ranked, so Greenland, part of the Kingdom of Denmark, is listed separately.",
  calloutBox: {
    label: "Why not Norway at 83,281 km?",
    body: "Many lists put Norway second with 83,281 km. That number is not one the Factbook publishes. The Factbook gives Norway's coastline as 25,148 km (2,650 km of mainland plus 22,498 km of long fjords, numerous small islands and minor indentations) and lists a further 58,133 km of island coastlines separately. Adding the two gives 83,281 km (Viszlyn calculation), which would place Norway second. To keep one consistent measure for every country, we rank Norway on its published 25,148 km, which puts it seventh.",
  },

  chartTitle: "Coastline length (km)",
  chartSource: "CIA World Factbook, final edition (January 2026), Coastline field",
  chartTapNote: "Tap any country to jump to its details below.",
  entryValueLabel: "Coastline:",
  chartItems: [
    { rank: 1, name: "Canada", value: "202,080 km", raw: 202080, countries: [{ name: "Canada", flagCode: "ca" }] },
    { rank: 2, name: "Indonesia", value: "54,716 km", raw: 54716, countries: [{ name: "Indonesia", flagCode: "id" }] },
    { rank: 3, name: "Russia", value: "37,653 km", raw: 37653, countries: [{ name: "Russia", flagCode: "ru" }] },
    { rank: 4, name: "Philippines", value: "36,289 km", raw: 36289, countries: [{ name: "Philippines", flagCode: "ph" }] },
    { rank: 5, name: "Japan", value: "29,751 km", raw: 29751, countries: [{ name: "Japan", flagCode: "jp" }] },
    { rank: 6, name: "Australia", value: "25,760 km", raw: 25760, countries: [{ name: "Australia", flagCode: "au" }] },
    { rank: 7, name: "Norway", value: "25,148 km", raw: 25148, countries: [{ name: "Norway", flagCode: "no" }] },
    { rank: 8, name: "United States", value: "19,924 km", raw: 19924, countries: [{ name: "United States", flagCode: "us" }] },
    { rank: 9, name: "New Zealand", value: "15,134 km", raw: 15134, countries: [{ name: "New Zealand", flagCode: "nz" }] },
    { rank: 10, name: "China", value: "14,500 km", raw: 14500, countries: [{ name: "China", flagCode: "cn" }] },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "China",
      earnings: "14,500 km",
      category: "Asia",
      origin: "4.07% of the Factbook's world total (Viszlyn calculation)",
      blurb: "China's coastline measures 14,500 km in the Factbook, which publishes one national figure without a split between the mainland and islands.",
      standoutFact: "About five typhoons a year strike China's southern and eastern coasts, according to the Factbook.",
      sourceTag: FBNOTE("China"),
      image: { src: `${P}/china.webp`, width: 1200, height: 900, alt: "A ferry crossing Xiamen Harbor beside Gulangyu Island, China", author: "Vmenkov", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Gulangyu_-_Yuanhe_ferry_-_DSCF9334.JPG", caption: "The western shore of Gulangyu Island in Xiamen Harbor." },
      countries: [{ name: "China", flagCode: "cn" }],
    },
    {
      rank: 9,
      name: "New Zealand",
      earnings: "15,134 km",
      category: "Oceania",
      origin: "4.25% of the Factbook's world total (Viszlyn calculation)",
      blurb: "New Zealand's 15,134 km includes its outlying island groups: the Antipodes, Auckland, Bounty, Campbell, Chatham and Kermadec Islands.",
      standoutFact: "Its South Island is the world's 12th-largest island and its North Island the 14th-largest, according to the Factbook.",
      sourceTag: FBNOTE("New Zealand"),
      image: { src: `${P}/new-zealand.webp`, width: 1200, height: 716, alt: "Dawn over Milford Sound, seen from the bow of a boat, New Zealand", author: "Bernard Spragg", license: "CC0", licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Dawn_cruise_Milford_Sound._NZ_(27520172586).jpg", caption: "Milford Sound on the west coast of the South Island." },
      countries: [{ name: "New Zealand", flagCode: "nz" }],
    },
    {
      rank: 8,
      name: "United States",
      earnings: "19,924 km",
      category: "North America",
      origin: "5.60% of the Factbook's world total (Viszlyn calculation)",
      blurb: "The US figure of 19,924 km covers the 50 states and the District of Columbia. Overseas territories such as Puerto Rico and Guam are not included.",
      standoutFact: "Alaska's Aleutian island chain alone extends about 1,800 km, with 14 larger islands, 55 smaller islands and hundreds of islets.",
      sourceTag: FBNOTE("United States"),
      image: { src: `${P}/united-states.webp`, width: 1200, height: 594, alt: "Bixby Creek Bridge on the Big Sur coast of California", author: "Diliff", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bixby_Creek_Bridge,_California,_USA_-_May_2013.jpg", caption: "Bixby Creek Bridge on the Big Sur coast, California." },
      countries: [{ name: "United States", flagCode: "us" }],
    },
    {
      rank: 7,
      name: "Norway",
      earnings: "25,148 km",
      category: "Europe",
      origin: "7.06% of the Factbook's world total (Viszlyn calculation)",
      blurb: "The Factbook's 25,148 km is made up of 2,650 km of mainland coast and 22,498 km of long fjords, numerous small islands and minor indentations. It lists a further 58,133 km of island coastlines separately.",
      standoutFact: "Some 50,000 islands lie off Norway's much-indented coastline, according to the Factbook. Counting their 58,133 km too would give 83,281 km (Viszlyn calculation); see the box above.",
      sourceTag: FBNOTE("Norway"),
      image: { src: `${P}/norway.webp`, width: 1200, height: 818, alt: "Rocky shore and a mountain above the village of Napp in Lofoten, Norway", author: "Diego Delso", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Costa_de_Napp,_Lofoten,_Noruega,_2019-09-05,_DD_21.jpg", caption: "The coast at Napp, Lofoten." },
      countries: [{ name: "Norway", flagCode: "no" }],
    },
    {
      rank: 6,
      name: "Australia",
      earnings: "25,760 km",
      category: "Oceania",
      origin: "7.24% of the Factbook's world total (Viszlyn calculation)",
      blurb: "Australia's coastline measures 25,760 km. The Factbook's figures for Australia include Lord Howe Island and Macquarie Island.",
      standoutFact: "It is the largest country entirely in the Southern Hemisphere and the largest country without land borders, according to the Factbook.",
      sourceTag: FBNOTE("Australia"),
      image: { src: `${P}/australia.webp`, width: 1200, height: 800, alt: "The Twelve Apostles limestone stacks on the coast of Victoria, Australia", author: "Dietmar Rabich", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Princetown_(AU),_Port_Campbell_National_Park,_Twelve_Apostles_--_2019_--_0930.jpg", caption: "The Twelve Apostles, Port Campbell National Park, Victoria." },
      countries: [{ name: "Australia", flagCode: "au" }],
    },
    {
      rank: 5,
      name: "Japan",
      earnings: "29,751 km",
      category: "Asia",
      origin: "8.36% of the Factbook's world total (Viszlyn calculation)",
      blurb: "Japan is an archipelago, so its 29,751 km is the combined coastline of its islands.",
      standoutFact: "A 2023 survey by the Geospatial Information Authority of Japan officially counted 14,125 islands with a circumference of 100 m or more.",
      sourceTag: FBNOTE("Japan"),
      image: { src: `${P}/japan.webp`, width: 1200, height: 800, alt: "Seagulls flying over Matsushima Bay on the north-east coast of Honshu, Japan", author: "nimame", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Seagulls_flying_at_the_north-east_coast_of_Honshu.jpg", caption: "Seagulls over Matsushima Bay, north-east Honshu." },
      countries: [{ name: "Japan", flagCode: "jp" }],
    },
    {
      rank: 4,
      name: "Philippines",
      earnings: "36,289 km",
      category: "Asia",
      origin: "10.19% of the Factbook's world total (Viszlyn calculation)",
      blurb: "The Philippines is an archipelago, and its 36,289 km is the combined coastline of its islands.",
      standoutFact: "In 2016 the national mapping authority, NAMRIA, raised the official island count from 7,107 to 7,641.",
      sourceTag: FBNOTE("Philippines"),
      image: { src: `${P}/philippines.webp`, width: 1200, height: 900, alt: "Islands of the Bacuit Archipelago off El Nido, Palawan, Philippines", author: "AxeEffect", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacuit.JPG", caption: "The Bacuit Archipelago off El Nido, Palawan." },
      countries: [{ name: "Philippines", flagCode: "ph" }],
    },
    {
      rank: 3,
      name: "Russia",
      earnings: "37,653 km",
      category: "Europe and Asia",
      origin: "10.58% of the Factbook's world total (Viszlyn calculation)",
      blurb: "Russia's coastline measures 37,653 km in the Factbook, which gives one national figure without a split between the mainland and islands.",
      standoutFact: "Kaliningrad, a Russian exclave on the Baltic, has Russia's only Baltic port that stays ice-free in winter, according to the Factbook.",
      sourceTag: FBNOTE("Russia"),
      image: { src: `${P}/russia.webp`, width: 1200, height: 675, alt: "A lighthouse on a cliff above Avacha Bay, Kamchatka, Russia", author: "kuhnmi", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Kamchatka_Lighthouse_on_Kamchatka_(16401956323).jpg", caption: "A lighthouse on Avacha Bay, Kamchatka." },
      countries: [{ name: "Russia", flagCode: "ru" }],
    },
    {
      rank: 2,
      name: "Indonesia",
      earnings: "54,716 km",
      category: "Asia",
      origin: "15.37% of the Factbook's world total (Viszlyn calculation)",
      blurb: "Indonesia's 54,716 km is the combined coastline of its islands. It is the world's largest country made up only of islands.",
      standoutFact: "Indonesia has 13,466 islands, 922 of them permanently inhabited, according to the Factbook.",
      sourceTag: FBNOTE("Indonesia"),
      image: { src: `${P}/indonesia.webp`, width: 1200, height: 673, alt: "Aerial view of a forested island coastline in Raja Ampat, Indonesia", author: "Dennis Keller", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Raja_Ampat_(23853544293).jpg", caption: "An island coastline in Raja Ampat." },
      countries: [{ name: "Indonesia", flagCode: "id" }],
    },
    {
      rank: 1,
      name: "Canada",
      earnings: "202,080 km",
      category: "North America",
      origin: "56.76% of the Factbook's world total (Viszlyn calculation)",
      blurb: "Canada's 202,080 km includes the coastlines of the Canadian Arctic Archipelago. It is about 3.7 times Indonesia's coastline in second place (Viszlyn calculation) and more than half of the Factbook's world total of 356,000 km.",
      standoutFact: "The Arctic Archipelago alone consists of 36,563 islands, according to the Factbook.",
      sourceTag: FBNOTE("Canada"),
      image: { src: `${P}/canada.webp`, width: 1200, height: 733, alt: "A glacier tongue at Sam Ford Fjord on the northeast coast of Baffin Island, Nunavut", author: "Ansgar Walk", license: "CC BY-SA 2.5", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5", sourceUrl: "https://commons.wikimedia.org/wiki/File:Baffin_Island_Northeast_Coast_1997-08-07.jpg", caption: "Sam Ford Fjord on Baffin Island, Nunavut." },
      countries: [{ name: "Canada", flagCode: "ca" }],
    },
  ],

  keyTakeaway: {
    stat: "202,080 km",
    label: "Canada's coastline, the longest in the world",
    comparisonStat: "56.76%",
    comparisonLabel: "of the Factbook's world total of 356,000 km",
    note: "Share calculated by Viszlyn. The Factbook's world total is published as a round 356,000 km, so the percentage is approximate.",
  },

  sourceNote: {
    dataPeriod: "CIA World Factbook, final edition (January 2026)",
    lastUpdated: "November 22, 2026",
    sources:
      "CIA World Factbook, Coastline field and country entries, final edition (last updated January 22, 2026; the CIA took the Factbook offline on February 4, 2026), read from the factbook.json archive of that edition. World Resources Institute (EarthTrends) and the coastline-paradox examples via Wikipedia's list of countries by length of coastline.",
    methodology:
      "Countries are ranked by the Factbook's published Coastline figure in kilometres, exactly as published. One source is used for every country because coastline length depends on the scale of measurement, so figures from different sources are not comparable. Island coastlines count where the Factbook includes them in the published figure; for Norway, the Factbook lists 58,133 km of island coastlines separately from its 25,148 km figure, and we rank the published figure (see the box above). Only sovereign countries are ranked: Greenland (44,087 km), a self-governing part of the Kingdom of Denmark, is a separate Factbook entry and is not included in Denmark's 7,314 km. If it were ranked, it would sit between Indonesia and Russia. Shares of the world total and ratios between countries are Viszlyn calculations. Because the Factbook has closed, these are its final figures.",
    sourceLinks: [
      { label: "CIA World Factbook, final edition (factbook.json archive)", href: "https://github.com/factbook/factbook.json" },
      { label: "Factbook final edition: Canada entry (archived data)", href: "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/ca.json" },
      { label: "Factbook final edition: Norway entry (archived data)", href: "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/no.json" },
      { label: "Wikipedia: List of countries by length of coastline (WRI figures, coastline paradox)", href: "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_length_of_coastline" },
    ],
  },

  faqItems: [
    {
      question: "Which country has the longest coastline in the world?",
      answer:
        "Canada, with 202,080 km according to the CIA World Factbook. That is more than half of the Factbook's world total of 356,000 km and about 3.7 times the coastline of Indonesia, which ranks second with 54,716 km.",
    },
    {
      question: "Why does Norway sometimes rank second?",
      answer:
        "Some lists add the 58,133 km of island coastlines that the Factbook lists separately to Norway's published 25,148 km, giving 83,281 km. The Factbook itself publishes 25,148 km, so on a consistent basis Norway ranks seventh.",
    },
    {
      question: "What is the coastline paradox?",
      answer:
        "A coastline has no fixed length: measuring with a shorter ruler follows more bays and inlets and gives a longer total. Great Britain's coast, for example, measures about 2,400 km in 200 km steps but about 3,400 km in 50 km steps. The effect was documented by Lewis Fry Richardson and made famous by Benoit Mandelbrot in 1967.",
    },
    {
      question: "Why do other sources give different numbers?",
      answer:
        "They measure at different scales. The World Resources Institute, measuring at a finer scale, found 265,523 km for Canada and 133,312 km for the United States, compared with the Factbook's 202,080 km and 19,924 km. The order of countries changes too, which is why this ranking sticks to one source.",
    },
    {
      question: "Where would Greenland rank?",
      answer:
        "Greenland is a self-governing part of the Kingdom of Denmark, not a sovereign country, so it is not ranked. Its coastline is 44,087 km in the Factbook, which would place it between Indonesia and Russia.",
    },
    {
      question: "Is the CIA World Factbook still updated?",
      answer:
        "No. The CIA made its final update in January 2026 and took the Factbook offline in February 2026, so these are its final published figures.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Highest Mountains in the World", href: "/rankings/highest-mountains-world-2026" },
    { title: "The 10 Countries With the Most Lakes", href: "/rankings/countries-with-most-lakes-2026" },
    { title: "The 10 Countries With the Most Time Zones", href: "/rankings/countries-with-most-time-zones-2026" },
  ],
};
