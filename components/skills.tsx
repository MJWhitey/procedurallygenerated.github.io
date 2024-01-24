import React from "react";
//import styles from "./skills.module.css";
import styles from "./skills.module.css";
import SkillsList from "./skillsList";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsComponent}>
        <h1>Technical Skills</h1>
        <hr></hr>
        <div className={styles.skillsContent}>
          <div className={styles.skillsContentContainer}>
            <div className={styles.skillsPrimary}>
              <h1>Expert</h1>
              <SkillsList>
                <ul>
                  <li>C#</li>
                  <li>Javascript</li>
                  <li>(Vanilla & Typescript)</li>
                </ul>
              </SkillsList>
              <SkillsList shaded>
                <ul>
                  <li>Xamarin</li>
                  <li>NodeJs (Express) </li>
                  <li>Spine (2d Animation)</li>
                  <li>Unity Engine</li>
                </ul>
              </SkillsList>
              <SkillsList>
                <ul>
                  <li>Visual Studio</li>
                  <li>VS Code</li>
                  <li>Web Storm (IntelliJ) </li>
                  <li>Illustrator</li>
                  <li>Photoshop</li>
                  <li>Animate</li>
                </ul>
              </SkillsList>
            </div>
            <div className={styles.skillsSecondary}>
              <h1>Advanced</h1>
              <SkillsList>
                <ul>
                  <li>Python</li>
                  <li>PHP</li>
                  <li>HTML / CSS</li>
                  <li>SQL, CouchDB, Mongo</li>
                </ul>
              </SkillsList>
              <SkillsList shaded>
                <ul>
                  <li>React & React Native </li>
                  <li>AWS Lambda / Cognito / S3</li>
                  <li>Serverless & NextJS </li>
                  <li>GraphQL / Swagger</li>
                  <li>Grunt / Yarn / Webpack </li>
                </ul>
              </SkillsList>
              <SkillsList>
                <ul>
                  <li>Git / Source Tree </li>
                  <li>XCode / Android Studio</li>
                  <li>Docker / Containerization</li>
                </ul>
              </SkillsList>
            </div>
            <div className={styles.skillsTertiary}>
              <h1>Proficient</h1>
              <SkillsList>
                <ul>
                  <li>Swift</li>
                  <li>Java</li>
                  <li>Kotlin</li>
                  <li>C++</li>
                </ul>
              </SkillsList>
              <SkillsList shaded>
                <ul>
                  <li>GCP Compute & Functions</li>
                  <li>Drupal, Joomla, & Magento</li>
                  <li>Codeigniter / Wordpress</li>
                  <li>Unreal Engine</li>
                  <li>Flask, Django</li>
                </ul>
              </SkillsList>
              <SkillsList>
                <ul>
                  <li>Blender / Maya / Cinema 4d</li>
                  <li>Adobe Audition</li>
                  <li>Audacity</li>
                  <li>Media Encoder</li>
                </ul>
              </SkillsList>
            </div>
          </div>
          <div className={styles.skillsContentContainerSml}>
            <div className={styles.skillsSecondary}>
              <SkillsList>
                <h1>Expert</h1>
                <ul>
                  <li>C#, Unity</li>
                  <li>Javascript, NodeJS</li>
                  <li>(Vanilla & Typescript)</li>
                  <li>Xamarin, Visual Studio</li>
                </ul>
              </SkillsList>
              <SkillsList shaded>
                <h1>Advanced</h1>
                <ul>
                  <li>PHP, Python</li>
                  <li>React, React Native</li>
                  <li>AWS Lambda / Cognito / S3</li>
                  <li>XCode, Android Studio</li>
                  <li>Docker / Containerization</li>
                </ul>
              </SkillsList>
              <SkillsList>
                <h1>Proficient</h1>
                <ul>
                  <li>Kotlin, Swift, Java</li>
                  <li>C++, Unreal Engine</li>
                  <li>GCP Compute & Functions</li>
                  <li>Flask, Django</li>
                </ul>
              </SkillsList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
