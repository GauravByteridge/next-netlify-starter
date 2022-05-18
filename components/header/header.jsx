import Link from 'next/link'
import React from 'react'
import styles from "./header.module.scss"
import { useRouter } from "next/router";
import Image from 'next/image';
const arreVoiceLogoUrl = "/assets/image/arre-voice-logo.png";

export default function Header() {

  const router = useRouter();

  const isActive = (path) => {
    if (path === "/" && router.route === "/") {
      return true;
    }

    if (router.route.includes(path) && path !== "/") {
      return true;
    }
    return false;
  };



  return (
    <div className={styles.header}>
      <span className={styles.logo}><Image alt="arre-voice-logo" width={80}
        height={50} src={arreVoiceLogoUrl}></Image></span>
      <nav className={styles.navigation}>

        <span className={`${isActive("/") ? styles.active : styles.inActive}`}><Link href="/">Home</Link></span>
        <span className={`${isActive("/blog") ? styles.active : styles.inActive}`}><Link href="/blog">Blogs</Link></span>
        <span className={`${isActive("/faq") ? styles.active : styles.inActive}`}><Link href="/faq">FAQs</Link></span>

      </nav>
    </div>
  )
}
