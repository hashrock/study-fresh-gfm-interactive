import { JSX } from "preact";
import PreactMarkdown from "preact-markdown";
import { ReactNode, useState } from "preact/compat";

interface MyMarkdownProps extends JSX.HTMLAttributes<HTMLDivElement> {
  content: string;
}

export default function MyMarkdown(props: MyMarkdownProps) {
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <div class="markdown-body" {...props}>
      <PreactMarkdown
        components={{
          code(props: { children: ReactNode }) {
            const content = props?.children?.toString() ?? "";

            return (
              <div class="relative">
                <button
                  class="absolute right-0"
                  onClick={(el) => {
                    navigator.clipboard.writeText(content);
                    setCopied(content);
                    setTimeout(() => setCopied(null), 1000);
                  }}
                >
                  { content === copied ? "Copied!" : "Copy"}
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
