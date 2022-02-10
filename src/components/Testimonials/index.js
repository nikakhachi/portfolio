import styles from "./styles.module.css";
import { forwardRef } from "react";
import Testimonial from "./testimonial";
import testimonials from "../../data/testimonials";

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
            photo={window.location.href + testimonial.photo}
            testimonial={testimonial.testimonial}
            position={testimonial.position}
          />
        ))}
      </div>
    </div>
  );
});

export default Testimonials;
