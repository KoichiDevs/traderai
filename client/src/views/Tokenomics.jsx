import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Typewriter from 'typewriter-effect';

const Tokenomics = () => {

    const containerRef = useRef(null)

    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [titleRef, titleView] = useInView(options)

    const tokenList = [
        {
            label: "Token Symbol",
            desc: "$TRADER"
        },
        {
            label: "Total supply",
            desc: "100,000,000 $TRADER"
        },
        {
            label: "Platform",
            desc: "PINKSALE"
        },
        {
            label: "Listing price (20% extra)",
            desc: ""
        },
        {
            label: "Fair launch price",
            desc: ""
        },

    ]

    const distribution = [
        '35% Fairlaunch',
        '17.5% Liquidity',
        '5% Giveaway',
        '20% CEX Liquidity',
        '10% Development and marketing',
        '7.5% Advisory shares and partnerships',
        '5% Team'
    ];

    return (

        <section className='h-auto w-full bg-[#0d031e] relative flex items-center justify-center py-20' ref={containerRef} id="tokenomics">

            <div className="w-[1px] bg-black h-[1px] absolute bottom-[20rem] left-20 shadow-radial"></div>
            <div className="w-[1px] bg-black h-[1px] absolute bottom-[29rem] right-20 shadow-radial"></div>

            <div className="w-fit mx-auto  relative text-white px-10 flex gap-x-24 lg:flex-row flex-col">

                <div className="w-full flex items-center justify-center">
                    <motion.div initial={{}} animate={titleView ? { y: [-15, 15] } : {}} transition={{ duration: 1.2, ease: "linear", repeat: Infinity, repeatType: "reverse" }} className="sm:w-[58vh] w-[30vh]">
                        <img src="/token.webp" alt="Tokenomics" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                <div className="w-full lg:text-left mt-12" ref={titleRef}>
                    <div className="font-saira font-bold">
                        <div className="overflow-hidden">
                            <motion.h3 initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7 }} className='md:text-3xl text-2xl font-semibold'>
                                <Typewriter
                                    options={{
                                        strings: ['Token'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </motion.h3>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1 initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className='md:text-6xl text-4xl font-extrabold'>TOKENOMICS</motion.h1>
                        </div>
                    </div>


                    <div className="font-poppins mt-12 max-w-[55rem] flex flex-col gap-y-4">
                        {tokenList.map((items, i) => {
                            return (
                                <div className="flex" key={i}>
                                    <div className="w-full">
                                        <h2 className='font-medium'>{items.label}:</h2>
                                    </div>

                                    <div className="w-[80%] flex justify-start text-left opacity-60">
                                        <h3>{items.desc}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>


        </section>


    )
}

export default Tokenomics