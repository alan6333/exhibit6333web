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
                            src='https://storage6333.s3.us-east-2.amazonaws.com/SoftHandsCover.png'
                            alt="Soft Hands Cover Art"
                            width={300}
                            height={300}
                            className='relative'
                            >
                    </Image>
          </div>
          <div className=" text-center text-4xl left-1/4 UrbanistFont.localFont">Soft/Hands</div>

          {/* Inspiration */}
          <div className='inline-block pt-10 mx-96'>
              <div className="inline-block py-3 relative text-3xl UrbanistFont.localFont">Inspiration</div>
          </div>
          <div className='block relative text-left mx-10'>
              <p className="right-3 left-1/3 ml-96 indent-14 text-xl UrbanistFont.localFont">
                This song was made by impatience which was the reactant for anger. I didn't plan on writing on the United States and it's relationship with Immigration,
                for a lot of my people, we know these stories well and are very close or are our real world. I wrote this around the 2nd 2020 Presidential Debate when 
                I was in college.
              </p>
          </div>

          {/* Lyrics */}
          <div className=' pt-10 inline-block mx-96'>
              <div className="inline-block py-3 relative text-3xl UrbanistFont.localFont">Lyrics</div>
          </div>

          <div className='block mx-36 pb-60'>
              {/* <p className="relative right-3 text-xl italic UrbanistFont.localFont"></p> */}
              <p className="relative right-3 text-xl italic UrbanistFont.localFont">Verse 1</p>
              <p className="text-xl italic UrbanistFont.localFont">Soft hands speakin' like you know our reasons for offenses</p>
              <p className="text-xl italic UrbanistFont.localFont">Suckin' off yall baby bottles, cradled youth protected</p>
              <p className="text-xl italic UrbanistFont.localFont">Blood is immigrants</p>
              <p className="text-xl italic UrbanistFont.localFont">We finna rip the system -broken</p>
              <p className="text-xl italic UrbanistFont.localFont">Boom, explode it</p>
              <p className="text-xl italic UrbanistFont.localFont">The bottom's got a message with no stamp don't plan on mailing it</p>
              <p className="text-xl italic UrbanistFont.localFont">I'm "Mexican"</p>
              <p className="text-xl italic UrbanistFont.localFont">I'm "Alien"</p>
              <p className="text-xl italic UrbanistFont.localFont">"American" if yall permit</p>
              <p className="text-xl italic UrbanistFont.localFont">Marvin Martian, my cousin honest,</p>
              <p className="text-xl italic UrbanistFont.localFont">No? Don't believe me?</p>
              <p className="text-xl italic UrbanistFont.localFont">Take a look at me see</p>
              <p className="text-xl italic UrbanistFont.localFont">My brother's E.T.</p>
              <p className="text-xl italic UrbanistFont.localFont">"The law beneath me"</p>
              <p className="text-xl italic UrbanistFont.localFont">We're flickin' off the P.D.</p>
              <p className="text-xl italic UrbanistFont.localFont">They walk in these streets</p>
              <p className="text-xl italic UrbanistFont.localFont">But no not me see,</p>
              <p className="text-xl italic UrbanistFont.localFont">Cos, Lilo/Nani -my Dad and Mommy</p>
              <p className="text-xl italic UrbanistFont.localFont">I'm Stitch the expirement, 6333</p>
              <p className="text-xl italic UrbanistFont.localFont">Wearin' a pair of two hats</p>
              <p className="text-xl italic UrbanistFont.localFont">Compare em' fair & one ragged stains, </p>
              <p className="text-xl italic UrbanistFont.localFont">Tiptoe or get trapped in cages</p>
              <p className="text-xl italic UrbanistFont.localFont">Dad detained & lunch split in half</p>
              <p className="text-xl italic UrbanistFont.localFont">Missin' Dad</p>
              <p className="text-xl italic UrbanistFont.localFont">Beg the Universe to give him back</p>
              <br/>
              <p className="relative right-3 text-xl italic UrbanistFont.localFont">Verse 2</p>
              <p className="text-xl italic UrbanistFont.localFont">Imma be a doctor, doctor, let me stay I'm DACA</p>
              <p className="text-xl italic UrbanistFont.localFont">Refuge ain't enough for me to prove I'm not a bad immigrant,</p>
              <p className="text-xl italic UrbanistFont.localFont">humanity limited,</p>
              <p className="text-xl italic UrbanistFont.localFont">my status irrelevant, I'm not of a syndicate</p>
              <p className="text-xl italic UrbanistFont.localFont">I'm human, broke my heart, I wander scenes, I own the hardest </p>
              <p className="text-xl italic UrbanistFont.localFont">I own the hardest hands if we're not here it's ignorance in your name</p>
              <p className="text-xl italic UrbanistFont.localFont">Give your life if ill intention may God fill you with plague</p>
              <p className="text-xl italic UrbanistFont.localFont">Where's our children? Where you hide them? You still talkin cocaine</p>
              <br/>
              <p className="relative right-3 text-xl italic UrbanistFont.localFont">Verse 3</p>
              <p className="text-xl italic UrbanistFont.localFont">Crack, but you like it (aye)</p>
              <p className="text-xl italic UrbanistFont.localFont">My fam never touch it (aye)</p>
              <p className="text-xl italic UrbanistFont.localFont">Never been in a better place</p>
              <p className="text-xl italic UrbanistFont.localFont">Back & forth like relay race</p>
              <p className="text-xl italic UrbanistFont.localFont">E.T. speakin' says attention is a deficit</p>
              <p className="text-xl italic UrbanistFont.localFont">Nevertheless, the balance's good for hiding</p>
              <p className="text-xl italic UrbanistFont.localFont">But what we're missing?</p>
              <p className="text-xl italic UrbanistFont.localFont">Weakens our fighting meaning speak at risk</p>
              <p className="text-xl italic UrbanistFont.localFont">Shout & get caught</p>
              <p className="text-xl italic UrbanistFont.localFont">Squeak & livin' on the run under ICE's noses,</p>
              <p className="text-xl italic UrbanistFont.localFont">sly & hopin', paper's good & they don't notice...</p>
              <br/>
              <p className="relative right-3 text-xl italic UrbanistFont.localFont">Hook</p>
              <p className="text-xl italic UrbanistFont.localFont">Speak with us, speak with us, only wish</p>
              <p className="text-xl italic UrbanistFont.localFont">Issues & issues, we've got to get to</p>
              <p className="text-xl italic UrbanistFont.localFont">Speak with us, speak with us, only wish</p>
              <p className="text-xl italic UrbanistFont.localFont">Issues & issues, we're pressin' in</p>
              <p className="text-xl italic UrbanistFont.localFont">Speak with us, speak with us, only wish</p>
              <p className="text-xl italic UrbanistFont.localFont">Issues & issues, we've got to get to</p>
              <p className="text-xl italic UrbanistFont.localFont">Speak with us, speak with us, only wish</p>
              <p className="text-xl italic UrbanistFont.localFont">Issues & issues, we're pressin' in</p>
          </div>

    </div>
    );
  }

