import { TextField } from "@mui/material";
import React from "react";
import chatBubble from '../../assets/chatBubble.png'

const Contact = () => {
  return (
    <div id='contact' className="h-fit relative top-40 xs:top-60 sm:top-64 lg:top-48 xl:top-80 xl1500:top-80 2xl:top-[30rem]">
        <div className='h-16 xl:h-24 xl1500:h-36'></div> 
        <h1 className="px-2 lg:px-6 py-4 lg:py-6 bg-light-pink text-titles-grey w-full md:w-2/5 font-normal lg:text-4xl  xl:text-5xl 2xl:text-7xl">Contact Us</h1>
        <p className="text-titles-grey px-4 text-justify text-xl xl:text-3xl 2xl:text-5xl mt-4">Feel free to contact us if you have any feedback or enquiry.</p>
        <h1 className="w-full text-center font-normal mt-4 text-2xl xl:text-4xl 2xl:text-6xl">Send Message</h1>
        <div className="w-full flex flex-col lg:flex-row items-center 2xl:px-8">
            <form className="px-4 flex flex-col items-center gap-2 mt-4 max-w-[570px] lg:w-1/2 lg:max-w-[650px] 2xl:max-w-[1200px] ">
                <div className="flex gap-2 w-full">
                    <TextField 
                        label='Name'
                        placeholder="Name"
                        fullWidth
                        InputLabelProps = {{
                            style: {fontSize: window.innerWidth > 2000 ? '2.5rem' : window.innerWidth > 1250 ? '2rem' : ''},
                        }}
                        InputProps={{
                            style: {fontSize: window.innerWidth > 2000 ? '3rem': window.innerWidth > 1250 ? '2.2rem' : ''},
                        }} 
                    />
                    <TextField 
                        label='Email'
                        placeholder="Email"
                        fullWidth
                        InputLabelProps = {{
                            style: {fontSize: window.innerWidth > 2000 ? '2.5rem' : window.innerWidth > 1250 ? '2rem' : ''},
                        }}
                        InputProps={{
                            style: {fontSize: window.innerWidth > 2000 ? '3rem': window.innerWidth > 1250 ? '2.2rem' : ''},
                        }} 
                    />
                </div>
                <div className="w-full">
                    <TextField 
                        label='Subject'
                        placeholder="Subject"
                        fullWidth
                        InputLabelProps = {{
                            style: {fontSize: window.innerWidth > 2000 ? '2.5rem' : window.innerWidth > 1250 ? '2rem' : ''},
                        }}
                        InputProps={{
                            style: {fontSize: window.innerWidth > 2000 ? '3rem': window.innerWidth > 1250 ? '2.2rem' : ''},
                        }} 
                    />
                </div>
                <TextField 
                    label='Message'
                    placeholder="Message"
                    multiline
                    rows={8}
                    fullWidth
                    InputLabelProps = {{
                        style: {fontSize: window.innerWidth > 2000 ? '2.5rem' : window.innerWidth > 1250 ? '2rem' : ''},
                    }}
                    InputProps={{
                        style: {fontSize: window.innerWidth > 2000 ? '3rem': window.innerWidth > 1250 ? '2.2rem' : ''},
                    }} 
                />
                <button className="px-4 py-2 xl:py-4 w-fit rounded-xl border-none bg-[#FF90A1] text-white text-lg xl:text-3xl 2xl:text-5xl 2xl:mt-4 ">Send Message</button>
            </form>
            <div className="flex flex-col lg:flex-row items-center lg:justify-around lg:w-1/2 lg:h-full">
                <h2 className="font-light italic mt-8 xl:text-3xl">--OR--</h2>
                <div className="flex flex-col items-center mt-8 2xl:gap-16">
                    <div className="w-full text-center">
                        <h1 className="font-normal xl:text-4xl 2xl:text-6xl">Email</h1>
                        <p className="mt-4 text-[#EA2B48] xl:text-3xl 2xl:text-5xl">...@support.com</p>
                    </div>
                    <h2 className="font-light italic mt-8 xl:text-3xl">--OR--</h2>
                    <div className="flex flex-col items-center">
                        <h1 className="font-normal mt-8 xl:text-4xl 2xl:text-6xl">Chat</h1>
                        <img className="mt-4 2xl:w-[200px] 2xl:h-[180px]"  src={chatBubble} alt='chat bubble' />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
  
};

export default Contact;
