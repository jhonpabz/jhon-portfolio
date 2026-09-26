"use client";

import { useEffect, useState } from "react";
import { Briefcase, Layers, User } from "lucide-react";

const tabs = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Layers },
];

export const MobileNav = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const marker = window.innerHeight * 0.3;
      let current = tabs[0].id;
      for (const tab of tabs) {
        const section = document.getElementById(tab.id);
        if (section && section.getBoundingClientRect().top <= marker) {
          current = tab.id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">
      <div className="mobile-nav-glass">
        <span
          className="mobile-nav-indicator"
          aria-hidden="true"
          style={{ transform: `translateX(${tabs.findIndex(tab => tab.id === active) * 100}%)` }}
        />
        {tabs.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="mobile-nav-tab"
            aria-current={active === id ? "location" : undefined}
          >
            <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};
