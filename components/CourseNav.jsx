"use client";

import { useEffect, useState } from "react";

const barClass = "sticky top-14 z-40 border-y border-ink/10 bg-cream/85 backdrop-blur-xl";
const listClass = "mx-auto flex max-w-[1440px] gap-6 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12";
const linkBase = "label whitespace-nowrap transition-colors duration-500 ease-soft";

export default function CourseNav({ courses }) {
  const [active, setActive] = useState(courses[0].id);

  useEffect(() => {
    // Highlight the course currently crossing the upper third of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    courses.forEach((course) => {
      const el = document.getElementById(course.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [courses]);

  return (
    <nav aria-label="Menu courses" className={barClass}>
      <ul className={listClass}>
        {courses.map((course) => {
          const isActive = active === course.id;
          const linkClass = [linkBase, isActive ? "text-ink" : "text-ink-soft hover:text-ink"].join(" ");

          return (
            <li key={course.id}>
              <a href={"#" + course.id} className={linkClass} aria-current={isActive ? "true" : undefined}>
                {course.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}