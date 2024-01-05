import React from 'react'
import Image from 'next/image'

const GownCard = () =>
{
    const cardDetails = [
        {
            Image: "/images/clothdisplay.png",
            Name: "GOWN",
            Price: "$60.88",
            Description: "Lorem ipsum dolor sit amet, abc consectetur adipisicing elit "
        },
        {
            Image: "/images/clothdisplay.png",
            Name: "GOWN",
            Price: "$60.88",
            Description: "Lorem ipsum dolor sit amet, abc consectetur adipisicing elit "
        },
        {
            Image: "/images/clothdisplay.png",
            Name: "GOWN",
            Price: "$60.88",
            Description: "Lorem ipsum dolor sit amet, abc consectetur adipisicing elit "
        },

    ]
    return (
        <>
            <div className='flex'>
                <Image src={'/images/PreviousGown.svg'} alt='previous icon' width={50} height={50} priority className='cursor-pointer' />
                <div className='grid grid-cols-3 place-items-center w-full'>
                    {cardDetails.map((cardDetail, id) =>
                    {
                        return (
                            <div key={id}>
                                <div className='w-[19rem] h-[26.5rem] shadow-latestProductBoxShadow pt-2 bg-white'>
                                    <div className='mt-8'>
                                        <Image src={cardDetail.Image} width="268" height="268" alt="display of clothes" className='rounded-md mx-auto' />
                                        <div className='mx-6'>
                                            <div className='flex mt-4'>
                                                <h1 className='font-extrabold'>{cardDetail.Name}</h1>
                                                <h1 className='ml-auto text-primary'>{cardDetail.Price}</h1>
                                            </div>
                                            <p className='mt-4'>{cardDetail.Description}</p>
                                            <button className='bg-primary text-white rounded-lg py-2 px-12 text-sm w-[16.75rem] h-[3.75rem] mt-4'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div >
                <Image src={'/images/NextGown.svg'} alt='Next arrow' width={50} height={50} className='cursor-pointer' />
            </div>
        </>
    )
}

export default GownCard