// import styles from "./FirstComponent.module.css";
// import { ArrowRight } from "lucide-react";

// const FirstComponent = () => {
//   return (
//     <section className={styles["first-component"]}>
//       <div className={styles["notification-bar"]}>
//         Hover <strong>"Master"</strong> button to expand
//       </div>

//       <div className={styles["components-content"]}>
//         {/* Floating GIFs */}
//         <div className={styles["floating-icon-gustos"]}>
//           <img src="/gustos.gif" alt="gustos" />
//         </div>
//         <div className={styles["floating-icon-happy"]}>
//           <img src="/happy-life.gif" alt="happy life" />
//         </div>
//         <div className={styles["floating-icon-like"]}>
//           <img src="/like.gif" alt="like" />
//         </div>
//         <div className={styles["floating-icon-trophy"]}>
//           <img src="/trophy.gif" alt="trophy" />
//         </div>

//         {/* Floating Profile Images */}
//         <div
//           className={`${styles["floating-profile-image"]} ${styles["profile-1"]}`}
//         >
//           <img src="/Profiles/image1.png" alt="Profile 1" />
//         </div>
//         <div
//           className={`${styles["floating-profile-image"]} ${styles["profile-2"]}`}
//         >
//           <img src="/Profiles/image2.png" alt="Profile 2" />
//         </div>
//         <div
//           className={`${styles["floating-profile-image"]} ${styles["profile-3"]}`}
//         >
//           <img src="/Profiles/image3.png" alt="Profile 3" />
//         </div>
//         <div
//           className={`${styles["floating-profile-image"]} ${styles["profile-4"]}`}
//         >
//           <img src="/Profiles/image4.png" alt="Profile 4" />
//         </div>
//         <div
//           className={`${styles["floating-profile-image"]} ${styles["profile-5"]}`}
//         >
//           <img src="/Profiles/image5.png" alt="Profile 4" />
//         </div>
//         <div
//           className={`${styles["floating-profile-image"]} ${styles["profile-6"]}`}
//         >
//           <img src="/Profiles/image6.png" alt="Profile 4" />
//         </div>
//       </div>

//       {/* Centered Main Text */}
//       <div className={styles["written-content"]}>
//         <h2 className={styles["main-heading"]}>
//           Hear How They Level Up Their Game!
//         </h2>
//         <h1 className={styles["skill-masters"]}>
//           Skill <span className={styles["masters-text"]}>Masters</span> Unit!
//         </h1>
//         <a href="#" className={styles["view-all-link"]}>
//           <span className={styles["link-text"]}>View all Testimonials</span>
//           <span className={styles["link-icon"]}>
//             <ArrowRight size={18} />
//           </span>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default FirstComponent;


import { useState } from "react";
import styles from "./FirstComponent.module.css";
import { ArrowRight } from "lucide-react";

const FirstComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={styles["first-component"]}>
      <div className={styles["notification-bar"]}>
        Hover <strong>"Master"</strong> button to expand
      </div>

      <div
        className={`${styles["components-content"]} ${
          isHovered ? styles["expand-float"] : ""
        }`}
      >
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

        {/* Floating Profile Images */}
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className={`${styles["floating-profile-image"]} ${styles[`profile-${n}`]}`}
          >
            <img src={`/Profiles/image${n}.png`} alt={`Profile ${n}`} />
          </div>
        ))}
      </div>

      {/* Centered Main Text */}
      <div className={styles["written-content"]}>
        <h2 className={styles["main-heading"]}>
          Hear How They Level Up Their Game!
        </h2>
        <h1 className={styles["skill-masters"]}>
          Skill{" "}
          <span
            className={styles["masters-text"]}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Masters
          </span>{" "}
          Unit!
        </h1>
        <a href="#" className={styles["view-all-link"]}>
          <span className={styles["link-text"]}>View all Testimonials</span>
          <span className={styles["link-icon"]}>
            <ArrowRight size={18} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default FirstComponent;
