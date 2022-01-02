import styles from "./styles.module.css";
import SocialList from "../socialLinks/index";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Get In Touch</h3>
      <hr />
      <p className={styles.description}>
        Need anything built, want to work together or simply want to have a
        chat? Drop me an e-mail at <strong>n.khachiashvili1@gmail.com</strong>{" "}
        or simply fill out the form below and I will reply to you soon!
      </p>
      <form className={styles.form}>
        <input placeholder="Name" />
        <input placeholder="E-Mail Address" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </form>
      <footer className={styles.footer}>
        <SocialList />
      </footer>
    </div>
  );
};

export default Contact;
