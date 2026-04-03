"use client";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo, useState } from "react";
import { groupByMonth } from "@/utils/dataHelpers";
import { useDashboard } from "@/provider/DashboardContext";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Filler
);

const formatCurrency = (value: number) => {
    if (value >= 1_000_000) return `$${Math.round(value / 1_000_000)}M`;
    if (value >= 1_000) return `$${Math.round(value / 1_000)}K`;
    return `$${value}`;
};

export default function BalanceChart() {
    const [filter, setFilter] = useState<"all" | "income" | "expense">("all");

    const { transactions } = useDashboard();
    const monthly = useMemo(() => groupByMonth(transactions), [transactions]);
    const data = {
        labels: monthly.map((m) => m.month),
        datasets: [
            {
                label: "Income",
                data: monthly.map((m) => m.income),
                borderColor: "#20ac6b",
                backgroundColor: "rgba(32,172,107,0.1)",
                tension: 0.4,
                pointRadius: 3,
                fill: true,
                hidden: filter === "expense",
            },
            {
                label: "Expense",
                data: monthly.map((m) => m.expense),
                borderColor: "#dc2828",
                backgroundColor: "rgba(220,40,40,0.08)",
                tension: 0.4,
                pointRadius: 2,
                fill: true,
                hidden: filter === "income",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: "#111",
                padding: 10,
                cornerRadius: 6,
                callbacks: {
                    label: function (context: any) {
                        return `${context.dataset.label}: ${formatCurrency(
                            context.raw
                        )}`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 2000,
                    callback: function (value: any) {
                        return formatCurrency(Number(value));
                    },
                },
                grid: {
                    color: "rgba(0,0,0,0.05)",
                },
            },
        },
    };

    return (
        <div className="flex flex-col h-full w-full">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium dark:text-gray-300">
                    Balance Trend
                </h3>

                {/* FILTER BUTTONS */}
                <div className="flex gap-2">
                    {[
                        { key: "all", label: "All" },
                        { key: "income", label: "Income" },
                        { key: "expense", label: "Expense" },
                    ].map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setFilter(item.key as any)}
                            className={`text-xs px-3 py-1 rounded-md border transition
                ${filter === item.key
                                    ? "bg-[#23a997] text-white border-[#23a997]"
                                    : "text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* CHART */}
            <div className="relative flex-1 w-full">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}