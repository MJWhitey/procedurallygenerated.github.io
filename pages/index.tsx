import { useEffect } from "react";
import * as THREE from "three";
import { AsciiEffect } from "../components/ascii";

import React, { useState } from "react";
import styles from "../components/index.module.css";
import Work from "../components/work";
//import Head from 'next/head'

let camera, scene, renderer, effect;
let plane;
const DESIGN_OVERLAP_BUFFER = 40;

export default function Main() {
  const video = React.useRef<HTMLVideoElement>();
  const ctx = React.useRef<HTMLCanvasElement>()
  const [state, setState] = useState({
    screen: {
      width: 956,
      height: 400,
    },
  });

  useEffect(() => {
    initThreeVideoEffect();
    animate();
    if (video.current && video.current.muted && !isVideoPlaying()) video.current.play();
    setState((prev) => ({
      ...prev,
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    }));
    window.addEventListener("resize", onWindowResize);
  }, []);

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function isVideoPlaying() { 
    return video.current && !!(video.current.currentTime > 0 && !video.current.paused && !video.current.ended && video.current.readyState > 2);
  }

  function onWindowResize() {
    const { width, height } = getWindowSize();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    effect.setSize(width, height);
    setState((prev) => ({
      ...prev,
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    }));
  }

  return (
    <div>
      <video
        id="video"
        ref={video as React.RefObject<HTMLVideoElement>}
        playsInline
        autoPlay
        //defaultmuted="true" // eslint-disable-line
        muted
        loop
        crossOrigin="anonymous"
        style={{ width: "500px", height: "500px" }}
        className={styles.hidden}
      >
        <source src="/video/doom_zoom.mp4" />
      </video>
      <canvas
        className={styles.hidden}
        ref={ctx as React.RefObject<HTMLCanvasElement>}
        width="500"
        height="500"
      ></canvas>
      <div id="root" className={styles.rootContainer}>
        <div id="header" className={styles.headerContainer}>
          <div
            className={styles.contentContainer}
            style={{
              width: state.screen.width,
              height: state.screen.height - 30,
            }}
          >
            <div style={{ flex: 1 }}>
              <h2 className={styles.header}>
                I build technology
                <br /> products that deliver
                <br />
                <strong>meaningful</strong> outcomes
                <br />
                for businesses and
                <br />
                their customers.
              </h2>
            </div>
            <div style={{ marginBottom: 60 }}>
              <h2 className={styles.headerTitle}>Matthew White</h2>
              <h3 className={styles.headerTitle}>
                Engineering Lead & Software Developer
              </h3>
            </div>
          </div>
        </div>
        <Work />
      </div>
    </div>
  );
}

// function getWindowSize() {
//   let width = window.innerWidth;
//   let height = window.innerHeight;

//   if (width >= MAX_SCREEN_WIDTH) width = MAX_SCREEN_WIDTH;
//   if (height >= MAX_SCREEN_HEIGHT) height = MAX_SCREEN_HEIGHT;

//   return {
//     width,
//     height,
//   };
// }

function getWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight + DESIGN_OVERLAP_BUFFER;
  return {
    width,
    height,
  };
}

function initThreeVideoEffect(asciiActive = true) {
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0, 0, 0);
  const {width, height} = getWindowSize();

  const video: HTMLVideoElement = document.getElementById(
    "video"
  ) as HTMLVideoElement;
  const texture = new THREE.VideoTexture(video);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Plane
  plane = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.MeshBasicMaterial({ map: texture })
  );
  scene.add(plane);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  if (asciiActive) {
    effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: false });
    effect.setSize(width, height);
    effect.domElement.style.color = "#6a6c77";
    effect.domElement.style.backgroundColor = "#1f212a";
    // Special case: append effect.domElement, instead of renderer.domElement.
    // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.
    document.body.appendChild(effect.domElement);
  } else {
    document.body.appendChild(renderer.domElement);
  }
}

function render() {
  effect ? effect.render(scene, camera) : renderer.render(scene, camera);
}
