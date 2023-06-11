import React from "react";
import weddingGuests from '../../assets/guests-img.png';
import GetStartedButton from "./GetStartedButton";

const Intro = ({setRegisterForm}) => {
  return (
    <div className="relative top-32 h-screen xs:top-40 md:top-48 lg:top-36 xl:top-72 xl1500:top-72 2xl:top-96 flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:w-3/4">
            <div style={{borderBottom:window.innerWidth < 768 && '3px solid black', borderRight:window.innerWidth >= 768 && '3px solid black'}} className="uppercase text-[#EA2B48] text-center irish-grover pb-8 md:pb-0 mx-6 md:mx-0 xs:mx-16 sm:mx-48  md:w-3/5">
                <p className="text-[40px] xl:text-[60px] 2xl:text-[80px]">Your New</p>
                <p className="text-[50px] xl:text-[70px] 2xl:text-[90px]">Invitations</p>
                <p className="text-[40px] xl:text-[60px] 2xl:text-[80px]">Solution</p>
            </div>
            <div className="md:w-2/5 md:px-8 lg:px-6 flex flex-col items-center">
                <p className="irish-grover text-2xl xl:text-4xl xl1500:text-5xl 2xl:text-6xl text-center p-4">“GUESTS ARE WAITING FOR THEIR ONLINE INVITATIONS”</p>
                <GetStartedButton setRegisterForm={setRegisterForm}  extraClassNames={'hidden lg:block lg:py-[4px] xl:text-2xl xl1500:text-3xl 2xl:text-5xl xl:py-[8px] 2xl:py-[12px]'} />
            </div>
        </div>
        <div className="relative flex justify-center items-center md:mt-4">
            <img src={weddingGuests} alt='wedding guests' className="w-full md:max-w-[800px] xl:max-w-[1200px] xl1500:max-w-[3000px] xl1500:w-[1500px] 2xl:w-[2000px] " />
            <GetStartedButton setRegisterForm={setRegisterForm} extraClassNames={'absolute lg:hidden'}/>
        </div>
    </div>
  )
};

export default Intro;
