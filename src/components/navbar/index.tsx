import Link from "next/link";
import styles from "./index.module.css";

export function Navbar() {
  return (
    <nav className={styles.root}>
      <div role={"list"}>
        <div role={"listitem"}>
          <Link href="./">首页</Link>
        </div>
        <div role={"listitem"}>
          <Link href="./tags">标签</Link>
        </div>
        <div role={"listitem"}>
          <Link href="./archives">归档</Link>
        </div>
      </div>
    </nav>
  );
}
