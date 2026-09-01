import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownComponents from "./markdownComponents.jsx";

const mdModules = import.meta.glob("/src/content/sections/*.md", {
  query: "?raw",
  eager: true,
});

function getMarkdownContent(filePath) {
  const fileName = filePath.split("/").pop();
  const key = `/src/content/sections/${fileName}`;
  return mdModules[key] ? mdModules[key].default : null;
}

function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-md">
      <div className="h-4 bg-surface-container-high rounded w-3/4" />
      <div className="h-4 bg-surface-container-high rounded w-full" />
      <div className="h-4 bg-surface-container-high rounded w-5/6" />
      <div className="h-4 bg-surface-container-high rounded w-2/3" />
      <div className="h-8 bg-surface-container-high rounded w-1/3 mt-lg" />
      <div className="h-4 bg-surface-container-high rounded w-full" />
      <div className="h-4 bg-surface-container-high rounded w-4/5" />
      <div className="h-4 bg-surface-container-high rounded w-full" />
      <div className="h-4 bg-surface-container-high rounded w-3/4" />
      <div className="h-32 bg-surface-container-high rounded-lg w-full mt-md" />
      <div className="h-4 bg-surface-container-high rounded w-5/6" />
      <div className="h-4 bg-surface-container-high rounded w-full" />
      <div className="h-4 bg-surface-container-high rounded w-2/3" />
    </div>
  );
}

export default function MarkdownRenderer({ filePath }) {
  const [loaded, setLoaded] = useState(false);
  const content = getMarkdownContent(filePath);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!content) {
    return (
      <div className="animate-pulse space-y-md">
        <div className="h-4 bg-surface-container-high rounded w-3/4" />
        <div className="h-4 bg-surface-container-high rounded w-full" />
        <div className="h-4 bg-surface-container-high rounded w-5/6" />
      </div>
    );
  }

  if (!loaded) {
    return <SkeletonLoader />;
  }

  return (
    <div className="prose-custom">
      <ReactMarkdown components={MarkdownComponents.components} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
