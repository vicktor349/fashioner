import Image from 'next/image'
import React from 'react'

const Recommended = () =>
{
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-12'>RECOMMENDED FOR YOU</h1>
            <div className='grid grid-cols-3 place-items-center'>
                <div>
                    <img src={"/images/chairImage.jpg"} alt="image of clothing on chair" className='w-[272px] h-[272px] rounded-[50%]' />
                    <h1 className='text-center font-extrabold mt-4'>TROUSERS</h1>
                </div>
                <div>
                    <img src={"/images/clothdisplay.png"} alt="image of someone wearing clothes" className='w-[272px] h-[272px] rounded-[50%]' />
                    <h1 className='text-center font-extrabold mt-4'>TURTLE NECKS</h1>
                </div>
                <div>
                    <img src={"/images/girlImage.jpg"} alt="image of girl wearing shirt" className='w-[272px] h-[272px] rounded-[50%] object-cover' />
                    <h1 className='text-center font-extrabold mt-4'>SHIRTS</h1>
                </div>
            </div>
        </div>
    )
}

export default Recommended