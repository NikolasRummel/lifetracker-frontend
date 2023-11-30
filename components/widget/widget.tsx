import React from 'react';
import Image, {StaticImageData} from "next/image";
import calendar from "@/public/images/calendar.png";

interface WidgetProps {
    title: string;
    description: string;
    children: React.ReactNode;
    colSpan?: number | 1;
    image?: StaticImageData;
}

const Widget = ({title, description, children, colSpan, image}: WidgetProps) => {
    return (
        <div
            className={`shadow-xl hover:shadow-2xl hover:scale-[1.02] duration-300 rounded-b-3xl col-span-${colSpan}`}>
            <div className={"rounded-t-3xl bg-sky-100 dark:bg-neutral-900 p-3 w-full inline-flex space-x-4"}>
                <Image src={image? image : calendar} alt={"calendar"} className={"rounded-2xl h-12 w-12"}/>
                <div className={"col-span-4"}>
                    <span className={"block text-xl font-medium"}>{title}</span>
                    <span>{description}</span>
                </div>
            </div>
            <div className={"rounded-b-3xl bg-neutral-50 dark:bg-neutral-800 flex justify-center "}>
                <div className={""}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Widget;