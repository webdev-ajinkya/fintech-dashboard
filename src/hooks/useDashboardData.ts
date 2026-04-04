"use client";

import { useEffect, useState } from "react";
import { dashboardData as mockData } from "@/mock/ssot";

export function useDashboardData() {
    const [transactions, setTransactions] = useState(mockData.transactions);

    //  NEW: role mode
    const [mode, setMode] = useState<"admin" | "view">("view");

    //  Load once
    useEffect(() => {
        const stored = localStorage.getItem("transactions");
        if (stored) {
            setTransactions(JSON.parse(stored));
        }

        //  load mode
        const storedMode = localStorage.getItem("mode");
        if (storedMode) {
            setMode(storedMode as "admin" | "view");
        }
    }, []);

    //  Persist transactions
    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    //  Persist mode
    useEffect(() => {
        localStorage.setItem("mode", mode);
    }, [mode]);

    //  Sync multi-tab
    useEffect(() => {
        const sync = () => {
            const stored = localStorage.getItem("transactions");
            if (stored) {
                setTransactions(JSON.parse(stored));
            }

            const storedMode = localStorage.getItem("mode");
            if (storedMode) {
                setMode(storedMode as "admin" | "view");
            }
        };

        window.addEventListener("storage", sync);
        return () => window.removeEventListener("storage", sync);
    }, []);

    //  expose everything
    return { transactions, setTransactions, mode, setMode };
}