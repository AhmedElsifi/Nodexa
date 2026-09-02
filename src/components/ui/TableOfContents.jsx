import { useState, useEffect, useRef } from "react";

export default function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState("");
  const observer = useRef(null);

  useEffect(() => {
    if (!items.length) return;

    const headingElements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!headingElements.length) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headingElements.forEach((el) => observer.current.observe(el));

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [items]);

  if (!items.length) return null;

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto hidden lg:block scrollbar-hide">
      <h3 className="font-code text-label-sm leading-[16px] tracking-wider text-on-surface-variant uppercase mb-sm">
        On this page
      </h3>
      <ul className="space-y-xs border-l border-outline-variant/30">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                setActiveId(item.id);
              }}
              className={`block pl-sm py-1 text-[13px] leading-[20px] font-sans transition-colors border-l -ml-px ${
                activeId === item.id
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-on-surface-variant hover:text-on-surface hover:border-outline-variant"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
