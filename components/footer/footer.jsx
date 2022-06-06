/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import styles from "./footer.module.scss"
const playStoreLogo = "/assets/image/play-store.png";
const appStoreLogo = "/assets/image/app-store.png";
const footerMobileImage = "/assets/image/footer-mobile.png"

const instagramIcon = "/assets/icons/instagram.png";
const dribbleIcon = "/assets/icons/dribble.png";
const twitterIcon = "/assets/icons/twitter.png";
const youtubeIcon = "/assets/icons/youtube.png";



export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.download}>
                <div className={styles.header}>
                    Download the app:
                </div>
                <div className={styles.comment}>
                    Join the Arré Voice community and download the app today. We can’t wait to hear what you have to say.
                </div>
                <div className={styles.link}>
                    <a href='https://play.google.com/store/apps/details?id=com.arre.voice'>
                        <img alt="arre-voice-logo" 
                         src={appStoreLogo}></img>
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=com.arre.voice'>
                        <img alt="arre-voice-logo"  src={playStoreLogo}></img>
                    </a>
                </div>

            </div>
            <div className={styles.mobile}>
                    <img alt="arre-voice-logo" layout='fill' src={footerMobileImage}></img>
                </div>
            <div className={styles.bottom}>
                <div className={styles.copyright}>
                    © 2021 Arré Voice. All rights reserved
                </div>
                <div className={styles.socials}>
                    <a href='https://instagram.com'>
                        <Image alt="arre-voice-logo" width={20}
                            height={20} src={instagramIcon}></Image>
                    </a>
                    <a href='https://dribbble.com'>
                        <Image alt="arre-voice-logo" width={22}
                            height={20} src={dribbleIcon}></Image>
                    </a>
                    <a href='https://twitter.com'>
                        <Image alt="arre-voice-logo" width={22}
                            height={16} src={twitterIcon}></Image>
                    </a>
                    <a href='https://youtube.com'>
                        <Image alt="arre-voice-logo" width={24}
                            height={16} src={youtubeIcon}></Image>
                    </a>
                </div>
                <div className={styles.mobile}>
                    <img alt="arre-voice-logo" layout='fill' src={footerMobileImage}></img>
                </div>
            </div>


        </div>
    )
}
