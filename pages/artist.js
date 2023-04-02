import styles from '../styles/Home.module.css'
import localFont from '@next/font/local'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Image from "next/image";
import Logo from '../components/Logo';

export default () => {
    return (
        <div class='-z-0 h-fit w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
            <div className=' py-7 grid place-content-center'>
                <div className=" text-5xl UrbanistFont.localFont transition-all hover:text-5.5 hover:duration-75">Alan Alejandro Coronado</div>
            </div>
            <Navbar />
            <br/>
            <br/>
            <div className="italic text-center text-2xl UrbanistFont.localFont">A Note From the Artist:</div>
            <br/>
            <div className='mx-36'>
                <p className=" ml-80 mr-80 text-center text-xl UrbanistFont.localFont">Hello my name is Alan Coronado, my artist name is Exhibit6333. I am an independent artist 
                based in Minneapolis, Minnesota. I started playing guitar and making beats when I was around 14 years old, when my father got Fruity Loops from a coworker, then I went & taught myself both.
                </p>
                <br/>
                <p className=" ml-80 mr-80 text-center text-xl UrbanistFont.localFont">
                I am inspired by many other forms of art such as acting, photography, videography, comedy, animation, poetry, drawing, and pretty much anything else so I don't like to 
                box myself as a "Musician", though Music/Writing is my main area at the moment.
                </p>
                <p className=" ml-80 mr-80 text-center text-xl UrbanistFont.localFont">
                I've always dreamed about playing music live and look to add some of my Mexican perspective into the scene.
                 I would say at the moment I am trying to find myself as an artist and working on
                perfecting my craft & building my discography while I finish my final year at school. Hit my line if you ever want to work together.
                </p>
                <br/>
                <br/>
                <p className=" text-right ml-96 mr-96 text-xl UrbanistFont.localFont">- Alan</p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Logo />
        </div>
    )
  }