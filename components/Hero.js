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
    <div className='flex bg-[rgb(36,36,36)]   h-screen flex-col justify-center items-center relative space-y- text-center text-overflow-hidden' >
      <div  >
       <Backgorund/>
        <Image  className="pt-0 rounded-full"      
        src='/hashim.jpeg' alt="Picture of the author" width={200} height={200} />
      </div>
      <div>
        <h2 className='uppercase text-sm mt-3  text-gray-500 tracking-[10px]'>
        Software Engineer
        </h2>
      </div>
      <div className='z-10 '>
        <h1 className="pt-1 subpixel-antialiased font-medium text-1xl lg:text-2xl text-violet-300 hover:text-violet-500 text-heddin scroll-px-10">
        <span className='mr-3 decoration-slate-50 '>{text}</span>
        </h1>
        
      </div>
      <div className="text-gray-500  max-sm:text-[12px]   absolute bottom-6  ">
        <button className=" max-sm:px-3 max-sm:mx-[1px] max-sm:py1   px-4 mx-1 py-1 rounded-full border-gray-500 border-[1px]">hashim</button>
        <button className=" max-sm:px-3   max-sm:py1 max-sm:mx-[2px]  px-4 mx-1 py-1 rounded-full border-gray-500 border-[1px]" >hashim</button>
        <button className=" max-sm:px-3  max-sm:py1 max-sm:mx-[2px]  px-4 mx-1 py-1 rounded-full border-gray-500 border-[1px]" >hashim</button>
        <button className=" max-sm:px-3  max-sm:py1 max-sm:mx-[2px]   px-4 mx-1 py-1 rounded-full border-gray-500 border-[1px]" >hashim</button>
        {/* <button className=" max-sm:px-3  max-sm:py1  max-sm:mx-[2px] px-5 mx-1 py-1 rounded-full border-gray-500 border-[1px]" >hashim</button> */}
        </div>
    </div>
  )
}
