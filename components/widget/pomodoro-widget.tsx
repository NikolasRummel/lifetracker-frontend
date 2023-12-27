"use client";
import React, {useState, useEffect} from 'react';
import Widget from "@/components/widget/widget";
import {Button} from "@/components/ui/button";

const PomodoroWidget: React.FC = () => {
    const initialTime = 25 * 60; // 25 minutes in seconds
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (time > 0) {
            timer = setInterval(() => {
                console.log(isRunning);
                if (isRunning) {
                    setTime((prevTime) => prevTime - 1);
                }
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isRunning, time]);

    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    function startTimer() {
        setTime(initialTime);
    }

    function pauseTimer() {
        console.log(isRunning);
        setIsRunning(!isRunning);
    }

    const renderClock = (): React.ReactNode => {
        return (
            <div>
                <span className={"text-5xl font-medium"}>{formatTime(time)}</span>
            </div>
        );
    };

    return (
        <Widget title={"Pomodoro"} description={"Start a 25 min timer"} colSpan={1}>
            <div className={"flex justify-center items-center w-full"}>
                {renderClock()}
                <div className={""}>
                    <Button onClick={startTimer}>Start</Button>
                    <Button onClick={pauseTimer}>Pause</Button>
                </div>
            </div>
        </Widget>
    );
};

export default PomodoroWidget;
