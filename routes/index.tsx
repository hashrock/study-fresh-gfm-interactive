import MyMarkdown from "../islands/MyMarkdown.tsx";

export default function Home() {
  const example = `
  # Hello, world!
  
  - a
  - b
  - c

  \`\`\`ts
  export class Hello {
    hello() {
      console.log("Hello, world!");
    }
  }
  \`\`\`

  \`\`\`ts
  console.log("Hello, world2!");
  \`\`\`
`;

  return (
    <div class="m-16 p-8 border rounded-xl">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css"
      />
      <style>
        {`
          .markdown-body {
            background-color: transparent;
          }
          `}
      </style>
      <MyMarkdown content={example} />
    </div>
  );
}
