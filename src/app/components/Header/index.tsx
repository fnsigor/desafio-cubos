"use client";
import { useTheme } from "../ThemeProvider";

import Image from "next/image";
import Lightmode from "@/assets/lightmode.svg";
import Darkmode from "@/assets/darkmode.svg";
import Logo from "@/assets/logo-cubos.svg";

export const Header = () => {
    const { isDarkmode, handleSwitchTheme } = useTheme();

    return (
        <header className="py-6 px-4 flex justify-between items-center">
           <Logo className="h-9"/>
            <button
                className="w-16 h-12 bg-primary-dark rounded-sm flex justify-center items-center"
                onClick={handleSwitchTheme}
            >
                {isDarkmode ? <Lightmode /> : <Darkmode />}
            </button>
        </header>
    );
};
