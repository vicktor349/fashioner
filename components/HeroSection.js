import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () =>
{
    return (
        <div className="bg-heroBackground rounded-lg mt-12">
            <div className='grid grid-cols-2 mx-20'>
                <div>
                    <div className='text-primary font-bold text-4xl mt-16'>
                        <h1>#1  SHOP FOR WOMEN</h1>
                        <h1>FASHION DRESSES</h1>
                    </div>
                    <div className='text-white mt-12'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna  aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div className='mt-12'>
                        <Link
                            href="#"
                            className="border-black border-solid border-[1px] w-full bg-white text-black py-4 px-24 font-bold rounded-lg"
                        >
                            OUT LATEST DESIGNS
                        </Link>
                    </div>
                </div>
                <div>
                    <Image
                        className='text-center'
                        src="/heroImage.png"
                        width={500}
                        height={500}
                        alt="Hero Banner Image"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection