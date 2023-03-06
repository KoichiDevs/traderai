import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const DappBox = ({ text, logo }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={inView ? { opacity: 100, scale: 1 } : {}} transition={{ duration: 0.6 }} className="w-[12rem] h-auto bg-fade shadow-dappglow font-poppins text-center font-medium rounded-xl p-5 py-8 flex items-center flex-col gap-y-3" ref={ref}>
            <div className="text-4xl">
                {logo}
            </div>
            <p>{text}</p>
        </motion.div>
    )
}

export default DappBox