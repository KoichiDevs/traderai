import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const FadeBoxMessage = ({ text }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
    

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={inView ? { opacity: 100, scale: 1 } : {}} transition={{ duration: 0.6 }} className="h-auto max-w-[50rem] px-8 py-8 bg-boxPurple flex items-center justify-center relative" ref={ref}>

            <div className="absolute left-0 top-0 h-[8rem] w-[8rem] shadow-fade">
                <div className="h-full w-[0.3rem] absolute left-0 top-0 bg-gradient-to-b from-fade to-hero"></div>
                <div className="h-[0.3rem] w-full absolute left-0 top-0 bg-gradient-to-r from-fade to-hero"></div>
            </div>

            <div className="absolute bottom-0 right-0 h-[8rem] w-[8rem] rotate-180 shadow-fade">
                <div className="h-full w-[0.3rem] absolute left-0 top-0 bg-gradient-to-b from-fade to-hero"></div>
                <div className="h-[0.3rem] w-full absolute left-0 top-0 bg-gradient-to-r from-fade to-hero"></div>
            </div>

            <p className="font-poppins font-medium text-center">{text}</p>
        </motion.div>
    )
}

export default FadeBoxMessage