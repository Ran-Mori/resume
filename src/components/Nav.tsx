"use client";
import { useEffect, useState, useRef } from "react";

const navItems = ["About", "Experience", "Projects"];

export default function Nav() {
  const [activeSegment, setActiveSegment] = useState("about");
  const visibleSections = useRef(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Update the set of visible sections
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.current.add(entry.target.id);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        });

        // Select the "best" visible section
        // Priority: Projects > Experience > About (Bottom-up)
        // This ensures that as you scroll down, the new entering section takes precedence
        // And as you scroll up, the leaving section yields to the one above it
        const visibleIds = visibleSections.current;
        if (visibleIds.size > 0) {
          for (let i = navItems.length - 1; i >= 0; i--) {
            const id = navItems[i].toLowerCase();
            if (visibleIds.has(id)) {
              setActiveSegment(id);
              break;
            }
          }
        }
      },
      { rootMargin: "-10% 0px -45% 0px" }
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
