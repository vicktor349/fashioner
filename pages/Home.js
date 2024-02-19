import React from 'react';
import Head from 'next/head';
import LatestProduct from '@/components/LatestProduct';
import Gowns from '@/components/Gowns';
import HeroBanner from '@/components/HeroBanner';
import Recommended from '@/components/Recommended';
import Newsletter from '@/components/Newsletter';




export default function Home()
{
    return (
        <>
            <Head>
                <title>Fashioner | Home</title>
            </Head>
            <main>
                {/* <HeroSection /> */}
                <LatestProduct />
                <Gowns />
                <HeroBanner />
                <Recommended />
                <Newsletter />
            </main>
        </>
    );
}
