import React from 'react';

const Backgorund = () => {
    return (
        <div className=" relative flex justify-center items-center">
            {/* <div className='border border-red-200 rounded-full h-[200px] w-[200px] animate-spin  mt-52'></div> */}
            <div className='border border-red-200 rounded-full max-md:h-[450px] max-md:w-[450px]   md:h-[400px] md:w-[400px] animate-ping  mt-48 absolute '></div>
            {/* <div className='border border-red-200 rounded-full h-[300px] w-[300px] animate-ping  mt-52 absolute '></div> */}

            <div className='border border-pink-500 rounded-full md:h-[700px] md:w-[700px] animate-pulse opacity-5  mt-48 absolute '></div>
         

        </div>
    );
}

export default Backgorund;
