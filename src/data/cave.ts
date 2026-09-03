export type CaveScene = {
  src: string;
  alt: string;
};

export type CaveStory = {
  slug: string;
  title: string;
  when: string;
  note?: string;
  intro?: string;
  photo: string;
  photoAlt: string;
  locked: boolean;
  scenes?: CaveScene[];
};

export const caveStories: CaveStory[] = [
  {
    slug: "zhejiang-2014",
    title: "Spring Festival, Zhejiang",
    when: "China, 2014",
    intro:
      "While at Fudan I visited a friend from Harvard to spend Spring Festival an hour north of Wenzhou. It provided an extraordinary glimpse into a village worlds apart from my life in Shanghai. These are some scenes from that time.",
    photo: "/cave/zhejiang.jpg",
    photoAlt: "Red firecracker paper on a village lane at night",
    locked: false,
    scenes: [
      {
        src: "/cave/zhejiang/01.jpg",
        alt: "Lanterns, candles, and incense at a household altar",
      },
      {
        src: "/cave/zhejiang/02.jpg",
        alt: "Hands folding gold joss paper",
      },
      {
        src: "/cave/zhejiang/04.jpg",
        alt: "A goat seen through a wooden gateway",
      },
      {
        src: "/cave/zhejiang/03.jpg",
        alt: "A courtyard during butchering",
      },
      {
        src: "/cave/zhejiang/05.jpg",
        alt: "Steaming nian gao, a child watching",
      },
      {
        src: "/cave/zhejiang/06.jpg",
        alt: "A village on water, mountains beyond",
      },
      {
        src: "/cave/zhejiang/08.jpg",
        alt: "A porch with couplets and hanging cured meats",
      },
      {
        src: "/cave/zhejiang/10.jpg",
        alt: "Baskets of drying cubes in a dim room",
      },
      {
        src: "/cave/zhejiang/11.jpg",
        alt: "A rock with red papers",
      },
      {
        src: "/cave/zhejiang/12.jpg",
        alt: "A tiled doorway and stone plaque",
      },
      {
        src: "/cave/zhejiang/13.jpg",
        alt: "A village in a mountain valley",
      },
      {
        src: "/cave/zhejiang/14.jpg",
        alt: "Children burning joss paper at a stone shrine",
      },
    ],
  },
  {
    slug: "mystraki-2006",
    title: "Farm work, Mystraki",
    when: "Greece, 2006",
    note: "Lessons from the land and the people.",
    photo: "/cave/mystraki.jpg",
    photoAlt: "A cobbled lane in a Greek village at dusk",
    locked: true,
  },
  {
    slug: "yunnan-2012",
    title: "Spring Festival, Yunnan",
    when: "China, 2012",
    note: "Mountains, traditions, and old friends.",
    photo: "/cave/yunnan.jpg",
    photoAlt: "Misty pine ridges at golden hour",
    locked: true,
  },
  {
    slug: "gansu-2014",
    title: "Hitchhiking in Gansu",
    when: "China, 2014",
    note: "The road, strangers, and unexpected kindness.",
    photo: "/cave/gansu.jpg",
    photoAlt: "An empty highway through mountains",
    locked: true,
  },
  {
    slug: "lanzhou-2014",
    title: "The people’s place, Lanzhou",
    when: "China, 2014",
    note: "Noodles, conversations, and a city by the river.",
    photo: "/cave/lanzhou.jpg",
    photoAlt: "A brightly lit city street at night",
    locked: true,
  },
];

export function caveStory(slug: string): CaveStory | undefined {
  return caveStories.find((story) => story.slug === slug);
}
