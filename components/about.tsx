import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <a href="about" />
      <div className={styles.componentContainer}>
        <h1>About</h1>
        <hr></hr>
        <div className={styles.aboutContent}>
          <img
            className={styles.profilePic}
            src="/images/profile_pic.png"
          ></img>
          <div className={styles.aboutText}>
            <h2>
              Hi, I&apos;m <strong>Matt</strong>
            </h2>
            <p>
              {`I’m passionate about making outstanding software products, about good design and about nurturing the creative spirit, while creating produts that deliver.`}
            </p>
            <p>
              {`I have a strong foundation and comprehensive experience in all front-end technologies and a background in animation for video and object oriented programming.`}
            </p>
            <p>
              {
                "I believe in developing strong processes and workflows, and in building capable, motivated and complimentary teams that can take on seemingly insurmountable challenges one problem at a time."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
