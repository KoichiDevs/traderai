import React from 'react'
import { HiCpuChip } from 'react-icons/hi2'


const RoadmapCard = ({ list, phase }) => {
    return (
        <div className="h-[33rem] sm:w-[24rem] w-[18rem] bg-gradient-to-r from-hero to-[#231b35] rounded-2xl shadow-xl p-8 mt-20">
            <div className="relative w-fit">
                <h1 className="font-saira text-xl font-semibold">{phase}</h1>
                <div className="w-full h-[3px] bg-fade mt-2"></div>
            </div>

            <div className="mt-6 flex flex-col gap-y-5">
                {list.map((items, i) => {
                    return (
                        <div className="flex items-center gap-x-3 justify-items-start" key={i}>
                            <div className="h-9 w-11 bg-[#231b35] rounded-full flex items-center justify-center">
                                <HiCpuChip className="text-2xl text-fade" />
                            </div>

                            <div className="w-full">
                                <h3 className='font-poppins sm:text-[15px] text-xs'>{items}</h3>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default RoadmapCard