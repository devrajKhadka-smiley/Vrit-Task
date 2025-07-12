import { Rocket, ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";
import styles from "./SecondComponent.module.css";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Focused faces—learning mode: ON!",
    image: "/hi.png",
  },
  {
    id: 2,
    title: "Collaboration—teamwork mode: ACTIVE!",
    image: "/hello.png",
  },
];

const SecondComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles["journey-container"]}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Your SkillShikshya Journey</h2>
        <h2 className={styles["main-title"]}>
          <span className={styles["green-text"]}>Step In</span>.{" "}
          <span className={styles["green-text"]}>Skill Up</span>.{" "}
          <span className={styles["black-text"]}>Stand Out</span>{" "}
          <Rocket
            size={25}
            strokeWidth={2.5}
            style={{ verticalAlign: "middle" }}
          />
        </h2>
      </div>

      <div className={styles["cards-grid"]}>
        {/* Clarity Card */}
        <div className={`${styles.card} ${styles["card-clarity"]}`}>
          <div className={styles["card-content"]}>
            <div className={styles.illustration}>
              <img src="/img1.png" alt="Clarity" />
            </div>
            <div className={styles["text-content"]}>
              <h3>Start with Clarity</h3>
              <p className={styles["subtitle-text"]}>
                Step into a better learning path.
              </p>
              <p className={styles.description}>
                Overwhelmed by too many learning options? SkillShikshya provides
                a clear, curated roadmap from the start. Whether you're a
                beginner or upskilling, we have a path tailored to your growth.
              </p>
            </div>
          </div>

          {/* Hero section shown on hover */}
          {/* <div className={styles["hero-wrapper"]}>
            <div className={styles["hero-container"]}>
              <div className={styles["content-section"]}>
                <h1 className={styles["hero-title"]}>
                  {slides[currentSlide].title}
                </h1>
              </div>
              <div className={styles["image-section"]}>
                <div className={styles["people-container"]}>
                  <img
                    src={slides[currentSlide].image}
                    alt="People learning together"
                    className={styles["hero-image"]}
                  />
                </div>
              </div>
              <button
                className={styles["nav-button"] + " " + styles.left}
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ArrowBigLeftDash size={32} strokeWidth={2.5} />
              </button>
              <button
                className={styles["nav-button"] + " " + styles.right}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ArrowBigRightDash size={32} strokeWidth={2.5} />
              </button>
              <div className={styles["slide-indicators"]}>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={
                      styles.indicator +
                      " " +
                      (index === currentSlide ? styles.active : "")
                    }
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div> */}
          <div className={styles["hero-wrapper"]}>
            <div className={styles["hero-container"]}>
              {/* Left Arrow */}
              <button
                className={`${styles["nav-button"]} ${styles.left}`}
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ArrowBigLeftDash size={15} strokeWidth={2.5} />
              </button>

              {/* Image with Title */}
              <div className={styles["image-box"]}>
                <h2 className={styles["hero-title"]}>
                  {slides[currentSlide].title}
                </h2>
                <img
                  src={slides[currentSlide].image}
                  alt="Slide"
                  className={styles["hero-image"]}
                />
              </div>

              {/* Right Arrow */}
              <button
                className={`${styles["nav-button"]} ${styles.right}`}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ArrowBigRightDash size={15} strokeWidth={2.5} />
              </button>
            </div>

            {/* Indicators */}
            <div className={styles["slide-indicators"]}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={
                    styles.indicator +
                    " " +
                    (index === currentSlide ? styles.active : "")
                  }
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Other Cards */}
        <div className={`${styles.card} ${styles["card-doing"]}`}>
          <div className={styles["card-content"]}>
            <div className={styles.illustration}>
              <img src="/img2.png" alt="Doing" />
            </div>
            <div className={styles["text-content"]}>
              <h3>Learn by Doing</h3>
              <p className={styles["subtitle-text"]}>
                Practical skills, real projects.
              </p>
              <p className={styles.description}>
                Theory is great, but action is better. At SkillShikshya, you
                learn by doing. Hands-on projects and real-world scenarios help
                you build, break, and create—leading to true mastery.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles["card-mentored"]}`}>
          <div className={styles["card-content"]}>
            <div className={styles.illustration}>
              <img src="/img3.png" alt="Mentored" />
            </div>
            <div className={styles["text-content"]}>
              <h3>Get Mentored & Supported</h3>
              <p className={styles["subtitle-text"]}>
                You're not learning alone.
              </p>
              <p className={styles.description}>
                Stuck or need feedback? SkillShikshya's community of mentors and
                learners has your back with live support, interactive
                discussions, and expert insights. You're never on your own.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles["card-showcase"]}`}>
          <div className={styles["card-content"]}>
            <div className={styles.illustration}>
              <img src="/img4.png" alt="Showcase" />
            </div>
            <div className={styles["text-content"]}>
              <h3>Achieve & Showcase</h3>
              <p className={styles["subtitle-text"]}>
                Build your portfolio, get job-ready.
              </p>
              <p className={styles.description}>
                Your journey ends with achievement. Each completed project
                builds a portfolio showcasing your skills and job readiness,
                bringing you closer to that dream job, promotion, or your own
                venture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
