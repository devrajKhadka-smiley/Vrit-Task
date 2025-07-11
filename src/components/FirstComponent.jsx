import styles from "./FirstComponent.module.css";
import { ArrowRight } from "lucide-react";

const FirstComponent = () => {
  return (
    <section className={styles["first-component"]}>
      <div className={styles["components-content"]}>
        {/* Floating GIFs */}
        <div className={styles["floating-icon-gustos"]}>
          <img src="/gustos.gif" alt="gustos" />
        </div>
        <div className={styles["floating-icon-happy"]}>
          <img src="/happy-life.gif" alt="happy life" />
        </div>
        <div className={styles["floating-icon-like"]}>
          <img src="/like.gif" alt="like" />
        </div>
        <div className={styles["floating-icon-trophy"]}>
          <img src="/trophy.gif" alt="trophy" />
        </div>
      </div>

      {/* Centered Main Text */}
      <div className={styles["written-content"]}>
        <h2 className={styles["main-heading"]}>
          Hear How They Level Up Their Game!
        </h2>
        <h1 className={styles["skill-masters"]}>
          Skill <span className={styles["masters-text"]}>Masters</span> Unit!
        </h1>
        <a href="#" className={styles["view-all-link"]}>
          <span className={styles["link-text"]}>View all Testimonials</span>
          <span className={styles["link-icon"]}>
            <ArrowRight size={18} />
          </span>
        </a>
      </div>

      {/* Profile Images */}
      <div className={styles["profile-images"]}>
        <div className={styles["profile-image"]}>
          <img src="/pp.png" alt="Profile 1" />
        </div>
        <div className={styles["profile-image"]}>
          <img src="/pp.png" alt="Profile 2" />
        </div>
        <div className={styles["profile-image"]}>
          <img src="/pp.png" alt="Profile 3" />
        </div>
        <div className={styles["profile-image"]}>
          <img src="/pp.png" alt="Profile 4" />
        </div>
      </div>
    </section>
  );
};

export default FirstComponent;
