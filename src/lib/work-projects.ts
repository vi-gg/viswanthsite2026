export type WorkProjectCard = {
  id: string;
  label: string;
  href: string;
  hidden?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  videoWebmSrc?: string;
  posterSrc?: string;
  bgColor?: string;
};

export const workProjects: WorkProjectCard[] = [
  {
    id: "adaps",
    label: "Adaps IT | 2025",
    href: "/project/adaps",
    bgColor: "#056cf2",
    videoSrc: "/thumbnails/Adaps.mp4",
    posterSrc: "/videos/posters/Adaps.jpg",
  },
  {
    id: "sanctuary-in-the-woods",
    label: "Sanctuary in the Woods | 2025",
    href: "/project/sanctuary-in-the-woods",
    imageSrc: "/thumbnails/SITW.png",
    imageAlt: "Sanctuary in the Woods artwork",
  },
  {
    id: "elora-a",
    label: "Elora | 2025",
    href: "/project/elora",
    imageSrc: "/thumbnails/Elora.png",
    imageAlt: "Elora artwork",
  },
  {
    id: "helios-stones-2024",
    label: "Helios Stones | 2024",
    href: "/project/helios-stones",
    videoSrc: "/thumbnails/Helios%20Thumbnail.mp4",
  },
  {
    id: "one-downtown",
    label: "One Downtown | 2024",
    href: "/project/one-downtown",
    imageSrc: "/videos/thumbnails/onedowntown.png",
    imageAlt: "One Downtown brochure artwork",
  },
  {
    id: "viscomm",
    label: "Loyola Viscomm | 2021",
    href: "/project/viscomm",
    videoSrc: "/thumbnails/Viscomm.mp4",
    imageAlt: "Loyola Viscomm thumbnail artwork",
  },
  {
    id: "snn-raj-corp",
    label: "SNN Raj Corp | 2022",
    href: "/project/snn-raj-corp",
    videoSrc: "/thumbnails/SNN.mp4",
  },
  {
    id: "rydon",
    label: "Rydon | 2023",
    href: "/project/rydon",
    videoSrc: "/thumbnails/Rydon.mp4",
    imageAlt: "Rydon packaging artwork",
  },
  {
    id: "nhempco",
    label: "Nhempco | 2021",
    href: "/project/nhempco",
    videoSrc: "/thumbnails/Nhempco.mp4",
    posterSrc: "/videos/posters/Nhempco.jpg",
  },
  {
    id: "totspot",
    label: "Totspot | 2021",
    href: "/project/totspot",
    videoSrc: "/thumbnails/Totspot.mp4",
    posterSrc: "/videos/posters/Totspot.jpg",
  },
  {
    id: "e5-hospitality",
    label: "E5 Hospitality | 2024",
    href: "/project/e5-hospitality",
    imageSrc: "/thumbnails/E5.png",
    imageAlt: "E5 Hospitality branding artwork",
  },
  {
    id: "ace-dellago",
    label: "ACE Dellago | 2025",
    href: "/project/ace-dellago",
    imageSrc: "/thumbnails/DelLago.png",
    imageAlt: "ACE Dellago brochure artwork",
  },
  {
    id: "rootcos",
    label: "Rootcos | 2023",
    href: "/project/rootcos",
    imageSrc: "/thumbnails/Rootcos.png",
    imageAlt: "Rootcos packaging artwork",
  },
  {
    id: "charminar-gin",
    label: "Charminar Gin | 2025",
    href: "/project/charminar-gin",
    imageSrc: "/charminar-gin/charminar-cover.png",
    imageAlt: "Charminar Gin cover artwork",
  },
  {
    id: "holmes-ai",
    label: "Holmes AI | 2025",
    href: "/project/holmes-ai",
    imageSrc: "/HolmesAI-cover.png",
    imageAlt: "Holmes AI cover artwork",
  },
];

export const visibleWorkProjects = workProjects.filter(
  (project) => !project.hidden,
);

export const WORK_PROJECT_COUNT = visibleWorkProjects.length;
