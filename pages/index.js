import React from 'react'
import Head from 'next/head'
import HeroSection from '@/components/HeroSection'



export default function Home()
{
  return (
    <>
      <Head>
        <title>Fashioner | Home</title>
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  )
}
