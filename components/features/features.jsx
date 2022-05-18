import React, { useEffect, useRef } from 'react'
import styles from "./features.module.scss"
import Lottie from 'react-lottie'
import voicepodLottie from '../../animations/voicepods.json';
import jampodLottie from '../../animations/jampod.json';
import girlSwippingLottie from '../../animations/girl-swiping.json';
import networkLottie from '../../animations/network.json';
import officeLottie from '../../animations/office.json';
import podrollLottie from '../../animations/podroll.json';
import categoryLottie from '../../animations/categories.json';




export default function Features() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: {},
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={styles.features}>
            <div className={styles.header}>How does <span className={styles.highlight}>Arré Voice</span> work? </div>

            {/* 1 */}
            <div className={styles.feature}>
                <div className={styles.container} >
                    <Lottie
                        options={{ ...defaultOptions, animationData: voicepodLottie }}
                        height={400}
                        width={700}

                    />
                </div>
                <div className={styles.about}>
                    <div className={styles.subHeader}>
                        <span className={styles.arreOrange}>Get Your</span>
                        <span className={styles.arreGreen}>Voice Out</span>
                    </div>
                    <div className={styles.content}>
                        It only takes a minute to create a voicepod wherein you have the freedom to express<br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className={styles.feature}>
                <div className={styles.container} >
                    <Lottie
                        options={{ ...defaultOptions, animationData: categoryLottie }}
                        height={500}
                        width={600}

                    />
                </div>
                <div className={styles.about}>
                    <div className={styles.subHeader}>
                        <span className={styles.arreOrange}>Get Your</span>
                        <span className={styles.arreGreen}>Voice Out</span>
                    </div>
                    <div className={styles.content}>
                        It only takes a minute to create a voicepod wherein you have the freedom to express<br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div className={styles.feature}>
                <div className={styles.container} >
                    <Lottie
                        options={{ ...defaultOptions, animationData: jampodLottie }}
                        height={400}
                        width={700}

                    />
                </div>
                <div className={styles.about}>
                    <div className={styles.subHeader}>
                        <span className={styles.arreOrange}>Get Your</span>
                        <span className={styles.arreGreen}>Voice Out</span>
                    </div>
                    <div className={styles.content}>
                        It only takes a minute to create a voicepod wherein you have the freedom to express<br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className={styles.feature}>
                <div className={styles.container} >
                    <Lottie
                        options={{ ...defaultOptions, animationData: podrollLottie }}
                        height={400}
                        width={700}

                    />
                </div>
                <div className={styles.about}>
                    <div className={styles.subHeader}>
                        <span className={styles.arreOrange}>Get Your</span>
                        <span className={styles.arreGreen}>Voice Out</span>
                    </div>
                    <div className={styles.content}>
                        It only takes a minute to create a voicepod wherein you have the freedom to express<br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    </div>
                </div>
            </div>

        </div>
    )
}
