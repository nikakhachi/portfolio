import styles from "./styles.module.css";
import { forwardRef } from "react";
import Project from "./project";
import projects from "../../data/projects";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h3 className={styles.title}>Projects</h3>
      <hr />
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            image={project.image}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            slideshow={project.slideshow}
          />
        ))}
      </div>
    </div>
  );
});

export default Projects;
