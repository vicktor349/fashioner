import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) =>
{
    return (
        <div>
            <Navbar />
            <div className='ssm:mx-[20px] lg:mx-[60px] mt-[30px] xl:mx-[150px]'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout