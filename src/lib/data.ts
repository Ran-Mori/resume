import doubaoLogo from "@/assets/logo/doubao_logo.png";
import douyinLogo from "@/assets/logo/douyin_logo.png";
import duoshanLogo from "@/assets/logo/duoshan_logo.png";
import { StaticImageData } from "next/image";

export interface Job {
  start: string;
  end: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
  link: string;
}

export const JOBS: Job[] = [
  {
    start: "2025",
    end: "PRESENT",
    role: "Senior Android Engineer",
    company: "Doubao, Bytedance",
    description: "Engineered and optimized the core architecture for the Photo Album editing suite, decoupling complex image processing logic from UI components to support rapid feature scalability. Successfully streamlined the development lifecycle, boosting iteration efficiency by 40%, while delivering a smoother, high-performance interaction model that elevated the cumulative user experience score by +1.87.",
    skills: ["Kotlin", "MVI", "Coroutines", "Clean Architecture"],
    link: "https://o.doubao.com/",
  },
  {
    start: "2022",
    end: "2025",
    role: "Android Engineer",
    company: "Douyin, Bytedance",
    description: "Modernized the Feed module’s tagging system by refactoring legacy code, reducing component coupling by 3.5 and cutting downstream integration costs by 50%. Designed and shipped the native social text publisher engine, driving a measurable uptick in user-generated content—increasing daily total submissions by 0.179% and original (non-repost) content creation by 0.288% within the initial launch window.",
    skills: ["Kotlin", "Java", "MVVM", "Retrofit", "RxJava"],
    link: "https://www.douyin.com/",
  }
];

export interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  skills: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Doubao Photo Album",
    description: "Mobile assistants for the era of large language models offer more convenient interaction and richer capabilities.",
    image: doubaoLogo,
    link: "https://o.doubao.com/",
    skills: ["Kotlin", "Compose", "Stripe API", "Firebase"],
  },
  {
    title: "Douyin",
    description: "Douyin is a popular short - video - sharing platform. It allows users to create and share fun, engaging videos with a global audience.",
    image: douyinLogo,
    link: "https://www.douyin.com/",
    skills: ["React Native", "TypeScript", "Node.js", "Socket.io"],
  },
  {
    title: "Duoshan",
    description: "Duoshan is a chat application under Douyin. Here you can chat with Douyin friends, post daily updates, and also see content posted by friends and people you may know.",
    image: duoshanLogo,
    link: "https://www.duoshanapp.com/",
    skills: ["Flutter", "Dart", "OpenWeatherMap API"],
  },
];
