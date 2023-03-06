import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ToolBox from '../components/ToolBox'

const Tools = () => {

    const [titleRef, titleView] = useInView({ triggerOnce: true, threshold: 0.5 })
    const toolList = [
        <>
            <p>Trader AI Anti Honey: This swap allows the user to buy cryptocurrencies from the BSC/ETH/ARB network by copying the contract to the DAPP. Currently the swap is in the making.</p>

            <p className='mt-8'>It will verify that the contract at the point of buying is not a honeypot but there is no guarantee it will not be honeypot in the future.</p>
        </>,

        'Trader AI Protector: It is a tool to protect the BSC/ETH/ARB tokens so that if any type of malicious activity happens in the token contract which you are buying, for example a honeypot or rug, Trader AI Protector will sell for the user before it happens, so he will not lose his tokens. Even if the user deposits his BSC/ETH/ARB tokens in Trader AI Protector, he can both transfer them to his account again and sell them automatically at any time. The reliability of Trader AI is not 100%, as every day other ways of scamming are created and the tool has to be updated. Trader AI Protector is currently under development and in beta mode.']

    return (
        <section className='w-full h-auto py-20 text-white' id="tools">
            <div className="max-w-[1500px] w-full mx-auto px-10">
                <div className="overflow-hidden w-full" ref={titleRef}>
                    <motion.h1 initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className='md:text-8xl text-4xl font-extrabold text-center'>TOOLS</motion.h1>
                </div>

                <p className='font-poppins text-center max-w-[40rem] mx-auto mt-3'>Meanwhile Trader AI team is developing other tools for the BSC/ETH/ARB blockchains DAPP.</p>

                <div className="w-fit mx-auto flex gap-x-28 mt-20 lg:flex-row flex-col gap-y-20">
                    {toolList.map((items, i) => {
                        return (
                            <ToolBox text={items} key={i} />
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Tools