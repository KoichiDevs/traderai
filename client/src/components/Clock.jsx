import React, { useState, useEffect } from 'react'
import TimeBox from './Timebox';


const Clock = () => {

    const [expiryTime, setExpiryTime] = useState("10 mar 2023 17:00:00 UTC");
    const [countdownTime, setCountdownTime] = useState({
        countdownDays: "",
        countdownHours: "",
        countdownMinutes: "",
        countdownSeconds: "",
    });

    const countdownTimer = () => {
        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor(
                (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const totalMinutes = Math.floor(
                (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
            );
            const totalSeconds = Math.floor(
                (remainingDayTime % (1000 * 60)) / 1000
            );

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds,
            };

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }
        }, 1000);
    };

    useEffect(() => {
        countdownTimer();
        console.log(countdownTime.countdownlMinutes)
    }, []);


    return (
        <div className='text-white'>
            <h2 className='text-center mt-10 font-bold text-2xl text-header uppercase font-saira'>Pre-sale Ends In</h2>

            <div className='flex sm:gap-x-4 gap-x-2 mx-auto w-fit mt-5'>
                <TimeBox time={countdownTime.countdownDays} label="Days" />
                <TimeBox time={countdownTime.countdownHours} label="Hours" />
                <TimeBox time={countdownTime.countdownMinutes} label="Minutes" />
                <TimeBox time={countdownTime.countdownSeconds} label="Seconds" />
            </div>
        </div>
    )
}

export default Clock
