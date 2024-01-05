import Image from 'next/image'
import React from 'react'

const Newsletter = () =>
{
    return (
        <div className='bg-secondary grid grid-cols-3 rounded-xl shadow-subscribeBannerShadow my-20'>
            <div className='col-start-1 col-end-3 w-[40rem] h-[22.8125rem] m-auto bg-white ml-12 rounded-lg shadow-latestProductBoxShadow'>
                <div className='pt-12 pl-12'>
                    <h1 className='font-bold text-3xl py-6'>FASHIONER NEWSLETTER</h1>
                    <p className='py-4'>
                        Get the latest news from the Fashioner  regarding new <br />
                        products, exclusive specials, lifestyle and fashion trends.
                    </p>
                    <button className='bg-primary text-white w-[22.1875rem] h-[3.75rem] rounded-lg shadow-subscribeShadow'>SUBSCRIBE NOW</button>
                </div>
            </div>
            <div>
                <Image src={"/images/NewsletterImage.png"} width={300} height={515} className='py-6' />
            </div>
        </div>
    )
}

export default Newsletter