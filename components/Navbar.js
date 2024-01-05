import React from 'react'
import Link from 'next/link'
import { IoCart } from "react-icons/io5";

const Navbar = () =>
{
    return (
        <div className='font-bold flex'>
            <div>
                <Link href="/" className="font-bold text-3xl font-body">Fashioner</Link>
            </div>
            <div className='flex mx-auto items-center space-x-9'>
                <Link href="#">New Arrivals</Link>
                <Link href="#">Gown</Link>
                <Link href="#">Skirt</Link>
                <Link href="#">Blouse</Link>
                <Link href="#">Trousers</Link>
                <div className='flex items-center space-x-2'>
                    <IoCart className='text-xl' /> <span className="text-primary">0</span>
                </div>
            </div>
            <button className="text-white w-24 h-12 bg-primary rounded-lg ml-auto">Login</button>
        </div>
    )
}

export default Navbar