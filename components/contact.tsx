import React from "react";
//import styles from "./skills.module.css";
import styles from "./contact.module.css";
import GAnalytics from "../utils/analytics";

const Contact = () => {
  const onContactClicked = (type: string) => {
    GAnalytics.Instance.LogEvent('contact_button_pressed', {title: type});
  };

  return (
    <div className={styles.contactContainer}>
      <a href="contact" />
      <div className={styles.contactComponent}>
        <h1>Contact</h1>
        <hr></hr>
        <ul className={styles.contactUnorderedList}>
          <li>
            <a
              href="mailto:mjwhitey1@gmail.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => {onContactClicked('gmail')}}

            >
              mjwhitey1@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mattywhite"
              target="_blank"
              rel="noreferrer"
              onClick={() => {onContactClicked('linkedin')}}
            >
              linkedin.com/in/mattywhite
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mjwhitey"
              target="_blank"
              rel="noreferrer"
              onClick={() => {onContactClicked('github')}}
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
