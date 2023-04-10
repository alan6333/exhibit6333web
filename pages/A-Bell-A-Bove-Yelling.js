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
                            src='https://storage6333.s3.us-east-2.amazonaws.com/ABellAboveYellingCover.png'
                            alt="A Bell A/Bove Yelling Art"
                            width={300}
                            height={300}
                            className='relative'
                            >
                    </Image>
          </div>
          <div className=" text-center text-4xl left-1/4 UrbanistFont.localFont">A Bell A/Bove Yelling</div>

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
              {/* <p className="relative right-3 text-xl italic UrbanistFont.localFont">(Alan)</p> */}
              <p className="text-xl italic UrbanistFont.localFont">I smear pictures in my mind</p>
              <p className="text-xl italic UrbanistFont.localFont">I hear as I'm a blind man</p>
              <p className="text-xl italic UrbanistFont.localFont">Voices with no name</p>
              <p className="text-xl italic UrbanistFont.localFont">I try to shake them, they complain</p>
              <p className="text-xl italic UrbanistFont.localFont">& screaming louder</p>
              <p className="text-xl italic UrbanistFont.localFont">Living in my surrounding</p>
              <p className="text-xl italic UrbanistFont.localFont">Listen I'll be shouting</p>
              <p className="text-xl italic UrbanistFont.localFont">Listen I'll be louder (listen, listen)</p>
              <p className="text-xl italic UrbanistFont.localFont">True love, never really found you</p>
              <p className="text-xl italic UrbanistFont.localFont">For now I scream "Yeah, yeah, yeah"</p>
              <p className="text-xl italic UrbanistFont.localFont">& proof attracting what you have,</p>
              <p className="text-xl italic UrbanistFont.localFont">Is every girl I had, had, had</p>
              <p className="text-xl italic UrbanistFont.localFont">& I could dive & touch the bottom on a million oceans</p>
              <p className="text-xl italic UrbanistFont.localFont">Stuck I'm suffocating form the breath she's stolen</p>
              <p className="text-xl italic UrbanistFont.localFont">I just need you friend because I haven't really talked at all</p>
              <p className="text-xl italic UrbanistFont.localFont">How are we so bold? How are we so...</p>
              <p className="text-xl italic UrbanistFont.localFont">If your here then I'll be safe & sound</p>
              <p className="text-xl italic UrbanistFont.localFont">Eyes up on the vibrant clouds</p>
              <p className="text-xl italic UrbanistFont.localFont">I smile more when I'm with you</p>
              <p className="text-xl italic UrbanistFont.localFont">I just told you friend cause I have no one to joke around</p>
              <p className="text-xl italic UrbanistFont.localFont">24 degrees your plenty, more I need so</p>
              <p className="text-xl italic UrbanistFont.localFont">If your here then I'll be safe & sound</p>
              <p className="text-xl italic UrbanistFont.localFont">I  smile more when I'm with you</p>
              <p className="text-xl italic UrbanistFont.localFont">I smile more</p><br/>
              <p className="text-xl italic UrbanistFont.localFont">Everybody, looks & acts</p>
              <p className="text-xl italic UrbanistFont.localFont">But never are</p>
              <p className="text-xl italic UrbanistFont.localFont">I know your heart, I know your aura</p>
              <p className="text-xl italic UrbanistFont.localFont">Control you nada</p>
              <p className="text-xl italic UrbanistFont.localFont">Your different, not similar not a smidget</p>
              <p className="text-xl italic UrbanistFont.localFont">Took my shoe off & you fit it</p>
              <p className="text-xl italic UrbanistFont.localFont">Screwed off, & blew off, too much for my head</p>
              <p className="text-xl italic UrbanistFont.localFont">You know the route cos we're thru it together</p>
              <p className="text-xl italic UrbanistFont.localFont">Took my shoe off & you fit it</p>
          </div>

    </div>
    );
  }

