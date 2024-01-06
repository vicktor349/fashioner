import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) =>
{
    return (
        <div>
            <div className='mt-[30px]  mx-[150px] '>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout