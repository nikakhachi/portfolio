import { useEffect, useRef, useState } from "react";
import Main from "./components/Main";
import styles from "./App.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Projects from "./components/Projects";
import ScrollUp from "./components/ScrollUp";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setScrollPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  return (
    <>
      <div ref={topRef} />
      <Main />
      <div onClick={scrollToBottom} className={styles.arrowDown}>
        <KeyboardArrowDownIcon fontSize="inherit" />
      </div>
      <Projects />
      <div ref={bottomRef} />
      {scrollPosition && <ScrollUp scrollToTop={scrollToTop} />}
    </>
  );
}

export default App;
