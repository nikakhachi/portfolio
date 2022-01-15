import styles from "./styles.module.css";
import ScrollUp from "../ScrollUp";

const Navigation = ({ scrolls, scrollPosition }) => {
  return (
    <div className={styles.arrowDown}>
      {scrollPosition > 0.1 && <ScrollUp scrollToTop={scrolls.scrollToAbout} />}
      <ul className={styles.list}>
        <li
          className={scrollPosition <= 0.16 ? styles.activeItem : "nonActive"}
          onClick={scrolls.scrollToAbout}
        >
          About
        </li>
        <li
          className={
            scrollPosition < 0.62 && scrollPosition > 0.16
              ? styles.activeItem
              : "nonActive"
          }
          onClick={scrolls.scrollToProjects}
        >
          Projects
        </li>
        <li
          className={
            scrollPosition < 0.84 && scrollPosition > 0.62
              ? styles.activeItem
              : "nonActive"
          }
          onClick={scrolls.scrollToTestimonials}
        >
          Testimonials
        </li>
        <li
          className={scrollPosition >= 0.84 ? styles.activeItem : "nonActive"}
          onClick={scrolls.scrollToContact}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
