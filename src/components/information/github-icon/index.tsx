import Image from "next/image";
import styles from "./index.module.css";

export const GithubLink = function ({ url }: { url: string }) {
  return (
    <a
      className={styles.root}
      href={url || "https://www.github.com"}
      target="_blank"
    >
      <Image
        width={40}
        height={40}
        src="/github_dark.svg"
        alt="This is a github icon."
        data-type="svg"
      />
    </a>
  );
};
