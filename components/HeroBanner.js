import Image from 'next/image'
import React from 'react'

const HeroBanner = () =>
{
    return (
        <div className='bg-primary grid grid-cols-2 place-items-center rounded-xl mt-24'>
            <div className='m-auto'>
                <h1 className='text-white font-bold text-4xl ml-16'>FASHIONER BODYWEAR</h1>
                <h1 className='ml-16 text-4xl font-bold mt-2'>For every body</h1>
                <button className='w-[304px] h-[60px] border border-black rounded-md ml-16 mt-8'>SHOP NOW</button>
            </div>
            <div>
                <Image src={"/images/BannerImage.png"} alt='woman walking' height={344} width={344} className='my-8' />
            </div>
        </div>
    )
}

export default HeroBanner