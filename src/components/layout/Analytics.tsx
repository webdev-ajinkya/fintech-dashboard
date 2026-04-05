"use client";

import BalanceImg from "../../../public/balance.png";
import Income from "../../../public/income.png";
import Expense from "../../../public/expense.png";

import { useDashboard } from "@/store/DashboardContext";
import { getStatColors } from "@/lib/charts";
import { formatCurrency } from "@/lib/format";

import ExportMenu from "../ui/ExportButton";
import Balance from "./dashboard/Balance";
import Spend from "./dashboard/Spend";
import Transaction from "./dashboard/Transaction";
import Insight from "./dashboard/Insight";

const icons = [BalanceImg, Income, Expense];

export default function Analytics({ children }: { children: React.ReactNode }) {
    const { transactions, analytics } = useDashboard();

    const {
        spending,
        topSpending,
        avgExpense,
        monthly,
        trends,
    } = analytics;

    const safeTransactions = transactions ?? [];

    const current = monthly[monthly.length - 1] || {
        income: 0,
        expense: 0,
        balance: 0,
    };

    const stats = [
        {
            title: "balance",
            label: "Total Balance",
            value: current.balance,
            change: trends.balanceChange,
        },
        {
            title: "income",
            label: "Income",
            value: current.income,
            change: trends.incomeChange,
        },
        {
            title: "expense",
            label: "Expense",
            value: current.expense,
            change: trends.expenseChange,
        },
    ];

    return (
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto bg-gray-100 dark:bg-gray-950 transition">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Dashboard Overview
                </h2>

                <ExportMenu data={transactions} />
            </div>

            <div className="max-w-8xl mx-auto space-y-6">

                {/* STAT CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {stats.map((item, i) => {
                        const colors = getStatColors(
                            item.title,
                            item.change,
                            current.income,
                            current.expense
                        );

                        return (
                            <div
                                key={i}
                                className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow"
                            >
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-500">{item.label}</p>
                                    <img
                                        src={icons[i]?.src}
                                        className="w-6 h-6 opacity-70"
                                    />
                                </div>

                                <h3
                                    className={`text-2xl mt-3 font-semibold ${colors.text}`}
                                >
                                    {formatCurrency(item.value)}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                {/* CHARTS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <Balance safeTransactions={safeTransactions} />
                    <Spend spending={spending} />
                </div>

                {/* TRANSACTIONS + INSIGHTS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
                    <Transaction />

                    <Insight
                        topSpending={topSpending || { name: "-", amount: 0 }}
                        avgExpense={avgExpense}
                        trends={trends}
                    />
                </div>

                {children}
            </div>
        </main>
    );
}