import styles from "./styles.module.css";
import trafficAnalysisImage from "./assets/TA.png";
import counterDisinformationImage from "./assets/CD.png";
import bBotImage from "./assets/BB.jpeg";
import mentionAnalyticsImage from "./assets/MA.png";
import goldenGateImage from "./assets/GG.png";
import { forwardRef } from "react";
import Project from "./project";

const projects = [
  {
    name: "Traffic Analysis",
    description:
      "Tbilisi City Hall project, where authorized users can get the car information on any Tbilisi street cam at a selected time. Their average velocities and full routes across the town with a visualization and statistics.",
    image: trafficAnalysisImage,
    technologies: ["ReactJS", "DeckGL", "NodeJS", "DynamoDB"],
  },
  {
    name: "Counter Disinformation",
    description:
      "Winner project in USAIDs Counter Disinformation Program. Where users can track and search specific entities, individuals, their shares in companies and other public information. Getting real-time notifications on any change. All data gathered in one place.",
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
    name: "Golden Gate",
    description:
      "Platform, where users can create legal documents, forms and contracts and print or download them",
    image: goldenGateImage,
    technologies: ["ReactJS", "TypeScript"],
  },
  {
    name: "B Bot",
    description:
      "Messenger bot. Serves as a number 1 insurance bot in Georgia.",
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
