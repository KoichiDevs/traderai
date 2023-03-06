import React, { useEffect } from 'react'

const TimeBox = ({ time, label }) => {

    useEffect(() => {
        const str = time.toString().length
        console.log(str)
    }, [])


    return (
        <div className='w-fit'>
            <div className='bg-slate-700 sm:w-20 sm:h-20 w-14 h-14 flex items-center justify-center'>
                <p className='text-white font-black sm:text-3xl text-lg'>
                    {time.toString().length <= 1 ? `0${time}` : time}
                </p>
            </div>
            <h3 className='text-center mt-2 font-poppins sm:text-lg text-xs'>{label}</h3>
        </div>
    )
}

export default TimeBox