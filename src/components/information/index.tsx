import Image from "next/image";
import { getBlogConfig } from "@/utils";
import styles from "./index.module.css";
import { GithubLink } from "./github-icon/index";

export function Information() {
  const config = getBlogConfig();
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.avatarWrap}>
          <Image
            className={styles.avatar}
            height={140}
            width={140}
            src="/avatar.png"
            alt="Avatar of the author"
          />
        </div>
        <address>
          <div className={styles.author} aria-label="Author">
            {config.author}
          </div>
          <div className={styles.job} aria-label="Job">
            {config.job}
          </div>
          <div className={styles.location} aria-label="Location">
            <Image
              height={16}
              width={16}
              src="/location_dark.svg"
              alt="Location icon"
              data-type="svg"
            />
            <span>{config.location}</span>
          </div>
          <div className={styles.websites} aria-label="Find me on other sites">
            <GithubLink url={config.github} />
          </div>
          <div className={styles.motto} aria-label="motto">
            {config.motto}
          </div>
        </address>
      </div>
    </div>
  );
}
