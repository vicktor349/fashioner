import React, { useState } from 'react'
import Head from 'next/head';
import Link from 'next/link';
import { IoCart } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

const Navbar = () =>
{
    const [isOpened, setIsOpened] = useState(false)
    const handleToggle = () =>
    {
        setIsOpened(!isOpened);
    };
    return (
        <>
            <Head>
                <title>Fashioner | Home</title>
            </Head>
            <div className='sticky top-0 z-[1000]'>
                <div className='font-bold flex top-0 bg-white py-8'>
                    <div className='ssm:ml-[20px] xl:ml-[150px] flex items-center'>
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
                    <button className="text-white w-24 h-12 bg-primary rounded-lg ml-auto ssm:hidden lg:inline-block ssm:mr-[20px] lg:mr-[60px] xl:mr-[150px]">Login</button>
                    <button className="text-primary mr-4 ml-auto ssm:inline-block lg:hidden">Login</button>
                    {
                        !isOpened
                            ?
                            <RxHamburgerMenu className='my-auto text-3xl cursor-pointer ssm:inline-block lg:hidden ssm:mr-[20px] lg:mr-[60px] xl:mr-[150px]' onClick={handleToggle} />
                            :
                            <CgClose className='text-3xl cursor-pointer my-auto ssm:inline-block lg:hidden ssm:mr-[20px] lg:mr-[60px] xl:mr-[150px]' onClick={handleToggle} />
                    }
                </div>

                {isOpened
                    ?
                    <div className='absolute top-16 py-6 font-normal w-full bg-white'>
                        <div className='leading-9 sticky top-10 mx-6'>
                            <Link href="#" className='hover:text-heroBackground'>New Arrivals</Link><br />
                            <Link href="#" className='hover:text-heroBackground'>Gown</Link><br />
                            <Link href="#" className='hover:text-heroBackground'>Skirt</Link><br />
                            <Link href="#" className='hover:text-heroBackground'>Blouse</Link><br />
                            <Link href="#" className='hover:text-heroBackground'>Trousers</Link>
                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        </>
    )
}

export default Navbar