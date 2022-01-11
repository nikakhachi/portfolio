import styles from "./styles.module.css";
import trafficAnalysisImage from "./assets/trafficAnalysis/TA.jpg";
import trafficAnalysisImage2 from "./assets/trafficAnalysis/TA2.jpg";
import trafficAnalysisImage3 from "./assets/trafficAnalysis/TA3.jpg";
import counterDisinformationImage from "./assets/counterDisinformation/CD.jpg";
import counterDisinformationImage2 from "./assets/counterDisinformation/CD2.jpg";
import counterDisinformationImage3 from "./assets/counterDisinformation/CD3.jpg";
import counterDisinformationImage4 from "./assets/counterDisinformation/CD4.jpg";
import counterDisinformationImage5 from "./assets/counterDisinformation/CD5.png";
import bBotImage from "./assets/bbot/BB.jpeg";
import goldenGateImage from "./assets/goldenGate/GG.png";
import goldenGateImage2 from "./assets/goldenGate/GG2.png";
import goldenGateImage3 from "./assets/goldenGate/GG3.png";
import goldenGateImage4 from "./assets/goldenGate/GG4.png";
import { forwardRef } from "react";
import Project from "./project";

const projects = [
  {
    name: "Traffic Analysis",
    description:
      "Tbilisi City Hall project, where authorized users can get the car information on any Tbilisi street cam at a selected time. Their average velocities and full routes across the town with a visualization and statistics.",
    image: trafficAnalysisImage,
    slideshow: [
      trafficAnalysisImage,
      trafficAnalysisImage2,
      trafficAnalysisImage3,
    ],
    technologies: ["ReactJS", "DeckGL", "NodeJS", "DynamoDB"],
  },
  {
    name: "Counter Disinformation",
    description:
      "Winner project in USAIDs Counter Disinformation Program. Where users can track and search specific entities, individuals, their shares in companies and other public information. Getting real-time notifications on any change. All data gathered in one place.",
    image: counterDisinformationImage,
    slideshow: [
      counterDisinformationImage,
      counterDisinformationImage2,
      counterDisinformationImage3,
      counterDisinformationImage4,
      counterDisinformationImage5,
    ],

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
    slideshow: [
      goldenGateImage,
      goldenGateImage2,
      goldenGateImage3,
      goldenGateImage4,
    ],

    technologies: ["ReactJS", "TypeScript"],
  },
  {
    name: "B Bot",
    description:
      "Messenger bot. Serves as a number 1 insurance bot in Georgia.",
    image: bBotImage,
    slideshow: [bBotImage],

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
            slideshow={project.slideshow}
          />
        ))}
      </div>
    </div>
  );
});

export default Projects;
