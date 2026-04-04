"use client";

import { useState, useRef, useEffect } from "react";
import { exportToCSV, exportToJSON } from "@/lib/exportFiles";;

export default function ExportMenu({ data }: { data: any[] }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative">
            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium 
        bg-white dark:bg-gray-900 
        border border-gray-200 dark:border-gray-700 
        text-gray-700 dark:text-gray-200 
        rounded-md shadow-sm 
        hover:bg-gray-50 dark:hover:bg-gray-800 
        active:scale-95 transition-all duration-200"
            >
                Download Report
            </button>

            {/* Dropdown */}
            <div
                className={`absolute right-0 mt-2 w-44 origin-top-right rounded-md 
        bg-white dark:bg-gray-900 
        border border-gray-200 dark:border-gray-700 
        shadow-lg p-1 z-50
        transform transition-all duration-200 ease-out
        ${open
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                    }`}
            >
                {/* CSV */}
                <button
                    onClick={() => {
                        exportToCSV(data);
                        setOpen(false);
                    }}
                    className="w-full text-left text-xs px-3 py-2 rounded-md 
          hover:bg-gray-100 dark:hover:bg-gray-800 
          transition flex items-center gap-2"
                >
                    Export CSV
                </button>

                {/* JSON */}
                <button
                    onClick={() => {
                        exportToJSON(data);
                        setOpen(false);
                    }}
                    className="w-full text-left text-xs px-3 py-2 rounded-md 
          hover:bg-gray-100 dark:hover:bg-gray-800 
          transition flex items-center gap-2"
                >
                    Export JSON
                </button>
            </div>
        </div>
    );
}