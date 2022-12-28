import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Navbar from '../components/Navbar'
import Exhibition from '../components/Exhibition';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Exhibit 6333</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='-z-0 h-screen w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
          <Header />
          <Navbar />
          <Exhibition />
          <Logo />
        </div>
      </div>
    </>
  );
}