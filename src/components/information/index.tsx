import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { getBlogConfig } from "@/utils";
import styles from "./index.module.css";

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
            src={avatar}
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
            {config.location}
          </div>
          <div aria-label="Find me in other sites">Github</div>
          <div className={styles.motto} aria-label="motto">
            {config.motto}
          </div>
        </address>
      </div>
    </div>
  );
}
