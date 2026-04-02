"use client";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SpendingChart({ data }: { data: any[] }) {
    const chartData = {
        labels: data.map((d) => d.name),
        datasets: [
            {
                data: data.map((d) => d.amount),
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
        },
        cutout: "65%", // makes it donut style
    };

    return <Pie data={chartData} options={options} />;
}