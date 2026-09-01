import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownComponents from "../ui/markdownComponents";

export default function SolutionPanel({ text }) {
  return (
    <div className="mb-sm p-sm bg-surface-container rounded-lg border border-tertiary/20 relative z-10">
      <ReactMarkdown components={MarkdownComponents.components} remarkPlugins={[remarkGfm]}>
        {text}
      </ReactMarkdown>
    </div>
  );
}
