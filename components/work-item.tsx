import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./work-item.module.css";

const IMAGE_ASSETS_PATH = "/images/";

interface WorkItemProps {
  data;
}

export default function WorkItem({ data }: WorkItemProps) {
  const overlay = useRef<HTMLDivElement>();
  const overlayTitle = useRef<HTMLHeadingElement>();
  const { contextSafe } = useGSAP({ scope: overlay });

  const onItemOver = contextSafe(() => {
    const tl = gsap.timeline();
    const spans =
      overlay.current && overlay.current.getElementsByTagName("span");
    tl.to(overlay.current as gsap.TweenTarget, { yPercent: -100, duration: 0.2 });
    tl.fromTo(
      overlayTitle.current as gsap.TweenTarget,
      { alpha: 0 },
      { alpha: 1, duration: 0.2 }
    );
    if (!data?.technology) return;
    tl.fromTo("hr", { scaleX: 0 }, {scaleX: 1, duration: 0.2});
    console.log(spans);
    if (spans && spans?.length > 0) {
      for (const span of spans) {
        tl.fromTo(span, { alpha: 0, x: -10 }, { alpha: 1, x: 0, duration: 0.2}, "-=0.1");
      }
    }
  });

  const onItemOff = contextSafe(() => {
    gsap.to(overlay.current as gsap.TweenTarget, { yPercent: 0, duration: 0.4 });
  });

  function renderTechnologies(technology): React.ReactNode {
    if (!technology) return;
    const techs: React.ReactElement[] = [];
    let i = 0;
    technology &&
      technology.forEach((tech) => {
        i++;
        techs.push(<span className={styles.workItemTech}>{tech}</span>);
        if (i % 3 === 0 || i === technology.length) {
          techs.push(<br />);
        } else {
          techs.push(<span className={styles.workItemTech}>{`-`}</span>);
        }
      });
    return <div className={styles.workItemSpanContainer}>{techs}</div>;
  }

  const renderTechnology = (data) => {
    if (!data.technology) return;
    const techs: React.ReactNode[] = [];
    //
    for (let i = 0; i < data.technology.length; i += 3) {
      const slice = data.technology.slice(i, i + 3);
      techs.push(renderTechnologies(slice));
      // do whatever
    }
    return (
      <>
        <hr />
        {techs}
      </>
    );
  };

  return (
    <div
      className={styles.workItem}
      style={{
        backgroundImage: `url(${IMAGE_ASSETS_PATH + data.thumbnail})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onMouseOver={() => {
        onItemOver();
      }}
      onMouseLeave={() => {
        onItemOff();
      }}
    >
      <div className={styles.workItemTitle}>
        <h2>{data.title}</h2>
      </div>
      <div
        ref={overlay as React.RefObject<HTMLDivElement>}
        className={styles.workItemOverlay}
      >
        <div className={styles.workItemOverlayContainer}>
          <h2 ref={overlayTitle as React.RefObject<HTMLDivElement>}>
            {data.title}
          </h2>
          {renderTechnology(data)}
        </div>
      </div>
    </div>
  );
}
