"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const NavLink = () => {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 1, // 50% of the element must be visible
    };

    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleDivId = entry.target.id;

          if (visibleDivId === "about") {
            setCurrentSection("about");
          } else if (visibleDivId === "experience") {
            setCurrentSection("experience");
          } else if (visibleDivId === "projects") {
            setCurrentSection("projects");
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const about = document.getElementById("about");
    const experience = document.getElementById("experience");
    const projects = document.getElementById("projects");

    if (about) {
      observer.observe(about);
    }

    if (experience) {
      observer.observe(experience);
    }

    if (projects) {
      observer.observe(projects);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log("currentSection: ", currentSection);
  }, [currentSection]);

  return (
    <div className="lg:flex hidden">
      <div className="flex flex-col pt-[70px]">
        <Link
          href="#about"
          className={cn(
            "text-primary/40 hover:text-primary",
            currentSection === "about" && "text-primary"
          )}
        >
          About
        </Link>
        <Link
          href="#experience"
          className={cn(
            "text-primary/40 hover:text-primary",
            currentSection === "experience" && "text-primary"
          )}
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className={cn(
            "text-primary/40 hover:text-primary",
            currentSection === "projects" && "text-primary"
          )}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};
