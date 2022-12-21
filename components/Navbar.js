import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default () => {
    return (
      <div className='text-center w-full z-10'>
        <div>
            <ul>
                <li className='text-3xl UrbanistFont.localFont inline px-40 text-gray-600 hover:text-black'>
                    <Link href='/'>Exhibition</Link>
                </li>
                <li className='text-3xl UrbanistFont.localFont inline px-40 text-gray-600 hover:text-black'>
                    <Link href='/artist'>Artist</Link>
                </li>
                <li className='text-3xl UrbanistFont.localFont inline px-40 text-gray-600 hover:text-black'>
                    <Link href='/subscribe'>Subscribe</Link>
                </li>
            </ul>
        </div>
      </div>
    );
  }