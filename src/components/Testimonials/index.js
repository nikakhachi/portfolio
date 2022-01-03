import styles from "./styles.module.css";
import image from "./profile.jpeg";
import image2 from "./profile2.jpg";
import image3 from "./profile3.jpeg";

const testimonials = [
  {
    author: "Ketevan Bosikashvili",
    photo: image,
    company: "Pulsar AI",
    companyUrl: "https://www.linkedin.com/company/pulsar-ai-georgia/",
    position: "Executive Director",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    author: "David Maghradze",
    photo: image2,
    company: "Aidnet",
    companyUrl: "https://www.linkedin.com/company/aidnet/",
    position: "CTO",
    testimonial:
      "Lorem ipsued do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    author: "Lado Demuradze",
    photo: image3,
    company: "Supernova",
    companyUrl: "https://en.supernova.ge",
    position: "Project Manager",
    testimonial:
      "Lorem ipsued do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Testimonials</h3>
      <hr />
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial) => (
          <div className={styles.testimonial}>
            <div className={styles.authorDiv}>
              <div className={styles.imgDiv}>
                <img src={testimonial.photo} alt="author" />
              </div>
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>{testimonial.author}</p>
                <p className={styles.authorCompany}>
                  <a
                    href={testimonial.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {testimonial.company}
                  </a>
                </p>
                <p className={styles.authorPosition}>{testimonial.position}</p>
              </div>
            </div>
            <div className={styles.testimonialInfo}>
              <p>{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
