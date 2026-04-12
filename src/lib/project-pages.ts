import { visibleWorkProjects } from "./work-projects";

export type ProjectPageFact = {
  label: string;
  value: string;
};

export type ProjectPageSection =
  | {
      id: string;
      type: "image";
      src: string;
      alt: string;
      fit?: "cover" | "contain";
      backgroundColor?: string;
      bordered?: boolean;
    }
  | {
      id: string;
      type: "video";
      src: string;
      posterSrc?: string;
      fit?: "cover" | "contain";
      backgroundColor?: string;
      bordered?: boolean;
    }
  | {
      id: string;
      type: "placeholder";
      title?: string;
      backgroundColor?: string;
      titleColor?: string;
    }
  | {
      id: string;
      type: "callout";
      title: string;
      body: string;
    };

export type ProjectPageData = {
  slug: string;
  title: string;
  year: string;
  subtitle?: string;
  intro: string[];
  facts: ProjectPageFact[];
  hero: {
    backgroundColor: string;
    backgroundImageSrc?: string;
    backgroundVideoSrc?: string;
    logoSrc?: string;
    logoAlt?: string;
    hideFallbackTitle?: boolean;
  };
  sections: ProjectPageSection[];
  summary?: string;
  nextProject: {
    slug: string;
    title: string;
    category: string;
    year: string;
    videoSrc?: string;
    imageSrc?: string;
    imageAlt?: string;
    backgroundColor?: string;
    logoSrc?: string;
    logoAlt?: string;
  };
};

type ProjectStub = {
  slug: string;
  title: string;
  year: string;
};

const projectOrder: ProjectStub[] = [
  { slug: "adaps", title: "Adaps", year: "2025" },
  {
    slug: "sanctuary-in-the-woods",
    title: "Sanctuary in the Woods",
    year: "2025",
  },
  { slug: "holmes-ai", title: "Holmes AI", year: "2025" },
  { slug: "helios-stones", title: "Helios", year: "2025" },
  { slug: "elora", title: "Elora", year: "2025" },
  { slug: "one-downtown", title: "One Downtown", year: "2024" },
  { slug: "charminar-gin", title: "Charminar Gin", year: "2025" },
  { slug: "snn-raj-corp", title: "SNN Raj Corp", year: "2022" },
  { slug: "rydon", title: "Rydon", year: "2023" },
  { slug: "viscomm", title: "Loyola Viscomm", year: "2021" },
  { slug: "nhempco", title: "Nhempco", year: "2021" },
  { slug: "e5-hospitality", title: "E5 Hospitality", year: "2024" },
  { slug: "totspot", title: "Totspot", year: "2021" },
  { slug: "ace-dellago", title: "ACE Dellago", year: "2025" },
  { slug: "rootcos", title: "Rootcos", year: "2023" },
  {
    slug: "parentheses-showreel",
    title: "Parentheses Showreel",
    year: "2022",
  },
];

const workCaseStudyOrder: ProjectStub[] = [
  { slug: "adaps", title: "Adaps", year: "2025" },
  {
    slug: "sanctuary-in-the-woods",
    title: "Sanctuary in the Woods",
    year: "2025",
  },
  { slug: "elora", title: "Elora", year: "2025" },
  { slug: "helios-stones", title: "Helios", year: "2024" },
  { slug: "one-downtown", title: "One Downtown", year: "2024" },
  { slug: "viscomm", title: "Loyola Viscomm", year: "2021" },
  { slug: "snn-raj-corp", title: "SNN Raj Corp", year: "2022" },
  { slug: "rydon", title: "Rydon", year: "2023" },
  { slug: "nhempco", title: "Nhempco", year: "2021" },
  { slug: "totspot", title: "Totspot", year: "2021" },
  { slug: "e5-hospitality", title: "E5 Hospitality", year: "2024" },
  { slug: "ace-dellago", title: "ACE Dellago", year: "2025" },
  { slug: "rootcos", title: "Rootcos", year: "2023" },
  { slug: "charminar-gin", title: "Charminar Gin", year: "2025" },
  { slug: "holmes-ai", title: "Holmes AI", year: "2025" },
];

const nextProjectPreviewFallback: Record<
  string,
  Pick<
    ProjectPageData["nextProject"],
    | "videoSrc"
    | "imageSrc"
    | "imageAlt"
    | "backgroundColor"
    | "logoSrc"
    | "logoAlt"
  >
> = {
  adaps: {
    videoSrc: "/thumbnails/Adaps.mp4",
    imageAlt: "Adaps IT preview video",
  },
  "sanctuary-in-the-woods": {
    imageSrc: "/thumbnails/SITW.png",
    imageAlt: "Sanctuary in the Woods preview",
  },
  elora: {
    imageSrc: "/thumbnails/Elora.png",
    imageAlt: "Elora preview",
  },
  "helios-stones": {
    videoSrc: "/thumbnails/Helios%20Thumbnail.mp4",
    imageAlt: "Helios preview video",
  },
  "one-downtown": {
    imageSrc: "/videos/thumbnails/onedowntown.png",
    imageAlt: "One Downtown preview",
  },
  "viscomm": {
    videoSrc: "/thumbnails/Viscomm.mp4",
    imageAlt: "Loyola Viscomm preview",
  },
  "snn-raj-corp": {
    videoSrc: "/thumbnails/SNN.mp4",
    imageAlt: "SNN Raj Corp preview video",
  },
  rydon: {
    videoSrc: "/thumbnails/Rydon.mp4",
    imageAlt: "Rydon preview video",
  },
  nhempco: {
    videoSrc: "/thumbnails/Nhempco.mp4",
    imageAlt: "Nhempco preview video",
  },
  totspot: {
    videoSrc: "/thumbnails/Totspot.mp4",
    imageAlt: "Totspot preview video",
  },
  "e5-hospitality": {
    imageSrc: "/thumbnails/E5.png",
    imageAlt: "E5 Hospitality preview",
  },
  "ace-dellago": {
    imageSrc: "/thumbnails/DelLago.png",
    imageAlt: "ACE Dellago preview",
  },
  rootcos: {
    imageSrc: "/thumbnails/Rootcos.png",
    imageAlt: "Rootcos preview",
  },
  "charminar-gin": {
    imageSrc: "/thumbnails/Charminar.png",
    imageAlt: "Charminar Gin preview",
  },
  "holmes-ai": {
    imageSrc: "/HolmesAI-cover.png",
    imageAlt: "Holmes AI preview",
  },
};

