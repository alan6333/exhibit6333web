import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exhibit 6333</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div class="" >Exhibit 6333</div>
      <Image src="/images/background.jpg"
        unoptimized={true}
        alt="background"
        fill
        priority
        sizes="100vw"
        style={{
        }} />
      </main>

    </div>
  );
}