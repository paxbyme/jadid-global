export type NewsItem = {
  slug: string;
  titleUz: string;
  excerptUz: string;
  dateISO: string;
};

export type Article = {
  slug: string;
  titleUz: string;
  excerptUz: string;
  authorUz: string;
  tags: string[];
  dateISO: string;
  bodyUz: string;
};

export type Thinker = {
  slug: string;
  nameUz: string;
  yearsUz: string;
  bioUz: string;
};

export type LibraryItem = {
  id: string;
  titleUz: string;
  type: "PDF" | "EPUB";
  authorUz: string;
  year: number;
};

export type MediaItem = {
  slug: string;
  titleUz: string;
  kind: "video" | "audio";
  duration: string;
};

export const news: NewsItem[] = [
  {
    slug: "jadid-global-ishga-tushdi",
    titleUz: "Jadid Global portali konsepti e’lon qilindi",
    excerptUz: "Milliy ma’rifat va jadid merosini zamonaviy formatda taqdim etuvchi platforma.",
    dateISO: "2025-12-20",
  },
  {
    slug: "kutubxona-bolimi-yangilandi",
    titleUz: "Kutubxona bo‘limi yangilandi: PDF/EPUB",
    excerptUz: "MVP’da o‘qish uchun qulay tuzilma va tez qidiruv konsepti.",
    dateISO: "2025-12-18",
  },
];

export const articles: Article[] = [
  {
    slug: "jadidchilik-maqsadi",
    titleUz: "Jadidchilik: maqsad va tarixiy kontekst",
    excerptUz: "Jadidlar nima uchun yangi usul maktablarini targ‘ib qildi?",
    authorUz: "Tahririyat",
    tags: ["jadid", "tarix", "ma’rifat"],
    dateISO: "2025-12-10",
    bodyUz:
      "Bu yerda maqola matni turadi. Hozircha mock data. Keyin backend kelganda real kontent keladi.",
  },
  {
    slug: "matbuot-va-uygonish",
    titleUz: "Matbuot va uyg‘onish: jadid nashrlari",
    excerptUz: "Gazeta va jurnallar ma’rifat tarqatishda qanday rol o‘ynagan?",
    authorUz: "Kontent manager",
    tags: ["matbuot", "jadid"],
    dateISO: "2025-12-08",
    bodyUz: "Mock maqola body...",
  },
];

export const thinkers: Thinker[] = [
  {
    slug: "abdulla-avloniy",
    nameUz: "Abdulla Avloniy",
    yearsUz: "1878–1934",
    bioUz: "Ma’rifatparvar, adib va pedagog. Jadidchilik harakatining yetakchi namoyandalaridan.",
  },
  {
    slug: "mahmudxoja-behbudiy",
    nameUz: "Mahmudxo‘ja Behbudiy",
    yearsUz: "1875–1919",
    bioUz: "Jadid publitsisti va dramaturg. Milliy uyg‘onish g‘oyalari targ‘ibotchisi.",
  },
];

export const library: LibraryItem[] = [
  { id: "lib-001", titleUz: "Turkiy Guliston yoxud Axloq", type: "PDF", authorUz: "Abdulla Avloniy", year: 1913 },
  { id: "lib-002", titleUz: "Padarkush", type: "EPUB", authorUz: "Mahmudxo‘ja Behbudiy", year: 1913 },
];

export const media: MediaItem[] = [
  { slug: "jadidlar-haqida-suhbat-1", titleUz: "Jadidlar haqida suhbat #1", kind: "video", duration: "12:40" },
  { slug: "marifat-audio-1", titleUz: "Ma’rifat audio to‘plami #1", kind: "audio", duration: "08:15" },
];
