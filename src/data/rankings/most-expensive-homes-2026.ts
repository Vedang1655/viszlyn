import { RankingArticle } from "./types";

const SRC = "Property records and sale reports (see sources); converted at ECB rates, 6 Nov 2026";

export const mostExpensiveHomes2026: RankingArticle = {
  slug: "most-expensive-homes-2026",

  metaTitle: "The 10 Most Expensive Homes Ever Sold, Ranked | Viszlyn",
  metaDescription:
    "London's Providence House sold for a reported US$354.7 million (£265 million) in 2026, the most ever paid for a home. The 10 most expensive homes ever sold, from London and Hong Kong to Paris, New York and Malibu.",
  ogTitle: "The 10 Most Expensive Homes Ever Sold",
  ogDescription:
    "A US$354.7 million London mansion, a US$319.0 million Hong Kong house and a US$307.0 million French château: the 10 priciest home sales ever.",
  twitterTitle: "The 10 Most Expensive Homes Ever Sold",
  twitterDescription:
    "Providence House, London US$354.7 million; Deep Water Bay, Hong Kong US$319.0 million; Château Louis XIV US$307.0 million. The top 10 home sales ever, ranked.",

  eyebrow: "Money",
  title: "The 10 Most Expensive Homes Ever Sold",
  dek: "Three of the 10 are in London, three in France, two in Hong Kong and two in the US. The record now belongs to Providence House in Chelsea, which sold for a reported £265 million (US$354.7 million) in 2026.",
  publishedDate: "November 16, 2026",
  lastUpdated: "November 16, 2026",
  dataPeriod: "Completed sales up to November 2026; prices converted to US dollars at ECB reference rates on 6 November 2026",
  heroImage: {
    src: "/heroes/most-expensive-homes-2026.png",
    ogSrc: "/heroes/most-expensive-homes-2026-og.png",
    alt: "Dark and gold ranking graphic: a gold line drawing of a mansion under '#1 Providence House, London, US$354.7 million, £265 million', beside the list #2 Deep Water Bay, Hong Kong US$319.0 million, #3 Château Louis XIV, France US$307.0 million, #4 Rutland Gate, London US$281.1 million, #5 The Peak, Hong Kong US$267.9 million, #6 The Holme, London US$261.0 million, #7 Griffin penthouse, New York US$239.96 million, #8 Hôtel Lambert, Paris over US$223.3 million, #9 Villa Les Cèdres US$223.3 million, #10 Jannard estate, Malibu US$210 million.",
  },

  quickAnswer:
    "The most expensive home ever sold is Providence House in Chelsea, London, which sold for a reported US$354.7 million (£265 million, converted at November 2026 exchange rates) in 2026. A house in Deep Water Bay, Hong Kong, is second at US$319.0 million (HK$2.5 billion), sold in 2017, and Château Louis XIV near Versailles is third at US$307.0 million (€275 million), sold in 2015. The most expensive home ever sold in the US is Ken Griffin's penthouse at 220 Central Park South, New York, at US$239.96 million.",
  introParagraph:
    "Headline prices for trophy homes are often inflated, or turn out to be asking prices, refinancings or several properties sold together. This ranking only counts completed sales of a single home, with each price taken from official property records or company filings where they exist, and otherwise from major financial news outlets. Each entry says which. The sales happened in different years and currencies, so to compare them on one scale we converted every price to US dollars at the same European Central Bank reference rates, on 6 November 2026. Prices are shown in US dollars, with the original price in brackets.",
  calloutBox: {
    label: "The famous homes that aren't here",
    body: "Some of the world's most valuable homes have never been sold, so they have no sale price. Antilia, Mukesh Ambani's home in Mumbai, was estimated by Forbes in 2014 at upward of US$1 billion, and Villa Leopolda on the French Riviera at €500 million. We also left out a Monte Carlo penthouse reported at €240 million in 2010, because reports disagree on whether it was a sale or a long lease and Monaco has no public property register, and a US$225 million Naples, Florida deal in 2025 that covered three separate properties.",
  },

  chartTitle: "Sale price in US dollars (converted at ECB rates, 6 Nov 2026)",
  chartSource: "Property records, company filings and sale reports; ECB euro reference rates, 6 November 2026 (Viszlyn conversion)",
  chartTapNote: "Tap any home to jump to its details below.",
  entryValueLabel: "Sale price:",
  chartItems: [
    { rank: 1, name: "Providence House, London", value: "US$354.7 million", raw: 354699395 },
    { rank: 2, name: "Deep Water Bay house, Hong Kong", value: "US$319.0 million", raw: 318981772 },
    { rank: 3, name: "Château Louis XIV, France", value: "US$307.0 million", raw: 307037500 },
    { rank: 4, name: "Rutland Gate mansion, London", value: "US$281.1 million", raw: 281082539 },
    { rank: 5, name: "The Peak house, Hong Kong", value: "US$267.9 million", raw: 267944689 },
    { rank: 6, name: "The Holme, London", value: "US$261.0 million", raw: 261005215 },
    { rank: 7, name: "220 Central Park South penthouse, New York", value: "US$239.96 million", raw: 239958219 },
    { rank: 8, name: "Hôtel Lambert, Paris", value: "over US$223.3 million", raw: 223300001 },
    { rank: 9, name: "Villa Les Cèdres, France", value: "US$223.3 million", raw: 223300000 },
    { rank: 10, name: "Malibu estate, California", value: "US$210 million", raw: 210000000 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Malibu estate, California",
      earnings: "US$210 million (2024)",
      category: "Malibu, United States",
      blurb: "Oakley founder James Jannard sold his beachfront Malibu estate for US$210 million in June 2024, according to the Los Angeles Times, citing property records. The buyer, a Delaware company, was not disclosed.",
      standoutFact: "It is the most expensive home ever sold in California.",
      sourceTag: SRC,
      image: {"src": "/rankings/most-expensive-homes-2026/area-malibu.webp", "width": 1200, "height": 803, "alt": "Zuma Beach on the Malibu coastline", "author": "Dave Parker", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:ZumaBeachCountyPark.jpg", "caption": "The Malibu coastline at Zuma Beach (the area, not the estate)."},
    },
    {
      rank: 9,
      name: "Villa Les Cèdres, France",
      earnings: "US$223.3 million (€200 million, 2019)",
      category: "Saint-Jean-Cap-Ferrat, France",
      blurb: "Campari Group sold Villa Les Cèdres on the French Riviera for €200 million in October 2019. The buyer was Ukrainian billionaire Rinat Akhmetov, confirmed by his own company.",
      standoutFact: "The price is stated in the seller's own audited annual report, one of the strongest sources in this ranking.",
      sourceTag: SRC,
      image: {"src": "/rankings/most-expensive-homes-2026/area-cap-ferrat.webp", "width": 1200, "height": 636, "alt": "The Cap Ferrat peninsula on the French Riviera, seen from Èze", "author": "Tobi 87", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:%C3%88ze_und_Cap_Ferrat-Grande_Corniche.jpg", "caption": "The Cap Ferrat peninsula, French Riviera (the area, not the villa)."},
    },
    {
      rank: 8,
      name: "Hôtel Lambert, Paris",
      earnings: "More than US$223.3 million (more than €200 million, 2022)",
      category: "Paris, France",
      blurb: "Hôtel Lambert, a mansion on the Île Saint-Louis in the heart of Paris, sold in February 2022 for more than €200 million, according to Bloomberg. The buyer has not confirmed the purchase.",
      standoutFact: "The exact price was never published, so this is a minimum; it ranks above Villa Les Cèdres because its price was reported as more than €200 million.",
      sourceTag: SRC,
      image: {"src": "/rankings/most-expensive-homes-2026/hotel-lambert.webp", "width": 1200, "height": 900, "alt": "Hôtel Lambert on the Île Saint-Louis, Paris", "author": "Tangopaso", "license": "Public domain", "sourceUrl": "https://commons.wikimedia.org/wiki/File:H%C3%B4tel_Lambert.jpg"},
    },
    {
      rank: 7,
      name: "220 Central Park South penthouse, New York",
      earnings: "US$239.96 million (2019)",
      category: "New York, United States",
      blurb: "Citadel founder Ken Griffin bought a penthouse at 220 Central Park South, on Manhattan's Billionaires' Row, for US$239,958,219, recorded in New York City property records on 23 January 2019.",
      standoutFact: "It is still the most expensive home ever sold in the United States.",
      sourceTag: SRC,
      image: {"src": "/rankings/most-expensive-homes-2026/220-central-park-south.webp", "width": 1158, "height": 1447, "alt": "The 220 Central Park South tower, New York", "author": "Kidfly182", "license": "CC BY 4.0", "licenseUrl": "https://creativecommons.org/licenses/by/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:220_Central_Park_South_001.jpg", "caption": "The 220 Central Park South tower (photo cropped)."},
    },
    {
      rank: 6,
      name: "The Holme, London",
      earnings: "US$261.0 million (£195 million, 2026)",
      category: "London, United Kingdom",
      blurb: "The Holme, a mansion in Regent's Park, sold for a reported £195 million in June 2026. The buyer has not been disclosed.",
      standoutFact: "It sold just 18 months after a £139 million sale by receivers in 2024, so the price rose by £56 million.",
      sourceTag: SRC,
      image: {"src": "/rankings/most-expensive-homes-2026/the-holme.webp", "width": 1200, "height": 900, "alt": "The Holme, a villa in Regent's Park, London", "author": "PAUL FARMER", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:The_Holme,_The_Regent%27s_Park_-_geograph.org.uk_-_5171571.jpg"},
    },
    {
      rank: 5,
      name: "The Peak house, Hong Kong",
      earnings: "US$267.9 million (HK$2.1 billion, 2019)",
      category: "Hong Kong",
      blurb: "A house on The Peak sold for HK$2.1 billion to Chen Hongtian. The deal was agreed in June 2016 and completed in February 2019, and the price is recorded in the seller's filing to the Hong Kong stock exchange.",
      standoutFact: "About a fifth of the price was paid with a property in Shenzhen rather than cash. In August 2025 the house was resold for HK$790 million after being seized by creditors.",
      sourceTag: SRC,
      image: {"src": "/rankings/most-expensive-homes-2026/area-the-peak.webp", "width": 1200, "height": 585, "alt": "Hong Kong at night, seen from Victoria Peak", "author": "Haydn Hsin", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hong_Kong_Skyline_viewed_from_Victoria_Peak.jpg", "caption": "The view from The Peak, Hong Kong (the area, not the house)."},
    },
    {
      rank: 4,
      name: "Rutland Gate mansion, London",
      earnings: "US$281.1 million (£210 million, 2020)",
      category: "London, United Kingdom",
      blurb: "A mansion at Rutland Gate in Knightsbridge sold for £210 million on 21 April 2020 to Cheung Chung-kiu, whose family office confirmed the purchase.",
      standoutFact: "Its price is confirmed in the UK's official Land Registry price-paid data.",
      sourceTag: SRC,
      image: {"src": "/rankings/most-expensive-homes-2026/rutland-gate-mansion.webp", "width": 1200, "height": 875, "alt": "The Rutland Gate mansion in Knightsbridge, London", "author": "Gareth E. Kegg", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:2-8a_Rutland_Gate.JPG"},
    },
    {
      rank: 3,
      name: "Château Louis XIV, France",
      earnings: "US$307.0 million (€275 million, 2015)",
      category: "Louveciennes, France",
      blurb: "Château Louis XIV in Louveciennes, near Versailles, sold for a reported €275 million in 2015, according to Bloomberg. The buyer was not officially disclosed.",
      standoutFact: "Bloomberg and Money called it the world's most expensive home when the sale was reported in December 2015.",
      sourceTag: SRC,
      image: {"src": "/rankings/most-expensive-homes-2026/chateau-louis-xiv.webp", "width": 1200, "height": 728, "alt": "Château Louis XIV in Louveciennes, near Versailles", "author": "Wolrfam", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chateau_LOUIS_XIV.jpg"},
    },
    {
      rank: 2,
      name: "Deep Water Bay house, Hong Kong",
      earnings: "US$319.0 million (HK$2.5 billion, 2017)",
      category: "Hong Kong",
      blurb: "A 13,854-square-foot house in Deep Water Bay sold for a reported HK$2.5 billion in 2017. Hong Kong Land Registry documents show businessman Pan Sutong as the owner.",
      standoutFact: "Hong Kong is the only place outside London and France with two homes in the top 10; the other is the HK$2.1 billion Peak house.",
      sourceTag: SRC,
      image: {"src": "/rankings/most-expensive-homes-2026/area-deep-water-bay.webp", "width": 1200, "height": 900, "alt": "Aerial view of Deep Water Bay, Hong Kong", "author": "Wpcpey", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Deep_Water_Bay_2018.jpg", "caption": "Deep Water Bay, Hong Kong (the area, not the house)."},
    },
    {
      rank: 1,
      name: "Providence House, London",
      earnings: "US$354.7 million (£265 million, 2026)",
      category: "London, United Kingdom",
      blurb: "Providence House, property developer Nick Candy's former mansion in the grounds of the Royal Hospital Chelsea, sold for a reported £265 million, with the deal completed in May 2026. The buyer has not been disclosed.",
      standoutFact: "Reports gave prices from £265 million to more than £275 million; an investigation by Tax Policy Associates found the higher figure traced to a citation error. As of September 2026 the sale was not yet registered at the Land Registry, and the deal also included five small flats worth about £1.75 million.",
      sourceTag: SRC,
      image: {"src": "/rankings/most-expensive-homes-2026/area-royal-hospital-chelsea.webp", "width": 1200, "height": 900, "alt": "The Royal Hospital Chelsea, London", "author": "Michael Coppins", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chelsea_Royal_Hospital_from_the_north_west.jpg", "caption": "The Royal Hospital Chelsea, in whose grounds Providence House stands (the area, not the house)."},
    },
  ],

  keyTakeaway: {
    stat: "3 of 10",
    label: "Homes in the top 10 that are in London",
    comparisonStat: "US$354.7 million",
    comparisonLabel: "Providence House, the most expensive home ever sold",
    note: "London has three of the 10 most expensive home sales ever, including the top spot, and two of them happened in 2026. France also has three, Hong Kong two, and the US two: Ken Griffin's New York penthouse and the Malibu estate.",
  },

  sourceNote: {
    dataPeriod: "Completed sales up to November 2026",
    lastUpdated: "November 16, 2026",
    sources:
      "HM Land Registry price-paid data (Rutland Gate); New York City property records via ACRIS (220 Central Park South); Hong Kong stock exchange filing (The Peak house); Campari Group annual report (Villa Les Cèdres); Hong Kong Land Registry documents as reported by Mingtiandi (Deep Water Bay); Tax Policy Associates, The Times and Bloomberg (Providence House); Bloomberg and Beauchamp Estates (The Holme); Bloomberg (Château Louis XIV, Hôtel Lambert); Los Angeles Times citing property records (Malibu). Exchange rates: European Central Bank euro reference rates, 6 November 2026. Photos: Wikimedia Commons, credited under each photo.",
    methodology:
      "Included: completed sales of a single home (house, apartment, penthouse or estate) anywhere in the world, up to November 2026. Excluded: asking prices, refinancings, off-plan contracts that have not completed, deals covering several separate properties, palaces and state property, and homes that have never been sold. Each price is shown exactly as recorded or reported, in its original currency. Where official records or company filings exist we used them; otherwise prices come from major financial news outlets and are marked as reported. US dollar figures are Viszlyn conversions at ECB euro reference rates on 6 November 2026 (EUR/USD 1.1165, EUR/GBP 0.83415, EUR/HKD 8.7505), used only to rank the homes on one scale; they are not the dollar prices at the time of sale. Converted figures are rounded to the nearest US$0.1 million; prices paid in US dollars are shown as recorded. Buyers are named only where they confirmed the purchase or appear in official records.",
    sourceLinks: [
      { label: "Tax Policy Associates: Providence House sale (Sept 2026)", href: "https://taxpolicy.org.uk/2026/09/22/nick-candy-18-5m-stamp-duty-house-sale/" },
      { label: "Mingtiandi: Deep Water Bay house (Pan Sutong)", href: "https://www.mingtiandi.com/real-estate/finance/goldin-boss-pan-sutong-remortgages-hong-kong-home/" },
      { label: "Money / Bloomberg: Château Louis XIV", href: "https://money.com/most-expensive-home-chateau-louis-xiv/" },
      { label: "HM Land Registry: Rutland Gate price-paid record", href: "http://landregistry.data.gov.uk/data/ppi/transaction/A96E4ACC-E396-9205-E053-6C04A8C0DA09/current" },
      { label: "HKEX filing: sale of The Peak house", href: "https://www1.hkexnews.hk/listedco/listconews/sehk/2018/1217/ltn20181217351.pdf" },
      { label: "The Super Prime: The Holme resale (H1 2026)", href: "https://thesuperprime.com/research/london-super-prime-market-h1-2026-billionaire-buyers/" },
      { label: "6sqft: 220 Central Park South penthouse (ACRIS)", href: "https://www.6sqft.com/?p=47580" },
      { label: "Artnet / Bloomberg: Hôtel Lambert", href: "https://news.artnet.com/art-world/xavier-niel-snaps-french-mansion-foundation-2077314" },
      { label: "Mansion Global: Villa Les Cèdres", href: "https://www.mansionglobal.com/articles/ukrainian-billionaire-is-buyer-of-e200-million-french-riviera-mansion-211510" },
      { label: "The Real Deal: Malibu estate (LA Times, property records)", href: "https://therealdeal.com/la/2024/06/21/oakley-founder-sells-malibu-estate-for-a-state-record-210m" },
      { label: "ECB euro reference rates", href: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.html" },
    ],
  },

  faqItems: [
    {
      question: "What is the most expensive home ever sold?",
      answer:
        "Providence House in Chelsea, London, which sold for a reported US$354.7 million (£265 million, converted at ECB rates on 6 November 2026) in 2026. Before that, the record was a house in Deep Water Bay, Hong Kong, sold for a reported US$319.0 million (HK$2.5 billion) in 2017.",
    },
    {
      question: "What is the most expensive home ever sold in the US?",
      answer:
        "Ken Griffin's penthouse at 220 Central Park South in New York, bought for US$239,958,219 in January 2019, according to city property records. The most expensive in California is a Malibu estate sold for US$210 million in 2024.",
    },
    {
      question: "Why isn't Antilia on the list?",
      answer:
        "Mukesh Ambani's Antilia in Mumbai has never been sold, so it has no sale price. Forbes estimated it in 2014 at upward of US$1 billion. This ranking only includes completed sales.",
    },
    {
      question: "Why are the dollar prices different from news reports?",
      answer:
        "News reports convert prices at the exchange rate on the day of the sale, which varies a lot between 2015 and 2026. To compare all 10 fairly, we converted every price at the same ECB rates on 6 November 2026. The original price in pounds, euros or Hong Kong dollars is always shown.",
    },
    {
      question: "Which places have the most expensive homes?",
      answer:
        "London and France each have three of the 10 most expensive home sales ever, and London has the record. Hong Kong and the US have two each.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Most Expensive New Cars of the 2020s", href: "/rankings/most-expensive-new-cars-2026" },
    { title: "The 10 Cities With the Most Billionaires in 2026", href: "/rankings/cities-with-most-billionaires-2026" },
    { title: "The 10 Richest People in the World in 2026", href: "/rankings/richest-people-2026" },
    { title: "The Most Expensive Cities in the World in 2026", href: "/rankings/costliest-cities-world-2026" },
  ],
};
