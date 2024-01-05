import React from 'react'
import Head from 'next/head'
import HeroSection from '@/components/HeroSection'
import LatestProduct from '@/components/LatestProduct'
import Gowns from '@/components/Gowns'



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
      </main>
    </>
  )
}
