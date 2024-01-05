import React from 'react'
import GownCard from './GownCard'

const Gowns = () =>
{
    return (
        <div>
            <h1 className='text-primary font-bold text-3xl mt-12'>Gowns</h1>
            <div className='mt-16'>
                <GownCard />
            </div>
        </div>
    )
}

export default Gowns