import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./header.module.scss"
import { useRouter } from "next/router";
import Image from 'next/image';
import Lottie from 'react-lottie'
import menuLottie from '../../animations/menu.json';


const arreVoiceLogoUrl = "/assets/image/arre-voice-logo.png";

export default function Header() {

  const router = useRouter();

  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: {},
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const isActive = (path) => {
    if (path === "/" && router.route === "/") {
      return true;
    }

    if (router.route.includes(path) && path !== "/") {
      return true;
    }
    return false;
  };

  const handleShowMenu = () => {

  }



  return (
    <div className={styles.header}>
      <span className={styles.logo}><Image alt="arre-voice-logo" width={80}
        height={50} src={arreVoiceLogoUrl}></Image></span>
      <nav className={styles.navigation}>

        <div className={styles.desktop}>
          <span className={`${isActive("/") ? styles.active : styles.inActive}`}><Link href="/">Home</Link></span>
          <span className={`${isActive("/blog") ? styles.active : styles.inActive}`}><Link href="/blog">Blogs</Link></span>
          <span className={`${isActive("/faq") ? styles.active : styles.inActive}`}><Link href="/faq">FAQs</Link></span>
        </div>
        <div className={styles.mobile} onClick={handleShowMenu}>
          {!showMobileMenu && <span className={styles.menuIcon} onClick={() => setShowMobileMenu(true)}>&#8801; </span>}
          {showMobileMenu && <span className={styles.menuIcon} onClick={() => setShowMobileMenu(false)}>x  </span>}

        </div>


      </nav>

      {showMobileMenu && <div className={styles.mobileMenu}>
        <div className={`${isActive("/") ? styles.active : styles.inActive}`}><Link href="/">Home</Link></div>
        <hr />
        <div className={`${isActive("/blog") ? styles.active : styles.inActive}`}><Link href="/blog">Blogs</Link></div>
        <hr />
        <div className={`${isActive("/faq") ? styles.active : styles.inActive}`}><Link href="/faq">FAQs</Link></div>
      </div>}
    </div>
  )
}
