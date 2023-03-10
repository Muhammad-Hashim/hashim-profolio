import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className=" flex  bg-[rgb(36,36,36)] relative  p-10 mx-auto text-white md:text-left md:flex-row  h-screen justify-evenly items-center">
      <div className="">
        <Image className="flex-shrink-0 object-cover w-56 h-56 rounded-full md:rounded md-mb-0 md:w-74 md:h-95 "  src="/hashim.jpeg" alt="gdfdfg" width={300} height={300} />
</div>
      {/* <div className="p-4 text-center ">
        <h1 className="pb-5 text-2xl font-extralight ">Muhammad Hashim</h1>
        <p className="text-left md:text-red-300 ">
          I am a highly skilled software engineer with expertise in Tailwind
          CSS, Next.js, TypeScript, JavaScript, and React.js. My experience in
          these technologies, combined with my passion for engineering, has
          allowed me to deliver high-quality software solutions and consistently
          meet project deadlines
        </p>
      </div> */}
    </div>
  );
};

export default About;

// if (h0scrren<= md(786)){
//   text-
// }else{
//   
// }