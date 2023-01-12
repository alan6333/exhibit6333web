import styles from '../styles/Home.module.css'
import localFont from '@next/font/local'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Image from "next/image";

export default () => {
    return (
        <div class='-z-0 h-screen w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
            <div className=' py-7 grid place-content-center'>
                <div className=" text-5xl UrbanistFont.localFont transition-all hover:text-5.5 hover:duration-75">Alan Alejandro Coronado</div>
            </div>
            <Navbar />
        </div>
    )
  }