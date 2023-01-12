import Link from 'next/link'
import { useRouter } from 'next/router';


export default () => {
    {/* Get the current route */}
    const router = useRouter();
    const currentRoute = router.pathname;

    return (

      <div className='z-10 bg-stone-500 py-6 text-center'>
            <ul>
                <li className={currentRoute === '/' | currentRoute === '/Ghost-Girl' ? 'px-10 inline text-3xl text-gray-300 font-semibold UrbanistFont.localFont' : 'px-10 inline text-3xl UrbanistFont.localFont text-neutral-400 hover:text-neutral-600 hover:font-semibold'}>
                    <Link href='/'>Exhibition</Link>
                </li>
                <li className={currentRoute === '/artist' ? 'px-10 inline text-3xl text-gray-300 font-semibold UrbanistFont.localFont' : 'px-10 inline text-3xl UrbanistFont.localFont text-neutral-400 hover:text-neutral-600 hover:font-semibold'}>
                    <Link href='/artist'>Artist6333</Link>
                </li>
                <li className={currentRoute === '/subscribe' ? 'px-10 inline text-3xl text-gray-300 font-semibold UrbanistFont.localFont' : 'px-10 inline text-3xl UrbanistFont.localFont text-neutral-400 hover:text-neutral-600 hover:font-semibold'}>
                    <Link href='/subscribe'>Subscribe</Link>
                </li>
            </ul>
      </div>
    );
  }