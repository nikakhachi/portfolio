import styles from "./main.module.css";
import SocialList from "../socialLinks";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { SiTypescript, SiJavascript } from "react-icons/si";
function Main() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Nika Khachiashvili</h1>
      <p className={styles.description}>
        Experienced Full Stack Software Engineer, specializing in :
      </p>
      <ul className={styles.iconList}>
        <li>
          <DiReact />
          <p>ReactJS</p>
        </li>
        <li>
          <SiTypescript />
          <p>Typescript</p>
        </li>
        <li>
          <DiNodejsSmall />
          <p>NodeJS</p>
        </li>
      </ul>
      <hr />
      <SocialList />
    </div>
  );
}

export default Main;
