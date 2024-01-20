"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

const tabs = ["", "tags", "archives"];
// TODO: I18N
const textMap: { [key: string]: string } = {
  home: "首页",
  tags: "标签",
  archives: "归档",
};

export function Navbar() {
  const path = usePathname();

  return (
    <nav className={styles.root}>
      <div role={"list"}>
        {tabs.map((value) => {
          const activeItemClassName =
            path === `/${value}` ? styles.listItemActive : "";
          return (
            <div
              key={value}
              role={"listitem"}
              className={`${styles.listItem} ${activeItemClassName}`}
            >
              <Link href={`./${value}`}>{textMap[value || "home"]}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
