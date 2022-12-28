import Image from "next/legacy/image";

export default () => {
    return (
    <div className='-z-0 h-fit w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
        <div className=' py-10 text-center ml-auto mr-auto block'>
                <Image 
                src='https://storage6333.s3.us-east-2.amazonaws.com/GhostGirlCover.JPG'
                alt="Ghost Girl Cover Art"
                width={400}
                height={400}
                >
                </Image>
                <div className="py-3 text-3xl UrbanistFont.localFont text-center">Ghost Girl - Exhibit6333 (ft. Bella Garcia)</div>
                <div className="text-1xl UrbanistFont.localFont italic text-center">January 12th, 2021</div>
                
                <br />
                <br />
                <br />

                <Image 
                src='https://storage6333.s3.us-east-2.amazonaws.com/SoftHandsCover.png'
                alt="Soft Hands Cover Art"
                width={400}
                height={400}
                >
                </Image>
                <div className="py-3 text-3xl UrbanistFont.localFont text-center">Soft/Hands - Exhibit6333</div>
                <div className="text-1xl UrbanistFont.localFont italic text-center">October 14th, 2020</div>
                
                <br />
                <br />
                <br />

                <Image 
                src='https://storage6333.s3.us-east-2.amazonaws.com/ABellAboveYellingCover.png'
                alt="A Bell Above Yelling Cover Art"
                width={400}
                height={400}
                >
                </Image>
                <div className="py-3 text-3xl UrbanistFont.localFont text-center">A Bell A/Bove Yelling - Exhibit6333</div>
                <div className="text-1xl UrbanistFont.localFont italic text-center">July 9th, 2020</div>
                
                <br />
                <br />
                <br />

                <Image 
                src='https://storage6333.s3.us-east-2.amazonaws.com/JettaCover.jpeg'
                alt="Jetta Cover Art"
                width={400}
                height={400}
                >
                </Image>
                <div className="py-3 text-3xl UrbanistFont.localFont text-center">Jetta - Bek Allenson (ft. Exhibit6333)</div>
                <div className="text-1xl UrbanistFont.localFont italic text-center">April 3rd, 2020</div>
                
                <br />
                <br />
                <br />

                <Image 
                src='https://storage6333.s3.us-east-2.amazonaws.com/BedroomBeatboxEP.png'
                alt="Bedroom Beatbox EP"
                width={400}
                height={400}
                // className="transition-all hover:scale-y-110 hover:duration-75"
                >
                </Image>
                <div className="py-3 text-3xl UrbanistFont.localFont text-center">Bedroom Beatbox EP</div>
                <div className="text-1xl UrbanistFont.localFont italic text-center">2014-2020</div>
                <br />
                <br />
                <br />
        </div>
    </div>
    );
  }