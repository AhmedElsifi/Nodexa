import { useState, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

function CodeBlock({ language, children }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [children]);

  return (
    <div className="code-block-wrapper relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
        style={{
          background: copied
            ? "rgba(119,221,109,0.15)"
            : "rgba(255,255,255,0.08)",
          color: copied ? "#77dd6d" : "#8b949e",
          border: `1px solid ${copied ? "rgba(119,221,109,0.3)" : "rgba(255,255,255,0.1)"}`,
        }}
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        {copied ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter
        style={oneDark}
        language={language || "text"}
        PreTag="div"
        customStyle={{
          margin: 0,
          borderRadius: "var(--code-block-radius, 0.5rem)",
          fontSize: "var(--code-block-font-size, 14px)",
          lineHeight: "var(--code-block-line-height, 22px)",
          fontFamily: "var(--code-block-font, 'JetBrains Mono', monospace)",
          background: "var(--code-block-bg, #0d1117)",
          border: "var(--code-block-border, 1px solid #30363d)",
          padding: "var(--code-block-padding, 24px)",
        }}
        codeTagProps={{
          style: {
            fontFamily: "var(--code-block-font, 'JetBrains Mono', monospace)",
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

function InlineCode({ children, ...props }) {
  return (
    <code
      className="bg-secondary-container/20 text-secondary border border-secondary/50 px-1 py-0.5 rounded font-code text-code-block leading-5.5"
      {...props}
    >
      {children}
    </code>
  );
}

function MarkdownComponents() {
  return null;
}

MarkdownComponents.components = {
  h1: ({ children }) => (
    <h1 className="font-headline-xl text-headline-xl leading-14 tracking-tight font-bold text-on-surface mb-md">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-headline-lg text-headline-lg leading-[40px] tracking-tight font-semibold text-on-surface mb-md flex items-center gap-xs">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-headline-md text-headline-md leading-8 font-semibold text-on-surface mb-sm">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-headline-md text-headline-md leading-8 font-semibold text-on-surface mb-xs">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="font-sans text-body-md leading-[24px] text-on-surface-variant mb-md">
      {children}
    </p>
  ),
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const lang = match ? match[1] : "";
    if (!inline && (match || String(children).includes("\n"))) {
      return (
        <CodeBlock language={lang}>
          {String(children).replace(/\n$/, "")}
        </CodeBlock>
      );
    }
    return <InlineCode {...props}>{children}</InlineCode>;
  },
  pre: ({ children }) => <>{children}</>,
  ul: ({ children }) => (
    <ul className="list-disc list-inside font-sans text-body-md leading-[24px] text-on-surface-variant space-y-xs mb-md opacity-90">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside font-sans text-body-md leading-[24px] text-on-surface-variant space-y-xs mb-md opacity-90">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-md italic text-on-surface-variant mb-md">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-lg border-outline-variant" />,
  table: ({ children }) => (
    <div className="overflow-x-auto mb-md">
      <table className="w-full border-collapse border border-outline-variant text-on-surface-variant">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-surface-container">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="border-b border-outline-variant">{children}</tr>,
  th: ({ children }) => (
    <th className="px-md py-sm text-left font-sans text-body-md font-semibold text-on-surface border border-outline-variant">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-md py-sm font-sans text-body-md border border-outline-variant">
      {children}
    </td>
  ),
};

export default MarkdownComponents;
