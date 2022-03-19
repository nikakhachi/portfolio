import { animated } from "react-spring";
import styles from "./styles.module.css";

const LoadingScreen = ({ transition }) => {
  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <div className={styles.container}>
              <div className={styles.loader}></div>
            </div>
          </animated.div>
        ) : null
      )}
    </>
  );
};

export default LoadingScreen;
