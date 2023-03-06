import React from 'react'
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2"
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


const ToolBox = ({ text }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={inView ? { opacity: 100, scale: 1 } : {}} transition={{ duration: 0.6 }} className="h-auto max-w-[25rem] w-full relative" ref={ref}>

            <HiOutlineWrenchScrewdriver className="z-[9] absolute left-0 right-0 mx-auto text-7xl -top-9" />

            <div className="bg-fade w-full h-full absolute top-0 left-0 z-0 md:rotate-6 rotate-3 shadow-glowy rounded-xl"></div>

            <div className="bg-cardBg w-full h-full relative z-0 flex items-center justify-start px-12 py-14 flex-col gap-y-5 rounded-xl">
                <div className="font-poppins text-center text-sm">{text}</div>
            </div>
        </motion.div>
    )
}

export default ToolBox