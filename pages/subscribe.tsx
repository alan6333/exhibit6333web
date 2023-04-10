import Navbar from '../components/Navbar'
import Logo from '../components/Logo';
import {FormEvent, useState} from "react";

export default () => {
    const [fname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenum, setPhone] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = {
            fname,
            email,
            phonenum,
            country
        }

        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        });

        const content = await response.json();

        //alert(content.data.tableRange
        
        setName('')
        setEmail('')
        setPhone('')
        setCountry('')


        console.log(form);
    }

    return (
        <div className='-z-0 h-screen w-fit min-w-full bg-hero bg-repeat bg-local bg-20%'>
            <div className=' py-7 grid place-content-center'>
                <div className="text-5xl UrbanistFont.localFont transition-all hover:text-5.5 hover:duration-75">Subscribe</div>
            </div>
            <Navbar />
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                <div className='flex text-center justify-center'>
                    <div className='text-center text-1xl UrbanistFont.localFont'>Full Name</div>
                </div>
                <div className='flex text-center justify-center'>
                    <label htmlFor='fname' className='sr-only'>FNAME</label>
                    <input placeholder='Full Name' value={fname} onChange={e => setName(e.target.value)} type='text' name='fname' id='fname'></input>
                </div>
                <br/>
                <div className='flex text-center justify-center'>
                    <div className='text-center text-1xl UrbanistFont.localFont'>Email</div>
                </div>
                <div className='flex text-center justify-center'>
                    <label htmlFor='email' className='sr-only'>Email</label>
                    <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type='text' name='email' id='email'></input>
                </div>
                <br/>
                <div className='flex text-center justify-center'>
                    <div className='text-center text-1xl UrbanistFont.localFont'>Phone Number</div>
                </div>
                <div className='flex text-center justify-center'>
                    <label htmlFor='phonenum' className='sr-only'>Phone Number</label>
                    <input placeholder='Phone Number' value={phonenum} onChange={e => setPhone(e.target.value)} type='tel' name='phonenum' id='phonenum'></input>
                </div>
                <br/>
                <div className='flex text-center justify-center'>
                    <div className='text-center text-1xl UrbanistFont.localFont'>Country</div>
                </div>
                <div className='flex text-center justify-center'>
                    <label htmlFor='country' className='sr-only'>Country</label>
                    <input placeholder='Country' value={country} onChange={e => setCountry(e.target.value)} type='text' name='country' id='country'></input>
                </div>
                <br/>
                <div className='flex text-center justify-center'>
                    <button type='submit' className='flex items-center justify-center text-1xl UrbanistFont.localFont w-64 rounded-md shadow py-3 px-2 bg-stone-500 hover:bg-neutral-400 hover:font-semibold'>Subscribe</button>
                </div>
            </form>
            <br/>
            <div className='text-center text-1xl UrbanistFont.localFont'>UNDER CONSTRUCTION</div>
            <br/>
            <div className='text-center text-1xl UrbanistFont.localFont'>A work in progress...</div>
            <br/>
            <br/>
            <br/>
            <Logo />
        </div>
    );
  }