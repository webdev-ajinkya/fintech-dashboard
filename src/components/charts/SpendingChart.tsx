"use client";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

import { groupByCategory } from "@/lib/dataHelpers";
import { useDashboard } from "@/store/DashboardContext";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SpendingChart() {
    const { transactions } = useDashboard();
    const spending = groupByCategory(transactions);
    const chartData = {
        labels: spending.map((d) => d.name),
        datasets: [
            {
                data: spending.map((d) => d.amount),
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
                        const data = context.dataset.data;
                        const total = data.reduce((sum: number, val: number) => sum + val, 0);

                        const value = context.raw;
                        const percentage = ((value / total) * 100).toFixed(1);

                        return `${context.label}: ${percentage}%`;
                    },
                },
            },
        },
        cutout: "65%",
    };

    return <Pie data={chartData} options={options} />;
}