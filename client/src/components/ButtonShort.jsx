import React from 'react'

const ButtonShort = ({ text }) => {
    return (
        <button className="h-[3.4rem] w-fit px-12 bg-[#152855] flex items-center justify-center relative group">
            <div className="absolute left-0 top-0 h-0 w-0 shadow-fade transition-all ease-in-out duration-300 group-hover:w-full group-hover:h-full">
                <div className="h-full w-[0.2rem] absolute left-0 top-0 bg-fade"></div>
                <div className="h-[0.2rem] w-full absolute left-0 top-0 bg-fade"></div>
            </div>

            <div className="absolute bottom-0 right-0 h-0 w-0 rotate-180 shadow-fade transition-all ease-in-out duration-300 group-hover:w-full group-hover:h-full">
                <div className="h-full w-[0.2rem] absolute left-0 top-0 bg-fade"></div>
                <div className="h-[0.2rem] w-full absolute left-0 top-0 bg-fade"></div>
            </div>

            <div className="flex items-center gap-x-3">
                <p className="uppercase font-poppins font-semibold">{text}</p>
            </div>
        </button>
    )
}

export default ButtonShort