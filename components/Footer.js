import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import
{
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaCcApplePay,
    FaCcPaypal
} from "react-icons/fa";

const Footer = () =>
{
    return (
        <>
            <div className='mx-auto bg-[#F2F2F2] h-[45rem]'>
                <div className='mx-[150px]'>
                    <div className='grid grid-cols-4 pt-12 space-x-24'>
                        <div>
                            <h1 className='font-bold'>FROM OUR BLOG</h1>
                            <img src={"/images/FooterImage.jpg"} alt='Footer Image' className='w-[10.9375rem] h-[8.625rem] pt-6' />
                            <p className='w-[11.0625rem] pt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                        <div className=''>
                            <h1 className='font-bold'>CONTACT</h1>
                            <p className='pt-6'>LIVE CHAT</p>
                            <p className='pt-6'>Customer Care</p>
                            <p className='pt-6'>Mon. - Fri. 9: 30 -15:30</p>
                            <p className='pt-6'>+2349074748664</p>
                            <p className='pt-6'>Whatsapp</p>
                            <p className='pt-6'>Email us</p>
                        </div>
                        <div>
                            <h1 className='font-bold'>SERVICES</h1>
                            <p className='pt-6'>Free Delivery</p>
                            <p className='pt-6'>Packaging</p>
                            <p className='pt-6'>Store Package</p>
                            <p className='pt-6'>Free Shirts</p>
                            <p className='pt-6'>Tey Troursers </p>
                        </div>
                        <div>
                            <h1 className='font-bold'>OUR COMPANY</h1>
                            <p className='pt-6'>Careers</p>
                            <p className='pt-6'>Investor Relations</p>
                        </div>
                    </div >
                    <div className='grid grid-cols-4 space-x-24 pt-10'>
                        <div className='flex items-center'>
                            <MdKeyboardArrowRight />
                            <p>DISCOVER MORE</p>
                        </div>
                        <div className='flex items-center'>
                            <MdKeyboardArrowRight />
                            <p>HELP & CONTACT</p>
                        </div>
                        <div className='flex items-center'>
                            <MdKeyboardArrowRight />
                            <p>CUST. SERVICE</p>
                        </div>
                        <div className='flex items-center'>
                            <MdKeyboardArrowRight />
                            <p>COM. PROFILE</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-5 pt-12'>
                        <div className="col-start-1 col-end-4 flex items-center text-xl">
                            <h1 className="pr-4 font-medium">FOLLOW US</h1>
                            <FaFacebookSquare className='mr-4' />
                            <FaTwitterSquare className='mr-4' />
                            <FaInstagramSquare />
                        </div>
                        <div className='flex items-center text-xl'>
                            <h1 className="pr-4 font-medium">WE ACCCEPT</h1>
                            <FaCcApplePay className='mr-2' />
                            <FaCcPaypal className='mr-2' />
                        </div>
                    </div>
                    <div className='text-center pt-24'>
                        <h1 className='font-semibold'>COPYRIGHT 2022 - FASHIONER</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer