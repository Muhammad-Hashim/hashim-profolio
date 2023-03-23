import React from "react";
import Image from "next/image";

const About = () => {
  return (

    <div className=" flex flex-col bg-[rgb(36,36,36)] relative   md:px-8  md:py-28  mx-auto text-white  md:text-left md:flex-row  h-screen justify-evenly   content-center">
      <div className="bg-white-500 relative max-sm:ml-5 w-[400px] h-[350px] max-sm:mx-auto ">
        <Image className="flex-shrink-0 object-cover w-[300px]   h-[300px] md:w-[350px] md:h-[500px] rounded-full md:rounded absolute top-6  left-6    " src="/My project-1 (7).jpg" alt="gdfdfg" width={300} height={500} />
        <div className=" max-lg:hidden bg-[#4b12a5] object-cover w-[300px]  h-[300px] z-10 ">

        </div>
        {/* <Image className="flex-shrink-0 object-cover w-[300px]  h-[300px] md:w-[350px] md:h-[500px] rounded-full md:rounded   z-10" src="/backgoeund.jpg" alt="gdfdfg" width={300} height={500} /> */}
      </div>
      <div className=" max-sm:mx-5  text-center max-sm:w-auto w-[60vh] md:pt-14 ">
        <h1 className="max-sm:p-0 py-4  font-League  text-[#ffbc12]  text-[25px] md:text-[35px]  font-bold antialiased max-md:flex  max-md:text-center max-md:gap-1 max-md:justify-center max-md:items-center">
          <h1 className="md:text-start ">
            Muhammad
          </h1>
          <h1>
            Hashim
          </h1>
        </h1>

        <p className="  max-auto mt-3  max-sm:mx-auto  indent-8 md:text-left max-md:text-[15px] md:pt-2   leading-6 md:text-gray-100 md:text-[15px]  ">
          I am a highly skilled software engineer with expertise in Tailwind
          CSS, Next.js, TypeScript, JavaScript, and React.js. My experience in
          these technologies, combined with my passion for engineering, has
          allowed me to deliver high-quality software solutions .
          <p className=" max-sm:hidden md:mt-9">

            As an intern Frontend Developer with expertise in ReactJS and NextJS. I am excited to showcase my portfolio to demonstrate my skills and experience in developing responsive and interactive web applications.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;

// if (h0scrren<= md(786)){
//   text-
// }else{
//
// }