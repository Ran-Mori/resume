# Engineering Plan: Modern Resume Portfolio Website
**Target Design:** [Brittany Chiang v4](https://brittanychiang.com/)  
**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion  
**Developer Profile:** Senior Android Engineer (Applying Jetpack Compose & Clean Arch principles)

---

## Phase 1: Environment & Project Initialization

### 1.1. Scaffolding
Initialize the project in the current directory. This is similar to setting up a new Android Studio project with a Compose Activity template.

```bash
npx create-next-app@latest .
# Select the following options:
# - TypeScript: Yes
# - ESLint: Yes
# - Tailwind CSS: Yes
# - src/ directory: Yes
# - App Router: Yes
# - Import alias: @/*
```

### 1.2. Dependencies
Install essential libraries for styling logic and hardware-accelerated animations.

```bash
npm install framer-motion clsx tailwind-merge
```

---

## Phase 2: Design System & SEO

### 2.1. Tailwind Config
Define your "Theme" in `tailwind.config.ts`. This is your `Theme.kt` equivalent.

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        lightNavy: "#112240",
        lightestNavy: "#233554",
        slate: "#8892b0",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
      },
    },
  },
  plugins: [],
};
export default config;
```

### 2.2. Global CSS
Configure the base layer in `src/app/globals.css`.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --navy: #0a192f;
  --green: #64ffda;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-navy text-slate antialiased selection:bg-green selection:text-navy;
}
```

### 2.3. Root Layout & Metadata
In `src/app/layout.tsx`, use the Metadata API and Google Fonts optimization.

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Your Name | Senior Android Engineer",
  description: "Senior Android Engineer specializing in pixel-perfect, high-performance mobile applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-navy text-slate antialiased selection:bg-green selection:text-navy`}>
        <Spotlight />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
```

---

## Phase 3: Interactive Foundations & Data

### 3.1. Spotlight Interaction
Optimized for performance and touch-safety. Create `src/components/Spotlight.tsx`.

```tsx
"use client";
import { useState, useEffect, useCallback } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setOpacity(1);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        opacity,
      }}
    />
  );
}
```

### 3.2. Data Definition
Define types and centralize content in `src/lib/data.ts`.

```typescript
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
    start: "2021",
    end: "PRESENT",
    role: "Senior Android Engineer",
    company: "Big Tech Co",
    description: "Building high-performance mobile applications using Jetpack Compose...",
    skills: ["Kotlin", "Compose", "Coroutines", "Dagger Hilt"],
    link: "https://example.com",
  },
];
```

---

## Phase 4: Navigation & Structural Layout

### 4.1. Side Navigation (Intersection Observer)
Create `src/components/Nav.tsx`.

```tsx
"use client";
import { useEffect, useState } from "react";

const navItems = ["About", "Experience", "Projects"];

export default function Nav() {
  const [activeSegment, setActiveSegment] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSegment(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {navItems.map((item) => (
          <li key={item}>
            <a className="group flex items-center py-3" href={`#${item.toLowerCase()}`}>
              <span className={`mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSegment === item.toLowerCase() ? "w-16 bg-slate-200" : ""}`}></span>
              <span className={`text-xs font-bold uppercase tracking-widest text-slate group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSegment === item.toLowerCase() ? "text-slate-200" : ""}`}>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### 4.2. Main Split Layout
In `src/app/page.tsx`, implement the two-column structure.

```tsx
import Nav from "@/components/Nav";
import ExperienceCard from "@/components/ExperienceCard";
import { JOBS } from "@/lib/data";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Your Name</h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Android Engineer</h2>
          <p className="mt-4 max-w-xs leading-normal">I build pixel-perfect, accessible, and high-performance mobile experiences.</p>
          <Nav />
        </div>
        {/* Social Links Here */}
      </header>

      <main className="pt-24 lg:w-1/2 lg:py-24">
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <p className="mb-4">Engineer with a passion for clean architecture and fluid UI...</p>
        </section>

        <section id="experience" className="group/list">
          {JOBS.map((job, i) => (
            <ExperienceCard key={i} job={job} />
          ))}
        </section>
      </main>
    </div>
  );
}
```

---

## Phase 5: Animated UI Components

### 5.1. Experience Card (Framer Motion)
Leverage `framer-motion` for smooth entry animations.

```tsx
"use client";
import { motion } from "framer-motion";
import { Job } from "@/lib/data";

export default function ExperienceCard({ job }: { job: Job }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {job.start} — {job.end}
      </header>
      
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green focus-visible:text-green group/link" href={job.link} target="_blank">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 md:block"></span>
            <span>{job.role} · {job.company}</span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal text-slate-400">{job.description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {job.skills.map((skill, i) => (
            <li key={i} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-green">
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
```

---

## Phase 6: Implementation Roadmap

1.  **Initialize:** `npx create-next-app@latest .`
2.  **Core Styles:** Update `tailwind.config.ts` and `src/app/globals.css`.
3.  **Data Layer:** Define interfaces and JOBS array in `src/lib/data.ts`.
4.  **Layout Shell:** Set up `layout.tsx` with font optimization and the interactive `Spotlight`.
5.  **Navigation:** Implement `Nav.tsx` with Intersection Observer.
6.  **Main Page:** Build the split-pane structure in `page.tsx`.
7.  **Components:** Render `ExperienceCard` items with Framer Motion entry animations.
8.  **Polish:** Add social links, project cards, and verify accessibility (ARIA labels).
