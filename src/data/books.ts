export type BookStatus = "finished" | "did-not-finish" | "reading";

export const SHELVES = [
  { id: "school", label: "School" },
  { id: "language", label: "Language" },
  { id: "fiction", label: "Fiction" },
  { id: "work", label: "Work" },
  { id: "mind", label: "Mind" },
  { id: "world", label: "World" },
] as const;

export type ShelfId = (typeof SHELVES)[number]["id"];

export type Book = {
  title: string;
  author: string;
  year?: number;
  month?: number;
  status: BookStatus;
  quotes?: string[];
};

export const books: Book[] = [
  // 2026
  {
    title: "Different",
    author: "Youngme Moon",
    year: 2026,
    month: 1,
    status: "finished",
  },
  {
    title: "Amazonia",
    author: "James Marcus",
    year: 2026,
    month: 1,
    status: "finished",
  },
  {
    title: "Perennial Seller",
    author: "Ryan Holiday",
    year: 2026,
    month: 7,
    status: "finished",
  },
  {
    title: "Managing Brand Equity",
    author: "David A. Aaker",
    year: 2026,
    status: "reading",
  },
  {
    title: "T2D3",
    author: "T2D3",
    year: 2026,
    status: "reading",
  },

  // 2025
  {
    title: "Anointed",
    author: "Toby E. Stuart",
    year: 2025,
    month: 12,
    status: "finished",
  },
  {
    title: "The Big Test",
    author: "Nicholas Lemann",
    year: 2025,
    month: 2,
    status: "finished",
  },
  {
    title: "The Story of the Eight-Year Study",
    author: "Wilford M. Aikin",
    year: 2025,
    month: 2,
    status: "finished",
  },
  {
    title: "Higher Admissions",
    author: "Nicholas Lemann",
    year: 2025,
    month: 2,
    status: "finished",
  },
  {
    title: "Logicomix",
    author: "Apostolos Doxiadis and Christos Papadimitriou",
    year: 2025,
    month: 3,
    status: "finished",
  },
  {
    title: "The Genetic Lottery",
    author: "Kathryn Paige Harden",
    year: 2025,
    month: 3,
    status: "finished",
  },
  {
    title: "The Eight-Year Study: Did They Succeed in College?",
    author: "Wilford M. Aikin",
    year: 2025,
    month: 4,
    status: "finished",
  },
  {
    title: "Dividend Investing",
    author: "Dividend Investing",
    year: 2025,
    month: 4,
    status: "finished",
  },
  {
    title: "Rethinking Investing",
    author: "Rethinking Investing",
    year: 2025,
    month: 5,
    status: "finished",
  },

  // 2024
  {
    title: "The Good Ancestor",
    author: "Roman Krznaric",
    year: 2024,
    status: "finished",
  },
  {
    title: "Failure to Disrupt",
    author: "Justin Reich",
    year: 2024,
    status: "finished",
  },
  {
    title: "Killing Commendatore",
    author: "Haruki Murakami",
    year: 2024,
    status: "finished",
  },
  {
    title: "The Responsible Company",
    author: "Yvon Chouinard",
    year: 2024,
    status: "finished",
  },
  {
    title: "Good Authority",
    author: "Jonathan Raymond",
    year: 2024,
    status: "finished",
  },

  // Unfiled (from the reading log; year to come)
  { title: "Quirky", author: "Melissa Schilling", status: "finished" },
  { title: "Babel No More", author: "Michael Erard", status: "finished" },
  {
    title: "Seven Myths About Education",
    author: "Daisy Christodoulou",
    status: "finished",
  },
  {
    title: "How Language Works",
    author: "David Crystal",
    status: "finished",
  },
  {
    title: "Becoming Fluent",
    author: "Richard Roberts and Roger Kreuz",
    status: "finished",
  },
  {
    title: "Curriculum Theory",
    author: "Stephen P. Schiro",
    status: "finished",
  },
  {
    title: "A Mind for Numbers",
    author: "Barbara Oakley",
    status: "finished",
  },
  {
    title: "How Not to Be Wrong",
    author: "Jordan Ellenberg",
    status: "finished",
  },
  {
    title: "The Higher Learning in America",
    author: "Thorstein Veblen",
    status: "finished",
  },
  {
    title: "Science Fictions",
    author: "Stuart Ritchie",
    status: "finished",
  },
  { title: "Livewired", author: "David Eagleman", status: "finished" },
  {
    title: "Doing Good Better",
    author: "William MacAskill",
    status: "finished",
  },
  {
    title: "Thinking in Systems",
    author: "Donella Meadows",
    status: "finished",
  },
  {
    title: "Ten Steps to Complex Learning",
    author: "Jeroen J. G. van Merriënboer and Paul A. Kirschner",
    status: "finished",
  },
  {
    title: "This Earth of Mankind",
    author: "Pramoedya Ananta Toer",
    status: "finished",
  },
  {
    title: "Predictably Irrational",
    author: "Dan Ariely",
    status: "finished",
  },
  {
    title: "No Rules Rules",
    author: "Reed Hastings and Erin Meyer",
    status: "finished",
  },
  {
    title: "Embers of the World",
    author: "Embers of the World",
    status: "finished",
  },
  {
    title: "WTF: What's the Future",
    author: "Tim O'Reilly",
    status: "finished",
  },
  {
    title: "Becoming Trader Joe",
    author: "Joe Coulombe",
    status: "finished",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    status: "finished",
  },
  {
    title: "How Big Things Get Done",
    author: "Bent Flyvbjerg and Dan Gardner",
    status: "finished",
  },
  {
    title: "Tambora: The Eruption that Changed the World",
    author: "Gillen D'Arcy Wood",
    status: "finished",
  },
  { title: "End Times", author: "Bryan Walsh", status: "finished" },
  {
    title: "Artificial Intelligence: A Guide for Thinking Humans",
    author: "Melanie Mitchell",
    status: "finished",
  },
  {
    title: "Native Speaker",
    author: "Chang-rae Lee",
    status: "finished",
  },
  { title: "Pachinko", author: "Min Jin Lee", status: "finished" },
  {
    title: "No Country for Old Men",
    author: "Cormac McCarthy",
    status: "finished",
  },
  {
    title: "Miracle and Wonder: Conversations with Paul Simon",
    author: "Malcolm Gladwell and Bruce Headlam",
    status: "finished",
  },
  {
    title: "The Power of Myth",
    author: "Joseph Campbell with Bill Moyers",
    status: "finished",
  },
  {
    title: "Let My People Go Surfing",
    author: "Yvon Chouinard",
    status: "finished",
  },
  {
    title: "Colorless Tsukuru Tazaki and His Years of Pilgrimage",
    author: "Haruki Murakami",
    status: "finished",
  },
  {
    title: "The Strange Library",
    author: "Haruki Murakami",
    status: "finished",
  },
  {
    title: "Business Model Generation",
    author: "Alexander Osterwalder and Yves Pigneur",
    status: "finished",
  },
  {
    title: "This is Marketing",
    author: "Seth Godin",
    status: "finished",
  },
  { title: "The Road", author: "Cormac McCarthy", status: "finished" },
  {
    title: "Awakening: Conversations with the Masters",
    author: "Anthony de Mello",
    status: "finished",
  },
  {
    title: "On Such a Full Sea",
    author: "Chang-rae Lee",
    status: "finished",
  },
  {
    title: "Indonesia Etc.",
    author: "Elizabeth Pisani",
    status: "did-not-finish",
  },
  {
    title: "How to Educate a Citizen",
    author: "E. D. Hirsch Jr.",
    status: "finished",
  },
  {
    title: "The Cult of Smart",
    author: "Fredrik deBoer",
    status: "finished",
  },
  {
    title: "Why War?",
    author: "Richard Overy",
    status: "did-not-finish",
  },
  {
    title: "The Wind-Up Bird Chronicle",
    author: "Haruki Murakami",
    status: "finished",
  },
  {
    title: "Teaching Machines",
    author: "Audrey Watters",
    status: "finished",
  },
  {
    title: "Tinkering Toward Utopia",
    author: "David Tyack and Larry Cuban",
    status: "finished",
  },
  {
    title: "Mad at the World",
    author: "William Souder",
    status: "finished",
  },
  {
    title: "Reinventing Organizations",
    author: "Frederic Laloux",
    status: "finished",
  },
];

