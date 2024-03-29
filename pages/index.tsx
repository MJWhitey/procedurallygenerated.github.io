import { useEffect } from "react";
import * as THREE from "three";
import { AsciiEffect } from "../components/ascii";
import { useIntersectionObserver } from "react-intersection-observer-hook";

import React, { useState } from "react";
import styles from "../components/index.module.css";
import Work from "../components/work";
import Header from "../components/header";
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/contact";
import StickyButton from "../components/sticky-button";
import { isMobile } from "react-device-detect";
import { prefix } from "../utils/prefix";
import GAnalytics from "../utils/analytics";
import AssetLoader from "../components/assetloader";

let camera, scene, renderer, effect;
let plane;
const DESIGN_OVERLAP_BUFFER = 40;

export default function Main() {
    const video = React.useRef<HTMLVideoElement>();
    const ctx = React.useRef<HTMLCanvasElement>();
    //
    const [observedHeader, { entry: headerEntry }] = useIntersectionObserver();
    const isHeaderVisible = headerEntry && headerEntry.isIntersecting;
    const [observedWork, { entry: workEntry }] = useIntersectionObserver();
    const isWorkVisible = workEntry && workEntry.isIntersecting;
    //
    const [state, setState] = useState({
        screen: {
            width: 956,
            height: 400,
        },
        showScrollToTopBtn: false,
        showSelectedProject: true,
        assetsLoaded: false,
        componentLoaded: false,
        videoBuffered: false,
    });

    useEffect(() => {
        GAnalytics.Instance.Initialize();
        initThreeVideoEffect(true, isMobile);
        animate();
        if (video.current && video.current.muted && !isVideoPlaying())
            video.current.play();
        setState((prev) => ({
            ...prev,
            componentLoaded: true,
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
            },
        }));
        window.addEventListener("resize", onWindowResize);
        //
    }, []);

    useEffect(() => {
        console.log("VISIBILITY : ", isHeaderVisible, isWorkVisible);
        if (video.current && video.current.muted) {
            if (!isHeaderVisible && isVideoPlaying()) video.current.pause();
            if (isHeaderVisible && !isVideoPlaying()) {
                video.current.play();
            }
        }
        if (isWorkVisible === false && isHeaderVisible === false) {
            setState((prev) => ({ ...prev, showScrollToTopBtn: true }));
        }

        if ((isWorkVisible || isHeaderVisible) && state.showScrollToTopBtn) {
            setState((prev) => ({ ...prev, showScrollToTopBtn: false }));
        }
    }, [isHeaderVisible, isWorkVisible]);

    function animate() {
        requestAnimationFrame(animate);
        if (!isHeaderVisible) render();
    }

    function isVideoPlaying() {
        return (
            video.current &&
            !!(
                video.current.currentTime > 0 &&
                !video.current.paused &&
                !video.current.ended &&
                video.current.readyState > 2
            )
        );
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

    const onStickyButtonPress = () => {
        GAnalytics.Instance.LogEvent("sticky_button_pressed");
        const targetScroll = document.querySelector('a[href^="work"]');

        if (targetScroll) {
            targetScroll.scrollIntoView({
                behavior: "smooth",
            });
        }
        console.log("onStickyButtonPress : ", state.showSelectedProject);
        setState((prev) => ({ ...prev, showSelectedProject: false }));
    };

    const onLoaderComplete = () => {
        console.log("onLoaderComplete");
        setState((prev) => ({ ...prev, assetsLoaded: true }));
    };

    const onWorkClosed = () => {
        console.log("onWorkClosed");
        setState((prev) => ({ ...prev, showSelectedProject: true }));
    };

    const onWorkChanged = () => {
        console.log("onWorkChanged");
        setState((prev) => ({ ...prev, showSelectedProject: true }));
    };

    if (state.componentLoaded) {
        if (!state.assetsLoaded) {
            document.getElementsByTagName("body")[0].style.cssText =
                "overflow-y: hidden;";
        } else {
            document.getElementsByTagName("body")[0].style.cssText =
                "overflow-y: scroll;";
        }
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
                onPlay={() => {
                    setState((prev) => ({ ...prev, videoBuffered: true }));
                }}
            >
                <source src={`${prefix}/video/supercut_1.mp4`} />
            </video>
            <canvas
                className={styles.hidden}
                ref={ctx as React.RefObject<HTMLCanvasElement>}
                width="500"
                height="500"
            ></canvas>
            <div id="root" className={styles.rootContainer}>
                <Header
                    ref={observedHeader}
                    width={state.screen.width}
                    height={state.screen.height}
                />
                <Work
                    ref={observedWork}
                    showSelectedProject={state.showSelectedProject}
                    onClose={onWorkClosed}
                    onChange={onWorkChanged}
                />
                <About />
                <Skills />
                <Contact />
                <StickyButton
                    visible={state.showScrollToTopBtn}
                    onPress={onStickyButtonPress}
                />
            </div>
            {!state.assetsLoaded && (
                <AssetLoader
                    visible={!state.videoBuffered}
                    onLoaderComplete={onLoaderComplete}
                />
            )}
        </div>
    );
}

function getWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight + DESIGN_OVERLAP_BUFFER;
    return {
        width,
        height,
    };
}

function initThreeVideoEffect(asciiActive = true, mobileCfg = false) {
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0);
    const { width, height } = getWindowSize();

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
        effect = new AsciiEffect(renderer, " .:-+*=%@#", {
            invert: false,
            resolution: mobileCfg ? 0.16 : 0.1,
        });
        effect.setSize(width, height);
        effect.domElement.style.color = "#585a66";
        effect.domElement.style.backgroundColor = "#1f212a";
        effect.domElement.id = "asciivideo";
        // Special case: append effect.domElement, instead of renderer.domElement.
        // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.
        if (document.getElementById("asciivideo") == null)
            document.body.appendChild(effect.domElement);
    } else {
        document.body.appendChild(renderer.domElement);
    }
}

function render() {
    effect ? effect.render(scene, camera) : renderer.render(scene, camera);
}
