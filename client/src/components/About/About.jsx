import React from "react";

import couplesImg from '../../assets/couplesImage.png'

const About = () => {
  return (
    <div id='about' className="h-fit relative top-32 xs:top-48 sm:top-56 md:top-60 lg:top-36 xl:top-72 xl1500:top-72 2xl:top-96">
        <div className='h-16 xl:h-24 xl1500:h-36'></div> 
        <h1 className="px-2 lg:px-6 py-4 lg:py-6 bg-light-pink text-titles-grey w-full md:w-2/5 font-normal lg:text-4xl  xl:text-5xl 2xl:text-7xl  ">Who are we ?</h1>
        <div className="flex flex-col lg:flex-row lg:justify-around  items-center">
            <img src={couplesImg} alt='couples' className="w-1/2 sm:max-w-[330px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[700px]  mt-2 lg:order-2"  />
            <p className="p-6 md:p-12 lg:w-1/2 text-2xl lg:text-3xl xl:text-4xl  2xl:text-5xl text-justify lg:order-1">We provide you with a platform to create magical wedding invitations that you can send to your guests using a link. Then each guest will  use his generated username and password to login and answer questions related to the event, like if they will be attending or not.</p>
        </div>
        
    </div>
  )
};

export default About;
