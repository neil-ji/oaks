import { Markdown } from "@/components/markdown/index";
import styles from "./page.module.css";

export default function Article() {
  return (
    <>
      <aside>headlines</aside>
      <main>
        <Markdown />
      </main>
    </>
  );
}
