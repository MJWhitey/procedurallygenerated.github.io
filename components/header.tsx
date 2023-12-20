import React, { forwardRef } from "react";
import styles from "../components/header.module.css";
import root_styles from "../components/index.module.css";

interface HeaderProps {
  width: number;
  height: number;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  return (
    <div ref={ref} id="header" className={styles.headerContainer}>
      <div
        className={root_styles.contentContainer}
        style={{
          width: props.width,
          height: props.height - 30,
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 className={styles.header}>
            Building technology
            <br /> products that deliver
            <br />
            <strong>meaningful</strong> outcomes
            <br />
            for businesses and
            <br />
            their customers.
          </h2>
        </div>
        <div className={styles.headerMenu}>
          <div className={styles.titleContainer}>
            <h2 className={styles.headerTitle}>Matthew White</h2>
            <h3 className={styles.headerTitle}>
              Engineering Lead & Software Developer
            </h3>
          </div>
          <div className={styles.menuContainer}>
            <button>work</button>
            <button>about</button>
            <button>contact</button>
          </div>
        </div>
      </div>
    </div>
  )
});

Header.displayName = 'Header';

export default Header;
