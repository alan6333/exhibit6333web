import Link from 'next/link'

export default () => {
    return (
      <div className='z-10 bg-stone-500 py-6 text-center'>
        <div>
            <ul>
                <li className=' px-10 inline text-3xl UrbanistFont.localFont text-neutral-400 hover:text-gray-300 hover:font-semibold'>
                    <Link href='/'>Exhibition</Link>
                </li>
                <li className='px-10 inline text-3xl UrbanistFont.localFont text-neutral-400 hover:text-gray-300 hover:font-semibold'>
                    <Link href='/artist'>Artist6333</Link>
                </li>
                <li className='px-10 inline text-3xl UrbanistFont.localFont text-neutral-400 hover:text-gray-300 hover:font-semibold'>
                    <Link href='/subscribe'>Subscribe</Link>
                </li>
            </ul>
        </div>
      </div>
    );
  }