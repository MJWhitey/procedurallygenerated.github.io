import React, { useEffect, useRef, useState } from "react";
import styles from "./sticky-button.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface StickButtonProps {
  visible: boolean
}

const StickyButton = ({visible = false}: StickButtonProps) => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: stickyRef });
  const timelineRef = useRef<TimelineLite | null>(null);

  const [state, setState] = useState({
    visible: false,
  });

  useEffect(() => {
    if (state.visible != visible) {
      if (visible) {
        animateIn();
      } else {
        animateOut();
      }
    }
  }, [visible]);

  const animateIn = contextSafe(() => {
    if (timelineRef.current) timelineRef.current.kill();
    const tl = gsap.timeline();
    tl.call(() => {
      setState((prev) => ({ ...prev, visible }));
    })
    tl.fromTo(
      stickyRef.current as gsap.TweenTarget,
      { y: 20, alpha: 0 },
      { y: 0, alpha: 1, duration: 0.8, ease: 'elastic.out' }
    );
  });

  const animateOut = contextSafe(() => {
    if (timelineRef.current) timelineRef.current.kill();
    const tl = gsap.timeline();
    tl.fromTo(
      stickyRef.current as gsap.TweenTarget,
      { y: 0, alpha: 1 },
      { y: 20, alpha: 0, duration: 0.4, ease: 'expo.in' }
    );
    tl.call(() => {
      setState((prev) => ({ ...prev, visible }));
    })
  });

  const onPress = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={stickyRef}
      className={styles.stickyContainer}
      style={state.visible ? {} : {display: 'none'}}
      onMouseDown={onPress}
    >
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
