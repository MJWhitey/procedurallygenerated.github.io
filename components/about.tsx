import React from "react";
import styles from "./about.module.css";
import { prefix } from "../utils/prefix";

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
            src={`${prefix}/images/profile_pic.png`}
          ></img>
          <div className={styles.aboutText}>
            <h2>
              Hi, I&apos;m <strong>Matt</strong>. <br />I like making digital stuff.
            </h2>
            <p>
              {`I’m passionate about making outstanding digital products, about exceptional design and nurturing the creative spirit.`}
            </p>
            <p>
              {`I have a strong foundation and comprehensive experience in front-end technologies, cloud backend systems and a background in animation for video, games and web.`}
            </p>
            <p>
              {` I believe in measuring success by developing thoughtful and achievable goals, developing strong processes and workflows, `}
              {`and in building capable, motivated and complimentary teams that can take on seemingly insurmountable challenges one problem at a time.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
