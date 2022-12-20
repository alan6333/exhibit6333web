import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import Header from '../components/Header';
import Background from '../components/Background';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exhibit 6333</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Background /> 
      <Background /> 
    </div>
  );
}