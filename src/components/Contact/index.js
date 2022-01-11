import styles from "./styles.module.css";
import SocialList from "../socialLinks/index";
import { forwardRef, useState } from "react";

const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase()
  );
};

const Contact = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState();
  const [isEmailSent, setIsEmailSent] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !message || !name) {
      setTimeout(() => setErrorMessage(), 4000);
      return setErrorMessage("Please fill all fields");
    }
    if (!validateEmail(email)) {
      setTimeout(() => setErrorMessage(), 4000);
      return setErrorMessage("Invalid Email");
    }
    setErrorMessage();
    setIsEmailSent(true);
    setTimeout(() => setIsEmailSent(false), 4000);
  };

  return (
    <div ref={ref} className={styles.container}>
      <h3 className={styles.title}>Get In Touch</h3>
      <hr />
      <p className={styles.description}>
        Need anything built, want to collaborate together or simply want to have
        a chat? Drop me an e-mail at{" "}
        <strong>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:n.khachiashvili1@gmail.com"
          >
            n.khachiashvili1@gmail.com
          </a>
        </strong>
        , simply fill out the form below or message me directly in{" "}
        <strong>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nika-khachiashvili/"
          >
            LinkedIn
          </a>{" "}
        </strong>
        and I will reply to you soon!
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail Address"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <button type="submit">Send</button>
      </form>
      <span className={styles.errorMessage}>
        {errorMessage && errorMessage}
      </span>
      <span className={styles.successMessage}>
        {isEmailSent && "Email was sent successfully"}
      </span>
      <footer className={styles.footer}>
        <SocialList />
      </footer>
    </div>
  );
});

export default Contact;
