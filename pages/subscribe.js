import styles from '../styles/Home.module.css'
import localFont from '@next/font/local'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default () => {
    return (
        <div class='-z-0 h-screen w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
            <div className=' py-7 grid place-content-center'>
                <div className="text-5xl UrbanistFont.localFont transition-all hover:text-6xl hover:duration-75">Subscribe</div>
            </div>
            <Navbar />
        </div>
    );
  }