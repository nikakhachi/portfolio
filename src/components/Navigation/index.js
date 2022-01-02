import styles from "./styles.module.css";

const Navigation = ({ scrolls, scrollPosition }) => {
  return (
    <div className={styles.arrowDown}>
      <ul className={styles.list}>
        <li
          className={scrollPosition <= 0.333 && styles.activeItem}
          onClick={scrolls.scrollToTop}
        >
          Main Page
        </li>
        <li
          className={
            scrollPosition < 0.666 &&
            scrollPosition > 0.333 &&
            styles.activeItem
          }
          onClick={scrolls.scrollToMid}
        >
          Projects
        </li>
        <li
          className={scrollPosition >= 0.666 && styles.activeItem}
          onClick={scrolls.scrollToBottom}
        >
          Contact Me
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
