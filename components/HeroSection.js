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
                        <h1 className='mt-4'>FASHION DRESSES</h1>
                    </div>
                    <div className='text-white mt-12'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna  aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div className='mt-24'>
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
                        className='mx-auto transform -scale-x-100 z-50 relative left-6'
                        src={"/images/heroImage.png"}
                        width={350}
                        height={350}
                        alt="Hero Banner Image"
                    />

                    <div className='border-2 border-solid border-primary w-[33.4rem] origin-center rotate-6 absolute top-80 z-0'>
                    </div>
                    <div className='border-2 border-solid border-primary w-[24rem] origin-center rotate-[50deg] absolute top-[27.45rem] left-[38.5rem] z-[100] '>
                    </div>
                    <div className='border-2 border-solid border-primary w-[23.2rem] origin-center rotate-[140.5deg] absolute top-[29.2rem] right-[6.75rem] z-[100] '>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection