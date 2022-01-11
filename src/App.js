import { useEffect, useRef, useState } from "react";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
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

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
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

  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_LEFT,
    timeout: 5000,
    offset: "10px",
    containerStyle: {
      fontSize: "0.9rem",
    },
    // you can also just use 'scale'
    transition: transitions.FADE,
  };

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Main ref={aboutRef} />
      <Navigation
        scrollPosition={scrollPosition}
        scrolls={{
          scrollToContact,
          scrollToProjects,
          scrollToTestimonials,
          scrollToAbout,
        }}
      />
      <Projects ref={projectsRef} />
      <Testimonials ref={testimonialsRef} />
      <Contact ref={contactRef} />
    </AlertProvider>
  );
}

export default App;
