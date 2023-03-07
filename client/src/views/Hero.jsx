import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import About from './About'
import Button from '../components/Button'
import Nav from '../components/Nav'
import Clock from '../components/Clock'

const Hero = () => {

    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                maxDistance: 16.00,
                points: 9.00,
                spacing: 14.00,
                scaleMobile: 1.00,
                backgroundColor: 0x0D031E,
                color: 0x03ecf7
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className='overflow-x-hidden'>

            <section className='w-full min-h-screen h-auto bg-hero relative text-white overflow-x-hidden z-10 overflow-hidden py-10' ref={myRef}>

                <Nav />

                <div className='w-fit mx-auto flex h-full lg:px-20 z-10 relative text-center justify-center lg:justify-start '>
                    <div className='mt-[5rem] lg:mt-[6rem] 2xl:mt-[8rem]'>
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1 }} className='font-saira lg:text-8xl font-black text-4xl 2xl:text-9xl flex items-center gap-x-2 mx-auto w-fit'>
                            <p className="flex gap-x-[2px]">
                                TRADER A<span className='lg:hidden block'>I</span>
                            </p>
                            <motion.div initial={{}} animate={{ scaleY: [1, 1.5, 1.2, 1.8, 0.8, 1] }} transition={{ duration: 13, repeat: Infinity, transformOrigin: "bottom" }} className="h-[4.3rem] w-7 bg-[#8cdb61] rounded-lg relative items-center origin-bottom lg:flex hidden 2xl:mt-5">
                                <div className="bg-[#8cdb61] h-1/2 w-[5px] rounded-lg mx-auto -translate-y-full"></div>
                            </motion.div>
                        </motion.div>

                        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.1 }} className='mt-2 2xl:max-w-[50rem] xl:max-w-[40rem] lg:max-w-[30rem] max-w-[40rem] font-poppins lg:text-md sm:text-sm text-xs px-10 lg:px-0 2xl:text-lg'>Trader AI is a Web3 project developed on Binance Smart Chain which is designed to provide an easy-to-use tool for crypto traders. By using artificial intelligence technology, it automates trading decisions using data analysis and predictive analytics.<br /><br />The AI technology continually assesses the available data and makes recommendations on when to enter or exit a trade, in order to maximize profits. It takes into account a number of factors such as risk levels, market trends and news reports, in order to make the best trading decisions. This allows cryptocurrency traders to make faster and more accurate decisions with less effort. As a result, it helps them achieve better returns on their investments.<br /><br />Trader AI mission is to simplify investing and open doors for new investors entering the cryptocurrency space.</motion.p>

                        <div className='flex gap-x-3 flex-col lg:flex-row items-center justify-center lg:justify-start gap-y-5 mt-10 mx-auto w-fit'>

                            <motion.a initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} href="https://www.pinksale.finance/launchpad/0x897195A57F78c199dCEA7b4248Eb13aB6E3FB182?chain=BSC&refId=0xA9d9006eDD89a0CaC18cBa31BF843103616Dba8f" target="_blank" className=''>
                                <Button text="Buy Presale" />
                            </motion.a>

                            <motion.button initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} className='border-[1px] border-white px-12 py-3 w-fit h-fit hover:bg-white hover:text-black cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto lg:mx-0 font-medium'>
                                <p>Chart</p>
                            </motion.button>
                            <motion.a initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} href="https://github.com/cyberscope-io/audits/blob/main/trai/audit.pdf" target="_blank" className=''>
                                <Button text="Audit" />
                            </motion.a>

                            <motion.button initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} className='border-[1px] border-white px-12 py-3 w-fit h-fit hover:bg-white hover:text-black cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto lg:mx-0 font-medium'>
                                <p>KYC</p>
                            </motion.button>

                        </div>

                        <Clock/>

                    </div>
                </div>


            </section>

            <About />
        </div>



    )
}

export default Hero
