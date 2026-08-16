export type WritingItem = {
  title: string;
  authors: string;
  year: number;
  kind: "book" | "paper";
  venue?: string;
  note?: string;
  href?: string;
};

export const writing: WritingItem[] = [
  {
    title:
      "The Elements of Education for Teachers: 50 Research-Based Principles Every Educator Should Know",
    authors: "Austin Volz, Julia Higdon, and William Lidwell",
    year: 2019,
    kind: "book",
    venue: "Routledge",
    href: "https://www.amazon.com/Elements-Education-Teachers-Austin-Volz/dp/1138294659",
  },
  {
    title:
      "The Elements of Education for Curriculum Designers: 50 Research-Based Principles Every Educator Should Know",
    authors: "Rebecca Strauss, Austin Volz, and William Lidwell",
    year: 2022,
    kind: "book",
    venue: "Routledge",
    href: "https://www.amazon.com/Elements-Education-Curriculum-Designers/dp/0367336944",
  },
  {
    title: "Navigating a Place in Global Education",
    authors: "Austin X. Volz",
    year: 2017,
    kind: "paper",
    venue: "One Student at a Time",
    note: "pp. 119–122",
    href: "https://scholar.google.com/citations?user=H-6Vrd8AAAAJ&hl=en",
  },
  {
    title:
      "Walking Bridges: Placing the Liberal Arts and Sciences between Secondary and Higher Education",
    authors: "Austin X. Volz",
    year: 2017,
    kind: "paper",
    venue: "International Journal of Chinese Education",
    href: "https://doi.org/10.1163/22125868-12340063",
  },
  {
    title:
      "Access, Quality, and Equity: International Perspectives on Compulsory Education Provision",
    authors: "T. Zhang, Austin Volz, and others",
    year: 2016,
    kind: "paper",
    venue: "China Democracy and Legal System Publishing House",
    note: "editor",
  },
  {
    title:
      "Beyond Commonplace Definitions: Dewey's Conceptions of Democracy and Education in Democracy and Education, Collected Perspectives",
    authors: "Austin Volz",
    year: 2014,
    kind: "paper",
    venue: "Democracy and Education: Collected Perspectives",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H-6Vrd8AAAAJ&citation_for_view=H-6Vrd8AAAAJ:W7OEmFMy1HYC",
  },
  {
    title: "21st Century Skills and Liberal Education: How akin are they?",
    authors: "Austin X. Volz",
    year: 2013,
    kind: "paper",
    venue: "HGSE Student Research Conference",
    href: "https://scholar.google.com/citations?user=H-6Vrd8AAAAJ&hl=en",
  },
];
