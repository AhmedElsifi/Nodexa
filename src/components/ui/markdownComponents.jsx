import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({ language, children }) {
  return (
    <div className="code-block-wrapper">
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
          style: { fontFamily: "var(--code-block-font, 'JetBrains Mono', monospace)" },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

function InlineCode({ children, ...props }) {
  return (
    <code className="bg-secondary-container/20 text-secondary border border-secondary/50 px-1 py-0.5 rounded font-code text-[14px] leading-[22px]" {...props}>
      {children}
    </code>
  );
}

function MarkdownComponents() { return null; }

MarkdownComponents.components = {
  h1: ({ children }) => (
    <h1 className="font-headline-xl text-[48px] leading-[56px] tracking-tight font-bold text-on-surface mb-md">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-headline-lg text-[32px] leading-[40px] tracking-tight font-semibold text-on-surface mb-md flex items-center gap-xs">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-headline-md text-[24px] leading-[32px] font-semibold text-on-surface mb-sm">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-headline-md text-[24px] leading-[32px] font-semibold text-on-surface mb-xs">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant mb-md leading-relaxed">{children}</p>
  ),
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const lang = match ? match[1] : "";
    if (!inline && (match || String(children).includes("\n"))) {
      return <CodeBlock language={lang}>{String(children).replace(/\n$/, "")}</CodeBlock>;
    }
    return <InlineCode {...props}>{children}</InlineCode>;
  },
  pre: ({ children }) => <>{children}</>,
  ul: ({ children }) => (
    <ul className="list-disc list-inside font-sans text-[16px] leading-[24px] text-on-surface-variant space-y-xs mb-md opacity-90">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside font-sans text-[16px] leading-[24px] text-on-surface-variant space-y-xs mb-md opacity-90">{children}</ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-md italic text-on-surface-variant mb-md">{children}</blockquote>
  ),
};

export default MarkdownComponents;
