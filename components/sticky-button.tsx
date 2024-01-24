import React from "react";
import styles from "./sticky-button.module.css";

const StickyButton = () => {
    function onPress(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

  return (
    <div className={styles.stickyContainer} onMouseDown={onPress}>
      <div className={styles.innerStickyContainer}>
        <div className={styles.stickyButton}>
          <svg
            className={styles.stickSvg}
            fill="#dddee6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StickyButton;
