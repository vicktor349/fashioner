import React, { useState } from 'react'
import Link from 'next/link'
import { IoCart } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

const Navbar = () =>
{
    const [open, setOpen] = useState(false)
    const handleToggle = () =>
    {
        setOpen(!open);
    }
    return (
        <div className='font-bold flex'>
            <div>
                <Link href="/" className="font-bold text-3xl font-body">Fashioner</Link>
            </div>
            <div className='ssm:hidden lg:flex mx-auto items-center space-x-9'>
                <Link href="#">New Arrivals</Link>
                <Link href="#">Gown</Link>
                <Link href="#">Skirt</Link>
                <Link href="#">Blouse</Link>
                <Link href="#">Trousers</Link>
                <div className='flex items-center space-x-2'>
                    <IoCart className='text-xl' /> <span className="text-primary">0</span>
                </div>
            </div>
            <button className="text-white w-24 h-12 bg-primary rounded-lg mr-4 ml-auto ssm:hidden lg:inline-block">Login</button>
            <button className="text-primary mr-4 ml-auto ssm:inline-block lg:hidden">Login</button>
            {
                !open ?
                    <RxHamburgerMenu className='my-auto text-3xl cursor-pointer ssm:inline-block lg:hidden' onClick={handleToggle} />
                    :
                    <CgClose className='text-3xl cursor-pointer my-auto ssm:inline-block lg:hidden' onClick={handleToggle} />

            }
        </div>
    )
}

export default Navbar