import styles from "./styles.module.css";
import image from "./assets/profile.jpeg";
import image2 from "./assets/profile2.jpg";
import image3 from "./assets/profile3.jpeg";
import { forwardRef } from "react";
import Testimonial from "./testimonial";

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

const Testimonials = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h3 className={styles.title}>Testimonials</h3>
      <hr />
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            author={testimonial.author}
            company={testimonial.company}
            companyUrl={testimonial.companyUrl}
            photo={testimonial.photo}
            testimonial={testimonial.testimonial}
            position={testimonial.position}
          />
        ))}
      </div>
    </div>
  );
});

export default Testimonials;
