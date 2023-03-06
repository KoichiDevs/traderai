import React, { useEffect, useRef } from 'react'
import { motion, useSpring, useTransform, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Typewriter from 'typewriter-effect';

const About = () => {

    const imgList = ['1', '2', '3', '4', '5']
    const [ref, view] = useInView({
        threshold: 0.5,
        rootMargin: "300px 0px 0px 0px",
    })
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })

    const transformSpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const x = useTransform(transformSpring, [0, 1], [0, -300])
    const scale = useTransform(transformSpring, [0, 1], [1.25, 1])

    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [titleRef, titleView] = useInView(options)
    const [imageRef, imageView] = useInView(options)




    return (

        <section className='min-h-screen h-auto w-full bg-hero relative flex items-center justify-center pb-[10rem]' ref={containerRef} id="about">

            <div className="w-[1px] bg-black h-[1px] absolute bottom-[20rem] left-20 shadow-radial"></div>
            <div className="w-[1px] bg-black h-[1px] absolute bottom-[29rem] right-20 shadow-radial"></div>

            <motion.div className=" gap-x-3 md:flex hidden absolute top-0 left-0" ref={ref} style={{ x }}>
                {imgList.map((items, i) => {
                    return (

                        <div className="overflow-hidden min-w-[30rem] " key={i}>
                            <motion.img style={{ scale }} src={`${items}.webp`} alt={items} className="w-full h-full object-cover shadow-about origin-center" />
                        </div>
                    )
                })}
            </motion.div>

            <div className="w-fit mx-auto  relative text-white lg:mt-[33rem] mt-[5rem] px-10 flex gap-x-10 lg:flex-row flex-col">

                <div className="w-full flex items-center justify-center">
                    <motion.div initial={{}} animate={titleView ? { y: [-15, 15] } : {}} transition={{ duration: 1.2, ease: "linear", repeat: Infinity, repeatType: "reverse" }} className="sm:w-[52vh] w-[47vh]" ref={imageRef}>
                        <img src="/about.webp" alt="about" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                <div className="w-full lg:text-left text-center mt-12 lg:mt-0" ref={titleRef}>
                    <div className="font-saira font-bold">
                        <div className="overflow-hidden">
                            <motion.h3 initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7 }} className='md:text-3xl text-2xl font-semibold'>
                                <Typewriter
                                    options={{
                                        strings: ['ABOUT'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </motion.h3>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1 initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className='md:text-6xl text-4xl font-extrabold'>TRADER AI</motion.h1>
                        </div>
                    </div>


                    <div className="font-poppins mt-5 max-w-[45rem] flex flex-col gap-y-4">
                        <div className="overflow-hidden">
                            <motion.p initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="">Trader AI is a cognitive platform powered by artificial intelligence that allows traders to leverage the most advanced predictive models available. The platform provides access to automated trading strategies, as well as comprehensive risk management tools designed to help traders make smarter decisions and be more profitable.</motion.p>
                        </div>

                        <div className="overflow-hidden">
                            <motion.p initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="">Trader AI introduces AI which trades for you as accurately as possible various cryptocurrencies.</motion.p>
                        </div>
                    </div>
                </div>

            </div>


        </section>


    )
}

export default About