import _ from "lodash";
import gsap, { TimelineLite } from "gsap";
import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./selected-project.module.css";
import { useGSAP } from "@gsap/react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SelectedProjectProps {
  height?: number;
  selected?;
  onClose?;
}

const SelectedProject = ({
  height = 0,
  selected = null,
  onClose = {},
}: SelectedProjectProps) => {
  const selectedItemContainer = useRef<HTMLDivElement>(null);
  const slickRef = useRef<Slider>(null);
  const timelineRef = useRef<TimelineLite | null>(null);
  const [state, setState] = useState({
    currentSlide: 0,
  });
  const { contextSafe } = useGSAP({ scope: selectedItemContainer });
  const slickSettings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (prev, next) => {
      setState({ currentSlide: next });
    },
    customPaging: (i) => (
      <div
        className={
          i === state.currentSlide
            ? styles.selectedDotsSelected
            : styles.selectedDots
        }
      ></div>
    ),
  };

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
      if (timelineRef.current) timelineRef.current.kill();
      const tl = gsap.timeline();
      tl.set(selectedItemContainer.current as gsap.TweenTarget, {
        yPercent: 100,
      });
      tl.to(selectedItemContainer.current as gsap.TweenTarget, {
        yPercent: 0,
        duration: 0.8,
        ease: "expo.Out",
      });
      timelineRef.current = tl;
    })();
  };

  const animateOut = () => {
    contextSafe(() => {
      if (timelineRef.current) timelineRef.current.kill();
      const tl = gsap.timeline();
      tl.set(selectedItemContainer.current as gsap.TweenTarget, {
        yPercent: 0,
      });
      tl.to(selectedItemContainer.current as gsap.TweenTarget, {
        yPercent: 100,
        duration: 0.8,
        ease: "expo.inOut",
      });
      tl.call(() => {
        setState((prev) => {
          return {
            ...prev,
            currentSlide: 0,
          };
        });
        if (_.isFunction(onClose)) onClose();
      });
      timelineRef.current = tl;
    })();
  };

  const onProjectClose = () => {
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

  function onSlickContainerPressed() {
    if (slickRef.current) slickRef.current.slickNext();
  }

  function renderCarousel(carousel): React.ReactNode {
    const result: React.ReactElement[] = [];

    carousel.forEach((c: string) => {
      const matchVideoExt = c.match(`^.*\.(mov|xvid|mp4)$`);
      const isVideo = matchVideoExt && matchVideoExt.length >= 1;
      console.log("c : ", c, isVideo);
      if (isVideo) {
        result.push(
          <div className={styles.selectedCarousel}>
            <video width="auto" height="100%" controls>
              <source src={c} />
              Your browser does not support HTML5 video.
            </video>
          </div>
        );
      } else {
        result.push(
          <div className={styles.selectedCarousel}>
            <img src={`${c}`} />
          </div>
        );
      }
    });

    return result;
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
                <button onClick={onProjectClose}>
                  <img src="/images/close.png"></img>
                </button>
                <h1>{selected.title}</h1>
              </div>
              {selected.carousel && selected.carousel.length >= 1 && (
                <div
                  className={styles.selectedCarouselContainer}
                  onClick={() => {
                    onSlickContainerPressed();
                  }}
                >
                  <Slider ref={slickRef} {...slickSettings}>
                    {renderCarousel(selected.carousel)}
                  </Slider>
                </div>
              )}
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
