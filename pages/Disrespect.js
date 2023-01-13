import Link from 'next/link'
import Navbar from '../components/Navbar'
import Header from '../components/Header';
import Image from "next/legacy/image";
import { useRouter } from 'next/router';
import React from 'react'
import ReactPlayer from 'react-player'
import { useState, useEffect} from 'react';


export default () => {
    {/* Get the current route */}
    const router = useRouter();
    const currentRoute = router.pathname;



    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
      setIsSSR(false);
  }, []);
    return (

    <div className='-z-0 h-screen w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
              <Header />
              <Navbar />
              <div className='py-3'>
              {/* Ghost/Girl */}
              <Link href='/Ghost-Girl'>
                <Image 
                src='https://storage6333.s3.us-east-2.amazonaws.com/back+arrow.png'
                alt="back arrow image"
                width={40}
                height={35}
                className="py-5 bg-opacity-0 scale-95 transition-all hover:scale-100 hover:hidden hover:duration-100"
                >
                </Image>
              </Link>
          </div>
          <div className=''>
                {isSSR ? null: <ReactPlayer controls url={"https://storage6333.s3.us-east-2.amazonaws.com/Piano+(online-video-cutter.com).mp4"} />}
          </div>
    </div>
    );
  }

