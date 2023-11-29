"use client";

import React from "react";
import SidebarLink from "@/components/navigation/sidebar-link";
import {HomeIcon} from "lucide-react";

interface SidebarProps {
    open: boolean;
}

export default function Sidebar({open}: SidebarProps) {
    let sidebarStyle = open
        ? "transform translate-x-0 w-56 h-full"
        : "transform -translate-x-full";

    return (
        <>
            <div
                className={`fixed top-16 p-4 pl-2 bg-white dark:bg-black transition-transform duration-300 ${sidebarStyle}`}>
                <nav>
                    <ul className="gap-2 mt-2 pl-2">
                        <p className={"text-blue-600 text-sm font-bold uppercase mb-2"}>Dashboard</p>
                        <SidebarLink link="/" label="Home" lucidIcon={HomeIcon}/>
                    </ul>
                </nav>
            </div>
        </>
    );
}