import _ from "lodash";
import gsap, { TimelineLite } from "gsap";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./selected-project.module.css";
import { useGSAP } from "@gsap/react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { prefix } from "../utils/prefix";

interface SelectedProjectProps {
  height?: number;
  selected?;
  onClose?;
  onChange?;
}

const SelectedProject = ({
  height = 0,
  selected = null,
  onClose = {},
  onChange = null,
}: SelectedProjectProps) => {
  const selectedItemContainer = useRef<HTMLDivElement>(null);
  const selectedItemComponent = useRef<HTMLDivElement>(null);
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
    if (_.isFunction(onChange)) {
      notifyChange();
    }

    if (selected !== null && selected !== "none") {
      animateIn();
    }
  }, [selected]);

  const notifyChange = async () => {
    await new Promise((res) => setTimeout(res, 800));
    if (
      selectedItemComponent.current &&
      selectedItemComponent.current?.offsetHeight > 0
    ) {
      onChange(selectedItemComponent.current?.offsetHeight + 60); // [MW] This doesnt include padding for some reason?
    }
  };

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
      // eslint-disable-next-line no-useless-escape
      const matchVideoExt = c.match(`^.*\.(mov|xvid|mp4)$`);
      const isVideo = matchVideoExt && matchVideoExt.length >= 1;
      //console.log("c : ", c, isVideo);
      if (isVideo) {
        result.push(
          <div className={styles.selectedCarousel}>
            <video width="auto" height="100%" controls>
              <source src={prefix + c} />
              Your browser does not support HTML5 video.
            </video>
          </div>
        );
      } else {
        result.push(
          <div className={styles.selectedCarousel}>
            <img src={`${prefix}${c}`} />
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
        <div
          ref={selectedItemComponent}
          className={styles.selectedProjectComponent}
        >
          {selected && (
            <>
              <div className={styles.selectedHeader}>
                <button style={{ flex: 1 }} onClick={onProjectClose}>
                  <img src={`${prefix}/images/close.png`}></img>
                </button>
                <h1 style={{ flex: 8 }}>{selected.title}</h1>
                <div style={{ flex: 1 }}></div>
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
