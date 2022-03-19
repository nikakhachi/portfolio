import styles from "./main.module.css";
import SocialList from "../socialLinks";
import { SiTypescript } from "react-icons/si";
import { forwardRef } from "react";
import { FaNodeJs, FaReact, FaAws } from "react-icons/fa";

const Main = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h1 className={styles.name}>Nika Khachiashvili</h1>
      <p className={styles.description}>Experienced Full Stack Software Engineer, specializing in :</p>
      <ul className={styles.iconList}>
        <li>
          <FaNodeJs />
          <p>NodeJS</p>
        </li>
        <li>
          <SiTypescript />
          <p>Typescript</p>
        </li>
        <li>
          <FaReact />
          <p>ReactJS</p>
        </li>
        <li>
          <FaAws />
          <p>AWS</p>
        </li>
      </ul>
      <hr />
      <SocialList />
    </div>
  );
});

export default Main;
