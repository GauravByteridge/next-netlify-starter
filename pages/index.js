import Head from 'next/head'
import Image from 'next/image'
import Features from '../components/features/features'
import Footer from '../components/footer/footer'
import Introduction from '../components/Introduction/introduction'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arre-Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className={styles.main}>
        <Introduction/>
          <Features/>
          <Footer/>
      </main>


    </div>
  )
}
