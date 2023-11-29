"use client"

import * as React from "react"
import {ThemeProvider as NextThemesProvider} from "next-themes"
import {ThemeProviderProps} from "next-themes/dist/types"
import {useState} from "react";
import Navbar from "@/components/navigation/navbar";

export function Providers({children, ...props}: ThemeProviderProps) {
    const [openSidebar, setOpenSidebar] = useState(true);

    return (
        <NextThemesProvider {...props}>
            <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
            <main className={`bg-neutral-100 dark:bg-neutral-950 min-h-screen z-50 mt-16 ${openSidebar? "ml-56" : ""}`}>
                {children}
            </main>
        </NextThemesProvider>
    );
}