import { RankingArticle } from "./types";

const P = "/rankings/biggest-ipos-of-all-time-2026";
const SA4 = "https://creativecommons.org/licenses/by-sa/4.0";
const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/";

export const biggestIposOfAllTime2026: RankingArticle = {
  slug: "biggest-ipos-of-all-time-2026",

  metaTitle: "The 10 Biggest IPOs of All Time (2026): Anthropic Is No. 1 | Viszlyn",
  metaDescription:
    "Anthropic's US$81.3 billion IPO tops the all-time ranking, ahead of SpaceX at US$75.0 billion and Saudi Aramco at US$25.6 billion. See the 10 largest offerings by gross proceeds at pricing.",
  ogTitle: "The 10 Biggest IPOs of All Time",
  ogDescription:
    "Two 2026 listings, Anthropic (US$81.3B) and SpaceX (US$75.0B), were each about three times the size of the previous record, Saudi Aramco's US$25.6B.",
  twitterTitle: "The 10 Biggest IPOs Ever (2026)",
  twitterDescription:
    "Anthropic US$81.3B. SpaceX US$75.0B. Saudi Aramco US$25.6B. Alibaba US$21.8B. 2026 rewrote the IPO record book twice.",

  eyebrow: "Money",
  title: "The 10 Biggest IPOs of All Time",
  dek: "Ranked by gross proceeds at pricing. Anthropic and SpaceX, both listed in 2026, were each about three times the size of Saudi Aramco's IPO, the record from 2019.",
  publishedDate: "November 27, 2026",
  lastUpdated: "November 27, 2026",
  dataPeriod: "IPOs priced up to November 27, 2026",
  heroImage: {
    src: "/heroes/biggest-ipos-of-all-time-2026.webp",
    ogSrc: "/heroes/biggest-ipos-of-all-time-2026-og.png",
    alt: "Circles sized by gross proceeds in the 10 biggest IPOs: two huge circles for Anthropic (US$81.3 billion, 2026) and SpaceX (US$75.0 billion, 2026), then much smaller circles for Saudi Aramco (US$25.6 billion), Alibaba, SoftBank Corp., General Motors, Agricultural Bank of China, ICBC, NTT DoCoMo and Visa.",
  },

  quickAnswer:
    "The biggest IPO of all time is Anthropic's. It had a gross offering value of US$81.34 billion when it priced 980 million shares at US$83 on November 18, 2026, according to its final prospectus. Most of the shares were new stock sold by Anthropic; about 23.6 million were sold by existing shareholders. With the extra shares its underwriters later bought, the offering reached about US$93.5 billion. SpaceX is second at US$75.0 billion (June 2026), and Saudi Aramco, the record holder from 2019 until SpaceX, is third at US$25.6 billion.",
  introParagraph:
    "An initial public offering (IPO) is the first time a company sells its shares to the public. This ranking compares gross proceeds at the original offering price, before any extra \"greenshoe\" shares the banks bought afterwards. That gives a consistent starting point for every deal, and the total after the greenshoe is shown separately for each entry; it does not change the order of the top nine. Gross proceeds means the total value of the shares sold, before fees, whoever sold them. It measures the size of the offering, not the money the company received: shares sold by existing owners, such as governments and early investors, pay those owners.",
  calloutBox: {
    label: "2026 broke the record twice",
    body: "SpaceX's US$75.0 billion IPO in June 2026 nearly tripled Saudi Aramco's 2019 record of US$25.6 billion. It stood for about five months, until Anthropic's US$81.3 billion IPO in November. Anthropic also sold about US$26.0 billion of non-voting shares in a separate private sale at the same time. That sale was not part of the IPO, so it is not counted here.",
  },

  chartTitle: "Gross proceeds at IPO pricing, before the greenshoe (US$ billions)",
  chartSource: "Company prospectuses and offering announcements. SoftBank Corp. converted by Viszlyn; ICBC and NTT DoCoMo as reported at the time",
  chartTapNote: "Tap any company to see the year, exchange and total after the greenshoe.",
  entryValueLabel: "Gross proceeds at pricing:",
  chartItems: [
    { rank: 1, name: "Anthropic", value: "$81.3B", raw: 81.34, countries: [{ name: "Anthropic (2026)", flagCode: "us" }] },
    { rank: 2, name: "SpaceX", value: "$75.0B", raw: 75.0, countries: [{ name: "SpaceX (2026)", flagCode: "us" }] },
    { rank: 3, name: "Saudi Aramco", value: "$25.6B", raw: 25.6, countries: [{ name: "Saudi Aramco (2019)", flagCode: "sa" }] },
    { rank: 4, name: "Alibaba", value: "$21.8B", raw: 21.77, countries: [{ name: "Alibaba (2014)", flagCode: "cn" }] },
    { rank: 5, name: "SoftBank Corp.", value: "$21.3B", raw: 21.3, countries: [{ name: "SoftBank Corp. (2018)", flagCode: "jp" }] },
    { rank: 6, name: "General Motors", value: "$20.1B", raw: 20.12, countries: [{ name: "General Motors (2010)", flagCode: "us" }] },
    { rank: 7, name: "Agricultural Bank of China", value: "$19.2B", raw: 19.2, countries: [{ name: "Agricultural Bank of China (2010)", flagCode: "cn" }] },
    { rank: 8, name: "ICBC", value: "$19.1B", raw: 19.1, countries: [{ name: "ICBC (2006)", flagCode: "cn" }] },
    { rank: 9, name: "NTT DoCoMo", value: "$17.95B", raw: 17.95, countries: [{ name: "NTT DoCoMo (1998)", flagCode: "jp" }] },
    { rank: 10, name: "Visa", value: "$17.86B", raw: 17.86, countries: [{ name: "Visa (2008)", flagCode: "us" }] },
  ],

  detailedEntries: [
    {
      rank: 10, name: "Visa", earnings: "US$17.86 billion at pricing · US$19.65 billion after the greenshoe", category: "United States · Payments · March 2008",
      origin: "New York Stock Exchange · US$44 per share",
      blurb: "Visa sold 406 million shares at US$44 for US$17,864 million, according to its final prospectus. Its underwriters bought 40.6 million more shares two days later, taking gross proceeds to about US$19.65 billion.",
      standoutFact: "Every share was new stock sold by Visa itself; no existing owners sold. The US$19.1 billion often quoted for Visa is its expected proceeds after fees, not the gross amount.",
      sourceTag: "Visa Inc., final prospectus (Form 424B4)",
      countries: [{ name: "United States", flagCode: "us" }],
      image: { src: `${P}/visa.webp`, width: 1200, height: 900, alt: "Glass office building with hanging greenery at Mission Rock, San Francisco", author: "Missvain", license: "CC0", licenseUrl: CC0, sourceUrl: "https://commons.wikimedia.org/wiki/File:Visa_headquarters_-_August_2025_-_Sarah_Stierch.jpg", caption: "Visa headquarters, Mission Rock, San Francisco." },
    },
    {
      rank: 9, name: "NTT DoCoMo", earnings: "About US$17.95 billion (¥2.1 trillion)", category: "Japan · Mobile phones · October 1998",
      origin: "Tokyo Stock Exchange · ¥3.9 million per share",
      blurb: "The offering totalled 545,000 shares: NTT DoCoMo issued 327,000 new shares and its parent NTT sold 218,000, according to NTT's annual report filed with the SEC. At the reported price of ¥3.9 million a share, that is ¥1,275.3 billion of new shares and ¥850.2 billion sold by NTT (Viszlyn calculation), about ¥2.1 trillion in all. The US dollar total, US$17.95 billion, is as reported at the time.",
      standoutFact: "It ended its first trading day as Japan's third-most valuable company, behind only its parent NTT and Toyota.",
      sourceTag: "NTT, Form 20-F (share split); Kyodo News and RCR Wireless (price and US$ total, 1998)",
      countries: [{ name: "Japan", flagCode: "jp" }],
      image: { src: `${P}/docomo.webp`, width: 675, height: 1200, alt: "Sanno Park Tower, a tall pale office tower in Tokyo, against a blue sky", author: "Akonnchiroll", license: "CC BY-SA 4.0", licenseUrl: SA4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Sanno_Park_Tower.jpg", caption: "Sanno Park Tower, Tokyo, NTT DoCoMo's headquarters." },
    },
    {
      rank: 8, name: "ICBC", earnings: "US$19.1 billion at pricing · US$21.9 billion after the greenshoe", category: "China · Banking · October 2006",
      origin: "Hong Kong and Shanghai stock exchanges",
      blurb: "Industrial and Commercial Bank of China sold shares in Hong Kong (US$13.9 billion) and Shanghai (US$5.1 billion) at the same time, for a combined US$19.1 billion. These totals are as reported at the time by FinanceAsia and other outlets; Viszlyn did not find an ICBC document stating the combined figure.",
      standoutFact: "All 48.5 billion shares were new stock issued by the bank. The two listings are counted here as one IPO.",
      sourceTag: "FinanceAsia (October 2006)",
      countries: [{ name: "China", flagCode: "cn" }],
      image: { src: `${P}/icbc.webp`, width: 1200, height: 800, alt: "Two linked office blocks of ICBC's Beijing headquarters behind a wide plaza", author: "N509FZ", license: "CC BY-SA 4.0", licenseUrl: SA4, sourceUrl: "https://commons.wikimedia.org/wiki/File:West_facade_of_ICBC_headquarters_(20230310132257).jpg", caption: "ICBC headquarters, Beijing." },
    },
    {
      rank: 7, name: "Agricultural Bank of China", earnings: "US$19.2 billion at pricing · about US$22.1 billion after the greenshoe", category: "China · Banking · July 2010",
      origin: "Hong Kong and Shanghai stock exchanges · HK$3.20 and RMB 2.68 per share",
      blurb: "The bank sold about 25.4 billion shares in Hong Kong and 22.2 billion in Shanghai, all new stock. The combined deal was reported at about US$19.2 billion at pricing; the bank's own third-quarter 2010 report puts the total after both over-allotments at about US$22.1 billion.",
      standoutFact: "It was the last of China's \"big four\" state-controlled banks to go public.",
      sourceTag: "Agricultural Bank of China, HKEX announcement and Q3 2010 report; Dealogic",
      countries: [{ name: "China", flagCode: "cn" }],
      image: { src: `${P}/abc.webp`, width: 1200, height: 800, alt: "Agricultural Bank of China's beige headquarters tower in Beijing", author: "維基小霸王", license: "CC BY-SA 4.0", licenseUrl: SA4, sourceUrl: "https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E5%9B%BD%E5%86%9C%E4%B8%9A%E9%93%B6%E8%A1%8C_%E8%A5%BF%E4%BE%A7.jpg", caption: "Agricultural Bank of China headquarters, Beijing." },
    },
    {
      rank: 6, name: "General Motors", earnings: "US$20.1 billion at pricing · about US$23.1 billion after the greenshoe", category: "United States · Cars · November 2010",
      origin: "New York Stock Exchange · US$33 per share",
      blurb: "GM's IPO was two offerings sold together: US$15.8 billion of common shares, all sold by existing owners including the US Treasury, and US$4.35 billion of convertible preferred shares sold by GM. We count the combined US$20.1 billion, the way the deal was priced and reported.",
      standoutFact: "GM itself sold none of the common shares. On common shares alone, it would drop out of the top 10.",
      sourceTag: "General Motors, final prospectuses (Forms 424B1)",
      countries: [{ name: "United States", flagCode: "us" }],
      image: { src: `${P}/gm.webp`, width: 1200, height: 834, alt: "The Renaissance Center's dark glass towers on the Detroit riverfront", author: "Crisco 1492", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Renaissance_Center,_Detroit,_Michigan_from_S_2014-12-07.jpg", caption: "Renaissance Center, Detroit, General Motors' headquarters." },
    },
    {
      rank: 5, name: "SoftBank Corp.", earnings: "About US$21.3 billion (¥2.41 trillion) · about US$23.4 billion with over-allotment", category: "Japan · Mobile phones · December 2018",
      origin: "Tokyo Stock Exchange · ¥1,500 per share",
      blurb: "SoftBank Group sold about 1.6 billion shares of its Japanese mobile business at ¥1,500 each, about ¥2.41 trillion. SoftBank published no US dollar figure; Viszlyn converted at the Federal Reserve rate on the pricing day (¥112.96 per US$1).",
      standoutFact: "All the shares were sold by the parent company, so SoftBank Corp. raised nothing itself. SoftBank Group's stake fell from 99.99% to 63.14%.",
      sourceTag: "SoftBank Group, share disposal announcement (December 10, 2018)",
      countries: [{ name: "Japan", flagCode: "jp" }],
      image: { src: `${P}/softbank.webp`, width: 905, height: 1200, alt: "Tokyo Portcity Takeshiba Office Tower, a tall glass tower with terraced lower floors", author: "Beryllium Transistor", license: "CC BY-SA 4.0", licenseUrl: SA4, sourceUrl: "https://commons.wikimedia.org/wiki/File:TOKYO_PORTCITY_TAKESHIBA_OFFICE_TOWER.jpg", caption: "Tokyo Portcity Takeshiba Office Tower, SoftBank's headquarters." },
    },
    {
      rank: 4, name: "Alibaba", earnings: "US$21.8 billion at pricing · about US$25.0 billion after the greenshoe", category: "China · E-commerce · September 2014",
      origin: "New York Stock Exchange · US$68 per share (ADS)",
      blurb: "Alibaba sold about 320 million American depositary shares at US$68 for US$21,767 million, according to its final prospectus. After its underwriters bought 48 million more, it announced gross proceeds of about US$25.03 billion.",
      standoutFact: "Existing shareholders sold more shares (197 million) than Alibaba itself issued (123 million).",
      sourceTag: "Alibaba Group, final prospectus (Form 424B4)",
      countries: [{ name: "China", flagCode: "cn" }],
      image: { src: `${P}/alibaba.webp`, width: 1200, height: 527, alt: "Alibaba's Hangzhou campus with patterned white facades and a lattice canopy", author: "Thomas LOMBARD", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Alibaba_group_Headquarters.jpg", caption: "Alibaba Group headquarters, Hangzhou." },
    },
    {
      rank: 3, name: "Saudi Aramco", earnings: "US$25.6 billion at pricing · US$29.4 billion with the full option", category: "Saudi Arabia · Oil · December 2019",
      origin: "Saudi Stock Exchange (Tadawul) · SAR 32 per share",
      blurb: "The Saudi government sold 3 billion Aramco shares at SAR 32, raising SAR 96.0 billion, or US$25.6 billion, according to Aramco's pricing announcement. If the extra 450 million shares were also sold, the total rises to SAR 110.4 billion (US$29.4 billion).",
      standoutFact: "The shares sold were just 1.5% of the company. It was the biggest IPO ever until SpaceX in June 2026.",
      sourceTag: "Saudi Aramco, final offer price announcement (December 5, 2019)",
      countries: [{ name: "Saudi Arabia", flagCode: "sa" }],
      image: { src: `${P}/aramco.webp`, width: 834, height: 1200, alt: "An Aramco office tower lit up at night in Riyadh", author: "Francisco Anzola", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Aramco_tower_(Francisco_Anzola)_-_Flickr.jpg", caption: "Aramco office tower, Riyadh." },
    },
    {
      rank: 2, name: "SpaceX", earnings: "US$75.0 billion at pricing · US$86.25 billion after the greenshoe", category: "United States · Space · June 2026",
      origin: "Nasdaq Global Select Market and Nasdaq Texas · US$135 per share",
      blurb: "SpaceX sold 555,555,555 shares at US$135 for US$74,999,999,925, according to its final prospectus, all of it new stock sold by the company. With the underwriters' extra shares the gross total was US$86.25 billion.",
      standoutFact: "SpaceX's SEC filing reports US$85.675 billion of net proceeds after US$575 million of underwriting commissions and offering costs; its closing announcement describes about US$85.7 billion as gross proceeds. The gross value of the full offering was about US$86.25 billion.",
      sourceTag: "SpaceX, final prospectus (Form 424B4) and Form 10-Q (Q2 2026)",
      countries: [{ name: "United States", flagCode: "us" }],
      image: { src: `${P}/spacex.webp`, width: 1200, height: 800, alt: "SpaceX's white headquarters and factory building in Hawthorne, California", author: "SpaceX", license: "CC0", licenseUrl: CC0, sourceUrl: "https://commons.wikimedia.org/wiki/File:SpaceX_Headquarters,_Hawthorne,_CA.jpg", caption: "SpaceX headquarters and factory, Hawthorne, California." },
    },
    {
      rank: 1, name: "Anthropic", earnings: "US$81.34 billion at pricing · about US$93.5 billion after the greenshoe", category: "United States · Artificial intelligence · November 2026",
      origin: "Nasdaq Global Select Market (ticker ANT) · US$83 per share",
      blurb: "Anthropic, the maker of the Claude AI models, priced a 980-million-share offering at US$83, a gross value of US$81,340,000,000, according to its final prospectus. Anthropic sold 956.35 million of the shares and existing shareholders 23.65 million (about US$1.96 billion); Anthropic's own proceeds after underwriting discounts were US$78.84 billion. Its underwriters then bought all 147 million extra shares, taking the offering to about US$93.5 billion, of which Anthropic says it received about US$91.6 billion.",
      standoutFact: "A separate private sale of non-voting shares at the same price, about US$26.0 billion, is not part of the IPO and is not counted here.",
      sourceTag: "Anthropic, PBC, final prospectus (Form 424B4) and closing announcement",
      countries: [{ name: "United States", flagCode: "us" }],
    },
  ],

  keyTakeaway: {
    stat: "$156B",
    label: "gross offering value of 2026's two record IPOs, Anthropic and SpaceX, at pricing",
    comparisonStat: "$163B",
    comparisonLabel: "gross offering value of the other eight deals in the top 10 combined, from 1998 to 2019",
    note: "Both totals are Viszlyn's sums of the base deal figures in this ranking (US$156.34 billion and US$162.90 billion). In 2026 alone, two IPOs were nearly as big as the other eight deals in the top 10, from 1998 to 2019, put together.",
  },

  sourceNote: {
    dataPeriod: "IPOs priced up to November 27, 2026",
    lastUpdated: "November 27, 2026",
    sources:
      "Final prospectuses (Form 424B4 or 424B1) filed with the US SEC for Anthropic, SpaceX, Alibaba, General Motors and Visa; Saudi Aramco's final offer price announcement; SoftBank Group's share disposal announcement; Agricultural Bank of China's HKEX announcements and Q3 2010 report; Anthropic's and SpaceX's closing announcements and SpaceX's Q2 2026 Form 10-Q. ICBC (FinanceAsia, 2006) and NTT DoCoMo (Kyodo News and RCR Wireless, 1998) use figures reported at the time. Exchange rate: US Federal Reserve H.10.",
    methodology:
      "IPOs are ranked by the gross value of the shares and eligible equity securities sold at the original offering price, before any over-allotment (greenshoe) option. This measures the size of the public offering, not the amount the company received: proceeds from existing shares go to the selling shareholders, and underwriting fees and other costs are not deducted. Totals after the greenshoe are shown separately. On that basis the top nine keep the same order, and Hong Kong insurer AIA (US$20.51 billion after its greenshoe, 2010) would replace Visa at No. 10; on the base-deal basis AIA's about US$17.8 billion is just below Visa's US$17.864 billion. The ranking includes both new shares and existing shares sold by owners. It also includes General Motors' convertible preferred-stock offering, which was priced and reported alongside its common-stock IPO; the common stock alone was about US$15.8 billion. SoftBank Corp.'s 2018 listing counts as an IPO although all the shares were sold by its parent, SoftBank Group. Where a company published a US dollar figure at the time, that figure is used; otherwise the amount is converted at the Federal Reserve H.10 rate on the pricing date (SoftBank Corp.: ¥112.96 per US$1). Dual listings (Agricultural Bank of China, ICBC) are counted once, with both tranches added together. Later offerings and additional listings by companies that were already public are excluded: SK hynix's US$26.5 billion Nasdaq ADR offering in July 2026 is left out because the company was already listed in South Korea. ICBC's totals are as reported at the time; NTT DoCoMo's share split comes from NTT's SEC filing and its US dollar total from reports at the time. Figures are not adjusted for inflation. Just outside the top 10: AIA (about US$17.8 billion at pricing, 2010), Enel (€16.55 billion, about US$17.4 billion, 1999) and Facebook (US$16.0 billion, 2012).",
    sourceLinks: [
      { label: "Anthropic: final prospectus (Form 424B4)", href: "https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm" },
      { label: "Anthropic: IPO closing announcement", href: "https://www.anthropic.com/news/ipo-close" },
      { label: "SpaceX: final prospectus (Form 424B4)", href: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026042639/spaceexplorationtechnologi.htm" },
      { label: "Saudi Aramco: final offer price announcement (PDF)", href: "https://www.aramco.com/-/media/images/investors/saudi-aramco-final-price-announcement-en.pdf" },
      { label: "Alibaba: final prospectus (Form 424B4)", href: "https://www.sec.gov/Archives/edgar/data/1577552/000119312514347620/d709111d424b4.htm" },
      { label: "SoftBank Group: share disposal announcement", href: "https://group.softbank/en/news/press/20181210" },
      { label: "General Motors: final prospectus (Form 424B1)", href: "https://www.sec.gov/Archives/edgar/data/1467858/000119312510263484/d424b1.htm" },
      { label: "Agricultural Bank of China: HKEX announcement (PDF)", href: "https://www1.hkexnews.hk/listedco/listconews/sehk/2010/0729/ltn20100729037.pdf" },
      { label: "FinanceAsia: ICBC prices record IPO (2006)", href: "https://www.financeasia.com/article/icbc-surprises-no-one-by-pricing-record-ipo-at-the-top/66944" },
      { label: "NTT Form 20-F (DoCoMo 1998 listing details)", href: "https://www.sec.gov/Archives/edgar/data/769594/000119312507146359/d20f.htm" },
      { label: "SK hynix ADR offering (July 2026)", href: "https://www.nst.com.my/amp/business/corporate/2026/07/1484990/sk-hynix-raises-us265-billion-us-offering-after-pricing-adrs" },
      { label: "RCR Wireless: NTT DoCoMo IPO (1998)", href: "https://www.rcrwireless.com/19981101/archived-articles/ntt-docomo-launches-largest-ipo-in-japanese-history" },
      { label: "Visa: final prospectus (Form 424B4)", href: "https://www.sec.gov/Archives/edgar/data/1403161/000119312508060989/d424b4.htm" },
    ],
  },

  faqItems: [
    {
      question: "What is the biggest IPO of all time?",
      answer:
        "Anthropic's, priced on November 18, 2026: a gross offering value of US$81.34 billion at pricing and about US$93.5 billion after its underwriters bought extra shares. It began trading on the Nasdaq on November 19, 2026 under the ticker ANT.",
    },
    {
      question: "Is SpaceX's IPO bigger than Saudi Aramco's?",
      answer:
        "Yes, by far. SpaceX raised US$75.0 billion at pricing in June 2026, almost three times Saudi Aramco's US$25.6 billion in 2019. SpaceX held the record for about five months, until Anthropic's IPO in November 2026.",
    },
    {
      question: "Did Anthropic raise US$119.5 billion?",
      answer:
        "Not in its IPO. That figure adds a separate private sale of about US$26.0 billion of non-voting shares, made at the same price, to the IPO. The IPO itself had a gross value of US$81.34 billion at pricing and about US$93.5 billion after the greenshoe.",
    },
    {
      question: "What is a greenshoe?",
      answer:
        "An option that lets the underwriters buy additional shares from the company or the selling shareholders, usually up to 15% of the original offering, to cover extra demand and support orderly trading. This ranking uses the original offering size before that option.",
    },
    {
      question: "Why isn't SK hynix's US$26.5 billion Nasdaq offering on the list?",
      answer:
        "SK hynix was already listed in South Korea, so its July 2026 sale of American depositary shares on the Nasdaq was an additional US listing, not an initial public offering.",
    },
    {
      question: "Why does Saudi Aramco show US$25.6 billion, not US$29.4 billion?",
      answer:
        "US$25.6 billion is the amount at pricing, the same basis used for every IPO here. US$29.4 billion includes the extra shares from the greenshoe option. Both figures come from Aramco's own announcement.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Most Valuable Companies in the World in 2026", href: "/rankings/worlds-most-valuable-companies-2026" },
    { title: "The 10 Most Valuable AI Companies in 2026", href: "/rankings/most-valuable-ai-companies-2026" },
    { title: "The 10 Longest-Serving Tech CEOs in 2026", href: "/rankings/longest-serving-tech-ceos-2026" },
  ],
};
