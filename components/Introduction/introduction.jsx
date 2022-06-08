/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./introduction.module.scss"
import Image from 'next/image';
import Lottie from 'react-lottie'

import girlSwippingLottie from '../../animations/girl-swiping.json';
import networkLottie from '../../animations/network.json';


const curves1 = "/assets/image/curves1.png";
const curves2 = "/assets/image/curves2.png";
const curves3 = "/assets/image/curves3.png";
const curves4 = "/assets/image/curves4.png";
const playStoreLogo = "/assets/image/play-store.png";
const appStoreLogo = "/assets/image/app-store.png";
const phoneImage = "/assets/image/phone.png";



export default function Introduction() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: {},
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className={styles.introduction}>
      <div className={styles.header}>
        <div className={styles.curves}>
          <Image alt="arre-voice-logo" width={200}
            height={140} src={curves1}></Image>
        </div>
        <div className={styles.text}>
          Placeholder Text
        </div>
      </div>
      <div className={styles.about}>
        We are a platform that drives interest based conversations & commerce. Led by <span className={styles.arreOrange}> women </span>, driven by <span className={styles.arreOrange}>audio</span>.
      </div>

      <div className={styles.download}>
        <div className={styles.heading}>
          Download the app:
        </div>
        <div className={styles.link}>
          <a target="_blank" rel='noreferrer' href='https://play.google.com/store/apps/details?id=com.arre.voice'>
            <Image alt="arre-voice-logo" width={160}
              height={50} src={appStoreLogo}></Image>
          </a>
          <a target="_blank" rel='noreferrer'  href='https://play.google.com/store/apps/details?id=com.arre.voice'>
            <Image alt="arre-voice-logo" width={160}
              height={50} src={playStoreLogo}></Image>
          </a>
        </div>

      </div>

      <div className={styles.mobile}>
        <img alt="arre-voice-logo"
          src={phoneImage}></img>
        <div className={styles.swippingAnimation}>
          <Lottie
            options={{ ...defaultOptions, animationData: girlSwippingLottie }}
            height={240}
            width={360}
          />
        </div>
        <div className={styles.networkAnimation}>
          <Lottie
            options={{ ...defaultOptions, animationData: networkLottie }}
            height={260}
            width={320}
          />
        </div>
      </div>

      <div className={styles.curve2}>
        <Image alt="arre-voice-logo" width={130}
          height={560} src={curves2}></Image>
      </div>
      
      <div className={styles.curve3}>
        <Image alt="arre-voice-logo" width={130}
          height={560} src={curves3}></Image>
      </div>


    </div>
  )
}
