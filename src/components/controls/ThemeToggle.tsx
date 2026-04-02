"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null;
        if (saved) {
            setTheme(saved);
            document.documentElement.classList.toggle("dark", saved === "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-3 py-1.5 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md transition"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}