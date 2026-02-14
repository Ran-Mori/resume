"use client";

import { useEffect } from "react";

export default function ScrollManager() {
  useEffect(() => {
    const handleScroll = () => {
      // When scrolled down (>0), disable bounce (overscroll-behavior-y: none)
      // When at the top (0), enable bounce (overscroll-behavior-y: auto)
      if (window.scrollY > 0) {
        document.documentElement.style.overscrollBehaviorY = "none";
      } else {
        document.documentElement.style.overscrollBehaviorY = "auto";
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
