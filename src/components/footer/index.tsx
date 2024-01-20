import styles from "./index.module.css";

export function Footer() {
  return (
    <footer className={styles.root}>
      powered by{" "}
      <a href="https://github.com/vercel/next.js" target="_blank">
        Next.js
      </a>
      , themed by{" "}
      <a href="https://github.com/neil-ji/oaks" target="_blank">
        Oaks
      </a>
      .
    </footer>
  );
}
