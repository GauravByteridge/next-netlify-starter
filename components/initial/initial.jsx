/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from "./initial.module.scss"
import videoURL from "../../public/assets/videos/arre-logo.mp4"

const homeScreenImage = "/assets/image/introuction-image.png";
const mouseScrollImage = "/assets/image/mouse-scroll.png";

export default function Initial({ setVideoIntroShown }) {

    const [isLastSeen, setIsLastSeen] = useState(false);
    const [showVideo, setshowVideo] = useState(false);
    const [isVideoShown, setIsVideoShown] = useState(false)

    const videoRef = useRef();
    const observer = useRef();
    const lastVideoElementRef = useCallback(
        (node) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setIsLastSeen(true)
                }
            });
            if (node) observer.current.observe(node);
        },
        []
    );

    useEffect(() => {
        if (isLastSeen) {
            setTimeout(() => {
                setshowVideo(true);
            }, 4000)


        }

    }, [isLastSeen])

    const handleVideoEnd = () => {

        setIsVideoShown(true);


        setTimeout(() => {
            setVideoIntroShown(true);
        }, 2500)
    }



    return (
        <div className={styles.initial}>

            <div className={`${styles.header} `}>
                <span className={`${isLastSeen && styles.topDown}`}>Get your journey started</span>
            </div>
            <img className={`${isLastSeen && styles.fadeOut}`} src={homeScreenImage}></img>
            <div className={`${styles.download} ${isLastSeen && styles.bottomUp}`}>
                <a target="_blank" rel='noreferrer' href='https://play.google.com/store/apps/details?id=com.arre.voice'><button >Download</button></a>
            </div>
            {/* <div className={styles.mouseScroll} >
            <img src={mouseScrollImage}></img>
            </div> */}
            <div id="sentinel" ref={lastVideoElementRef}></div>
            {showVideo && <video className={`${styles.video} ${isVideoShown && styles.fadeOutVideo}`} autoPlay={true} ref={videoRef} muted={true} onEnded={handleVideoEnd}>
                <source src="/assets/videos/arre-logo.mp4" type="video/mp4" />

                Your browser does not support the video tag.
            </video>}


        </div >
    )
}