const adapsPage: ProjectPageData = {
  slug: "adaps",
  title: "Adaps",
  year: "2025",
  intro: [
    "With over 60 years shaping Australia’s technology landscape, ADAPS stands as the nation’s oldest, most trusted IT partner. Their legacy of innovation, industry partnerships, and enduring client relationships set the stage for a new challenge: to evolve their visual identity while honouring their heritage and reinforcing their reputation with today’s decision-makers.",
    "This project wasn’t about starting over, it was about carefully bridging six decades of trust with a sophisticated new visual language that would propel Adaps confidently into the future.",
  ],
  facts: [
    { label: "Client", value: "Adaps IT Pvt. Ltd." },
    { label: "Studio/Team", value: "Independent" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#143b86",
    backgroundImageSrc: "/Adaps%20Screens/adaps-logo-full-bleed.svg",
    hideFallbackTitle: true,
  },
  sections: [
    {
      id: "adaps-screen-2",
      type: "image",
      src: "/Adaps%20Screens/2.png",
      alt: "Adaps screen 2",
    },
    {
      id: "adaps-screen-3",
      type: "image",
      src: "/Adaps%20Screens/3.png",
      alt: "Adaps screen 3",
    },
    {
      id: "adaps-screen-4",
      type: "image",
      src: "/Adaps%20Screens/4.png",
      alt: "Adaps screen 4",
    },
    {
      id: "adaps-screen-5",
      type: "image",
      src: "/Adaps%20Screens/5.png",
      alt: "Adaps screen 5",
    },
    {
      id: "adaps-screen-6",
      type: "video",
      src: "/Adaps%20Screens/6.mp4",
    },
    {
      id: "adaps-screen-7",
      type: "image",
      src: "/Adaps%20Screens/7.jpg",
      alt: "Adaps screen 7",
    },
    {
      id: "adaps-screen-8",
      type: "image",
      src: "/Adaps%20Screens/8.png",
      alt: "Adaps screen 8",
    },
    {
      id: "adaps-screen-9",
      type: "video",
      src: "/Adaps%20Screens/9.mp4",
    },
    {
      id: "adaps-screen-10",
      type: "image",
      src: "/Adaps%20Screens/10.png",
      alt: "Adaps screen 10",
    },
    {
      id: "adaps-screen-11",
      type: "image",
      src: "/Adaps%20Screens/11.png",
      alt: "Adaps screen 11",
    },
    {
      id: "adaps-screen-12",
      type: "image",
      src: "/Adaps%20Screens/12.jpg",
      alt: "Adaps screen 12",
    },
    {
      id: "adaps-screen-13",
      type: "image",
      src: "/Adaps%20Screens/13.jpg",
      alt: "Adaps screen 13",
    },
    {
      id: "adaps-screen-14",
      type: "video",
      src: "/Adaps%20Screens/14.mp4",
    },
    {
      id: "adaps-screen-15",
      type: "video",
      src: "/Adaps%20Screens/15.mp4",
    },
    {
      id: "adaps-screen-16",
      type: "image",
      src: "/Adaps%20Screens/16.png",
      alt: "Adaps screen 16",
    },
    {
      id: "adaps-screen-17",
      type: "image",
      src: "/Adaps%20Screens/17.png",
      alt: "Adaps screen 17",
    },
    {
      id: "adaps-screen-18",
      type: "image",
      src: "/Adaps%20Screens/18.png",
      alt: "Adaps screen 18",
    },
    {
      id: "adaps-screen-19",
      type: "image",
      src: "/Adaps%20Screens/19.png",
      alt: "Adaps screen 19",
    },
    {
      id: "adaps-screen-20",
      type: "video",
      src: "/Adaps%20Screens/20.mp4",
    },
  ],
  summary:
    "The result is a refined and scalable identity system that communicates with clarity, reflects Adaps’ experience, and positions the brand as a modern, solution-focused global partner.",
  nextProject: {
    slug: "sanctuary-in-the-woods",
    title: "Sanctuary in the Woods",
    category: "Brand Identity Design",
    year: "2025",
    imageSrc: "/images/projects/adaps-it-2026/next-project-poster.jpg",
    imageAlt: "Sanctuary in the Woods poster preview",
  },
};

const sanctuaryPage: ProjectPageData = {
  slug: "sanctuary-in-the-woods",
  title: "Sanctuary in the Woods",
  year: "2025",
  intro: [
    "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
    "Sanctuary in the Woods is not just another plotted development project, it's a nature-first retreat designed for those seeking clarity, calm, and connection. My approach was to translate this ethos into a brand that doesn’t speak louder than nature, but flows with it.",
    "Over the course of 2 months, I designed the entire brand identity, from the logo and visual system to the brochure, type system, and messaging. And yes! I had a lot of fun doing it.",
  ],
  facts: [
    { label: "Client", value: "Sanctuary in the Woods" },
    { label: "Studio/Team", value: "Studio 318 India" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#6d7750",
    backgroundImageSrc: "/images/projects/sanctuary-in-the-woods-2025/hero.jpg",
    hideFallbackTitle: true,
  },
  sections: [
    {
      id: "sanctuary-1-video",
      type: "video",
      src: "/Sanctuary%20in%20the%20woods/1.mp4",
    },
    {
      id: "sanctuary-1-image",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/1.png",
      alt: "Sanctuary in the Woods media 1",
    },
    {
      id: "sanctuary-2",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/2.png",
      alt: "Sanctuary in the Woods media 2",
    },
    {
      id: "sanctuary-3",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/3.png",
      alt: "Sanctuary in the Woods media 3",
    },
    {
      id: "sanctuary-4",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/4.png",
      alt: "Sanctuary in the Woods media 4",
    },
    {
      id: "sanctuary-5",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/5.png",
      alt: "Sanctuary in the Woods media 5",
    },
    {
      id: "sanctuary-6",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/6.png",
      alt: "Sanctuary in the Woods media 6",
    },
    {
      id: "sanctuary-7",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/7.png",
      alt: "Sanctuary in the Woods media 7",
    },
    {
      id: "sanctuary-8",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/8.png",
      alt: "Sanctuary in the Woods media 8",
    },
    {
      id: "sanctuary-9",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/9.png",
      alt: "Sanctuary in the Woods media 9",
    },
    {
      id: "sanctuary-10",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/10.png",
      alt: "Sanctuary in the Woods media 10",
    },
    {
      id: "sanctuary-11",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/11.png",
      alt: "Sanctuary in the Woods media 11",
    },
    {
      id: "sanctuary-12",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/12.png",
      alt: "Sanctuary in the Woods media 12",
    },
    {
      id: "sanctuary-13",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/13.png",
      alt: "Sanctuary in the Woods media 13",
    },
    {
      id: "sanctuary-14",
      type: "video",
      src: "/Sanctuary%20in%20the%20woods/14.mp4",
    },
    {
      id: "sanctuary-15",
      type: "video",
      src: "/Sanctuary%20in%20the%20woods/15.mp4",
    },
    {
      id: "sanctuary-16",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/16.png",
      alt: "Sanctuary in the Woods media 16",
    },
    {
      id: "sanctuary-17",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/17.png",
      alt: "Sanctuary in the Woods media 17",
    },
    {
      id: "sanctuary-18",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/18.png",
      alt: "Sanctuary in the Woods media 18",
    },
    {
      id: "sanctuary-20",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/20.png",
      alt: "Sanctuary in the Woods media 20",
    },
    {
      id: "sanctuary-21",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/21.png",
      alt: "Sanctuary in the Woods media 21",
    },
    {
      id: "sanctuary-22",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/22.png",
      alt: "Sanctuary in the Woods media 22",
    },
    {
      id: "sanctuary-23",
      type: "image",
      src: "/Sanctuary%20in%20the%20woods/23.png",
      alt: "Sanctuary in the Woods media 23",
    },
    {
      id: "sanctuary-24",
      type: "video",
      src: "/Sanctuary%20in%20the%20woods/24.mp4",
    },
  ],
  summary:
    "Sanctuary in the Woods was a chance to slow down and listen. To design with intention, and to build an identity that doesn’t overpower, but coexists. In two months, we created a system that feels rooted, honest, and alive.",
  nextProject: {
    slug: "holmes-ai",
    title: "Holmes AI",
    category: "Brand Identity Design",
    year: "2025",
    backgroundColor: "#062d33",
    logoSrc:
      "/images/projects/sanctuary-in-the-woods-2025/next-project-logo.svg",
    logoAlt: "Holmes AI logo",
  },
};

const eloraPage: ProjectPageData = {
  slug: "elora",
  title: "Elora",
  intro: [
    "Elora is envisioned as Andhra Pradesh’s first Grade A commercial office tower, positioned in Vizag’s emerging business corridor. The project is not just about creating office space, it is about establishing a new benchmark for how businesses experience infrastructure in the state.",
    "This case study captures the process of building a brand that reflects this shift, from identity to communication, and finally, to a printed experience that carries the same weight as the architecture itself.",
  ],
  year: "2025",
  facts: [
    { label: "Client", value: "LANSUM GOLKONDA Developers" },
    { label: "Studio/Team", value: "Studio 318 India" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#101614",
    backgroundImageSrc: "/Elora/full-width-elora-hero.png",
    hideFallbackTitle: true,
  },
  sections: [
    {
      id: "elora-1",
      type: "video",
      src: "/Elora/1.mp4",
    },
    {
      id: "elora-2",
      type: "video",
      src: "/Elora/2.mp4",
      bordered: true,
    },
    {
      id: "elora-3",
      type: "image",
      src: "/Elora/3.png",
      alt: "Elora media 3",
    },
    {
      id: "elora-4",
      type: "image",
      src: "/Elora/4.png",
      alt: "Elora media 4",
    },
    {
      id: "elora-5",
      type: "image",
      src: "/Elora/5.png",
      alt: "Elora media 5",
    },
    {
      id: "elora-6",
      type: "image",
      src: "/Elora/6.png",
      alt: "Elora media 6",
    },
    {
      id: "elora-7",
      type: "image",
      src: "/Elora/7.png",
      alt: "Elora media 7",
      bordered: true,
    },
    {
      id: "elora-8",
      type: "image",
      src: "/Elora/8.png",
      alt: "Elora media 8",
    },
    {
      id: "elora-9",
      type: "video",
      src: "/Elora/9.mp4",
    },
    {
      id: "elora-10",
      type: "image",
      src: "/Elora/10.png",
      alt: "Elora media 10",
      bordered: true,
    },
    {
      id: "elora-11",
      type: "image",
      src: "/Elora/11.png",
      alt: "Elora media 11",
    },
    {
      id: "elora-12",
      type: "video",
      src: "/Elora/12.mp4",
    },
    {
      id: "elora-13",
      type: "image",
      src: "/Elora/13.png",
      alt: "Elora media 13",
    },
    {
      id: "elora-14",
      type: "image",
      src: "/Elora/14.png",
      alt: "Elora media 14",
    },
    {
      id: "elora-15",
      type: "image",
      src: "/Elora/15.png",
      alt: "Elora media 15",
    },
    {
      id: "elora-16",
      type: "image",
      src: "/Elora/16.jpg",
      alt: "Elora media 16",
    },
    {
      id: "elora-17",
      type: "image",
      src: "/Elora/17.png",
      alt: "Elora media 17",
    },
    {
      id: "elora-18",
      type: "image",
      src: "/Elora/18.png",
      alt: "Elora media 18",
    },
    {
      id: "elora-19",
      type: "image",
      src: "/Elora/19.png",
      alt: "Elora media 19",
    },
    {
      id: "elora-20",
      type: "image",
      src: "/Elora/20.png",
      alt: "Elora media 20",
    },
    {
      id: "elora-21",
      type: "image",
      src: "/Elora/21.png",
      alt: "Elora media 21",
    },
    {
      id: "elora-22",
      type: "image",
      src: "/Elora/22.png",
      alt: "Elora media 22",
    },
  ],
  summary:
    "The challenge was not to make it look premium, but to make it feel certain. To move away from decorative luxury and towards something more enduring, structure, clarity, and quiet confidence. In the end, the project became less about branding a building, and more about defining a standard.",
  nextProject: {
    slug: "charminar-gin",
    title: "Charminar Gin",
    category: "Brand Identity Design",
    year: "2025",
  },
};

function createScaffoldProjectPage(
  slug: string,
  title: string,
  year: string,
  nextProjectSlug?: string,
): ProjectPageData {
  const nextProject =
    projectOrder.find((project) => project.slug === nextProjectSlug) ??
    getNextProject(slug);

  return {
    slug,
    title,
    year,
    intro: [
      `${title} now has a dedicated project route in the shared long-form case study system.`,
      "Content, images, and final art direction can be layered into this page without rebuilding the structure.",
    ],
    facts: [
      { label: "Status", value: "Case study in progress" },
      { label: "Year", value: year },
      { label: "Layout", value: "Shared project page system" },
    ],
    hero: {
      backgroundColor: "#d1d2d6",
    },
    sections: [
      {
        id: "overview",
        type: "placeholder",
        title: title,
      },
      {
        id: "gallery-1",
        type: "placeholder",
      },
      {
        id: "gallery-2",
        type: "placeholder",
      },
    ],
    summary:
      "This page scaffold is ready for project-specific content whenever the design and asset set are available.",
    nextProject: {
      slug: nextProject.slug,
      title: nextProject.title,
      category: "Brand Identity Design",
      year: nextProject.year,
    },
  };
}

const heliosPage: ProjectPageData = {
  slug: "helios-stones",
  title: "Helios",
  year: "2025",
  intro: [
    "Helios, a leader in luxury stone, and largest stone atelier in the country, needed a brand identity that reflected their heritage and quality. Through careful design, we crafted an identity for them that reflected their heritage, quality, scale, and excellence.",
    "Helios Logo mark was created with the intersection of a circle and square - blend of stability and perfection, at the intersection lies ‘H’ symbolizing Helios.",
  ],
  facts: [
    { label: "Client", value: "Helios Stone Studio" },
    { label: "Studio/Team", value: "Parentheses Studio" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#101214",
    backgroundVideoSrc: "/Helios/1.mp4",
    hideFallbackTitle: true,
  },
  sections: [
    {
      id: "helios-2",
      type: "video",
      src: "/Helios/2.mp4",
    },
    {
      id: "helios-3",
      type: "image",
      src: "/Helios/3.png",
      alt: "Helios media 3",
    },
    {
      id: "helios-4",
      type: "video",
      src: "/Helios/4.mp4",
    },
    {
      id: "helios-5",
      type: "video",
      src: "/Helios/5.mp4",
    },
    {
      id: "helios-6",
      type: "image",
      src: "/Helios/6.png",
      alt: "Helios media 6",
    },
    {
      id: "helios-7",
      type: "image",
      src: "/Helios/7.png",
      alt: "Helios media 7",
    },
    {
      id: "helios-8",
      type: "video",
      src: "/Helios/8.mp4",
    },
    {
      id: "helios-9",
      type: "image",
      src: "/Helios/9.png",
      alt: "Helios media 9",
    },
    {
      id: "helios-10",
      type: "image",
      src: "/Helios/10.png",
      alt: "Helios media 10",
    },
    {
      id: "helios-11",
      type: "image",
      src: "/Helios/11.png",
      alt: "Helios media 11",
    },
    {
      id: "helios-12",
      type: "image",
      src: "/Helios/12.png",
      alt: "Helios media 12",
    },
    {
      id: "helios-13",
      type: "image",
      src: "/Helios/13.png",
      alt: "Helios media 13",
    },
    {
      id: "helios-14",
      type: "video",
      src: "/Helios/14.mp4",
    },
    {
      id: "helios-15",
      type: "image",
      src: "/Helios/15.png",
      alt: "Helios media 15",
    },
    {
      id: "helios-16",
      type: "image",
      src: "/Helios/16.png",
      alt: "Helios media 16",
    },
    {
      id: "helios-17",
      type: "video",
      src: "/Helios/17.mp4",
    },
    {
      id: "helios-18",
      type: "video",
      src: "/Helios/18.mp4",
    },
    {
      id: "helios-19",
      type: "image",
      src: "/Helios/19.png",
      alt: "Helios media 19",
    },
  ],
  summary:
    "Helios identity project marks a significant milestone in redefining the brand’s presence in stone industry. The final design is a reflection of helios’ dedicated to quality, sprawling atelier, and innate timelessness.",
  nextProject: {
    slug: "one-downtown",
    title: "One Downtown",
    category: "Brand Identity Design",
    year: "2024",
  },
};

const rydonPage: ProjectPageData = {
  slug: "rydon",
  title: "Rydon",
  year: "2023",
  intro: [
    "For 33+ years, Rydon has been keeping up with a demanding world, innovating ceaselessly to become one of India's prominent providers of power transmission solutions. By rebranding them, we found the sweet spot between old and new to give them an identity that was modern, but traditionally grounded in who they have been for over 3 decades.",
  ],
  facts: [
    { label: "Client", value: "Rydon" },
    { label: "Studio/Team", value: "Parentheses Studio" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#111111",
    backgroundVideoSrc: "/Rydon/Hero%20Image%201.mp4",
    hideFallbackTitle: true,
  },
  sections: [
    {
      id: "rydon-2",
      type: "image",
      src: "/Rydon/2.png",
      alt: "Rydon media 2",
    },
    {
      id: "rydon-3",
      type: "video",
      src: "/Rydon/3.mp4",
    },
    {
      id: "rydon-4",
      type: "image",
      src: "/Rydon/4.png",
      alt: "Rydon media 4",
    },
    {
      id: "rydon-3-5",
      type: "video",
      src: "/Rydon/3.5.mp4",
    },
    {
      id: "rydon-5",
      type: "image",
      src: "/Rydon/5.png",
      alt: "Rydon media 5",
    },
    {
      id: "rydon-6",
      type: "image",
      src: "/Rydon/6.png",
      alt: "Rydon media 6",
    },
    {
      id: "rydon-7",
      type: "image",
      src: "/Rydon/7.png",
      alt: "Rydon media 7",
    },
    {
      id: "rydon-8",
      type: "video",
      src: "/Rydon/8.mp4",
    },
    {
      id: "rydon-9",
      type: "image",
      src: "/Rydon/9.png",
      alt: "Rydon media 9",
    },
    {
      id: "rydon-10",
      type: "image",
      src: "/Rydon/10.png",
      alt: "Rydon media 10",
    },
    {
      id: "rydon-11",
      type: "image",
      src: "/Rydon/11.png",
      alt: "Rydon media 11",
    },
    {
      id: "rydon-14",
      type: "video",
      src: "/Rydon/14.mp4",
    },
    {
      id: "rydon-13",
      type: "image",
      src: "/Rydon/13.png",
      alt: "Rydon media 13",
    },
    {
      id: "rydon-14-alt",
      type: "image",
      src: "/Rydon/14-alt.png",
      alt: "Rydon media 14 alt",
    },
    {
      id: "rydon-15",
      type: "image",
      src: "/Rydon/15.png",
      alt: "Rydon media 15",
    },
    {
      id: "rydon-16",
      type: "image",
      src: "/Rydon/16.png",
      alt: "Rydon media 16",
    },
    {
      id: "rydon-17",
      type: "image",
      src: "/Rydon/17.png",
      alt: "Rydon media 17",
    },
    {
      id: "rydon-18",
      type: "image",
      src: "/Rydon/18.png",
      alt: "Rydon media 18",
    },
    {
      id: "rydon-19",
      type: "image",
      src: "/Rydon/19.png",
      alt: "Rydon media 19",
    },
    {
      id: "rydon-20",
      type: "image",
      src: "/Rydon/20.png",
      alt: "Rydon media 20",
    },
  ],
  summary:
    "The final outcome encompassed a strategically rebranded identity and enhanced packaging design. The transformation is not only visual but a testament to Rydon's commitment to progress and excellence.",
  nextProject: {
    slug: "viscomm",
    title: "Loyola Viscomm",
    category: "Brand Identity Design",
    year: "2021",
  },
};

const loyolaViscommPage: ProjectPageData = {
  slug: "viscomm",
  title: "Loyola Viscomm",
  year: "2021",
  intro: [
    "The department of visual communication at Andhra Loyola is the first in Andhra Pradesh to offer a UG degree in creative disciplines taught by a faculty comprising artists, writers, photographers, and designers. In my final year graduation, I was asked to re-design the viscomm department visual identity to bring more clarity and consistency for the department's visual language. I designed a simple and strong monogram that improves the recognizability of the Viscomm department.",
  ],
  facts: [
    { label: "Client", value: "Andhra Loyola College" },
    { label: "Studio/Team", value: "Graduation Project" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#0b1e2d",
    backgroundVideoSrc: "/Viscomm/Viscomm-hero.mp4",
    hideFallbackTitle: true,
  },
  sections: [
    {
      id: "viscomm-1",
      type: "video",
      src: "/Viscomm/1.mp4",
    },
    {
      id: "viscomm-2",
      type: "image",
      src: "/Viscomm/2.jpg",
      alt: "Viscomm media 2",
    },
    {
      id: "viscomm-3",
      type: "image",
      src: "/Viscomm/3.jpg",
      alt: "Viscomm media 3",
    },
    {
      id: "viscomm-4",
      type: "video",
      src: "/Viscomm/4.mp4",
    },
    {
      id: "viscomm-5",
      type: "image",
      src: "/Viscomm/5.jpg",
      alt: "Viscomm media 5",
    },
    {
      id: "viscomm-6",
      type: "image",
      src: "/Viscomm/6.jpg",
      alt: "Viscomm media 6",
    },
    {
      id: "viscomm-7",
      type: "video",
      src: "/Viscomm/7.mp4",
    },
    {
      id: "viscomm-8",
      type: "image",
      src: "/Viscomm/8.jpg",
      alt: "Viscomm media 8",
    },
    {
      id: "viscomm-9",
      type: "image",
      src: "/Viscomm/9.jpg",
      alt: "Viscomm media 9",
    },
    {
      id: "viscomm-10",
      type: "image",
      src: "/Viscomm/10.jpg",
      alt: "Viscomm media 10",
    },
    {
      id: "viscomm-11",
      type: "image",
      src: "/Viscomm/11.jpg",
      alt: "Viscomm media 11",
    },
    {
      id: "viscomm-12",
      type: "image",
      src: "/Viscomm/12.jpg",
      alt: "Viscomm media 12",
    },
    {
      id: "viscomm-13",
      type: "image",
      src: "/Viscomm/13.jpg",
      alt: "Viscomm media 13",
    },
    {
      id: "viscomm-14",
      type: "image",
      src: "/Viscomm/14.jpg",
      alt: "Viscomm media 14",
    },
    {
      id: "viscomm-15",
      type: "image",
      src: "/Viscomm/15.jpg",
      alt: "Viscomm media 15",
    },
    {
      id: "viscomm-16",
      type: "image",
      src: "/Viscomm/16.jpg",
      alt: "Viscomm media 16",
    },
    {
      id: "viscomm-17",
      type: "image",
      src: "/Viscomm/17.jpg",
      alt: "Viscomm media 17",
    },
    {
      id: "viscomm-18",
      type: "image",
      src: "/Viscomm/18.jpg",
      alt: "Viscomm media 18",
    },
    {
      id: "viscomm-19",
      type: "video",
      src: "/Viscomm/19.mp4",
    },
    {
      id: "viscomm-20",
      type: "image",
      src: "/Viscomm/20.jpg",
      alt: "Viscomm media 20",
    },
    {
      id: "viscomm-21",
      type: "image",
      src: "/Viscomm/21.jpg",
      alt: "Viscomm media 21",
    },
  ],
  summary:
    "Having a simple monogram with a clean typeface makes it look modern, represents the personality of the viscomm department. Using a clear graphic identity helped Viscomm to communicate more effectively and consistently across their communication collaterals.",
  nextProject: {
    slug: "nhempco",
    title: "Nhempco",
    category: "Brand Identity Design",
    year: "2021",
  },
};

const nhempco2021Page: ProjectPageData = {
  slug: "nhempco",
  title: "Nhempco",
  year: "2021",
  intro: [
    "Namratha hemp company is a bangalore based hemp research and development company, I was worked on their logo redesign process. The logo was created using a simple, yet unique, approach.",
    "I designed a hemp leaf visual motif with a tear drop to set it apart from other hemp leaf logos and a smooth rhombus acting as a container, making it a very strong and well-balanced brand motif.",
  ],
  facts: [
    { label: "Client", value: "Namrata Hemp Company" },
    { label: "Studio/Team", value: "Parentheses Studio" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#111111",
    backgroundVideoSrc: "/Nhempco/Nhempco-hero.mp4",
    hideFallbackTitle: true,
  },
  sections: [
    {
      id: "nhempco-1",
      type: "video",
      src: "/Nhempco/1.mp4",
    },
    {
      id: "nhempco-2",
      type: "image",
      src: "/Nhempco/2.jpg",
      alt: "Nhempco media 2",
    },
    {
      id: "nhempco-3",
      type: "image",
      src: "/Nhempco/3%20Big%20Screen.png",
      alt: "Nhempco media 3",
    },
    {
      id: "nhempco-4-png",
      type: "image",
      src: "/Nhempco/4.png",
      alt: "Nhempco media 4",
    },
    {
      id: "nhempco-5",
      type: "image",
      src: "/Nhempco/5.png",
      alt: "Nhempco media 5",
    },
    {
      id: "nhempco-4",
      type: "video",
      src: "/Nhempco/4.mp4",
    },
    {
      id: "nhempco-logo",
      type: "image",
      src: "/Nhempco/logo.jpg",
      alt: "Nhempco logo application",
    },
    {
      id: "nhempco-6",
      type: "image",
      src: "/Nhempco/6.jpg",
      alt: "Nhempco media 6",
    },
    {
      id: "nhempco-8",
      type: "image",
      src: "/Nhempco/8.jpg",
      alt: "Nhempco media 8",
    },
    {
      id: "nhempco-9",
      type: "image",
      src: "/Nhempco/9.png",
      alt: "Nhempco media 9",
    },
    {
      id: "nhempco-7",
      type: "image",
      src: "/Nhempco/7.png",
      alt: "Nhempco media 7",
    },
    {
      id: "nhempco-11",
      type: "image",
      src: "/Nhempco/11.jpg",
      alt: "Nhempco media 11",
    },
    {
      id: "nhempco-10",
      type: "image",
      src: "/Nhempco/10.png",
      alt: "Nhempco media 10",
    },
    {
      id: "nhempco-sign",
      type: "image",
      src: "/Nhempco/sign.jpg",
      alt: "Nhempco signage application",
    },
  ],
  summary:
    "I used the natural meaning of a hemp leaf while designing the logo mark for NHEMP CO. However, I added a distinctive touch by putting a tiny drop at the top, elevating it among the conventional leaf logos. This distinguishing feature conveys the essence of the brand in a memorable way.",
  nextProject: {
    slug: "e5-hospitality",
    title: "E5 Hospitality",
    category: "Brand Identity Design",
    year: "2024",
  },
};

const e5HospitalityPage: ProjectPageData = {
  slug: "e5-hospitality",
  title: "E5 Hospitality",
  year: "2024",
  intro: [
    "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
    "Sanctuary in the Woods is not just another plotted development project, it's a nature-first retreat designed for those seeking clarity, calm, and connection. My approach was to translate this ethos into a brand that doesn’t speak louder than nature, but flows with it.",
    "Over the course of 2 months, I designed the entire brand identity, from the logo and visual system to the brochure, type system, and messaging. And yes! I had a lot of fun doing it.",
  ],
  facts: [
    { label: "Client", value: "E5 Hospitality" },
    { label: "Studio/Team", value: "Parentheses Studio" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#6f7158",
    backgroundImageSrc: "/e5-cover.png",
    hideFallbackTitle: true,
  },
  sections: [],
  summary: "Coming Soon",
  nextProject: {
    slug: "totspot",
    title: "Totspot",
    category: "Brand Identity Design",
    year: "2021",
  },
};

const totspot2021Page: ProjectPageData = {
  slug: "totspot",
  title: "Totspot",
  year: "2021",
  intro: [
    "Totspot believes that children deserve a magical and inspiring space to grow, play, and dream. Their expertly crafted furniture is designed with both safety and functionality in mind, ensuring that each piece brings joy and comfort to little ones. I was involved in developing brand Identity for the totspot.",
    "The Totspot Brand Identity captured the essence of the brand and connected with both kids and parents. The Fun and colorful design elements and typography created an engaging brand image, while the clean and simple layouts conveyed a trustworthy and professional look.",
  ],
  facts: [
    { label: "Client", value: "Totspot" },
    { label: "Studio/Team", value: "Parentheses Studio" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#f2efe8",
    backgroundVideoSrc: "/totspot/Totspot-hero.mp4",
    hideFallbackTitle: true,
  },
  sections: [
    {
      id: "totspot-1",
      type: "image",
      src: "/totspot/1.png",
      alt: "Totspot media 1",
    },
    {
      id: "totspot-2-screens",
      type: "image",
      src: "/totspot/2_Screens.jpg",
      alt: "Totspot screen presentation 2",
    },
    {
      id: "totspot-logo-construction",
      type: "video",
      src: "/totspot/Logo_Contruction.mp4",
    },
    {
      id: "totspot-tagline",
      type: "video",
      src: "/totspot/Totspot%20Tagline.mp4",
    },
    {
      id: "totspot-4",
      type: "image",
      src: "/totspot/4.png",
      alt: "Totspot media 4",
    },
    {
      id: "totspot-5",
      type: "image",
      src: "/totspot/5.png",
      alt: "Totspot media 5",
    },
    {
      id: "totspot-6",
      type: "image",
      src: "/totspot/6.png",
      alt: "Totspot media 6",
    },
    {
      id: "totspot-7",
      type: "image",
      src: "/totspot/7.png",
      alt: "Totspot media 7",
    },
    {
      id: "totspot-8",
      type: "image",
      src: "/totspot/8.png",
      alt: "Totspot media 8",
    },
    {
      id: "totspot-9",
      type: "image",
      src: "/totspot/9.png",
      alt: "Totspot media 9",
    },
    {
      id: "totspot-10",
      type: "image",
      src: "/totspot/10.png",
      alt: "Totspot media 10",
    },
    {
      id: "totspot-11",
      type: "image",
      src: "/totspot/11.png",
      alt: "Totspot media 11",
    },
    {
      id: "totspot-12",
      type: "image",
      src: "/totspot/12.png",
      alt: "Totspot media 12",
    },
    {
      id: "totspot-4-screens",
      type: "image",
      src: "/totspot/4_Screens.jpg",
      alt: "Totspot screen presentation 4",
    },
    {
      id: "totspot-6-screens",
      type: "image",
      src: "/totspot/6_Screens.jpg",
      alt: "Totspot screen presentation 6",
    },
    {
      id: "totspot-5-screens",
      type: "image",
      src: "/totspot/5_Screens.jpg",
      alt: "Totspot screen presentation 5",
    },
    {
      id: "totspot-1-screens",
      type: "image",
      src: "/totspot/1_Screens.jpg",
      alt: "Totspot screen presentation 1",
    },
    {
      id: "totspot-3-screens",
      type: "image",
      src: "/totspot/3_Screens.jpg",
      alt: "Totspot screen presentation 3",
    },
    {
      id: "totspot-screens-overview",
      type: "image",
      src: "/totspot/Screens.jpg",
      alt: "Totspot screens overview",
    },
    {
      id: "totspot-kannada-logo",
      type: "image",
      src: "/totspot/Kannada-Logo.jpg",
      alt: "Totspot Kannada logo presentation",
    },
  ],
  summary:
    "The Totspot Brand Identity captured the essence of the brand and connected with both kids and parents. The fun and colorful design elements and typography created an engaging brand image, while the clean and simple layouts conveyed a trustworthy and professional look.",
  nextProject: {
    slug: "ace-dellago",
    title: "ACE Dellago",
    category: "Brand Identity Design",
    year: "2025",
  },
};

const aceDellagoPage: ProjectPageData = {
  slug: "ace-dellago",
  title: "ACE Dellago",
  year: "2025",
  intro: [
    "ACE Dellago now has a dedicated project route in the shared case study system.",
    "The full long-form story is still being assembled. For now, this page is intentionally in a coming-soon state.",
  ],
  facts: [
    { label: "Client", value: "ACE Dellago" },
    { label: "Studio/Team", value: "Parentheses Studio" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#d1d2d6",
    backgroundImageSrc: "/thumbnails/DelLago.png",
    hideFallbackTitle: true,
  },
  sections: [],
  summary: "Coming Soon",
  nextProject: {
    slug: "rootcos",
    title: "Rootcos",
    category: "Brand Identity Design",
    year: "2023",
  },
};

const rootcosPage: ProjectPageData = {
  slug: "rootcos",
  title: "Rootcos",
  year: "2023",
  intro: [
    "Crafting a brochure that feels more like a journey through the place, rather than a pitch.",
    "Sanctuary in the Woods is not just another plotted development project, it's a nature-first retreat designed for those seeking clarity, calm, and connection. My approach was to translate this ethos into a brand that doesn’t speak louder than nature, but flows with it.",
    "Over the course of 2 months, I designed the entire brand identity, from the logo and visual system to the brochure, type system, and messaging. And yes! I had a lot of fun doing it.",
  ],
  facts: [
    { label: "Client", value: "Rootcos" },
    { label: "Studio/Team", value: "Parentheses Studio" },
    { label: "My Role", value: "Mid-Level Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#d7d2c7",
    backgroundImageSrc: "/root-cos-cover.png",
    hideFallbackTitle: true,
  },
  sections: [],
  summary: "Coming Soon",
  nextProject: {
    slug: "charminar-gin",
    title: "Charminar Gin",
    category: "Brand Identity Design",
    year: "2025",
  },
};

const holmesAiPage: ProjectPageData = {
  slug: "holmes-ai",
  title: "Holmes AI",
  year: "2025",
  intro: [
    "Holmes AI is an AI-powered platform built to simplify and accelerate legal contract analysis. The objective of this project was to design a logo that captures the essence of intelligence, precision, and modern legal technology, within a single, cohesive mark.",
  ],
  facts: [
    { label: "Client", value: "Holmes AI" },
    { label: "Studio/Team", value: "Studio 318 India" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#bebcb3",
    backgroundImageSrc: "/HolmesAI-cover.png",
    hideFallbackTitle: true,
  },
  sections: [],
  summary: "Coming Soon",
  nextProject: {
    slug: "helios-stones",
    title: "Helios",
    category: "Brand Identity Design",
    year: "2025",
  },
};

const parenthesesShowreelPage: ProjectPageData = {
  slug: "parentheses-showreel",
  title: "Parentheses Showreel",
  year: "2022",
  intro: [
    "This page presents the Parentheses showreel as the primary full-width media experience.",
    "Playback controls match the home showreel style for a consistent viewing experience.",
  ],
  facts: [
    { label: "Project", value: "Parentheses Showreel" },
    { label: "Studio/Team", value: "Parentheses Studio" },
    { label: "Type", value: "Showreel" },
  ],
  hero: {
    backgroundColor: "#111111",
    backgroundVideoSrc: "/parentheses_showreel/parentheses_showreel.mp4",
    backgroundImageSrc: "/parentheses_showreel/thumbnail_3.jpg",
    hideFallbackTitle: true,
  },
  sections: [],
  summary: "Showreel",
  nextProject: {
    slug: "adaps",
    title: "Adaps",
    category: "Brand Identity Design",
    year: "2025",
  },
};

const charminarGinPage: ProjectPageData = {
  slug: "charminar-gin",
  title: "Charminar Gin",
  year: "2025",
  intro: [
    "Hyderabad is not a city you understand at once. It reveals itself slowly, through its architecture, its food, its people, and the quiet rhythm of its everyday life. Built over centuries, shaped by multiple influences, it exists as a layered cultural experience.",
    "Charminar Gin was conceived as a premium craft gin rooted in this very idea - not just representing Hyderabad, but translating its essence into a sensory and visual experience. The challenge was clear: How do you capture a city’s complexity without reducing it to clichés?",
  ],
  facts: [
    { label: "Client", value: "Charminar GIN" },
    { label: "Studio/Team", value: "Studio 318 India" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#28372f",
    backgroundImageSrc: "/charminar-gin/charminar-cover.png",
    hideFallbackTitle: true,
  },
  sections: [],
  summary: "Coming Soon",
  nextProject: {
    slug: "snn-raj-corp",
    title: "SNN Raj Corp",
    category: "Brand Identity Design",
    year: "2022",
  },
};

const oneDowntown2024Page: ProjectPageData = {
  slug: "one-downtown",
  title: "One Downtown",
  year: "2024",
  intro: [
    "One Downtown, located in the heart of Kokapet, Hyderabad, is vying to become the ultimate destination for both fun and work. Our goal was to reflect this dynamic ambition in the visual identity we created. Through thoughtful design and strategic branding, we aimed to capture the essence of One Downtown as a vibrant hub where business and lifestyle seamlessly converge.",
  ],
  facts: [
    { label: "Client", value: "One Downtown by RR Corp" },
    { label: "Studio/Team", value: "Parentheses Studio" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#111111",
    backgroundVideoSrc: "/OneDowntown/onedowntown-1-fullscreen.mp4",
    hideFallbackTitle: true,
  },
  sections: [
    {
      id: "one-downtown-2",
      type: "image",
      src: "/OneDowntown/2.jpg",
      alt: "One Downtown media 2",
    },
    {
      id: "one-downtown-3",
      type: "image",
      src: "/OneDowntown/3.jpg",
      alt: "One Downtown media 3",
    },
    {
      id: "one-downtown-4",
      type: "video",
      src: "/OneDowntown/4.mp4",
    },
    {
      id: "one-downtown-5",
      type: "video",
      src: "/OneDowntown/5.mp4",
    },
    {
      id: "one-downtown-6",
      type: "image",
      src: "/OneDowntown/6.jpg",
      alt: "One Downtown media 6",
    },
    {
      id: "one-downtown-7",
      type: "image",
      src: "/OneDowntown/7.jpg",
      alt: "One Downtown media 7",
    },
    {
      id: "one-downtown-8",
      type: "video",
      src: "/OneDowntown/8.mp4",
    },
    {
      id: "one-downtown-9",
      type: "image",
      src: "/OneDowntown/9.png",
      alt: "One Downtown media 9",
    },
    {
      id: "one-downtown-10",
      type: "image",
      src: "/OneDowntown/10.png",
      alt: "One Downtown media 10",
    },
    {
      id: "one-downtown-11",
      type: "image",
      src: "/OneDowntown/11.jpg",
      alt: "One Downtown media 11",
    },
    {
      id: "one-downtown-12",
      type: "image",
      src: "/OneDowntown/12.jpg",
      alt: "One Downtown media 12",
    },
    {
      id: "one-downtown-13",
      type: "image",
      src: "/OneDowntown/13.jpg",
      alt: "One Downtown media 13",
    },
    {
      id: "one-downtown-14",
      type: "video",
      src: "/OneDowntown/14.mp4",
    },
    {
      id: "one-downtown-15",
      type: "image",
      src: "/OneDowntown/15.jpg",
      alt: "One Downtown media 15",
    },
    {
      id: "one-downtown-16",
      type: "image",
      src: "/OneDowntown/16.jpg",
      alt: "One Downtown media 16",
    },
    {
      id: "one-downtown-17",
      type: "image",
      src: "/OneDowntown/17.jpg",
      alt: "One Downtown media 17",
    },
    {
      id: "one-downtown-18",
      type: "video",
      src: "/OneDowntown/18.mp4",
    },
    {
      id: "one-downtown-19",
      type: "video",
      src: "/OneDowntown/19.mp4",
    },
    {
      id: "one-downtown-20",
      type: "video",
      src: "/OneDowntown/20.mp4",
    },
    {
      id: "one-downtown-21",
      type: "image",
      src: "/OneDowntown/21.jpg",
      alt: "One Downtown media 21",
    },
    {
      id: "one-downtown-22",
      type: "image",
      src: "/OneDowntown/22.jpg",
      alt: "One Downtown media 22",
    },
  ],
  summary:
    "One Downtown project brought together thoughtful design across various mediums, from the publication to the impressive sitewraps. The sitewraps, in particular, have already become a talking point across Hyderabad, creating a strong visual impact and generating buzz for the project.",
  nextProject: {
    slug: "charminar-gin",
    title: "Charminar Gin",
    category: "Brand Identity Design",
    year: "2025",
  },
};

const snnRajCorp2026Page: ProjectPageData = {
  slug: "snn-raj-corp",
  title: "SNN Raj Corp",
  year: "2022",
  intro: [
    "SNN Raj Corp looked like they had it all. 6000+ happy customers, prominence in the real estate industry, several cutting-edge projects in the works. But they felt misaligned with their brand identity, and wanted it to reflect the high standards they set for themselves, and resonate with their audience.",
  ],
  facts: [
    { label: "Client", value: "SNN Raj Corp" },
    { label: "Studio/Team", value: "Parentheses Studio" },
    { label: "My Role", value: "Lead Designer on the Project" },
  ],
  hero: {
    backgroundColor: "#111111",
    hideFallbackTitle: true,
  },
  sections: [
    {
      id: "snn-2",
      type: "video",
      src: "/SNN%20Raj%20Corp/2.mp4",
    },
    {
      id: "snn-3",
      type: "image",
      src: "/SNN%20Raj%20Corp/3.png",
      alt: "SNN Raj Corp media 3",
    },
    {
      id: "snn-4-video",
      type: "video",
      src: "/SNN%20Raj%20Corp/4__4.mp4",
    },
    {
      id: "snn-4-image",
      type: "image",
      src: "/SNN%20Raj%20Corp/4__4.png",
      alt: "SNN Raj Corp media 4",
    },
    {
      id: "snn-6",
      type: "video",
      src: "/SNN%20Raj%20Corp/6.mp4",
    },
    {
      id: "snn-7",
      type: "video",
      src: "/SNN%20Raj%20Corp/7.mp4",
    },
    {
      id: "snn-8",
      type: "video",
      src: "/SNN%20Raj%20Corp/8.mp4",
    },
    {
      id: "snn-9",
      type: "image",
      src: "/SNN%20Raj%20Corp/9.png",
      alt: "SNN Raj Corp media 9",
    },
    {
      id: "snn-10",
      type: "image",
      src: "/SNN%20Raj%20Corp/10.png",
      alt: "SNN Raj Corp media 10",
    },
    {
      id: "snn-11",
      type: "image",
      src: "/SNN%20Raj%20Corp/11.png",
      alt: "SNN Raj Corp media 11",
    },
    {
      id: "snn-12",
      type: "image",
      src: "/SNN%20Raj%20Corp/12.png",
      alt: "SNN Raj Corp media 12",
    },
    {
      id: "snn-13",
      type: "image",
      src: "/SNN%20Raj%20Corp/13.png",
      alt: "SNN Raj Corp media 13",
    },
    {
      id: "snn-14",
      type: "image",
      src: "/SNN%20Raj%20Corp/14.png",
      alt: "SNN Raj Corp media 14",
    },
    {
      id: "snn-15",
      type: "image",
      src: "/SNN%20Raj%20Corp/15.png",
      alt: "SNN Raj Corp media 15",
    },
    {
      id: "snn-16",
      type: "image",
      src: "/SNN%20Raj%20Corp/16.png",
      alt: "SNN Raj Corp media 16",
    },
    {
      id: "snn-17",
      type: "video",
      src: "/SNN%20Raj%20Corp/17.mp4",
    },
  ],
  summary:
    "SNN Raj Corp has now embraced an identity that mirrors its vision and ethos, marking the new era of growth in construction and design.",
  nextProject: {
    slug: "rydon",
    title: "Rydon",
    category: "Brand Identity Design",
    year: "2023",
  },
};

const detailedProjectPages: Record<string, ProjectPageData> = {
  [adapsPage.slug]: adapsPage,
  [sanctuaryPage.slug]: sanctuaryPage,
  [eloraPage.slug]: eloraPage,
  [heliosPage.slug]: heliosPage,
  [rydonPage.slug]: rydonPage,
  [oneDowntown2024Page.slug]: oneDowntown2024Page,
  [nhempco2021Page.slug]: nhempco2021Page,
  [e5HospitalityPage.slug]: e5HospitalityPage,
  [totspot2021Page.slug]: totspot2021Page,
  [aceDellagoPage.slug]: aceDellagoPage,
  [rootcosPage.slug]: rootcosPage,
  [holmesAiPage.slug]: holmesAiPage,
  [parenthesesShowreelPage.slug]: parenthesesShowreelPage,
  [charminarGinPage.slug]: charminarGinPage,
  [loyolaViscommPage.slug]: loyolaViscommPage,
  [snnRajCorp2026Page.slug]: snnRajCorp2026Page,
};

function getProjectStub(slug: string) {
  return projectOrder.find((project) => project.slug === slug);
}

function getNextProject(slug: string) {
  const index = projectOrder.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return projectOrder[0];
  }

  return projectOrder[(index + 1) % projectOrder.length];
}

function getNextWorkCaseStudy(slug: string) {
  const index = workCaseStudyOrder.findIndex(
    (project) => project.slug === slug,
  );

  if (index === -1) {
    return null;
  }

  return workCaseStudyOrder[(index + 1) % workCaseStudyOrder.length];
}

function getNextPreviewFromWork(slug: string) {
  const workProject = visibleWorkProjects.find(
    (project) => project.href === `/project/${slug}`,
  );

  if (!workProject) {
    return null;
  }

  return {
    videoSrc: workProject.videoSrc,
    imageSrc: workProject.imageSrc,
    imageAlt: workProject.imageAlt,
    backgroundColor: workProject.bgColor,
  };
}

function alignNextProjectToWorkOrder(page: ProjectPageData): ProjectPageData {
  const nextProject = getNextWorkCaseStudy(page.slug);

  if (!nextProject) {
    return page;
  }

  const keepPreviewMeta = page.nextProject.slug === nextProject.slug;
  const fallbackPreview = nextProjectPreviewFallback[nextProject.slug] ?? {};
  const workPreview = getNextPreviewFromWork(nextProject.slug);
  const resolvedVideoSrc =
    workPreview?.videoSrc ??
    (keepPreviewMeta ? page.nextProject.videoSrc : undefined) ??
    fallbackPreview.videoSrc;
  const resolvedImageSrc = resolvedVideoSrc
    ? undefined
    : (workPreview?.imageSrc ??
      (keepPreviewMeta ? page.nextProject.imageSrc : undefined) ??
      fallbackPreview.imageSrc);
  const resolvedImageAlt =
    workPreview?.imageAlt ??
    (keepPreviewMeta ? page.nextProject.imageAlt : undefined) ??
    fallbackPreview.imageAlt;

  return {
    ...page,
    nextProject: {
      slug: nextProject.slug,
      title: nextProject.title,
      category: page.nextProject.category,
      year: nextProject.year,
      videoSrc: resolvedVideoSrc,
      imageSrc: resolvedImageSrc,
      imageAlt: resolvedImageAlt,
      backgroundColor:
        workPreview?.backgroundColor ??
        (keepPreviewMeta ? page.nextProject.backgroundColor : undefined) ??
        fallbackPreview.backgroundColor,
      logoSrc:
        (keepPreviewMeta ? page.nextProject.logoSrc : undefined) ??
        fallbackPreview.logoSrc,
      logoAlt:
        (keepPreviewMeta ? page.nextProject.logoAlt : undefined) ??
        fallbackPreview.logoAlt,
    },
  };
}

function createFallbackProjectPage(slug: string): ProjectPageData | null {
  const project = getProjectStub(slug);

  if (!project) {
    return null;
  }

  const nextProject = getNextProject(slug);

  return {
    slug: project.slug,
    title: project.title,
    year: project.year,
    intro: [
      `${project.title} uses the same long-form case study structure as the rest of the portfolio, with room for context, key visuals, and a closing project handoff.`,
      `The final write-up and media for this project are still being assembled, so this page currently acts as the shared layout scaffold for future case studies.`,
    ],
    facts: [
      { label: "Status", value: "Case study in progress" },
      { label: "Year", value: project.year },
      { label: "Layout", value: "Shared project page system" },
    ],
    hero: {
      backgroundColor: "#d1d2d6",
    },
    sections: [
      {
        id: "overview",
        type: "placeholder",
        title: "Case Study",
      },
      {
        id: "gallery-1",
        type: "placeholder",
      },
      {
        id: "gallery-2",
        type: "placeholder",
      },
    ],
    summary:
      "This shared template is now in place, so additional project-specific content can be added without rebuilding the layout.",
    nextProject: {
      slug: nextProject.slug,
      title: nextProject.title,
      category: "Brand Identity Design",
      year: nextProject.year,
    },
  };
}

export function getProjectPage(slug: string) {
  const page = detailedProjectPages[slug] ?? createFallbackProjectPage(slug);

  if (!page) {
    return null;
  }

  return alignNextProjectToWorkOrder(page);
}

export function getAllProjectSlugs() {
  return projectOrder.map((project) => project.slug);
}
