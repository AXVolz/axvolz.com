export type Place = {
  slug: string;
  city: string;
  region?: string;
  country: string;
  note: string;
  short: string;
  photo?: string;
  photoAlt?: string;
  ghost?: {
    text: string;
    lang: "el" | "zh";
  };
};

export function cityName(place: Place): string {
  return place.city;
}

export function localityLine(place: Place): string {
  return place.region ? `${place.region}, ${place.country}` : place.country;
}

export function placeLabel(place: Place): string {
  return place.region
    ? `${place.city}, ${place.region}, ${place.country}`
    : `${place.city}, ${place.country}`;
}

/** Dark rock left of San Mateo, under the dense gold lattice (image % of lived-golden-hour.png). */
export const livedCave = [75.4, 79.2] as const;

/** Sixteen points on the golden-hour mountain (image % of lived-golden-hour.png). */
export const ridgePts = [
  [44.0, 70.5],
  [46.0, 67.0],
  [47.4, 65.0],
  [51.8, 60.5],
  [56.0, 53.0],
  [60.2, 53.0],
  [64.4, 46.0],
  [81.5, 32.0],
  [80.5, 39.5],
  [80.4, 45.5],
  [80.6, 52.0],
  [81.4, 56.0],
  [82.8, 64.5],
  [84.6, 68.0],
  [86.6, 72.0],
  [89.0, 77.0],
] as const;

export const places: Place[] = [
  {
    slug: "durango",
    city: "Durango",
    region: "Colorado",
    country: "USA",
    note: "Grew up rock climbing and reading",
    short: "Grew up",
    photo: "/places/durango.jpg",
    photoAlt: "High country near Durango, Colorado",
  },
  {
    slug: "santa-fe",
    city: "Santa Fe",
    region: "New Mexico",
    country: "USA",
    note: "Attended St. John's College, fell in love with Ancient Greek",
    short: "Great Books at St. John's College",
    photo: "/places/santa-fe.png",
    photoAlt: "Campus courtyard at St. John's College, Santa Fe",
  },
  {
    slug: "messolonghi",
    city: "Messolonghi",
    country: "Greece",
    note:
      "Found a job teaching English. Later worked on a farm in the southern Peloponnese.",
    short: "Taught English, later worked on a farm",
    photo: "/places/messolonghi.png",
    photoAlt: "A boardwalk across the lagoon at Messolonghi",
    ghost: { text: "Μεσολόγγι", lang: "el" },
  },
  {
    slug: "gottingen",
    city: "Göttingen",
    country: "Germany",
    note: "Studied German at the Goethe Institute",
    short: "Studied German",
    photo: "/places/gottingen.png",
    photoAlt: "The Gänseliesel fountain in Göttingen",
  },
  {
    slug: "santa-fe-2",
    city: "Santa Fe",
    region: "New Mexico",
    country: "USA",
    note:
      "Finished at St. John's College, started teaching myself Classical Chinese.",
    short: "Great Books and Classical Chinese at St. John's College",
    photo: "/places/santa-fe.png",
    photoAlt: "Campus courtyard at St. John's College, Santa Fe",
  },
  {
    slug: "dresden",
    city: "Dresden",
    country: "Germany",
    note: "Taught English on a Fulbright Fellowship.",
    short: "Fulbright, taught English",
    photo: "/places/dresden.png",
    photoAlt: "Dresden’s old city across the Elbe at night",
  },
  {
    slug: "ithaca",
    city: "Ithaca",
    region: "New York",
    country: "USA",
    note:
      "Studied Mandarin on a full-ride at Cornell's Full-year Asian Language Concentration (FALCON).",
    short: "Studied Mandarin at Cornell",
    photo: "/places/ithaca.png",
    photoAlt: "A heron on Beebe Lake in Ithaca, New York",
  },
  {
    slug: "beijing",
    city: "Beijing",
    country: "China",
    note: "Studied Mandarin at Peking University",
    short: "Studied Mandarin at Peking University",
    photo: "/places/beijing.png",
    photoAlt: "The Great Wall in the mountains near Beijing",
    ghost: { text: "北京", lang: "zh" },
  },
  {
    slug: "bayreuth",
    city: "Bayreuth",
    country: "Germany",
    note:
      "Worked at a classical music festival as an event manager. Also worked on a farm making cheese.",
    short: "Classical music festival and worked on a farm",
    photo: "/places/bayreuth.png",
    photoAlt: "A house in the fields near Bayreuth, Germany",
  },
  {
    slug: "beijing-jump",
    city: "Beijing",
    country: "China",
    note: "Ran experiential learning programs at the JUMP! Foundation",
    short: "Experiential education manager",
    photo: "/places/beijing.png",
    photoAlt: "The Great Wall in the mountains near Beijing",
    ghost: { text: "北京", lang: "zh" },
  },
  {
    slug: "cambridge",
    city: "Cambridge",
    region: "Massachusetts",
    country: "USA",
    note: "Studied International Education Policy at Harvard",
    short: "Studied education at Harvard",
    photo: "/places/cambridge.png",
    photoAlt: "Mallinckrodt Chemical Laboratory at Harvard in autumn",
  },
  {
    slug: "chengdu",
    city: "Chengdu",
    region: "Sichuan",
    country: "China",
    note:
      "Studied Mandarin on a State Department Critical Language Scholarship",
    short: "Studied Mandarin",
    photo: "/places/chengdu.png",
    photoAlt: "Giant pandas at the breeding base in Chengdu",
    ghost: { text: "成都", lang: "zh" },
  },
  {
    slug: "shanghai",
    city: "Shanghai",
    country: "China",
    note:
      "Researched liberal arts education in China as a visiting scholar at Fudan University. Funded by a Harvard China Scholarship.",
    short: "Research liberal arts education at Fudan University",
    photo: "/places/shanghai.png",
    photoAlt: "The Huangpu River and Shanghai skyline at night",
    ghost: { text: "上海", lang: "zh" },
  },
  {
    slug: "beijing-avenues",
    city: "Beijing",
    country: "China",
    note:
      "Joined Avenues The World School as part of the startup team for a Beijing campus.",
    short: "Campus startup with Avenues The World School",
    photo: "/places/beijing.png",
    photoAlt: "The Great Wall in the mountains near Beijing",
    ghost: { text: "北京", lang: "zh" },
  },
  {
    slug: "new-york",
    city: "New York",
    region: "New York",
    country: "USA",
    note: "Education R&D with Avenues The World School",
    short: "Education R&D with Avenues The World School",
    photo: "/places/new-york.png",
    photoAlt: "The Flatiron Building and Madison Square Park at sunset",
  },
  {
    slug: "san-mateo",
    city: "San Mateo",
    region: "California",
    country: "USA",
    note: "Currently",
    short: "Building I.GURU and serving on the Library Board",
    photo: "/places/san-mateo.png",
    photoAlt: "Sea stacks and surf on the coast near San Mateo",
  },
];
