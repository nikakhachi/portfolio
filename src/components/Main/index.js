import styles from "./main.module.css";
import SocialList from "../socialLinks";

function Main() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Nika Khachiashvili</h1>
      <p className={styles.description}>
        Experienced Full Stack Software Engineer, specializing in JavaScript
      </p>
      <hr />
      <SocialList />
    </div>
  );
}

export default Main;
