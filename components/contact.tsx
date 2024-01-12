import React from "react";
//import styles from "./skills.module.css";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactComponent}>
        <h1>Contact</h1>
        <hr></hr>
        <ul className={styles.contactUnorderedList}>
          <li>
            <a
              href="mailto:mjwhitey1@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              mjwhitey1@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mattywhite"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/mattywhite
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mjwhitey"
              target="_blank"
              rel="noreferrer"
            >
              github.com/mjwhitey
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
