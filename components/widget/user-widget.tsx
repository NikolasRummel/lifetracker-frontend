import React from 'react';
import Image from "next/image";

interface UserWidgetProps {
    image: string;
    name: string;
    email: React.ReactNode;
}

const UserWidget = ({image, name, email}: UserWidgetProps) => {
    return (
        <div
            className={"p-10 bg-gradient-to-t from-sky-100 to-blue-300 dark:from-sky-500 dark:to-blue-700 shadow-xl hover:shadow-2xl hover:scale-[1.02] duration-300 rounded-3xl col-span-1"}>
            <Image
                className="object-cover rounded-full shadow-2xl aspect-square mb-10"
                src={image} alt={name}
                width={125}
                height={125}
            />
            <h2>{name}</h2>
            <span>{email}</span>
            <span className={"block mt-4 font-bold"}>Cubid+</span>
        </div>
    );
};

export default UserWidget;