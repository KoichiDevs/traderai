import React, { useState } from 'react'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsFillMegaphoneFill } from 'react-icons/bs'
import TextareaAutosize from 'react-textarea-autosize';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Footer = () => {

    const [data, setData] = useState({
        email: '',
        message: ''
    })

    const onChange = (e) => {
        setData(val => ({ ...val, [e.target.name]: e.target.value }))
    }

    return (

        <footer className='gap-y-14 w-full h-auto bg-boxPurple text-white px-20 py-[5rem] flex lg:justify-between lg:flex-row flex-col-reverse justify-center items-center bg-contain bg-earth bg-center bg-no-repeat' >
            <div className="w-full">
                <div className="flex items-center gap-x-3 justify-center lg:justify-start">
                    <img src="/logo.webp" alt="Logo" className="w-12" />
                    <h1 className='font-saira text-2xl font-bold'>TRADER AI</h1>
                </div>
                <p className='font-poppins text-sm opacity-60 mt-4 text-center lg:text-left'>© 2023 Trader AI. All Rights Reserved</p>
            </div>

            <div className="w-full flex flex-col items-center lg:mt-0">
                <h1 className="font-saira text-2xl">Stay connected:</h1>

                <div className="flex text-lg gap-x-5 mt-7">
                    <a href="https://twitter.com/TraderAItoken" target="_blank" rel="noopener noreferrer" className="">
                        <button className="h-12 w-12 border-[1px] rounded-full flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-[1.1]">
                            <SiTwitter />
                        </button>
                    </a>
                    <a href="https://t.me/TraderAIofficial" target="_blank" rel="noopener noreferrer" className="">
                        <button className="h-12 w-12 border-[1px] rounded-full flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-[1.1]">
                            <FaTelegramPlane className='mr-[3px]' />
                        </button>
                    </a>

                    <a href="https://t.me/traderaiannouncements" target="_blank" rel="noopener noreferrer" className="">
                        <button className="h-12 w-12 border-[1px] rounded-full flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-[1.1]">
                            <BsFillMegaphoneFill className='mr-[2.5px]' />
                        </button>
                    </a>

                </div>
                <div className="mt-5 text-center">
                    <p className='font-semibold'>Email:</p>
                    <p className='font-normal opacity-60'>contact@traderai.net</p>
                </div>

            </div>

            <div className="w-full font-poppins lg:text-right text-center">
                <h1 className='font-saira text-2xl'>Contact us:</h1>

                <div className="mt-3 w-fit lg:ml-auto gap-y-5 flex flex-col mx-auto lg:mr-0">
                    <div className="flex flex-col gap-y-2 w-fit">
                        <h3 className='opacity-60'>Email:</h3>
                        <input type="text" name="email" value={data.email} onChange={onChange} className="bg-[#0d031e] h-12 lg:w-[20rem] outline-none p-4" />
                    </div>

                    <div className="flex flex-col gap-y-2 w-fit">
                        <h3 className='opacity-60'>Message:</h3>
                        <TextareaAutosize minRows={3} maxRows={4} className="bg-[#0d031e] h-10 lg:w-[20rem] w-[14.5rem] outline-none p-4 resize-none"/>
                    </div>

                    <motion.a initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} href="mailto:contact@traderai.net" target="_blank" className='lg:ml-auto mx-auto lg:mr-0'>
                        <Button text="Send message" />

                    </motion.a>
                </div>

            </div>
        </footer >
    )
}

export default Footer
