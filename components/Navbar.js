import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default () => {
    return (
      <div className='text-center w-full z-10 bg-stone-500 py-6'>
        <div>
            <ul>
                <li className='text-3xl UrbanistFont.localFont inline px-40 text-neutral-400 hover:text-gray-300 hover:font-semibold'>
                    <Link href='/'>Exhibition</Link>
                </li>
                <li className='text-3xl UrbanistFont.localFont inline px-40 text-neutral-400 hover:text-gray-300 hover:font-semibold'>
                    <Link href='/artist'>Artist</Link>
                </li>
                <li className='text-3xl UrbanistFont.localFont inline px-40 text-neutral-400 hover:text-gray-300 hover:font-semibold'>
                    <Link href='/subscribe'>Subscribe</Link>
                </li>
            </ul>
        </div>
      </div>
    );
  }