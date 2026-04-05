"use client";

import { useEffect, useMemo, useState } from "react";
import { dashboardData as mockData } from "@/mock/ssot";
import { computeDashboard } from "@/lib/analytics";
import { Transaction } from "@/types/transaction";

export function useDashboardData() {
    const [transactions, setTransactions] = useState<Transaction[]>(
        mockData.transactions as Transaction[]
    );

    const [mode, setMode] = useState<"admin" | "view">("view");

    useEffect(() => {
        const stored = localStorage.getItem("transactions");
        if (stored) setTransactions(JSON.parse(stored) as Transaction[]);

        const storedMode = localStorage.getItem("mode");
        if (storedMode) setMode(storedMode as any);
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }, [transactions]);

    useEffect(() => {
        localStorage.setItem("mode", mode);
    }, [mode]);

    useEffect(() => {
        const sync = () => {
            const stored = localStorage.getItem("transactions");
            if (stored) setTransactions(JSON.parse(stored) as Transaction[]);

            const storedMode = localStorage.getItem("mode");
            if (storedMode) setMode(storedMode as any);
        };

        window.addEventListener("storage", sync);
        return () => window.removeEventListener("storage", sync);
    }, []);

    // 🔥 CENTRAL ANALYTICS
    const analytics = useMemo(
        () => computeDashboard(transactions),
        [transactions]
    );

    return {
        transactions,
        setTransactions,
        mode,
        setMode,
        analytics,
    };
}