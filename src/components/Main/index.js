import styles from "./main.module.css";
import SocialList from "../socialLinks";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { forwardRef } from "react";

const Main = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h1 className={styles.name}>Nika Khachiashvili</h1>
      <p className={styles.description}>AWS Certified Full Stack Software Engineer, specializing in :</p>
      <ul className={styles.iconList}>
        <li>
          <DiNodejsSmall />
          <p>NodeJS</p>
        </li>
        <li>
          <SiTypescript />
          <p>Typescript</p>
        </li>
        <li>
          <DiReact />
          <p>ReactJS</p>
        </li>
      </ul>
      <hr />
      <SocialList />
    </div>
  );
});

export default Main;
