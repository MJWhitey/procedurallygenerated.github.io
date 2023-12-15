import React, { useRef } from "react";
import styles from "./work.module.css";
import Data from "../constants/work.json";
import gsap from "gsap";

const IMAGE_ASSETS_PATH = "/images/";

interface WorkItemProps {
  data;
}

function WorkItem({ data }: WorkItemProps) {
  const overlay = useRef<HTMLDivElement>();

  function onItemOver(): void {
    gsap.to(overlay.current as gsap.TweenTarget, { y: -310 });
  }

  function onItemOff(): void {
    gsap.to(overlay.current as gsap.TweenTarget, { y: 0 });
  }

  return (
    <div
      className={styles.workItem}
      style={{
        backgroundImage: `url(${IMAGE_ASSETS_PATH + "tint_blue_rago.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onMouseOver={onItemOver}
      onMouseLeave={onItemOff}
    >
      <div className={styles.workItemTitle}>
        <h2>{data.title}</h2>
      </div>
      <div
        ref={overlay as React.RefObject<HTMLDivElement>}
        className={styles.workItemOverlay}
      >
        <h2 className={styles.overlayTitle}>{data.title}</h2>
      </div>
    </div>
  );
}

function WorkGrid() {
  const GRID_COLUMNS = 3;

  const renderRow = (data, _k) => {
    const row: React.ReactElement[] = [];
    let k = 0;
    data.forEach((item) => {
      k++;
      const element = <WorkItem data={item} key={k} />;
      row.push(element);
    });

    // Add spacers
    console.log(row.length, GRID_COLUMNS);
    if (row.length < GRID_COLUMNS) {
      for (let i = 0; i < GRID_COLUMNS - row.length; i++) {
        k++
        row.push(<div className={styles.spacerItem} key={k}></div>);
      }
    }

    return <div className={styles.gridRow} key={_k}>{row}</div>;
  };

  const renderRows = (data) => {
    const rows: React.ReactElement[] = [];
    let _data: string[] = [];
    let k=0;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      _data.push(item);
      //console.log(i, i % 3 === 0 ,  i === data.length - 1 )
      if ((i + 1) % GRID_COLUMNS === 0 || i === data.length - 1) {
        k++;
        rows.push(renderRow(_data, k));
        _data = [];
      }
    }
    return <div className={styles.workGridContainer}>{rows}</div>;
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
