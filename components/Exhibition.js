import Image from "next/image";

export default () => {
    return (
    <div className='-z-0 h-screen w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
        <div className=' py-10 grid place-content-center'>
                <Image 
                src="/../public/images/BedroomBeatboxEP.png"
                alt="Bedroom Beatbox EP"
                unoptimized={true}
                priority
                width={400}
                height={400}
                className=""
                >
                </Image>
                <div className="py-3 text-3xl UrbanistFont.localFont text-center">Bedroom Beatbox EP</div>
                <div className="text-1xl UrbanistFont.localFont italic text-center">2014-2020</div>
        
        </div>
    </div>
    );
  }