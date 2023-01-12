import Image from "next/legacy/image";
import Link from 'next/link'

export default () => {
    return (
    <div className='-z-0 h-fit w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
        <div className=' py-10 text-center ml-auto mr-auto block'>
            <Link href="/">
                <Image 
                src='https://storage6333.s3.us-east-2.amazonaws.com/6333Logo.png'
                alt="Logo Image"
                width={63}
                height={63}
                >
                </Image>
            </Link>
        </div>
    </div>
    );
  }