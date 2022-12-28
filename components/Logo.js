import Image from "next/legacy/image";

export default () => {
    return (
    <div className='-z-0 h-fit w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
        <div className=' py-10 text-center ml-auto mr-auto block'>
                <Image 
                src='https://storage6333.s3.us-east-2.amazonaws.com/6333Logo.png'
                alt="Logo Image"
                width={150}
                height={150}
                >
                </Image>
        </div>
    </div>
    );
  }