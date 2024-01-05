import React from 'react'
import ProductCard from './ProductCard'

const LatestProduct = () =>
{
    return (
        <div>
            <h1 className='text-primary font-bold text-3xl mt-12'>LATEST PRODUCTS</h1>
            <div className='mt-16'>
                <ProductCard />
            </div>
        </div>
    )
}

export default LatestProduct