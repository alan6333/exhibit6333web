import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Image from "next/image";

export default function FirstPost() {
    return (
      <>
      {/* https://fonts.google.com/share?selection.family=Urbanist:wght@100 */}
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }