import { JSX } from "preact";
import PreactMarkdown from "preact-markdown";
import { ReactNode, useState } from "preact/compat";
import rehypeHighlight from "https://esm.sh/rehype-highlight@5.0.2";

interface MyMarkdownProps extends JSX.HTMLAttributes<HTMLDivElement> {
  content: string;
}

function reactNodeToString(node: ReactNode): string {
  if (typeof node === 'string') {
    return node;
  } else if (Array.isArray(node)) {
    return node.map(reactNodeToString).join('');
  } else if (node === null) {
    return '';
  } else if (typeof node === 'object' && 'props' in node && node.props) {
    return reactNodeToString(node.props.children);
  } else {
    return ""
  }
}

export default function MyMarkdown(props: MyMarkdownProps) {
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <div class="markdown-body" {...props}>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css"
      />
      <PreactMarkdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          code(props: { children: ReactNode }) {
            const content = reactNodeToString(props.children);
            return (
              <div class="relative">
                <button
                  class="absolute right-0"
                  type="button"
                  onClick={(el) => {
                    navigator.clipboard.writeText(content);
                    setCopied(content);
                    setTimeout(() => setCopied(null), 1000);
                  }}
                >
                  {content === copied ? "Copied!" : "Copy"}
                </button>
                <code>
                  {props.children}
                </code>
              </div>
            );
          },
        }}
      >
        {props.content}
      </PreactMarkdown>
    </div>
  );
}
