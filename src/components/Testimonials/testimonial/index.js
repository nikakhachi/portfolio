import styles from "./style.module.css";

const Testimonial = ({
  photo,
  author,
  companyUrl,
  company,
  position,
  testimonial,
}) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.authorDiv}>
        <div className={styles.imgDiv}>
          <img src={photo} alt="author" />
        </div>
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{author}</p>
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
