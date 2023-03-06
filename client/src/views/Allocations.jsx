import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Typewriter from 'typewriter-effect';

const Allocations = () => {

    const containerRef = useRef(null)

    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [titleRef, titleView] = useInView(options)

    const distribution = [
        { type: 'Fairlaunch', percentage: 35, div: 60 },
        { type: 'Liquidity', percentage: 17.5, div: 30 },
        { type: 'Giveaway', percentage: 5, div: 10 },
        { type: 'CEX liquidity', percentage: 20, div: 40 },
        { type: 'Development and marketing', percentage: 10, div: 22 },
        { type: 'Advisory shares and partnerships', percentage: 7.5, div: 18 },
        { type: 'Team', percentage: 5, div: 10 }
    ];

    return (

        <section className='h-auto w-full bg-[#0d031e] relative flex items-center justify-center py-20' ref={containerRef}>

            <div className="w-[1px] bg-black h-[1px] absolute bottom-[20rem] left-20 shadow-radial"></div>
            <div className="w-[1px] bg-black h-[1px] absolute bottom-[29rem] right-20 shadow-radial"></div>

            <div className="w-fit mx-auto  relative text-white px-10 flex gap-x-24 lg:flex-row flex-col">

                <div className="w-full flex items-center justify-center">
                    <div className="sm:w-[58vh] w-[30vh]">
                        <img src="/allocation.webp" alt="Allocations" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="w-full lg:text-left mt-12" ref={titleRef}>
                    <div className="font-saira font-bold">
                        <div className="overflow-hidden">
                            <motion.h1 initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className='md:text-3xl text-3xl font-extrabold'>Token Allocations</motion.h1>
                        </div>
                    </div>


                    <div className="font-poppins mt-6  flex flex-col gap-y-4 sm:w-[23rem]">
                        {distribution.map((items, i) => {
                            return (
                                <div className="flex items-center gap-x-4" key={i}>

                                    <div className="h-4 bg-white bg-gradient-to-l from-[#00ffff] to-fade" style={{ width: `${items.div + 10}%` }}>

                                    </div>

                                    <div className="w-[100%] flex justify-start text-left opacity-60 text-sm">
                                        <h3>{items.percentage}% {items.type}</h3>
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

export default Allocations