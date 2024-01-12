import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styles from "./work.module.css";
import Data from "../constants/work.json";

import WorkItem from "./work-item";
import { useGSAP } from "@gsap/react";
import SelectedProject from "./selected-project";

interface WorkGridProps {
  onItemClicked;
}

function WorkGrid({ onItemClicked }: WorkGridProps) {
  const GRID_COLUMNS = 3;

  const renderRow = (data, _k) => {
    const row: React.ReactElement[] = [];
    let k = 0;
    data.forEach((item) => {
      k++;
      const element = <WorkItem data={item} key={k} onClick={onItemClicked} />;
      row.push(element);
    });

    // Add spacers
    if (row.length < GRID_COLUMNS) {
      for (let i = 0; i < GRID_COLUMNS - row.length; i++) {
        k++;
        row.push(<div className={styles.spacerItem} key={k}></div>);
      }
    }

    return (
      <div className={styles.gridRow} key={_k}>
        {row}
      </div>
    );
  };

  const renderRows = (data) => {
    const rows: React.ReactElement[] = [];
    let _data: string[] = [];
    let k = 0;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      _data.push(item);
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
  const workContainer = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    selected: null,
    workHeight: 0,
  });

  useEffect(() => {
    const containerHeight = workContainer?.current?.offsetHeight || 0;
    setState((prev) => {
      return { ...prev, workHeight: containerHeight };
    });
  }, []);

  const onItemClicked = (item) => {
    setState((prev) => {
      return { ...prev, selected: item };
    });
  };

  return (
    <div>
      <SelectedProject height={state.workHeight} selected={state.selected} />
      <div ref={workContainer} className={styles.workContainer}>
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
          <WorkGrid onItemClicked={onItemClicked} />
        </div>
      </div>
    </div>
  );
}
