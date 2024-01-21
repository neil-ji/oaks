//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./index.module.css";

export function CustomCode(props: any) {
  const { children, className, node, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");
  if (match) {
    return (
      <SyntaxHighlighter
        {...rest}
        showLineNumbers
        wrapLongLines
        PreTag="div"
        lineNumberStyle={{ minWidth: "2.25em" }}
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        style={a11yDark}
      />
    );
  }
  return (
    <code {...rest} className={`${className || ""} ${styles.inlineCodeBlock}`}>
      {children}
    </code>
  );
}
