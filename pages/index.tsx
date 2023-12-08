import { useEffect } from "react";
import * as THREE from "three";
import { AsciiEffect } from "../components/ascii";

import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Asciify, readFromCanvas } from "@sister.software/asciify";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import styles from "../components/index.module.css";
//import Head from 'next/head'

let camera, controls, scene, renderer, effect;
let sphere, plane;
const start = Date.now();
const MAX_SCREEN_WIDTH = 1920;
const MAX_SCREEN_HEIGHT = 1080;

export default function Main() {
  const video = useRef();
  const ctx = useRef();

  useEffect(() => {
    init_three();
    //init_three_video();
    animate();
    if (video.current) video.current.play();
  }, []);

  function draw_video() {
    if (!ctx.current && !ctx.current.getContext("2d")) return;
    ctx.current.getContext("2d").drawImage(video.current, 0, 0, 500, 500);
  }

  function animate() {
    // requestAnimationFrame( animate );
    requestAnimationFrame(animate);
    //draw_video();
    render();
  }

  return (
    <div>
      <video
        id="video"
        ref={video}
        loop
        muted
        crossOrigin="anonymous"
        style={{ width: "500px", height: "500px" }}
        className={styles.hidden}
      >
        <source src="/video/doom_zoom.mp4" />
      </video>
      <canvas
        className={styles.hidden}
        ref={ctx}
        width="500"
        height="500"
      ></canvas>
      <div id="root" className={styles.rootContainer}>
        <div className={styles.contentContainer}>
          <h1 className={styles.header}>I build technology products that deliver meaningful outcomes for businesses and their customers.</h1>
        </div>
      </div>
    </div>
  );
}

function getWindowSize() {
  let width = window.innerWidth;
  let height = window.innerHeight;

  if (width >= MAX_SCREEN_WIDTH) width = MAX_SCREEN_WIDTH;
  if (height >= MAX_SCREEN_HEIGHT) height = MAX_SCREEN_HEIGHT;

  return {
    width,
    height,
  };
}

function init_three_video() {
  //const container = document.getElementById("container");

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );

  scene = new THREE.Scene();

  // const geometry = new THREE.SphereGeometry(5, 60, 40);
  // // invert the geometry on the x-axis so that all of the faces point inward
  // geometry.scale(-1, 1, 1);

  const geometry = new THREE.PlaneGeometry(400, 400);

  const video: HTMLVideoElement = document.getElementById(
    "video"
  ) as HTMLVideoElement;
  //video.play();

  const texture = new THREE.VideoTexture(video);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({ map: texture });

  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 400),
    new THREE.MeshBasicMaterial({ color: 0xe0e0e0 })
  );
  mesh.quaternion.copy(camera.quaternion);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: false });
  effect.setSize(window.innerWidth, window.innerHeight);
  effect.domElement.style.color = "#6a6c77";
  effect.domElement.style.backgroundColor = "#1f212a";

  //document.body.appendChild(effect.domElement);
  document.body.appendChild(renderer.domElement);

  // document.addEventListener("pointerdown", onPointerDown);
  // document.addEventListener("pointermove", onPointerMove);
  // document.addEventListener("pointerup", onPointerUp);
  // window.addEventListener("resize", onWindowResize);

  //
}

function init_three() {
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // camera = new THREE.PerspectiveCamera(
  //   70,
  //   window.innerWidth / window.innerHeight,
  //   1,
  //   1000
  // );
  // //camera.position.y = 150;
  // camera.position.z = 200;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0, 0, 0);

  const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
  pointLight1.position.set(500, 500, 500);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
  pointLight2.position.set(-500, -500, -500);
  scene.add(pointLight2);

  // sphere = new THREE.Mesh(
  //   new THREE.SphereGeometry(200, 20, 10),
  //   new THREE.MeshPhongMaterial({ flatShading: true })
  // );
  // scene.add(sphere);

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
  //plane.position.y = -200;
  //plane.rotation.x = -Math.PI / 2;
  scene.add(plane);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: false });
  effect.setSize(window.innerWidth, window.innerHeight);
  effect.domElement.style.color = "#6a6c77";
  effect.domElement.style.backgroundColor = "#1f212a";

  // Special case: append effect.domElement, instead of renderer.domElement.
  // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

  document.body.appendChild(effect.domElement);
  //document.body.appendChild(renderer.domElement);
}

function render() {
  // const timer = Date.now() - start;

  // sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
  // sphere.rotation.x = timer * 0.0003;
  // sphere.rotation.z = timer * 0.0002;

  //controls.update();

  effect.render(scene, camera);
  //renderer.render(scene, camera);
}
