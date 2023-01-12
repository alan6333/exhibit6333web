import Link from 'next/link'
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';


export default () => {
    {/* Get the current route */}
    const router = useRouter();
    const currentRoute = router.pathname;

    return (

      <div className='-z-0 h-fit w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
        <Header />
        <Navbar />
        Soft/Hands
      </div>
    );
  }