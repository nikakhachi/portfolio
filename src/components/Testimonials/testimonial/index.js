import styles from "./style.module.css";

const Testimonial = ({ photo, author, authorUrl, companyUrl, company, position, testimonial }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.authorDiv}>
        <div className={styles.imgDiv}>
          <a href={authorUrl} target="_blank" rel="noreferrer">
            <img src={photo} alt="author" />
          </a>
        </div>
        <div className={styles.authorInfo}>
          <a href={authorUrl} target="_blank" rel="noreferrer" className={styles.authorName}>
            {author}
          </a>
          <p className={styles.authorCompany}>
            <a href={companyUrl} target="_blank" rel="noreferrer">
              {company}
            </a>
          </p>
          <p className={styles.authorPosition}>{position}</p>
        </div>
      </div>
      <div className={styles.testimonialInfo}>
        <p>{testimonial}</p>
      </div>
    </div>
  );
};

export default Testimonial;
