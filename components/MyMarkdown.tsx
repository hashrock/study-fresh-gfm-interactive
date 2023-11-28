import { JSX } from "preact";
import PreactMarkdown from "preact-markdown";

interface MyMarkdownProps extends JSX.HTMLAttributes<HTMLDivElement> {
  content: string;
}

export function MyMarkdown(props: MyMarkdownProps) {
  return (
    <div class="markdown-body" {...props}>
      <PreactMarkdown>
        {props.content}
      </PreactMarkdown>
    </div>
  );
}
