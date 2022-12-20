import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Image from "next/image";

export default function FirstPost() {
    return (
      // <>
      // {/* https://fonts.google.com/share?selection.family=Urbanist:wght@100 */}
      //   <Head>
      //     <title>First Post</title>
      //   </Head>
      //   <h1>First Post</h1>
      //   <h2>
      //     <Link href="/">← Back to home</Link>
      //   </h2>
      // </>
      <div className={styles.container}>
        <Image src="https://storage6333.s3.us-east-2.amazonaws.com/background.jpg"
          unoptimized={true}
          alt="background"
          fill
          priority
          className="-z-50 w-fit h-auto"
          sizes="100%" 
          style={{
              objectFit: "cover"
        }} />
      </div>
    );
  }