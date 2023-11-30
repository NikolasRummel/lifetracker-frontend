"use client";
import React, {useState, useEffect} from 'react';

const SevenSegmentClock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (value: number): string => {
        return value < 10 ? `0${value}` : value.toString();
    };

    const renderClock = (): React.ReactNode => {
        const hours = formatTime(time.getHours());
        const minutes = formatTime(time.getMinutes());
        const seconds = formatTime(time.getSeconds());

        return (
            <div>
                <span className={"text-5xl font-medium"}>{hours} : {minutes} : {seconds}</span>
            </div>
        );
    };

    return (
        <div
            className="p-10 hover:scale-[1.02] duration-300 rounded-3xl col-span h-full">
            {renderClock()}
            <div className="text-gray-500 dark:text-gray-400">
                {time.toLocaleString('en-US', {weekday: 'long'})}, {time.getDate()}.{time.getMonth() + 1}.{time.getFullYear()}
            </div>
        </div>
    );
};

export default SevenSegmentClock;
