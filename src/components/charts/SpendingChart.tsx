"use client";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { useDashboard } from "@/store/DashboardContext";
import { formatCurrency } from "@/lib/format";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SpendingChart() {
    // ✅ USE SSOT
    const { analytics } = useDashboard();
    const spending = analytics.spending;

    const total = spending.reduce((sum: number, s: { name: string; amount: number }) => sum + s.amount, 0);

    const chartData = {
        labels: spending.map((d: { name: string; amount: number }) => d.name),
        datasets: [
            {
                data: spending.map((d: { name: string; amount: number }) => d.amount),
                backgroundColor: [
                    "#6366f1",
                    "#22c55e",
                    "#f59e0b",
                    "#ef4444",
                    "#3b82f6",
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        const value = context.raw;
                        const percentage = ((value / total) * 100).toFixed(1);

                        return `${context.label}: ${formatCurrency(value)} (${percentage}%)`;
                    },
                },
            },
        },
        cutout: "65%",
    };

    return <Pie data={chartData} options={options} />;
}