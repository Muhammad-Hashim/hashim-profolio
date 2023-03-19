import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'components/About';
import { GoogleFonts } from "next-google-fonts";
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)]  text-white h-screen  z-0'>
      <Head>
        <title>Muhammad Hashim</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500&display=swap" />
      <Header />
      <section id='hero' className=''>
        <Hero />
      </section>
      <section id='about' className=''>
        <About/>
      </section>
     
    </div>
  )
}
