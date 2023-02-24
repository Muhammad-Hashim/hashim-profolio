/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import Backgorund from './Backgorund'
import Image from 'next/image'
export default function Hero() {

  const [text, word] =useTypewriter({
    words: [
      "Muhmmmad Hashim",
      "FrontEnd Developer",
      

    ],
    loop: true,
    delaySpeed: 1000,
  })

  return (
    <div className='flex h-screen flex-col justify-center items-center space-y- text-center text-overflow-hidden' >
      <div>
      <Backgorund/>
        <Image  className="rounded-full pt-0"      
        src='/hashim.jpeg' alt="Picture of the author" width={200} height={200} />
           
      </div>
      <div>
        <h2 className='uppercase text-sm mt-3  text-gray-500 tracking-[10px]'>
        Software Engineer
        </h2>
      </div>
      <div>
        <h1 className="text-1xl lg:text-2xl font-medium subpixel-antialiased text-violet-300  pt-1 scroll-px-10">
        <span className='mr-3 decoration-slate-50 '>{text}</span>

        </h1>
      </div>
    </div>
  )
}
