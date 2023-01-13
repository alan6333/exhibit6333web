import Link from 'next/link'
import Navbar from '../components/Navbar'
import Header from '../components/Header';
import Image from "next/legacy/image";
import { useRouter } from 'next/router';


export default () => {
    {/* Get the current route */}
    const router = useRouter();
    const currentRoute = router.pathname;

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
                This song started by me playing around with one of the pianos in one of the practice rooms at my school. 
                Those practice rooms at school are never usually my preferred spot for making music because sometimes I can hear people,
                which means they can hear me, and I don't like it when people can hear me expirement (though I cannot wait to perform live one day).
                This day was one of those days where I needed to stop what I was doing and do something creative, I felt like
                I had been holding my breath for days and I just needed to exhale to breath fresh air. 
                This is how I ended up in the practice room.  
                I cannot read music (yet) so I just play by ear, I remember playing the three close black keys in a descending order
                and thought it sounded cool so I built around that. I started mumbling, writting, listening, and eventually found some chords
                and the bones of the song began to slowly reveal itself.
                After figuring it out on piano I went home to put it on the rhodes and was having fun after that.
                Bella was one of my only friends in school at the time because we were in college in highschool,
                talking 
              </p>
          </div>

          {/* Lyrics */}
          <div className=' pt-10 inline-block mx-96'>
              <div className="inline-block py-3 relative text-3xl UrbanistFont.localFont">Lyrics</div>
          </div>

          <div className='block mx-36 pb-60'>
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

    </div>
    );
  }

