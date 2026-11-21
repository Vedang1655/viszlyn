import { RankingArticle } from "./types";

const P = "/rankings/highest-mountains-world-2026";
const NEPAL = "Nepal Department of Tourism, Mountaineering in Nepal: Facts and Figures 2025";

export const highestMountainsWorld2026: RankingArticle = {
  slug: "highest-mountains-world-2026",

  metaTitle: "The 10 Highest Mountains in the World, Ranked | Viszlyn",
  metaDescription:
    "What are the world's highest mountains? Everest reaches 8,848.86 m, followed by K2 and Kangchenjunga. Explore all 10, with elevations and first ascents.",
  ogTitle: "The 10 Highest Mountains in the World",
  ogDescription:
    "Everest, K2 and Kangchenjunga lead the world's 10 highest mountains. All ten rise above 8,000 metres and are located in Asia.",
  twitterTitle: "The 10 Highest Mountains in the World",
  twitterDescription:
    "Everest: 8,848.86 m. K2: 8,611 m. Kangchenjunga: 8,586 m. Explore the world's ten highest summits.",

  eyebrow: "World",
  title: "The 10 Highest Mountains in the World",
  dek: "Every one of the world's 10 highest mountains is in Asia, and every one rises above 8,000 metres. Here they are, ranked by official height above sea level, with who climbed them first.",
  publishedDate: "November 21, 2026",
  lastUpdated: "November 21, 2026",
  dataPeriod: "Official and standard published elevations, as of November 2026",
  heroImage: {
    src: "/heroes/highest-mountains-world-2026.png",
    ogSrc: "/heroes/highest-mountains-world-2026-og.png",
    alt: "Mountain silhouettes drawn to height: Everest 8,848.86 m, K2 8,611 m, Kangchenjunga 8,586 m, Lhotse 8,516 m, Makalu 8,485 m, Cho Oyu 8,188 m, Dhaulagiri I 8,167 m, Manaslu 8,163 m, Nanga Parbat 8,126 m and Annapurna I 8,091 m.",
  },

  quickAnswer:
    "Mount Everest is the highest mountain in the world at 8,848.86 metres (29,031.69 feet) above sea level, the height China and Nepal announced jointly in December 2020. K2 is second at 8,611 m (28,251 ft) and Kangchenjunga third at 8,586 m (28,169 ft). All 10 of the highest mountains are in Asia: nine in the Himalaya and one, K2, in the Karakoram.",
  introParagraph:
    "Fourteen mountains on Earth rise more than 8,000 metres above sea level, and all of them are in Asia. This ranking lists the 10 highest by the elevation of their main summit. Where a government has measured a peak, we use its official figure, such as the 2020 China–Nepal height for Everest. Where no newer survey has been officially adopted, we use the standard figure printed in maps and encyclopedias, and we note the main alternative heights in each entry. None of the alternatives changes the order of the top 10.",
  calloutBox: {
    label: "Tallest is not the same as highest",
    body: "Everest has the highest summit above sea level. But measured from its base on the deep ocean floor, Hawaii's Mauna Kea is taller: the US Geological Survey says it rises 13,796 feet (4,205 m) above sea level and extends about 19,700 feet (6,000 m) below it, for a total height of nearly 33,500 feet (10,211 m). The highest mountain outside Asia is Aconcagua in Argentina, at 6,960.8 m, the figure announced by Argentina's national geographic institute in 2012.",
  },

  chartTitle: "Height above sea level (metres)",
  chartSource: "Official and standard published elevations (China–Nepal 2020, Survey of India, Nepal government, Britannica)",
  chartTapNote: "Tap any mountain to jump to its details below.",
  entryValueLabel: "Height:",
  chartItems: [
    { rank: 1, name: "Mount Everest", value: "8,848.86 m", raw: 8848.86, countries: [{ name: "China", flagCode: "cn" }, { name: "Nepal", flagCode: "np" }] },
    { rank: 2, name: "K2", value: "8,611 m", raw: 8611, countries: [{ name: "China", flagCode: "cn" }, { name: "Pakistan", flagCode: "pk" }] },
    { rank: 3, name: "Kangchenjunga", value: "8,586 m", raw: 8586, countries: [{ name: "India", flagCode: "in" }, { name: "Nepal", flagCode: "np" }] },
    { rank: 4, name: "Lhotse", value: "8,516 m", raw: 8516, countries: [{ name: "China", flagCode: "cn" }, { name: "Nepal", flagCode: "np" }] },
    { rank: 5, name: "Makalu", value: "8,485 m", raw: 8485, countries: [{ name: "China", flagCode: "cn" }, { name: "Nepal", flagCode: "np" }] },
    { rank: 6, name: "Cho Oyu", value: "8,188 m", raw: 8188, countries: [{ name: "China", flagCode: "cn" }, { name: "Nepal", flagCode: "np" }] },
    { rank: 7, name: "Dhaulagiri I", value: "8,167 m", raw: 8167, countries: [{ name: "Nepal", flagCode: "np" }] },
    { rank: 8, name: "Manaslu", value: "8,163 m", raw: 8163, countries: [{ name: "Nepal", flagCode: "np" }] },
    { rank: 9, name: "Nanga Parbat", value: "8,126 m", raw: 8126, countries: [{ name: "Pakistan", flagCode: "pk" }] },
    { rank: 10, name: "Annapurna I", value: "8,091 m", raw: 8091, countries: [{ name: "Nepal", flagCode: "np" }] },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Annapurna I",
      earnings: "8,091 m (26,545 ft)",
      category: "Himalaya",
      origin: "Nepal · First ascent: 1950, Maurice Herzog and Louis Lachenal",
      blurb: "Annapurna I was the first 8,000-metre peak ever climbed, by the French climbers Maurice Herzog and Louis Lachenal on June 3, 1950, three years before Everest.",
      standoutFact: "Annapurna I has historically ranked among the most dangerous 8,000-metre peaks, measured by recorded deaths compared with successful summits (Himalayan Database).",
      sourceTag: `${NEPAL}; Himalayan Database`,
      image: { src: `${P}/annapurna-i.webp`, width: 1200, height: 817, alt: "The south face of Annapurna I", author: "Wolfgang Beyer", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Annapurna_I.jpg", caption: "The south face of Annapurna I." },
      countries: [{ name: "Nepal", flagCode: "np" }],
    },
    {
      rank: 9,
      name: "Nanga Parbat",
      earnings: "8,126 m (26,660 ft)",
      category: "Himalaya",
      origin: "Pakistan · First ascent: 1953, Hermann Buhl (solo)",
      blurb: "Nanga Parbat, at the western end of the Himalaya, was first climbed by the Austrian Hermann Buhl on July 3, 1953, alone and without supplementary oxygen.",
      standoutFact: "Its steep south face rises nearly 15,000 feet (4,600 m) above the valley immediately below it (Encyclopaedia Britannica).",
      sourceTag: "Encyclopaedia Britannica",
      image: { src: `${P}/nanga-parbat.webp`, width: 1200, height: 675, alt: "Nanga Parbat's Raikot face seen from Fairy Meadows", author: "Aasim85", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanga_Parbat_2.jpg", caption: "Nanga Parbat from Fairy Meadows." },
      countries: [{ name: "Pakistan", flagCode: "pk" }],
    },
    {
      rank: 8,
      name: "Manaslu",
      earnings: "8,163 m (26,781 ft)",
      category: "Himalaya",
      origin: "Nepal · First ascent: 1956, Toshio Imanishi and Gyalzen Norbu",
      blurb: "Manaslu was first climbed on May 9, 1956, by Toshio Imanishi and Gyalzen Norbu of a Japanese expedition. Nepal's Department of Tourism lists it at 8,163 m; an older survey figure of 8,156 m is still sometimes printed.",
      standoutFact: "Its first winter ascent, by Maciej Berbeka and Ryszard Gajewski on January 12, 1984, was the first winter climb of an 8,000-metre peak made without supplementary oxygen (American Alpine Journal).",
      sourceTag: `${NEPAL}; American Alpine Journal`,
      image: { src: `${P}/manaslu.webp`, width: 1200, height: 800, alt: "The twin-peaked summit of Manaslu", author: "Pratapgrg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mt_Manaslu.jpg", caption: "Manaslu, Nepal." },
      countries: [{ name: "Nepal", flagCode: "np" }],
    },
    {
      rank: 7,
      name: "Dhaulagiri I",
      earnings: "8,167 m (26,795 ft)",
      category: "Himalaya",
      origin: "Nepal · First ascent: 1960, Swiss-led expedition",
      blurb: "Dhaulagiri I was first climbed on May 13, 1960, by six members of a Swiss-led expedition: Kurt Diemberger, Peter Diener, Ernst Forrer, Albin Schelbert, Nawang Dorji and Nyima Dorji (Nepal Tourism Board).",
      standoutFact: "It is the highest mountain that lies entirely within one country: all of Dhaulagiri I is in Nepal.",
      sourceTag: "Nepal Tourism Board",
      image: { src: `${P}/dhaulagiri.webp`, width: 1200, height: 800, alt: "The white summit pyramid of Dhaulagiri I", author: "Vyacheslav Argenberg", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Dhaulagiri,_Himalaya,_Nepal.jpg", caption: "Dhaulagiri I, Nepal." },
      countries: [{ name: "Nepal", flagCode: "np" }],
    },
    {
      rank: 6,
      name: "Cho Oyu",
      earnings: "8,188 m (26,864 ft)",
      category: "Himalaya",
      origin: "China–Nepal border · First ascent: 1954, Austrian expedition",
      blurb: "Cho Oyu was first climbed on October 19, 1954, by Herbert Tichy, Joseph Jöchler and Pasang Dawa Lama. Its height of 8,188 m comes from a 1996 survey for Nepal's national maps; an older 1984 estimate of 8,201 m is still printed by Encyclopaedia Britannica and the Nepal Tourism Board.",
      standoutFact: "Its first winter ascent, by Maciej Berbeka and Maciej Pawlikowski on February 12, 1985, was made on a new route.",
      sourceTag: "Survey Department of Nepal / Finnish Meteorological Institute (1996 measurement)",
      image: { src: `${P}/cho-oyu.webp`, width: 1200, height: 900, alt: "The north face of Cho Oyu seen across the Tibetan plateau", author: "Steve Hicks", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cho_Oyu_-_North_face.jpg", caption: "Cho Oyu's north face from Tibet." },
      countries: [{ name: "China", flagCode: "cn" }, { name: "Nepal", flagCode: "np" }],
    },
    {
      rank: 5,
      name: "Makalu",
      earnings: "8,485 m (27,838 ft)",
      category: "Himalaya",
      origin: "China–Nepal border · First ascent: 1955, Lionel Terray and Jean Couzy",
      blurb: "Makalu, in the same Mahalangur Himal range as Everest, was first climbed on May 15, 1955, by the French climbers Lionel Terray and Jean Couzy. Makalu is generally listed at 8,485 m in international mountaineering references. Nepal's Department of Tourism uses an older measurement of 8,463 m in its 2025 publication; the standard 8,485 m figure is used for this ranking.",
      standoutFact: "Simone Moro and Denis Urubko made its first winter ascent on February 9, 2009, making Makalu the last of Nepal's 8,000-metre peaks to be climbed in winter (American Alpine Journal).",
      sourceTag: `Standard international reference figure; ${NEPAL} (8,463 m); American Alpine Journal`,
      image: { src: `${P}/makalu.webp`, width: 1200, height: 797, alt: "The summit pyramid of Makalu", author: "Ben Tubby", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Makalu.jpg", caption: "Makalu from the southwest." },
      countries: [{ name: "China", flagCode: "cn" }, { name: "Nepal", flagCode: "np" }],
    },
    {
      rank: 4,
      name: "Lhotse",
      earnings: "8,516 m (27,940 ft)",
      category: "Himalaya",
      origin: "China–Nepal border · First ascent: 1956, Ernst Reiss and Fritz Luchsinger",
      blurb: "Lhotse is Everest's neighbour, joined to it by the South Col. The Swiss climbers Ernst Reiss and Fritz Luchsinger first reached its summit on May 18, 1956.",
      standoutFact: "Its subsidiary summit, Lhotse Middle (8,414 m), was long the highest unclimbed named point on Earth, until a Russian team reached it on May 23, 2001.",
      sourceTag: "Encyclopaedia Britannica; Nepal Tourism Board",
      image: { src: `${P}/lhotse.webp`, width: 1200, height: 781, alt: "The south face of Lhotse seen from Chukhung Ri", author: "Uwe Gille", license: "CC BY-SA 3.0", licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Lhotse-fromChukhungRi.jpg", caption: "Lhotse's south face from Chukhung Ri." },
      countries: [{ name: "China", flagCode: "cn" }, { name: "Nepal", flagCode: "np" }],
    },
    {
      rank: 3,
      name: "Kangchenjunga",
      earnings: "8,586 m (28,169 ft)",
      category: "Himalaya",
      origin: "India–Nepal border · First ascent: 1955, Joe Brown and George Band",
      blurb: "Kangchenjunga, on the border of Nepal and India's state of Sikkim, was first climbed on May 25, 1955, by the British climbers Joe Brown and George Band. Nepal's Department of Tourism lists it at 8,586 m; Survey of India maps have printed 8,598 m.",
      standoutFact: "Brown and Band stopped just short of the true summit, honouring an agreement with Sikkim's authorities to leave the sacred peak untouched. Many climbers have continued the tradition (British Mountaineering Council).",
      sourceTag: `${NEPAL}; British Mountaineering Council`,
      image: { src: `${P}/kangchenjunga.webp`, width: 1200, height: 800, alt: "The Kangchenjunga massif in morning light", author: "Istiakuddin Ahmed", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_kangchenjunga.jpg", caption: "Kangchenjunga in morning light." },
      countries: [{ name: "India", flagCode: "in" }, { name: "Nepal", flagCode: "np" }],
    },
    {
      rank: 2,
      name: "K2",
      earnings: "8,611 m (28,251 ft)",
      category: "Karakoram",
      origin: "China–Pakistan border · First ascent: 1954, Achille Compagnoni and Lino Lacedelli",
      blurb: "K2 stands on the border between China and Pakistan, in a region also claimed by India. The Italian climbers Achille Compagnoni and Lino Lacedelli first reached its summit on July 31, 1954. Its official height, 8,611 m, is the Survey of India figure; later survey results, from 8,616 m (an Italian measurement reported in 1988) to 8,609.02 m (a 2014 GPS survey), have never been officially adopted.",
      standoutFact: "It was the last 8,000-metre peak to be climbed in winter: a team of ten Nepali climbers reached the top on January 16, 2021.",
      sourceTag: "Survey of India figure (Encyclopaedia Britannica, Guinness World Records); UIAA",
      image: { src: `${P}/k2.webp`, width: 1200, height: 900, alt: "The pyramid of K2 seen from the Baltoro side", author: "Svy123", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:K2_2006b.jpg", caption: "K2 from the Baltoro side." },
      countries: [{ name: "China", flagCode: "cn" }, { name: "Pakistan", flagCode: "pk" }],
    },
    {
      rank: 1,
      name: "Mount Everest",
      earnings: "8,848.86 m (29,031.69 ft)",
      category: "Himalaya",
      origin: "China–Nepal border · First ascent: 1953, Edmund Hillary and Tenzing Norgay",
      blurb: "Everest's height of 8,848.86 m was announced jointly by China and Nepal on December 8, 2020, after separate surveys by both countries, the first time they agreed on one figure. Edmund Hillary and Tenzing Norgay first reached the summit on May 29, 1953.",
      standoutFact: "It was also the first 8,000-metre peak climbed in winter: Leszek Cichy and Krzysztof Wielicki of Poland reached the top on February 17, 1980 (Guinness World Records).",
      sourceTag: "China–Nepal joint announcement, December 8, 2020 (reported by NPR and Nature); Guinness World Records",
      image: { src: `${P}/everest.webp`, width: 1200, height: 800, alt: "The north face of Mount Everest seen from the Tibetan side", author: "Luca Galuzzi", license: "CC BY-SA 2.5", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5", sourceUrl: "https://commons.wikimedia.org/wiki/File:Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg", caption: "Everest's north face from Tibet." },
      countries: [{ name: "China", flagCode: "cn" }, { name: "Nepal", flagCode: "np" }],
    },
  ],

  keyTakeaway: {
    stat: "8,848.86 m",
    label: "Height of Mount Everest (China–Nepal, 2020)",
    comparisonStat: "757.86 m",
    comparisonLabel: "How much taller Everest is than No. 10, Annapurna I (calculated)",
    note: "All 10 peaks are within 758 metres of each other, and all stand in the Himalaya or the Karakoram. K2 is the only one outside the Himalaya.",
  },

  sourceNote: {
    dataPeriod: "Official and standard published elevations, as of November 2026",
    lastUpdated: "November 21, 2026",
    sources:
      "Everest: joint China–Nepal announcement of December 8, 2020, as reported by NPR and Nature. K2: Survey of India figure, as published by Encyclopaedia Britannica and Guinness World Records. Kangchenjunga and Manaslu: Nepal Department of Tourism, Mountaineering in Nepal: Facts and Figures 2025. Makalu: standard international reference figure (Nepal's Department of Tourism lists 8,463 m). Lhotse and Nanga Parbat: Encyclopaedia Britannica. Cho Oyu: 1996 measurement by Nepal's Survey Department and the Finnish Meteorological Institute. Dhaulagiri I: Nepal Tourism Board. Annapurna I: figure used by Nepal's Department of Tourism. First ascents and facts: Guinness World Records, the UIAA, the British Mountaineering Council, the Himalayan Database, the American Alpine Journal, the Himalayan Journal, the Nepal Tourism Board and Encyclopaedia Britannica. Mauna Kea: US Geological Survey. Aconcagua: Argentina's Instituto Geográfico Nacional.",
    methodology:
      "Mountains are ranked by the height of their main summit above sea level. Heights are given in metres and feet as published by the source; no figures were converted. Heights fall into two categories: government-published elevations (Everest, Kangchenjunga, Lhotse, Manaslu, Cho Oyu, Dhaulagiri I, Annapurna I), and standard international reference elevations where government figures differ or are unavailable (K2, Makalu, Nanga Parbat). Makalu is the one case where the Nepal government's figure (8,463 m) differs from the standard reference figure (8,485 m) used here. Several peaks have competing published heights (K2: 8,609–8,616 m; Kangchenjunga: 8,598 m; Makalu: 8,463 m; Cho Oyu: 8,201 m; Manaslu: 8,156 m), and none of these alternatives changes the ranking order. Countries are listed as published by the sources: for border peaks, both bordering countries are shown. Subsidiary summits (such as Lhotse Middle) are not ranked separately.",
    sourceLinks: [
      { label: "NPR: Everest's new official height (December 8, 2020)", href: "https://www.wamc.org/2020-12-08/everest-gets-a-growth-spurt-as-china-nepal-revise-official-elevation-upward" },
      { label: "Nature: news report on Everest's new official height", href: "https://www.nature.com/articles/d41586-020-03502-y" },
      { label: "Guinness World Records: first ascent of K2", href: "https://www.guinnessworldrecords.com/world-records/first-ascent-of-k2" },
      { label: "Nepal Department of Tourism: Mountaineering in Nepal, Facts and Figures 2025 (PDF)", href: "https://giwmscdntwo.gov.np/media/pdf_upload/Facts%202025%20Final_jktttlf.pdf" },
      { label: "UIAA: First winter ascent of K2", href: "https://www.theuiaa.org/uiaa-congratulates-successful-k2-winter-summiters/" },
      { label: "British Mountaineering Council: Kangchenjunga's first ascent", href: "https://www.thebmc.co.uk/en/kanchenjunga-8586m-the-story-of-the-first-ascent" },
      { label: "Himalayan Database: Most dangerous peaks (deaths/summits)", href: "https://himalayan-database.climbing-history.org/reports/most-dangerous-peaks" },
      { label: "American Alpine Journal: 1988 Italian measurement of K2 (8,616 m)", href: "https://publications.americanalpineclub.org/articles/12198818002" },
      { label: "GPS World: Steep Questions: How Tall is K2? (2014 result, 8,609.02 m)", href: "https://www.gpsworld.com/steep-questions-how-tall-is-k2/" },
      { label: "Argentina IGN: Aconcagua's official height", href: "https://www.ign.gob.ar/Novedades/NuevaAlturaAconcagua" },
      { label: "Encyclopaedia Britannica: Lhotse", href: "https://www.britannica.com/place/Lhotse" },
      { label: "Encyclopaedia Britannica: Nanga Parbat", href: "https://www.britannica.com/place/Nanga-Parbat" },
      { label: "Nepal Tourism Board: Dhaulagiri", href: "https://ntb.gov.np/dhaulagiri" },
      { label: "Himalayan Journal: Which is the highest mountain in the world?", href: "https://himalayanclub.org/hj/45/3/which-is-the-highest-mountain-in-the-world/" },
      { label: "USGS: How big are the Hawaiian volcanoes?", href: "https://www.usgs.gov/faqs/how-big-are-hawaiian-volcanoes" },
      { label: "Nepal Tourism Board: Cho Oyu", href: "https://ntb.gov.np/en/cho-oyu" },
      { label: "Encyclopaedia Britannica: Cho Oyu", href: "https://www.britannica.com/place/Cho-Oyu" },
    ],
  },

  faqItems: [
    {
      question: "What is the highest mountain in the world?",
      answer:
        "Mount Everest, at 8,848.86 metres (29,031.69 feet) above sea level, the height China and Nepal announced jointly on December 8, 2020.",
    },
    {
      question: "What is the second-highest mountain in the world?",
      answer:
        "K2, at 8,611 m (28,251 ft), on the China–Pakistan border in the Karakoram. It was first climbed in 1954 and was the last 8,000-metre peak to be climbed in winter, in 2021.",
    },
    {
      question: "How many mountains are over 8,000 metres?",
      answer:
        "Fourteen, known as the eight-thousanders. All of them are in the Himalaya and Karakoram ranges of Asia. The 10 highest are listed in this ranking.",
    },
    {
      question: "Is Mauna Kea taller than Everest?",
      answer:
        "From base to peak, yes. Mauna Kea rises 13,796 feet (4,205 m) above sea level but extends about 19,700 feet (6,000 m) below it to the ocean floor, for a total height of nearly 33,500 feet (10,211 m), according to the US Geological Survey. Everest has the highest summit above sea level.",
    },
    {
      question: "What is the highest mountain outside Asia?",
      answer:
        "Aconcagua in Argentina's Andes, at 6,960.8 m, the official figure announced by Argentina's national geographic institute in 2012 after GPS and gravity surveys.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Countries With the Most Lakes", href: "/rankings/countries-with-most-lakes-2026" },
    { title: "The 10 Countries With the Most Time Zones", href: "/rankings/countries-with-most-time-zones-2026" },
    { title: "The 10 Countries With the Most Satellites in Orbit", href: "/rankings/countries-most-satellites-in-orbit-2026" },
    { title: "The 15 Most Populous Countries in the World in 2026", href: "/rankings/most-populous-countries-2026" },
  ],
};
