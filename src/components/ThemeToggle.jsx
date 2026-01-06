import {Sun, Moon} from "lucide-react";
import {useState} from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
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
        <button onClick = {toggleTheme}>
            {isDarkMode ? <Sun className = "h-6 w-6 text-yellow-300"/> 
            : <Moon className = "h-6 w-6 text-blue-900"/>}
        </button>
    );
}