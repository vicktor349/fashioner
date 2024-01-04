import React from 'react'
import Head from 'next/head'
import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'



export default function Home()
{
  return (
    <>
      <Head>
        <title>Fashioner | Home</title>
      </Head>
      <main>
        <HeroSection />
        <ProductCard />
      </main>
    </>
  )
}
