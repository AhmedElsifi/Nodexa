import ReactMarkdown from "react-markdown";
import Callout from "./Callout";
import MarkdownComponents from "./markdownComponents.jsx";

const mdModules = import.meta.glob("/src/content/sections/*.md", { query: "?raw", eager: true });

function getMarkdownContent(filePath) {
  const fileName = filePath.split("/").pop();
  const key = `/src/content/sections/${fileName}`;
  return mdModules[key] ? mdModules[key].default : null;
}

function parseMarkdownContent(content) {
  const blocks = [];
  const lines = content.split("\n");
  let currentBlock = [];
  for (const line of lines) {
    if (line.startsWith(":::key") || line.startsWith(":::warning")) {
      if (currentBlock.length > 0) { blocks.push({ type: "markdown", content: currentBlock.join("\n") }); currentBlock = []; }
      blocks.push({ type: "callout", variant: line.startsWith(":::key") ? "key" : "warning", content: "" });
    } else if (line.startsWith(":::")) {
      if (currentBlock.length > 0) { blocks.push({ type: "markdown", content: currentBlock.join("\n") }); currentBlock = []; }
    } else if (blocks.length > 0 && blocks[blocks.length - 1].type === "callout" && blocks[blocks.length - 1].content === "") {
      blocks[blocks.length - 1].content = line;
    } else {
      currentBlock.push(line);
    }
  }
  if (currentBlock.length > 0) blocks.push({ type: "markdown", content: currentBlock.join("\n") });
  return blocks;
}

export default function MarkdownRenderer({ filePath }) {
  const content = getMarkdownContent(filePath);
  if (!content) return <p className="text-on-surface-variant italic">Content not found for: {filePath}</p>;
  const blocks = parseMarkdownContent(content);
  return (
    <div className="prose-custom">
      {blocks.map((block, index) =>
        block.type === "callout" ? (
          <Callout key={index} variant={block.variant}>{block.content}</Callout>
        ) : (
          <ReactMarkdown key={index} components={MarkdownComponents.components}>{block.content}</ReactMarkdown>
        )
      )}
    </div>
  );
}
