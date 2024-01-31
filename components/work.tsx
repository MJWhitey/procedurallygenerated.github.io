import _ from 'lodash';
import React, { useEffect, useRef, useState, forwardRef } from "react";
import styles from "./work.module.css";
import Data from "../constants/work.js";
import { isMobile } from "react-device-detect";

import WorkItem from "./work-item";
import SelectedProject from "./selected-project";
import { useIntersectionObserver } from "react-intersection-observer-hook";

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

interface WorkProps {
  showSelectedProject: boolean,
  onClose?,
  onChange?,
}

const Work = forwardRef<HTMLDivElement, WorkProps>((props, ref) => {
  const originalHeight = useRef<number>(0);
  const workContainer = useRef<HTMLDivElement>(null);
  //const workParentContainer = useRef<HTMLDivElement>(null);
  //
  const [anchor, { entry }] = useIntersectionObserver();
  const isAnchorVisible = entry && entry.isIntersecting;

  const [state, setState] = useState({
    selected: null,
    workHeight: 0,
  });

  const onWindowResize = () => {
    originalHeight.current = workContainer?.current?.offsetHeight || 0;
    setState((prev) => {
      return { ...prev, workHeight: originalHeight.current };
    });
  };

  useEffect(() => {
    onWindowResize();
    if (!isMobile) {
      window.addEventListener("resize", onWindowResize);
    }
  }, []);

  useEffect(() => {
    console.log('work - selected : ', props.showSelectedProject, state.selected);

    if(props.showSelectedProject === false && state.selected !== null) {
      setState((prev) => ({...prev, selected: null}));
      if(_.isFunction(props.onClose)) props.onClose();
    }
  }, [props.showSelectedProject])

  const onItemClicked = async (item) => {
    if (isMobile) await new Promise((res) => setTimeout(res, 1200));
    if (!isAnchorVisible) {
      const targetScroll = document.querySelector('a[href^="work"]');
      console.log("targetScroll : ", targetScroll);
      if (targetScroll)
        targetScroll.scrollIntoView({
          behavior: "smooth",
        });
      await new Promise((res) => setTimeout(res, 500));
    }

    setState((prev) => {
      return { ...prev, selected: item };
    });

    if(_.isFunction(props.onChange)) props.onChange();
  };

  const onSelectedProjectClosed = () => {
    setState((prev) => {
      return { ...prev, selected: null, workHeight: originalHeight.current };
    });
    if(_.isFunction(props.onClose)) props.onClose();
  };

  const onSelectedProjectChanged = async (height) => {
    console.log("onSelectedProjectChanged - height : ", height);
    //if (isMobile) {
    setState((prev) => {
      return { ...prev, workHeight: isMobile ? height : height + 60 };
    });
    //}
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <a ref={anchor} href="work" />
      <SelectedProject
        height={state.workHeight}
        selected={state.selected}
        onClose={onSelectedProjectClosed}
        onChange={onSelectedProjectChanged}
      />
      <div
        style={{
          height: state.workHeight > 0 ? state.workHeight : "auto",
          overflow: "hidden",
        }}
      >
        <div ref={workContainer} className={styles.workContainer}>
          <div className={styles.componentContainer}>
            <h1 className={styles.workContainerHr}>Work</h1>
            <hr></hr>
            <div ref={ref}></div>
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
    </div>
  );
});

Work.displayName = "Work";

export default Work;
