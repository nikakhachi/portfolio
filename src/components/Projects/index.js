import { useState } from "react";
import styles from "./styles.module.css";
import { forwardRef } from "react";
import Project from "./project";
import projects from "../../data/projects";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Projects = forwardRef((props, ref) => {
  const DEFAULT_LIMIT = 2;
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  return (
    <div ref={ref} className={styles.container}>
      <h3 className={styles.title}>
        Projects <span>(Total {projects.length})</span>
      </h3>
      <hr />
      <div className={styles.projectsContainer}>
        {projects.slice(0, limit).map((project, index) => (
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
      <div>
        <button
          onClick={() => {
            if (limit === DEFAULT_LIMIT) {
              setLimit(projects.length);
            } else {
              setLimit(DEFAULT_LIMIT);
              props.scrollToStart();
            }
          }}
          className={styles.moreBtn}
        >
          {limit === DEFAULT_LIMIT ? (
            <>
              Show More <KeyboardArrowDownIcon />
            </>
          ) : (
            <>
              Show Less <KeyboardArrowUpIcon />
            </>
          )}
        </button>
      </div>
    </div>
  );
});

export default Projects;
