import Link from 'next/link'
import Navbar from '../components/Navbar';
import Image from "next/legacy/image";
import Header from '../components/Header';
import { useRouter } from 'next/router';


export default () => {
    {/* Get the current route */}
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
    <div className='-z-0 h-fit w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
        <Header />
        <Navbar />
      Bedroom-Beatbox-EP
    </div>
    );
  }


  