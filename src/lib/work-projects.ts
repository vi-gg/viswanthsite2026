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
    id: "adaps-it",
    label: "Adaps IT | 2026",
    href: "/project/adaps-it",
    bgColor: "#056cf2",
    videoSrc: "/videos/thumbnails/Adaps.mp4",
    videoWebmSrc: "/videos/thumbnails/Adaps.webm",
    posterSrc: "/videos/posters/Adaps.jpg",
  },
  {
    id: "sanctuary-in-the-woods",
    label: "Sanctuary in the Woods | 2025",
    href: "/project/sanctuary-in-the-woods",
    imageSrc: "/images/projects/sanctuary-in-the-woods-2025/poster-1.jpg",
    imageAlt: "Sanctuary in the Woods artwork",
  },
  {
    id: "holmes-ai",
    label: "Holmes AI | 2025",
    href: "/project/holmes-ai",
    imageSrc: "/HolmesAI-cover.png",
    imageAlt: "Holmes AI cover artwork",
  },
  {
    id: "elora-a",
    label: "Elora | 2025",
    href: "/project/elora",
    imageSrc: "/videos/thumbnails/elora.png",
    imageAlt: "Elora artwork",
  },
  {
    id: "helios-stones-2024",
    label: "Helios Stones | 2024",
    href: "/project/helios-stones",
    videoSrc: "/Helios/Helios%20Thumbnail.mp4",
  },
  {
    id: "one-downtown",
    label: "One Downtown | 2024",
    href: "/project/one-downtown",
    imageSrc: "/videos/thumbnails/onedowntown.png",
    imageAlt: "One Downtown brochure artwork",
  },
  {
    id: "charminar-gin",
    label: "Charminar Gin | 2025",
    href: "/project/charminar-gin",
    imageSrc: "/charminar-gin/charminar-cover.png",
    imageAlt: "Charminar Gin cover artwork",
  },
  {
    id: "snn-raj-corp",
    label: "SNN Raj Corp | 2026",
    href: "/project/snn-raj-corp",
    videoSrc: "/SNN%20Raj%20Corp/SNN%20Thumbnail.mp4",
  },
  {
    id: "rydon",
    label: "Rydon | 2025",
    href: "/project/rydon",
    videoSrc: "/videos/thumbnails/Rydon.mp4",
    videoWebmSrc: "/videos/thumbnails/Rydon.webm",
    posterSrc: "/videos/thumbnails/rydon.png",
    imageAlt: "Rydon packaging artwork",
  },
  {
    id: "loyola-viscomm",
    label: "Loyola Viscomm | 2025",
    href: "/project/loyola-viscomm",
    imageSrc: "/Viscomm/Viscomm-Footer-Thumbnail-2.jpg",
    imageAlt: "Loyola Viscomm thumbnail artwork",
  },
  {
    id: "nhempco",
    label: "Nhempco | 2021",
    href: "/project/nhempco",
    videoSrc: "/videos/thumbnails/Nhempco.mp4",
    videoWebmSrc: "/videos/thumbnails/Nhempco.webm",
    posterSrc: "/videos/posters/Nhempco.jpg",
  },
  {
    id: "e5-hospitality",
    label: "E5 Hospitality | 2024",
    href: "/project/e5-hospitality",
    imageSrc: "/videos/thumbnails/e5-hospitality.png",
    imageAlt: "E5 Hospitality branding artwork",
  },
  {
    id: "totspot",
    label: "Totspot | 2021",
    href: "/project/totspot",
    videoSrc: "/videos/thumbnails/Totspot.mp4",
    videoWebmSrc: "/videos/thumbnails/Totspot.webm",
    posterSrc: "/videos/posters/Totspot.jpg",
  },
  {
    id: "ace-dellago",
    label: "ACE DelLago| 2025",
    href: "/project/ace-dellago",
    hidden: true,
    imageSrc: "/videos/thumbnails/ace-dell-logo.png",
    imageAlt: "ACE DelLago brochure artwork",
  },
  {
    id: "rootcos",
    label: "Rootcos | 2023",
    href: "/project/rootcos",
    imageSrc: "/videos/thumbnails/root-cos.png",
    imageAlt: "Rootcos packaging artwork",
  },
  {
    id: "charminar",
    label: "Charminar| 2025",
    href: "/project/charminar",
    bgColor: "#d9d9de",
  },
];

export const visibleWorkProjects = workProjects.filter(
  (project) => !project.hidden,
);

export const WORK_PROJECT_COUNT = visibleWorkProjects.length;
