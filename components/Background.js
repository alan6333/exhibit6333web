import styles from '../styles/Home.module.css'
import Image from "next/image";
export default () => {
    return (
        <div className={styles.container}>
            <Image src="https://storage6333.s3.us-east-2.amazonaws.com/background.jpg"
            unoptimized={true}
            alt="background"
            fill
            priority
            className="-z-50 w-fit h-auto"
            sizes="100%" 
            style={{
                objectFit: "cover"
            }} />
        </div>
    );
  }