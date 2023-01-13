import Link from 'next/link'
import Navbar from '../components/Navbar'
import Header from '../components/Header';
import Image from "next/legacy/image";
import { useRouter } from 'next/router';
import React from 'react'
import ReactPlayer from 'react-player'
import { useState, useEffect} from 'react';
import Logo from '../components/Logo';


export default () => {
    {/* Get the current route */}
    const router = useRouter();
    const currentRoute = router.pathname;

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
      setIsSSR(false);
  }, []);

    return (

    <div className='-z-0 h-fit w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
          <Header />
          <Navbar />
          <div className='py-3'>
              {/* Ghost/Girl */}
              <Link href='/'>
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

          <div className='py-3 block text-center'>
                    <Image 
                            src='https://storage6333.s3.us-east-2.amazonaws.com/GhostGirlCover.JPG'
                            alt="Ghost Girl Cover Art"
                            width={300}
                            height={300}
                            className='relative'
                            >
                    </Image>
          </div>
          <div className=" text-center text-4xl left-1/4 UrbanistFont.localFont">Ghost/Girl</div>

          {/* Inspiration */}
          <div className='inline-block pt-10 mx-96'>
              <div className="inline-block py-3 relative text-3xl UrbanistFont.localFont">Inspiration</div>
          </div>
          <div className='block relative text-left mx-10'>
              <p className="right-3 left-1/3 ml-96 indent-14 text-xl UrbanistFont.localFont">
              This song started by me <Link href='/Disrespect' className=" font-extrabold text-yellow-900 hover:text-stone-500 text-xl UrbanistFont.localFont">disrespecting</Link> one of the pianos in the practice rooms at my school until I got some good sounds. 
                Those practice rooms at school are never my preferred spot for making music because sometimes I can hear other people singing/practicing,
                which means they can hear me, and I don't like it when people can hear me expirement (though I cannot wait to perform live one day).
                This day was one of those days where I needed to escape, I felt like
                I had been holding my breath for days and I just needed to exhale -breath fresh air. 
                And so I ended up in a practice room at around 8AM during class hours.  
                              
                {/* <Image 
                            src='https://storage6333.s3.us-east-2.amazonaws.com/ghost+girl+art+pencil.jpg'
                            alt="Ghost Girl Cover Art"
                            width={300}
                            height={400}
                            className=' inline-block'
                            >
                    </Image> */}
              </p>
              
              
              {/* <audio controls className=' w-1/6' controlsList='nodownload noplaybackrate' src="https://storage6333.s3.us-east-2.amazonaws.com/Disrespect.mp3"> Your browser does not support the <code>audio</code> element. </audio> */}
              <br/>
              <p className="right-3 left-1/3 ml-96 indent-14 text-xl UrbanistFont.localFont">
              I cannot read music (yet) so I just play by ear, I remember playing the three close black keys in a descending order
                and thought they sounded cool so I built around that. I started mumbling, writing, listening, and eventually found some chords
                and the bones of the song began to slowly reveal themselves.
                Then I went home to put it on the rhodes and had fun after that.
              </p>
              <p className="right-3 left-1/3 ml-96 indent-14 text-xl UrbanistFont.localFont">
              Bella was one of my only friends in school at the time because we were in college in highschool, and luckly I met her that year 
              through a mutual friend. Bella is quiet, loud, exciting,
                 talented, beautiful, absolutely brilliant, when she came over to my house to record the song, she came up with the melody and lyrics on the spot.
                 She writes like a poet because she is a poet. Go look her up, the way she sees the world, the way she makes connections -in a way only she can.
                 Ever since that day I am inspired by her.
              </p>
              <p className="right-3 left-1/3 ml-96 indent-14 text-xl UrbanistFont.localFont">
              I don't really want to talk much about it, but this song was written during a heartbreak.
              But now, after some years, when I listen I don't even think about it anymore. I just think about
              my friendship with Bella and how thankful I am that I got to meet her even though we are 
              both on our own separate paths for the moment.
              </p>
              <br/>
              <br/>
              <p className="right-3 left-1/3 ml-96 indent-14 text-xl UrbanistFont.localFont">
                Maybe one day I'll reach out and make another song with her...
              </p>
          </div>

          {/* Lyrics */}
          <div className=' pt-10 inline-block mx-96'>
              <div className="inline-block py-3 relative text-3xl UrbanistFont.localFont">Lyrics</div>
          </div>

          <div className='block mx-36'>
              <p className="relative right-3 text-xl italic UrbanistFont.localFont">(Alan)</p>
              <p className="text-xl italic UrbanistFont.localFont">Ghost Girl don't leave</p>
              <p className="text-xl italic UrbanistFont.localFont">If our eyes collide, then won't you catch me here?</p>
              <p className="text-xl italic UrbanistFont.localFont">If our eyes collide, & then drift...</p>
              <p className="text-xl italic UrbanistFont.localFont">To your lips...</p>
              <p className="text-xl italic UrbanistFont.localFont">If you don't come in the nick of time</p>
              <p className="text-xl italic UrbanistFont.localFont">The nick of time</p>
              <p className="text-xl italic UrbanistFont.localFont">The nick of time</p>
              <p className="text-xl italic UrbanistFont.localFont">The nick of time</p>
              <p className="text-xl italic UrbanistFont.localFont">Ghost Girl dont leave</p>
              <p className="relative right-3 text-xl italic UrbanistFont.localFont">(Bella)</p>
              <p className="text-xl italic UrbanistFont.localFont">Time is fleeting</p>
              <p className="text-xl italic UrbanistFont.localFont">& now I'm leaving in the pouring rain</p>
              <p className="text-xl italic UrbanistFont.localFont">Catch my gaze before I walk away</p>
              <p className="text-xl italic UrbanistFont.localFont">I say...</p>
              <p className="text-xl italic UrbanistFont.localFont">I'm losing my breath on the way</p>
              <p className="text-xl italic UrbanistFont.localFont">& the way the wind blew</p>
              <p className="relative right-3 text-xl italic UrbanistFont.localFont">(Alan)</p>
              <p className="text-xl italic UrbanistFont.localFont">Ghost Girl don't leave</p>
              <p className="text-xl italic UrbanistFont.localFont">If our eyes collide, then won't you catch me here?</p>
              <p className="text-xl italic UrbanistFont.localFont">If our eyes collide, & then drift...</p>
              <p className="text-xl italic UrbanistFont.localFont">To your lips...</p>
              <p className="text-xl italic UrbanistFont.localFont">If you don't come in the nick of time</p>
              <p className="text-xl italic UrbanistFont.localFont">The nick of time</p>
              <p className="text-xl italic UrbanistFont.localFont">The nick of time</p>
              <p className="text-xl italic UrbanistFont.localFont">The nick of time</p>
              <p className="relative right-3 text-xl italic UrbanistFont.localFont">(Bella)</p>
              <p className="text-xl italic UrbanistFont.localFont">See your face &...</p>
              <p className="text-xl italic UrbanistFont.localFont">Things I'd do just to get closer to you</p>
              <p className="text-xl italic UrbanistFont.localFont">Memories are saved of me & you</p>
              <p className="text-xl italic UrbanistFont.localFont">You do...</p>
              <p className="text-xl italic UrbanistFont.localFont">Stop before the lines blurred right through...</p>
              <p className="text-xl italic UrbanistFont.localFont">I'll think of you</p>
          </div>
          <br />
          <Logo />
    </div>
    );
  }

