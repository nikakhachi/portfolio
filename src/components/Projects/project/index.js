import styles from "./styles.module.css";

const Project = ({ image, name, description, technologies, index }) => {
  return (
    <div
      className={`${styles.projectItem} ${
        index % 2 === 0 && styles.projectItemOdd
      }`}
    >
      <div className={styles.imgDiv}>
        <img src={image} alt="project" />
        <div className={styles.imgBackground}>
          <button>DEMO</button>
        </div>
      </div>
      <div className={styles.infoDiv}>
        <h5>{name}</h5>
        <p>{description}</p>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
