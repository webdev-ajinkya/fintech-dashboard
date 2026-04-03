import { useDashboard } from "@/provider/DashboardContext";
import { useState, useRef, useEffect } from "react";

export function ProfileMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { mode, setMode } = useDashboard();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="h-8 w-8 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full flex items-center justify-center text-xs font-semibold transition"
            >
                ET
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg rounded-lg p-3 space-y-3 z-50 transition">

                    {/* User + Toggle */}
                    <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-gray-800 dark:text-gray-100">
                            John Doe
                        </div>

                        <button
                            onClick={() => setMode(mode === "admin" ? "view" : "admin")}
                            className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"
                        >
                            <div
                                className={`absolute top-1 left-1 h-4 w-4 bg-white rounded-full transition-transform ${mode === "admin" ? "translate-x-6" : ""
                                    }`}
                            />
                        </button>
                    </div>

                    <div className="text-[10px] text-gray-500 dark:text-gray-400 text-right">
                        {mode === "admin" ? "Admin" : "View"}
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-800" />

                    <button
                        onClick={() => setOpen(false)}
                        className="w-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded py-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}