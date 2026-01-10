import {Sun, Moon} from "lucide-react";
import {useState} from "react";
import {cn} from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");

        const shouldBeDark = storedTheme === "dark" || storedTheme === null;
        
        if (shouldBeDark) {
            document.documentElement.classList.add("dark");
            if (!storedTheme) localStorage.setItem("theme", "dark"); 
            return true;
        } else {
            document.documentElement.classList.remove("dark");
            return false;
        }
    });

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick = {toggleTheme} className = {cn(
            "fixed z-50 p-2 rounded-full transition-all duration-300 focus:outline-none",
            "top-[3vh] right-[3vw] md:top-[4vh] md:right-[4vw]"
        )}>
        {isDarkMode ? (
            <Moon 
                fill="white" 
                className="h-8 w-8 text-black-900 transition-transform duration-200 hover:scale-120 cursor-pointer" 
            />
            ) : (
            <Sun 
                fill="dark gray" 
                className="h-8 w-8 text-dark-gray transition-transform duration-200 hover:scale-120 cursor-pointer" 
            />
        )}
        </button>
    );
}