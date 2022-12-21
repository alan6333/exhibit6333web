import React from 'react';
import "../styles/globals.css";
import Background from '../components/Background';
import FirstPost from './posts/post1';
// pages/_app.js
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const UrbanistFont = localFont({ src: './Urbanist-Thin.ttf' })

export default function App({ Component, pageProps }) {
      return (
        <main className={UrbanistFont.className}>
            <style jsx global>{`
                :root {
                --font-base: ${UrbanistFont.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </main>
      );
    }