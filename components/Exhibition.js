import Image from "next/legacy/image";

export default () => {
    return (
    <div className='-z-0 h-screen w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
        <div className=' py-10 grid place-content-center'>
                <Image 
                src='https://storage6333.s3.us-east-2.amazonaws.com/EP+Cover+real.png'
                alt="Bedroom Beatbox EP"
                width={400}
                height={400}
                >
                </Image>
                <div className="py-3 text-3xl UrbanistFont.localFont text-center">Bedroom Beatbox EP</div>
                <div className="text-1xl UrbanistFont.localFont italic text-center">2014-2020</div>
        
        </div>
    </div>
    );
  }