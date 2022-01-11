import styles from "./styles.module.css";
import SocialList from "../socialLinks/index";
import { forwardRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import { init, send } from "@emailjs/browser";
import moment from "moment";
import { useAlert } from "react-alert";
init(process.env.REACT_APP_EMAILJS_USER_ID);

const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase()
  );
};

const Contact = forwardRef((props, ref) => {
  const alert = useAlert();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isEmailBeingSent, setIsEmailBeingSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailLimit = parseInt(localStorage.getItem("emailLimit"));
    const dateTillExpiration =
      (new Date(emailLimit).getTime() - new Date()) / 1000;
    if (dateTillExpiration > 0) {
      return alert.error(
        `Please wait ${Math.floor(dateTillExpiration)} Seconds`
      );
    }
    if (!email || !message || !name) {
      return alert.error("Please fill all fields");
    }
    if (!validateEmail(email)) {
      return alert.error("Invalid Email");
    }
    try {
      setIsEmailBeingSent(true);
      await send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
        }
      );
      alert.success("Email Sent !");
      setIsEmailBeingSent(false);
      localStorage.setItem(
        "emailLimit",
        moment().add(1, "minutes").toDate().getTime()
      );
    } catch (error) {
      setIsEmailBeingSent(false);
      return alert.error("Internal Server Error");
    }
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
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail Address"
        />
        <textarea
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <button disabled={isEmailBeingSent} type="submit">
          {isEmailBeingSent ? (
            <CircularProgress color="inherit" size="1rem" />
          ) : (
            "Send"
          )}
        </button>
      </form>
      <footer className={styles.footer}>
        <SocialList />
      </footer>
    </div>
  );
});

export default Contact;