const MONTHS = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function monthName(month?: number) {
  return month ? MONTHS[month] : undefined;
}

export function booksByYear() {
  const groups = new Map<number | "unfiled", Book[]>();

  for (const book of books) {
    const key = book.year ?? "unfiled";
    const list = groups.get(key) ?? [];
    list.push(book);
    groups.set(key, list);
  }

  for (const list of groups.values()) {
    list.sort((a, b) => {
      if (a.status === "reading" && b.status !== "reading") return -1;
      if (b.status === "reading" && a.status !== "reading") return 1;
      return (a.month ?? 99) - (b.month ?? 99);
    });
  }

  const years = [...groups.keys()].filter((k): k is number => k !== "unfiled");
  years.sort((a, b) => b - a);

  return {
    years: years.map((year) => ({ year, books: groups.get(year) ?? [] })),
    unfiled: groups.get("unfiled") ?? [],
  };
}

export function booksNewestFirst() {
  return [...books].sort((a, b) => {
    const yearA = a.year ?? -1;
    const yearB = b.year ?? -1;
    if (yearA !== yearB) return yearB - yearA;
    const monthA = a.month ?? -1;
    const monthB = b.month ?? -1;
    return monthB - monthA;
  });
}

const SHELF_BY_TITLE: Record<string, ShelfId> = {
  Different: "work",
  Amazonia: "work",
  "Perennial Seller": "work",
  "Managing Brand Equity": "work",
  T2D3: "work",
  Anointed: "world",
  "The Big Test": "school",
  "The Story of the Eight-Year Study": "school",
  "Higher Admissions": "school",
  Logicomix: "mind",
  "The Genetic Lottery": "mind",
  "The Eight-Year Study: Did They Succeed in College?": "school",
  "Dividend Investing": "work",
  "Rethinking Investing": "work",
  "The Good Ancestor": "world",
  "Failure to Disrupt": "school",
  "Killing Commendatore": "fiction",
  "The Responsible Company": "work",
  "Good Authority": "work",
  Quirky: "work",
  "Babel No More": "language",
  "Seven Myths About Education": "school",
  "How Language Works": "language",
  "Becoming Fluent": "language",
  "Curriculum Theory": "school",
  "A Mind for Numbers": "school",
  "How Not to Be Wrong": "mind",
  "The Higher Learning in America": "school",
  "Science Fictions": "mind",
  Livewired: "mind",
  "Doing Good Better": "world",
  "Thinking in Systems": "mind",
  "Ten Steps to Complex Learning": "school",
  "This Earth of Mankind": "fiction",
  "Predictably Irrational": "mind",
  "No Rules Rules": "work",
  "Embers of the World": "world",
  "WTF: What's the Future": "work",
  "Becoming Trader Joe": "work",
  "The Lean Startup": "work",
  "How Big Things Get Done": "work",
  "Tambora: The Eruption that Changed the World": "world",
  "End Times": "world",
  "Artificial Intelligence: A Guide for Thinking Humans": "mind",
  "Native Speaker": "fiction",
  Pachinko: "fiction",
  "No Country for Old Men": "fiction",
  "Miracle and Wonder: Conversations with Paul Simon": "world",
  "The Power of Myth": "world",
  "Let My People Go Surfing": "work",
  "Colorless Tsukuru Tazaki and His Years of Pilgrimage": "fiction",
  "The Strange Library": "fiction",
  "Business Model Generation": "work",
  "This is Marketing": "work",
  "The Road": "fiction",
  "Awakening: Conversations with the Masters": "world",
  "On Such a Full Sea": "fiction",
  "Indonesia Etc.": "world",
  "How to Educate a Citizen": "school",
  "The Cult of Smart": "school",
  "Why War?": "world",
  "The Wind-Up Bird Chronicle": "fiction",
  "Teaching Machines": "school",
  "Tinkering Toward Utopia": "school",
  "Mad at the World": "world",
  "Reinventing Organizations": "work",
};

