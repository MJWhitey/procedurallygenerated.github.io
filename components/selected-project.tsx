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
        duration: 0.6,
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
        duration: 0.6,
        ease: "expo.inOut",
      });
    })();
  };

  const onClose = () => {
    animateOut();
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
            <button onClick={onClose}>CLOSE</button>
          <h1>Headline of the Project: Project</h1>
        </div>
      </div>
    </div>
  );
};

export default SelectedProject;
