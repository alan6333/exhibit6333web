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


      <>
        <div className="-z-50 fixed w-full h-full">
                <Image src="https://storage6333.s3.us-east-2.amazonaws.com/background.jpg"
                unoptimized={true}
                alt="background"
                fill
                priority
                className="-z-50"
                sizes="100%" 
                style={{
                    objectFit: "cover"
                }} />
        </div>
      </>
      <Header></Header>
    </div>
  );
}