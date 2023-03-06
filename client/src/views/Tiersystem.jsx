import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FadeBox from '../components/FadeBox'
import FadeBoxMessage from '../components/FadeBoxMessage'

import { GiRobotAntennas, GiVintageRobot, GiRobotGolem } from 'react-icons/gi'

const Tiersystem = () => {

    const [titleRef, titleView] = useInView({ triggerOnce: true, threshold: 0.5 })

    const tierList = [
        {
            label: "Beginner",
            logo:  <GiRobotAntennas className='text-2xl' /> 
        },
        {
            label: "Advanced",
            logo: <GiVintageRobot className='text-2xl' /> 
        },
        {
            label: "Pro",
            logo: <GiRobotGolem className='text-2xl' /> 
        },
        
    ]

    return (
        <section className='w-full h-auto bg-darkbg py-20 text-white bg-trader bg-cover' id="tier system">
            <div className="max-w-[1500px] px-10 mx-auto w-full">
                <div className="overflow-hidden w-full" ref={titleRef}>
                    <motion.h1 initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className='md:text-8xl text-4xl font-extrabold text-center'>TIER SYSTEM</motion.h1>
                </div>

                <div className="overflow-hidden mx-auto max-w-[30rem] text-center mt-3 font-poppins">
                    <p className="w-full">In order to access Trader AI investment DAPP, the user must be valid for at least one of the three levels given below:</p>
                </div>

                <div className="flex w-fit mx-auto gap-x-16 mt-20 lg:flex-row flex-col gap-y-10">
                    {tierList.map((items, i) => {
                        return (
                            <FadeBox text={items.label} logo={items.logo} key={i} />
                        )
                    })}
                </div>

                <div className="overflow-hidden mx-auto max-w-[30rem] text-center mt-16 font-poppins">
                    <p className="w-full">It is similar to an entry fee, where different functionalities will be offered depending on the level. There is currently one way to join:</p>
                </div>
                <div className="w-fit mx-auto mt-10">
                    <FadeBoxMessage text="By purchasing our $TRADER token. Once you have purchased the amount required for the entry of one of the 3 levels, all its functionalities will be unlocked. You will always have the option to upgrade to a higher level by adjusting the amount of $TRADER owned. They will also be able to withdraw the $TRADER they purchased, thus losing access to the investment platform." />
                </div>



            </div>
        </section>
    )
}

export default Tiersystem