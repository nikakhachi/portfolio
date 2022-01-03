import styles from "./styles.module.css";

const Navigation = ({ scrolls, scrollPosition }) => {
  return (
    <div className={styles.arrowDown}>
      <ul className={styles.list}>
        <li
          className={scrollPosition <= 0.16 && styles.activeItem}
          onClick={scrolls.scrollToTop}
        >
          Main Page
        </li>
        <li
          className={
            scrollPosition < 0.62 && scrollPosition > 0.16 && styles.activeItem
          }
          onClick={scrolls.scrollToProjects}
        >
          Projects
        </li>
        <li
          className={
            scrollPosition < 0.84 && scrollPosition > 0.62 && styles.activeItem
          }
          onClick={scrolls.scrollToTestimonials}
        >
          Testimonials
        </li>
        <li
          className={scrollPosition >= 0.84 && styles.activeItem}
          onClick={scrolls.scrollToBottom}
        >
          Contact Me
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
