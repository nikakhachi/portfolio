import styles from "./styles.module.css";
import trafficAnalysisImage from "./TA.png";
import counterDisinformationImage from "./CD.png";
import bBotImage from "./BB.jpeg";
import mentionAnalyticsImage from "./MA.png";
import { forwardRef } from "react";

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
          <div
            key={index}
            className={`${styles.projectItem} ${
              index % 2 === 0 && styles.projectItemOdd
            }`}
          >
            <div className={styles.imgDiv}>
              <img src={project.image} alt="project" />
              <div className={styles.imgBackground}>
                <button>DEMO</button>
              </div>
            </div>
            <div className={styles.infoDiv}>
              <h5>{project.name}</h5>
              <p>{project.description}</p>
              <ul>
                {project.technologies.map((technology, index) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
