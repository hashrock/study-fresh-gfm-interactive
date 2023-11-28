import { JSX } from "preact";
import PreactMarkdown from "preact-markdown";
import { ReactNode } from "preact/compat";

interface MyMarkdownProps extends JSX.HTMLAttributes<HTMLDivElement> {
  content: string;
}

export function MyMarkdown(props: MyMarkdownProps) {
  return (
    <div class="markdown-body" {...props}>
      <PreactMarkdown components={{
        code(props : ReactNode) {
          return (<div><code class="bg-red-400" >
            {props.children}
          </code>
          <button>Click me</button>
          </div>
          )
        }
      }}>
        {props.content}
      </PreactMarkdown>
    </div>
  );
}
