"use client";
import {
    createContext,
    ReactNode,
    useState,
    useEffect,
    useContext,
} from "react";

type ThemeContext = {
    isDarkmode: boolean;
    handleSwitchTheme: () => void;
};

const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkmode, setIsDarkmode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if (!theme) {
            localStorage.setItem("theme", "darkmode");
            document.body.classList.add("darkmode");
        } else if (theme === "light") {
            setIsDarkmode(false);
            document.body.classList.add("lightmode");
        }
    }, []);

    const handleSwitchTheme = () => {
        if (isDarkmode) {
            setIsDarkmode(false);
            document.body.classList.remove("darkmode");
            document.body.classList.add("lightmode");
        } else {
            setIsDarkmode(true);
            document.body.classList.add("darkmode");
            document.body.classList.remove("lightmode");
        }
    };

    return (
        <ThemeContext.Provider value={{ isDarkmode, handleSwitchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext)
        throw new Error("useTheme must be used inside ThemeProvider");

    return themeContext;
};
