import React from 'react'
import Head from 'next/head'
import HeroSection from '@/components/HeroSection'
import LatestProduct from '@/components/LatestProduct'
import Gowns from '@/components/Gowns'
import HeroBanner from '@/components/HeroBanner'



export default function Home()
{
  return (
    <>
      <Head>
        <title>Fashioner | Home</title>
      </Head>
      <main>
        <HeroSection />
        <LatestProduct />
        <Gowns />
        <HeroBanner />
      </main>
    </>
  )
}
