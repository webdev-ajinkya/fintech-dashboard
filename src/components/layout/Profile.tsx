import { useState } from "react";

export function ProfileMenu() {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState("view");

    return (
        <div className="relative">
            {/* Avatar */}
            <button
                onClick={() => setOpen(!open)}
                className="h-8 w-8 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full flex items-center justify-center text-xs font-semibold transition"
            >
                ET
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg rounded-lg p-3 space-y-3 z-50 transition">

                    {/* User + Toggle */}
                    <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-gray-800 dark:text-gray-100">
                            John Doe
                        </div>

                        <button
                            onClick={() => setMode(mode === "admin" ? "view" : "admin")}
                            className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition"
                        >
                            <div
                                className={`absolute top-1 left-1 h-4 w-4 bg-white dark:bg-gray-300 rounded-full shadow transition-transform ${mode === "admin" ? "translate-x-6" : "translate-x-0"
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Mode Label */}
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 text-right">
                        {mode === "admin" ? "Admin" : "View"}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 dark:border-gray-800" />

                    {/* Logout */}
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