import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styles from "./selected-project.module.css";
import { useGSAP } from "@gsap/react";

interface SelectedProjectProps {
  height?: number;
  selected?;
}

const SelectedProject = ({
  height = 0,
  selected = null,
}: SelectedProjectProps) => {
  const selectedItemContainer = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    selected: null,
  });
  const { contextSafe } = useGSAP({ scope: selectedItemContainer });

  useEffect(() => {
    contextSafe(() => {
      const tl = gsap.timeline();
      tl.set(selectedItemContainer.current as gsap.TweenTarget, {
        yPercent: 100,
      });
    })();
  }, []);

  useEffect(() => {
    //
    if (selected !== null && selected !== "none") {
      animateIn();
    }
  }, [selected]);

  const animateIn = () => {
    contextSafe(() => {
      const tl = gsap.timeline();
      tl.set(selectedItemContainer.current as gsap.TweenTarget, {
        yPercent: 100,
      });
      tl.to(selectedItemContainer.current as gsap.TweenTarget, {
        yPercent: 0,
        duration: 0.8,
        ease: "expo.Out",
      });
    })();
  };

  const animateOut = () => {
    contextSafe(() => {
      const tl = gsap.timeline();
      tl.set(selectedItemContainer.current as gsap.TweenTarget, {
        yPercent: 0,
      });
      tl.to(selectedItemContainer.current as gsap.TweenTarget, {
        yPercent: 100,
        duration: 0.8,
        ease: "expo.inOut",
      });
    })();
  };

  const onClose = () => {
    animateOut();
  };

  function renderList(title, data): React.ReactNode {
    if (!data || data.length <= 0 || data[0] === undefined) return <></>;
    const list = data.map((t) => {
      return <li key={t}>{t}</li>;
    });
    return (
      <>
        <h2>{`${title}:`}</h2>
        <ul>{list}</ul>
      </>
    );
  }

  return (
    <div
      style={{
        display: "block",
        height,
        overflow: "hidden",
        position: "absolute",
        width: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <div
        ref={selectedItemContainer}
        className={styles.selectedProjectContainer}
        style={{
          height,
          pointerEvents: "auto",
          //marginTop: state.workHeight,
        }}
      >
        <div className={styles.selectedProjectComponent}>
          {selected && (
            <>
              <div className={styles.selectedHeader}>
                <button onClick={onClose}>
                  <img src="/images/close.png"></img>
                </button>
                <h1>{selected.title}</h1>
              </div>
              <div className={styles.selectedCarouselContainer}>
                <div className={styles.selectedCarousel}></div>
              </div>
              <div className={styles.selectedBody}>
                <p>{selected.body}</p>
              </div>
              <div className={styles.selectedDetails}>
                <div style={{ flex: 1 }}>
                  {renderList("Agency", [selected.agency])}
                  {renderList("Team", selected.team)}
                </div>
                <div style={{ flex: 1 }}>
                  {renderList("Languages", [selected.languages])}
                  {renderList("Frameworks", [selected.frameworks])}
                  {renderList("Software", [selected.software])}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedProject;
