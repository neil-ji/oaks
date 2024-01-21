/* For ES module we must add file extension name like '.mjs' or '.cjs', but 'react-markdown' is a '.js' file,
 therefore we have no choice but ignore this static check. DO NOT set 'type' field of package.json to 'module'(means ES module) because of
 Next.js app use CommonJS standard. */
// @ts-ignore
import ReactMarkdown from "react-markdown";
// @ts-ignore
import remarkGfm from "remark-gfm";
// @ts-ignore
import rehypeKatex from "rehype-katex";
// @ts-ignore
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { CustomCode } from "./code/index";
import { CustomAnchor } from "./a/index";
import { CustomListItem } from "./li/index";
import { CustomHeadline2 } from "./h2/index";

const htmlMapper = {
  code: CustomCode,
  a: CustomAnchor,
  li: CustomListItem,
  h2: CustomHeadline2,
};

export const Markdown = function ({ text }: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      components={htmlMapper}
    >
      {text}
    </ReactMarkdown>
  );
};
