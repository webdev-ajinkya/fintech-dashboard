"use client";

import { stats } from "@/mock/stats";
import ExportMenu from "../controls/ExportButton";
import BalanceChart from "../charts/BalenceChart";
import Balance from "../../../public/balance.png";
import Income from "../../../public/income.png";
import Expense from "../../../public/expense.png";
import Savings from "../../../public/savings.png";
import { getStatColors } from "@/utils/charts";
import SpendingChart from "../charts/SpendingChart";
import { spendingData } from "@/mock/spend";
import TableInsights from "../charts/TableInsights";

const icons = [Balance, Income, Expense, Savings];

const dummyData = [
    { name: "Food", amount: 200 },
    { name: "Travel", amount: 500 },
    { name: "Shopping", amount: 800 },
];

const totalExpense = spendingData.reduce((acc, item) => acc + item.amount, 0);

const topSpending = spendingData.reduce((max, item) =>
    item.amount > max.amount ? item : max,
    spendingData[0]
);

const avgExpense = Math.round(totalExpense / spendingData.length);

// Mock trends (replace later with real data)
const incomeTrend = "+12%";
const expenseTrend = "-5%";

export default function Content({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto bg-gray-100 dark:bg-gray-950 transition">

            <div className="max-w-7xl mx-auto flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Dashboard Overview
                </h2>

                <ExportMenu data={dummyData} />
            </div>

            <div className="max-w-7xl mx-auto space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="relative p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md transition flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {item.title}
                                </p>

                                <img
                                    src={icons[i]?.src}
                                    alt="icon"
                                    className="w-6 h-6 object-contain opacity-70"
                                />
                            </div>

                            <div className="mt-3">
                                <h3 className={`text-2xl font-semibold tracking-tight ${getStatColors(item.title).text}`}>
                                    {item.value}
                                </h3>

                                {item.note && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {item.note}
                                    </p>
                                )}
                            </div>
                            <span
                                className={`absolute bottom-2 right-2 z-10 text-xs px-2 py-0.5 rounded-md font-medium ${getStatColors(item.title).badge
                                    }`}
                            >
                                {item.change}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="lg:col-span-2 min-h-[300px] h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col">
                        <BalanceChart />
                    </div>


                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-4">

                        {/* Title */}
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Spending Breakdown
                        </h3>

                        {/* Chart */}
                        <div className="h-52 flex items-center justify-center">
                            <div className="w-44 h-44">
                                <SpendingChart data={spendingData} />
                            </div>
                        </div>

                        {/* Detailed tiles */}
                        <div className="space-y-2">
                            {spendingData.map((item, i) => {
                                const colors = [
                                    "#6366f1",
                                    "#22c55e",
                                    "#f59e0b",
                                    "#ef4444",
                                    "#3b82f6",
                                ];

                                return (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: colors[i] }}
                                            />
                                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                                {item.name}
                                            </span>
                                        </div>

                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                            ${item.amount}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">


                    <TableInsights />

                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-4">

                        {/* Title */}
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Insights
                        </h3>

                        {/* Top Spending */}
                        <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <p className="text-xs text-gray-500">Top Spending</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                {topSpending.name}
                            </p>
                            <p className="text-xs text-gray-500">
                                ${topSpending.amount}
                            </p>
                        </div>

                        {/* Trends */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                                <p className="text-xs text-gray-500">Income Trend</p>
                                <p className="text-sm font-semibold text-green-500">
                                    {incomeTrend}
                                </p>
                            </div>

                            <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                                <p className="text-xs text-gray-500">Expense Trend</p>
                                <p className="text-sm font-semibold text-red-500">
                                    {expenseTrend}
                                </p>
                            </div>
                        </div>

                        {/* Average Expense */}
                        <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <p className="text-xs text-gray-500">Avg Expense</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                ${avgExpense}
                            </p>
                        </div>

                    </div>
                </div>

                {children}
            </div>
        </main>
    );
}
