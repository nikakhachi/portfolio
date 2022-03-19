import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./styles.module.css";

const ScrollUp = ({ scrollToTop }) => {
  return (
    <>
      <p onClick={scrollToTop} className={styles.scrollUp}>
        <KeyboardArrowUpIcon fontSize="inherit" />
      </p>
    </>
  );
};

export default ScrollUp;
