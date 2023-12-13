import React from "react";
import styles from "./work.module.css";
import Data from "../constants/work.json";

function WorkGrid() {
  const renderRow = (data) => {
    const row : React.ReactElement[] = [];
    data.forEach(item => {
        const element = (
            <div className={styles.gridItem}>{item.title}</div>
        );
        row.push(element);
    });
    return <div className={styles.gridRow}>{row}</div>;
  };

  const renderRows = (data) => {
    const rows : React.ReactElement[] = [];
    let _data : string[] = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      _data.push(item);
      console.log(i, i % 3 === 0 ,  i === data.length - 1 )
      if ((i+1) % 3 === 0 || i === data.length - 1) {
        rows.push(renderRow(_data));
        _data = [];
      }
    }
    return rows;
  };

  const rows = renderRows(Data.data);

  return <div className={styles.gridContainer}>{rows}</div>;
}

export default function Work() {
  return (
    <div className={styles.workContainer}>
      <div className={styles.componentContainer}>
        <h1>Work</h1>
        <hr></hr>
        <div>
          <p>
            {`Below you’ll find a few personal milestone projects I've been a part
            of, showcasing some of the technologies and clients I've worked with
            and the problems that were solved. This is a short list of examples,
            so if you'd like more information feel free to get in touch at the
            links below. All imagery and branding is the property of their
            respective owners.`}
          </p>
        </div>
        <WorkGrid />
      </div>
    </div>
  );
}
