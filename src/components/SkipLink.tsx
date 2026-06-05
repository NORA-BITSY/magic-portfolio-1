import styles from "./SkipLink.module.scss";

export function SkipLink() {
  return (
    <a href="#main-content" className={styles.skip}>
      Skip to main content
    </a>
  );
}
