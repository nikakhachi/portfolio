import { useEffect, useRef, useState } from "react";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);

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
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const scrollToTestimonials = () => {
    testimonialsRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <>
      <div ref={topRef} />
      <Main />
      <Navigation
        scrollPosition={scrollPosition}
        scrolls={{
          scrollToBottom,
          scrollToProjects,
          scrollToTestimonials,
          scrollToTop,
        }}
      />
      <div ref={projectsRef} />
      <Projects />
      <div ref={testimonialsRef} />
      <Testimonials ref={testimonialsRef} />
      <Contact />
      <div ref={bottomRef} />
    </>
  );
}

export default App;
