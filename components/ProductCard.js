import React from 'react'

const ProductCard = () =>
{
    const cardDetails = [
        {
            Image: "https://placehold.co/100",
            Name: "GOWN",
            Price: "$59",
            Description: "Lorem ipsum dolor sit amet, abc consectetur adipisicing elit "
        },
        {
            Image: "https://placehold.co/100",
            Name: "GOWN",
            Price: "$59",
            Description: "Lorem ipsum dolor sit amet, abc consectetur adipisicing elit "
        },
        {
            Image: "https://placehold.co/100",
            Name: "GOWN",
            Price: "$59",
            Description: "Lorem ipsum dolor sit amet, abc consectetur adipisicing elit "
        },
    ]
    return (
        <div>
            {cardDetails.map((cardDetail, id) =>
            {
                return (
                    <>
                        <div className='border-2 border-solids w-72 h-96'>
                            <div className='mx-6'>
                                <img src={cardDetail.Image} width={200} />
                                <div className='flex'>
                                    <h1 className='font-bold'>{cardDetail.Name}</h1>
                                    <h1 className='ml-auto'>{cardDetail.Price}</h1>
                                </div>
                                <p>{cardDetail.Description}</p>
                                <button className='bg-primary text-white rounded-lg py-2 px-12 text-sm'>ADD TO CART</button>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default ProductCard