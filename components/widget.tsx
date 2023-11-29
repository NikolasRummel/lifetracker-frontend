import React from 'react';
import Image from "next/image";
import calendar from "@/public/images/calendar.png";




const Widget = () => {
    return (
        <div
            className={"shadow-xl hover:shadow-2xl hover:scale-[1.02] duration-300 rounded-b-3xl"}>
            <div className={"rounded-t-3xl bg-sky-100 dark:bg-neutral-950 p-3 w-full inline-flex space-x-4"}>
                <Image src={calendar} alt={"calendar"} className={"rounded-2xl h-12 w-12"}/>
                <div className={"col-span-4"}>
                    <span className={"block text-xl font-medium"}>Calendar</span>
                    <span>Mi. 29. Nov 2023</span>
                </div>
            </div>
            <div className={"rounded-b-3xl bg-neutral-50 dark:bg-neutral-900 flex justify-center "}>
                <div className={"py-28"}>
                    <p>test</p>
                </div>
            </div>
        </div>
    );
};

export default Widget;