export function bookShelf(book: Book): ShelfId {
  const shelf = SHELF_BY_TITLE[book.title];
  if (!shelf) {
    throw new Error(`No shelf assigned for “${book.title}”`);
  }
  return shelf;
}

export function booksByShelf() {
  const chrono = booksNewestFirst();
  return SHELVES.map((shelf) => ({
    id: shelf.id,
    label: shelf.label,
    books: chrono.filter((book) => bookShelf(book) === shelf.id),
  })).filter((group) => group.books.length > 0);
}

const CLOTHS = [
  "ink",
  "navy",
  "oxblood",
  "forest",
  "walnut",
  "wine",
  "slate",
  "sienna",
  "midnight",
  "olive",
  "cream",
  "terracotta",
  "teal",
  "ochre",
] as const;

export type Cloth = (typeof CLOTHS)[number];
export type BindingLabel = "gilt" | "paper";

function titleHash(title: string) {
  let n = 0;
  for (const ch of title) n = (n + ch.charCodeAt(0) * 31) % 1009;
  return n;
}

export function coverTone(title: string) {
  const tones = ["ink", "navy", "stone", "oxblood", "slate", "charcoal"] as const;
  return tones[titleHash(title) % tones.length];
}

export function bindingVariant(title: string) {
  const n = titleHash(title);
  const heights = [0.9, 0.94, 0.97, 1];
  const widths = [11.2, 11.7, 12.2, 12.6];
  return {
    cloth: CLOTHS[n % CLOTHS.length],
    height: heights[n % heights.length],
    width: widths[(n * 3) % widths.length],
    label: (n % 4 === 0 ? "paper" : "gilt") as BindingLabel,
  };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const slugByBook = new Map<Book, string>();
const bookBySlugMap = new Map<string, Book>();

for (const book of books) {
  let slug = slugify(book.title);
  if (bookBySlugMap.has(slug)) {
    slug = book.year
      ? `${slug}-${book.year}`
      : `${slug}-${slugify(book.author).slice(0, 16)}`;
    let n = 2;
    while (bookBySlugMap.has(slug)) {
      slug = `${slugify(book.title)}-${n++}`;
    }
  }
  slugByBook.set(book, slug);
  bookBySlugMap.set(slug, book);
}

export function bookSlug(book: Book) {
  return slugByBook.get(book) ?? slugify(book.title);
}

export function bookBySlug(slug: string) {
  return bookBySlugMap.get(slug);
}
