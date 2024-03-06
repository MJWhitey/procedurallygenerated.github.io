import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import styles from "./assetloader.module.css";
import useImagePreloader from "../hooks/useImagePreloader";
import { prefix } from "../utils/prefix";

interface AssetLoaderProps {
    visible?: boolean;
    onLoaderComplete?;
}

const AssetLoader = ({
    visible = false,
    onLoaderComplete = () => {},
}: AssetLoaderProps) => {
    //
    //
    const preloadRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: preloadRef });
    const timelineRef = useRef<TimelineLite | null>(null);
    const [state, setState] = useState({
        visible: true,
    });
    //
    const assets: string[] = [
        `${prefix}/images/profile_pic.png`,
        `${prefix}/images/tint_blue_rago.png`,
        `${prefix}/images/tint_blue_fulltilt.png`,
        `${prefix}/images/tint_blue_carlsberg.png`,
        `${prefix}/images/tint_blue_blackmirror.png`,
        `${prefix}/images/tint_blue_queuejumper.png`,
        `${prefix}/images/tint_blue_vivid.png`,
        `${prefix}/images/tint_blue_westfield.png`,
        `${prefix}/images/tint_blue_mazda.png`,
        `${prefix}/images/tint_blue_wonderwall.png`,
        `${prefix}/images/projects/rag/ready_attn_go_1.jpg`,
        `${prefix}/images/projects/fulltilt/fulltilt_1.jpg`,
        `${prefix}/images/projects/carlsberg/carlsberg_1.jpg`,
        `${prefix}/images/projects/blackmirror/blackmirror_1.gif`,
        `${prefix}/images/projects/queuejumper/queue_jumper_1.png`,
        `${prefix}/images/projects/vivid/vivid_1.jpg`,
        `${prefix}/images/projects/mazda/mazda_1.png`,
        `${prefix}/images/projects/wonderwall/wonderwall_1.jpg`,
    ];
    //
    const { imagesPreloaded } = useImagePreloader(assets)

    useEffect(() => {
        console.log('AssetLoader ', visible, imagesPreloaded);
        if (state.visible != visible && imagesPreloaded) {
            if (visible) {
                // show
            } else {
                animateOut();
            }
        }
    }, [visible,imagesPreloaded]);

    const animateOut = contextSafe(() => {
        if (timelineRef.current) timelineRef.current.kill();
        const tl = gsap.timeline();
        tl.call(() => {
            setState((prev) => ({ ...prev, visible }));
        });
        tl.fromTo(
            indicatorRef.current as gsap.TweenTarget,
            { width: 0, alpha: 1 },
            { width: "100%", alpha: 1, duration: 0.8, ease: "expo.out" }
        )
        tl.fromTo(
            preloadRef.current as gsap.TweenTarget,
            { y: 0, alpha: 1 },
            { y: "-100%", alpha: 1, duration: 0.8, ease: "expo.out" }
        );
        tl.call(() => {
            onLoaderComplete();
        })
    });

    return (
        <div ref={preloadRef} className={styles.assetLoader}>
            <div className={styles.assetLoaderContainer}>
                <h1>
                    Perfection is achieved, not when there is nothing left to
                    add, but when there is nothing left to take away.
                </h1>
                <h2>Antoine de Saint-Exupéry</h2>
            </div>
            <div className={styles.assetLoaderIndicatorContainer}>
                <div ref={indicatorRef} className={styles.assetLoaderIndicator}></div>
            </div>
        </div>
    );
};

export default AssetLoader;
