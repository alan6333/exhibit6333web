import Navbar from '../components/Navbar'
import Logo from '../components/Logo';

export default () => {
    return (
        <div class='-z-0 h-screen w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
            <div className=' py-7 grid place-content-center'>
                <div className="text-5xl UrbanistFont.localFont transition-all hover:text-5.5 hover:duration-75">Subscribe</div>
            </div>
            <Navbar />
            <Logo />
        </div>
    );
  }