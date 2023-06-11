import React from "react";

import procedure1 from '../../assets/procedure1.png'
import procedure2 from '../../assets/procedure2.png'
import procedure3 from '../../assets/procedure3.png'
import procedure4 from '../../assets/procedure4.png'

const Procedure = () => {
  return (
    <div id='procedure' className="h-fit relative top-40 xs:top-60 sm:top-64 lg:top-48 xl:top-80 xl1500:top-80 2xl:top-[30rem]">
        <div className='h-16 xl:h-24 xl1500:h-36'></div> 
        <h1 className="px-2 lg:px-6 py-4 lg:py-6 bg-light-pink text-titles-grey w-full md:w-3/5 font-normal lg:text-4xl  xl:text-5xl 2xl:text-7xl">How to use our platform in 4 easy steps ?</h1>
        <div className="flex flex-col md:flex-row md:justify-center items-center p-6">
            <img className="w-[200px] h-[200px] md:ml-8 xl:w-[300px] xl:h-[300px] 2xl:w-[500px] 2xl:h-[500px] " src={procedure1} alt='first procedure' />
            <p className="text-2xl px-4 text-justify md:w-1/2 xl:text-3xl 2xl:text-5xl">“ Choose a template from our predefined themes for your newly created event “</p>
        </div>        
        <div className="flex flex-col md:flex-row md:justify-center items-center p-6">
            <img className="w-[200px] h-[200px] md:ml-8 xl:w-[300px] xl:h-[300px] 2xl:w-[500px] 2xl:h-[500px] " src={procedure2} alt='second procedure' />
            <p className="text-2xl px-4 text-justify md:w-1/2 xl:text-3xl 2xl:text-5xl">“ Add questions that you would like to ask the guests regarding the wedding and match them to the guests “</p>
        </div>        
        <div className="flex flex-col md:flex-row md:justify-center items-center p-6">
            <img className="w-[200px] h-[200px] md:ml-8 xl:w-[300px] xl:h-[300px] 2xl:w-[500px] 2xl:h-[500px] " src={procedure3} alt='third procedure' />
            <p className="text-2xl px-4 text-justify md:w-1/2 xl:text-3xl 2xl:text-5xl">“ Add guests along with their details “</p>
        </div>        
        <div className="flex flex-col md:flex-row md:justify-center items-center p-6">
            <img className="w-[200px] h-[200px] md:ml-8 xl:w-[300px] xl:h-[300px] 2xl:w-[500px] 2xl:h-[500px] " src={procedure4} alt='fourth procedure' />
            <p className="text-2xl px-4 text-justify md:w-1/2 xl:text-3xl 2xl:text-5xl">“ Send the invitation link “</p>
        </div>
    
</div>
  )
};

export default Procedure;
