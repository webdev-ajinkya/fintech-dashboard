"use client";

import { useEffect, useState } from "react";
import { dashboardData as mockData } from "@/mock/ssot";

export function useDashboardData() {
    const [transactions, setTransactions] = useState(mockData.transactions);

    // ✅ Load once
    useEffect(() => {
        const stored = localStorage.getItem("transactions");
        if (stored) {
            setTransactions(JSON.parse(stored));
        }
    }, []);

    // ✅ Persist changes
    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    // ✅ Sync (multi-tab + instant UI refresh)
    useEffect(() => {
        const sync = () => {
            const stored = localStorage.getItem("transactions");
            if (stored) {
                setTransactions(JSON.parse(stored));
            }
        };

        window.addEventListener("storage", sync);
        return () => window.removeEventListener("storage", sync);
    }, []);

    return { transactions, setTransactions };
}