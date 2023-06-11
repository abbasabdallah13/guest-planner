import React from "react";

import ex1 from '../../assets/ex1.png'
import ex2 from '../../assets/ex2.png'
import ex3 from '../../assets/ex3.png'

const Example = () => {
  return (
    <div id='example' className="h-fit relative top-40 xs:top-60 sm:top-64 lg:top-48 xl:top-80 xl1500:top-80 2xl:top-[30rem]">
        <div className='h-16 xl:h-24 xl1500:h-36'></div> 
        <h1 className="px-2 lg:px-6 py-4 lg:py-6 bg-light-pink text-titles-grey w-full md:w-2/5 font-normal lg:text-4xl  xl:text-5xl 2xl:text-7xl">Example</h1>
        <div className="p-4 flex flex-col items-center md:mt-12">
            <p className="text-titles-grey text-justify text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl px-2">“This is an example of a welcome section in the online invitation”</p>
            <img className="max-w-full xs:w-3/4 mt-4 md:mt-12" src={ex1} alt='example 1' />
        </div>
        <div className="p-4 flex flex-col items-center">
            <p className="text-titles-grey text-justify text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl px-2">“This is an example of a questions section in the online invitation”</p>
            <img className="max-w-full xs:w-3/4 mt-4 md:mt-12" src={ex2} alt='example 2' />
        </div>
        <div className="p-4 flex flex-col items-center">
            <p className="text-titles-grey text-justify text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl px-2">“This is an example of an exit section in the online invitation”</p>
            <img className="max-w-full xs:w-3/4 mt-4 md:mt-12" src={ex3} alt='example 3' />
        </div>
    </div>
  )
};

export default Example;
