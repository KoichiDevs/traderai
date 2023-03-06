import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiLevelsdotfyi } from 'react-icons/si'
import { RiNumbersFill } from 'react-icons/ri'
import { GiToken, GiBoltShield } from 'react-icons/gi'
import DappBox from '../components/DappBox'


const Dapp = () => {

    const [titleRef, titleView] = useInView({ triggerOnce: true, threshold: 0.5 })

    const dappList = [
        {
            text: 'How many $TRADER tokens do they have',
            icon: <RiNumbersFill />
        },
        {
            text: 'Their current tier.',
            icon: <SiLevelsdotfyi />
        },
        {
            text: 'If they have vested tokens.',
            icon: <GiToken />
        },
        {
            text: 'Token sale penalty protection.',
            icon: <GiBoltShield />
        },
    ]

    return (
        <section className='w-full h-auto bg-stars bg-cover text-white py-20' id="dapp">

            <div className="max-w-[1500px] w-full mx-auto px-8">
                <div className="overflow-hidden w-full" ref={titleRef}>
                    <motion.h1 initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className='md:text-7xl text-4xl font-extrabold text-center'>TRADER AI DAPP</motion.h1>
                </div>

                <p className='font-poppins text-center max-w-[40rem] mx-auto mt-3'>Trader AI DAPP is the interface between Trader AI platform and our users. This interface will be updated with each improvement and new features that are added. </p>

                <p className='font-poppins mt-16 text-center font-bold'>At the top of this interface the user can see:</p>

                <div className="w-fit mx-auto mt-14 grid gap-x-16 gap-y-9 md:grid-cols-2 lg:grid-cols-4">
                    {dappList.map((items, i) => {
                        return (
                            <DappBox text={items.text} logo={items.icon} key={i} />
                        )
                    })}
                </div>

                <div className=" mt-20 gap-y-6 flex flex-col">
                    <p className='font-poppins text-center max-w-[40rem] mx-auto'>You can also find access to the Trader AI Investor, the graph of how the investment evolves and the day-by-day iteration history.</p>

                    <p className='font-poppins text-center max-w-[40rem] mx-auto'>In the DAPP you can also find the Trader AI Anti Honey to buy other tokens from our application and also access to Trader AI Protector where you can protect your tokens from honeys and rugs </p>
                </div>

            </div>
        </section>
    )
}

export default Dapp