"use client";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const datasetMap = {
    income: [3000, 4000, 3500, 5000, 6000, 8540],
    expense: [1000, 1000, 1000, 1000, 1000, 1397],
};

const formatCurrency = (value: number) => {
    if (value >= 1_000_000) {
        return `$${(value / 1_000_000).toFixed(1).replace(".0", "")}M`;
    }
    if (value >= 1_000) {
        return `$${(value / 1_000).toFixed(1).replace(".0", "")}K`;
    }
    return `$${value}`;
};

export default function BalanceChart() {
    const [filter, setFilter] = useState<"all" | "income" | "expense">("all");

    const data = {
        labels,
        datasets: [
            {
                label: "Income",
                data: datasetMap.income,
                borderColor: "#16a34a",
                backgroundColor: "rgba(22,163,74,0.1)",
                tension: 0.4,
                pointRadius: 3,
                hidden: filter === "expense",
            },
            {
                label: "Expense",
                data: datasetMap.expense,
                borderColor: "#dc2626",
                backgroundColor: "transparent",
                tension: 0,
                pointRadius: 2,
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
                position: "top" as const,
            },
            tooltip: {
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
                min: 0,
                max: 10000,
                ticks: {
                    stepSize: 3000,
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
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Balance Overview
                </h3>

                <div className="flex gap-2">
                    {[
                        { key: "all", label: "All" },
                        { key: "income", label: "Income" },
                        { key: "expense", label: "Expense" },
                    ].map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setFilter(item.key as any)}
                            className={`text-xs px-3 py-1 rounded-md border transition ${filter === item.key
                                ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                                : "text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 w-full">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}