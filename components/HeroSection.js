import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () =>
{
    return (
        <div className="bg-heroBackground rounded-lg">
            <div className='ssm:hidden md:inline-block'>
                <div className='grid grid-cols-2 mx-20'>
                    <div>
                        <div className='text-primary font-bold mt-16 md:text-2xl lg:text-4xl'>
                            <h1>#1  SHOP FOR WOMEN</h1>
                            <h1 className='mt-4'>FASHION DRESSES</h1>
                        </div>
                        <div className='text-white mt-12 md:w-[20rem] lg:w-[28rem]'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna  aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                        <div className='md:mt-16 lg:mt-24'>
                            <Link
                                href="#"
                                className="border-black border-solid border-[1px] w-full bg-white text-black py-4 sm:px-12 md:px-12 lg:px-24 font-bold rounded-lg"
                            >
                                OUT LATEST DESIGNS
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image
                            className='mx-auto transform -scale-x-100 z-50 relative left-6 md:-mr-1 lg:mr-0'
                            src={"/images/heroImage.png"}
                            width={350}
                            height={350}
                            alt="Hero Banner Image"
                        />

                        {/* <div className="border-2 border-solid border-primary origin-center absolute z-0
                        xl:top-80 xl:rotate-6 xl:w-[33.4rem] max-w-full xl:right-[9.3rem]
                        2xl:top-80 2xl:rotate-6 2xl:w-[33.4rem] 2xl:right-[9.3rem]"
                    >
                    </div>
                    <div className="border-2 border-solid border-primary w-[24rem] origin-center rotate-[50deg] absolute top-[27.45rem] left-[38.5rem] z-[100] 2xl:left-[54rem]">
                    </div>
                    <div className='border-2 border-solid border-primary w-[23.2rem] origin-center rotate-[140.5deg] absolute top-[29.2rem] right-[6.75rem] z-[100] '>
                    </div> */}
                    </div>
                </div>
            </div>



            {/* SMALLER DEVICES RESPONSIVITY */}
            <div className='ssm:inline-block md:hidden'>
                <div>
                    <div className='text-primary font-bold ssm:mt-10 text-2xl ssm:mx-9'>
                        <h1>#1  SHOP FOR WOMEN</h1>
                        <h1 className='mt-4'>FASHION DRESSES</h1>
                    </div>
                </div>
                <div>
                    <Image
                        className='mx-auto transform -scale-x-100 z-50 relative ssm:w-48'
                        src={"/images/heroImage.png"}
                        width={350}
                        height={350}
                        alt="Hero Banner Image"
                    />
                    <div className='text-white ssm:mt-8 ssm:mx-3'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna  aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div className='ssm:flex'>
                        <Link
                            href="#"
                            className="border-black border-solid border-[1px] w-full bg-white text-black py-4 ssm:px-12 font-bold rounded-lg"
                        >
                            OUT LATEST DESIGNS
                        </Link>
                    </div>

                    {/* <div className="border-2 border-solid border-primary origin-center absolute z-0
                        xl:top-80 xl:rotate-6 xl:w-[33.4rem] max-w-full xl:right-[9.3rem]
                        2xl:top-80 2xl:rotate-6 2xl:w-[33.4rem] 2xl:right-[9.3rem]"
                    >
                    </div>
                    <div className="border-2 border-solid border-primary w-[24rem] origin-center rotate-[50deg] absolute top-[27.45rem] left-[38.5rem] z-[100] 2xl:left-[54rem]">
                    </div>
                    <div className='border-2 border-solid border-primary w-[23.2rem] origin-center rotate-[140.5deg] absolute top-[29.2rem] right-[6.75rem] z-[100] '>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection