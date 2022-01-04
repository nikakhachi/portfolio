import styles from "./styles.module.css";
import trafficAnalysisImage from "./assets/TA.png";
import counterDisinformationImage from "./assets/CD.png";
import bBotImage from "./assets/BB.jpeg";
import mentionAnalyticsImage from "./assets/MA.png";
import { forwardRef } from "react";
import Project from "./project";

const projects = [
  {
    name: "Traffic Analysis",
    description:
      "Tbilisi City Hall project. Get the car information on any Tbilisi street cam at a specific time. Their average velocities and full routes across the town with a visualization and statistics",
    image: trafficAnalysisImage,
    technologies: ["ReactJS", "DeckGL", "NodeJS", "DynamoDB"],
  },
  {
    name: "Counter Disinformation",
    description:
      "Winner project in USAIDs Counter Disinformation Program. Track and search for specific individuals, entities, their shares in companies and other information.",
    image: counterDisinformationImage,
    technologies: [
      "ReactJS",
      "Force-Graph",
      "NodeJS",
      "SocketIO",
      "Neo4j",
      "PostgreSQL",
      "S3",
      "SQS",
    ],
  },
  {
    name: "Mention Analytics",
    description:
      "Tbilisi City Hall project. Get the car information on any Tbilisi street cam at a specific time. Their average velocities and full routes across the town with a visualization and statistics",
    image: mentionAnalyticsImage,
    technologies: ["AngularJS", "Python", "MongoDB"],
  },
  {
    name: "B Bot",
    description:
      "Messenger bot operating on Botkit core. Serves as a number 1 insurance bot in Georgia.",
    image: bBotImage,
    technologies: ["NodeJS", "Botkit", "PostgreSQL"],
  },
];

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
          />
        ))}
      </div>
    </div>
  );
});

export default Projects;
