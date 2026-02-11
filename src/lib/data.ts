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
    start: "2024",
    end: "PRESENT",
    role: "Senior Android Engineer",
    company: "Tech Corp",
    description: "Leading the development of the flagship mobile application using Jetpack Compose and clean architecture principles. Improved app performance by 30% and reduced build times.",
    skills: ["Kotlin", "Jetpack Compose", "Coroutines", "Dagger Hilt", "Clean Architecture"],
    link: "https://example.com",
  },
  {
    start: "2021",
    end: "2024",
    role: "Android Engineer",
    company: "StartUp Inc",
    description: "Developed and maintained multiple Android applications. Implemented new features and resolved critical bugs. Collaborated with cross-functional teams to deliver high-quality products.",
    skills: ["Kotlin", "Java", "MVVM", "Retrofit", "Unit Testing"],
    link: "https://example.com",
  },
  {
    start: "2019",
    end: "2021",
    role: "Junior Mobile Developer",
    company: "App Agency",
    description: "Assisted in the development of iOS and Android applications for various clients. Learned best practices in mobile development and contributed to code reviews.",
    skills: ["Swift", "Kotlin", "Git", "Jira"],
    link: "https://example.com",
  },
  {
    start: "2018",
    end: "2019",
    role: "Software Intern",
    company: "Innovative Solutions",
    description: "Worked on internal tools and automated testing scripts. Gained hands-on experience with agile methodologies and software development lifecycle.",
    skills: ["Python", "Bash", "Selenium"],
    link: "https://example.com",
  },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "E-commerce Mobile App",
    description: "A fully functional e-commerce mobile application built with Jetpack Compose. Features include product browsing, cart management, and secure checkout integration.",
    image: "/projects/ecommerce.png",
    link: "https://github.com/example/ecommerce",
    skills: ["Kotlin", "Compose", "Stripe API", "Firebase"],
  },
  {
    title: "Task Management Tool",
    description: "A productivity app designed to help teams collaborate effectively. Includes real-time updates, task assignment, and progress tracking.",
    image: "/projects/taskmanager.png",
    link: "https://github.com/example/taskmanager",
    skills: ["React Native", "TypeScript", "Node.js", "Socket.io"],
  },
  {
    title: "Weather Forecast Dashboard",
    description: "A weather dashboard that provides detailed forecasts and historical weather data. Utilizes open-source weather APIs for accurate information.",
    image: "/projects/weather.png",
    link: "https://github.com/example/weather",
    skills: ["Flutter", "Dart", "OpenWeatherMap API"],
  },
  {
    title: "Fitness Tracker",
    description: "An app to track workouts, nutrition, and health metrics. Integrates with wearable devices to collect health data.",
    image: "/projects/fitness.png",
    link: "https://github.com/example/fitness",
    skills: ["SwiftUI", "HealthKit", "CoreData"],
  },
];
