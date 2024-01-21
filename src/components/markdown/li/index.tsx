import styles from "./index.module.css";

export function CustomListItem({ className, ...rest }: any) {
  return <li {...rest} className={`${className || ""} ${styles.li}`} />;
}
