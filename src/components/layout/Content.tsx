"use client";
import ExportMenu from "../controls/ExportButton";
import BalanceChart from "../charts/BalenceChart";
import Balance from "../../../public/balance.png";
import Income from "../../../public/income.png";
import Expense from "../../../public/expense.png";
import Savings from "../../../public/savings.png";
import { formatCurrency, getStatColors } from "@/utils/charts";
import SpendingChart from "../charts/SpendingChart";
import TransactionTable from "../charts/TransactionTable";
import { useDashboardData } from "@/hooks/useDashboardData";

const icons = [Balance, Income, Expense, Savings];

export default function Content({ children }: { children: React.ReactNode }) {
    const { transactions } = useDashboardData();

    // ✅ Spending
    const spending = Object.values(
        transactions
            .filter(t => t.type === "expense")
            .reduce((acc, curr) => {
                if (!acc[curr.category]) {
                    acc[curr.category] = { name: curr.category, amount: 0 };
                }
                acc[curr.category].amount += curr.amount;
                return acc;
            }, {} as Record<string, { name: string; amount: number }>)
    );

    const totalExpense = spending.reduce((acc, item) => acc + item.amount, 0);

    const topSpending = spending.length
        ? spending.reduce((max, item) =>
            item.amount > max.amount ? item : max,
            spending[0]
        )
        : { name: "-", amount: 0 };

    const avgExpense = spending.length
        ? Math.round(totalExpense / spending.length)
        : 0;

    // ✅ Income / Expense
    const income = transactions
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    // ✅ Month separation
    const currentMonth = "2026-03";
    const prevMonth = "2026-02";

    const currentTx = transactions.filter(t => t.date.startsWith(currentMonth));
    const prevTx = transactions.filter(t => t.date.startsWith(prevMonth));

    // ✅ Helpers
    const getTotals = (data: typeof transactions) => {
        const income = data.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
        const expense = data.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);
        return { income, expense, balance: income - expense };
    };

    const calcChange = (curr: number, prev: number) => {
        if (prev === 0) return 0;
        return ((curr - prev) / prev) * 100;
    };

    // ✅ Current & Previous
    const current = getTotals(currentTx);
    const previous = getTotals(prevTx);

    // ✅ Savings
    const currentSavings = current.income ? (current.balance / current.income) * 100 : 0;
    const prevSavings = previous.income ? (previous.balance / previous.income) * 100 : 0;

    // ✅ Stats
    const stats = [
        {
            title: "balance",
            label: "Balance",
            value: current.balance,
            change: calcChange(current.balance, previous.balance),
        },
        {
            title: "income",
            label: "Income",
            value: current.income,
            change: calcChange(current.income, previous.income),
        },
        {
            title: "expense",
            label: "Expense",
            value: current.expense,
            change: calcChange(current.expense, previous.expense),
        },
        {
            title: "savings",
            label: "Savings",
            value: Number(currentSavings.toFixed(1)),
            change: calcChange(currentSavings, prevSavings),
        },
    ];

    return (
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto bg-gray-100 dark:bg-gray-950 transition">

            <div className="max-w-7xl mx-auto flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Dashboard Overview
                </h2>

                {/* ✅ now real data */}
                <ExportMenu data={transactions} />
            </div>

            <div className="max-w-7xl mx-auto space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {stats.map((item, i) => {
                        const colors = getStatColors(
                            item.title,
                            item.change,
                            current.income,
                            current.expense
                        );

                        return (
                            <div key={i} className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow">

                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-500">{item.label}</p>
                                    <img src={icons[i]?.src} className="w-6 h-6 opacity-70" />
                                </div>

                                <h3 className={`text-2xl mt-3 font-semibold ${colors.text}`}>
                                    {item.title === "savings"
                                        ? `${item.value}%`
                                        : formatCurrency(item.value)}
                                </h3>

                                <span className={`text-xs px-2 py-1 rounded ${colors.badge}`}>
                                    {item.change > 0 ? "+" : ""}
                                    {item.change.toFixed(1)}%
                                </span>
                            </div>
                        );
                    })}

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="lg:col-span-2 min-h-[300px] h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col">
                        <BalanceChart />
                    </div>

                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-4">

                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Spending Breakdown
                        </h3>

                        <div className="h-52 flex items-center justify-center">
                            <div className="w-44 h-44">
                                <SpendingChart />
                            </div>
                        </div>

                        <div className="space-y-2">
                            {spending.map((item, i) => {
                                const colors = [
                                    "#6366f1",
                                    "#22c55e",
                                    "#f59e0b",
                                    "#ef4444",
                                    "#3b82f6",
                                ];

                                return (
                                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[i] }} />
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
                    <TransactionTable />

                    <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-3">
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            Insights
                        </h3>

                        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                            <div>
                                <p className="text-xs text-gray-500">Top Spending</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {topSpending.name}
                                </p>
                            </div>
                            <p className="text-sm font-semibold text-red-500">
                                ${topSpending.amount}
                            </p>
                        </div>

                        {/* Income Trend */}
                        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                            <div>
                                <p className="text-xs text-gray-500">Income Trend</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Growth
                                </p>
                            </div>
                            <p className="text-sm font-semibold text-green-500">
                                ${income}
                            </p>
                        </div>

                        {/* Expense Trend */}
                        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                            <div>
                                <p className="text-xs text-gray-500">Expense Trend</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Reduction
                                </p>
                            </div>
                            <p className="text-sm font-semibold text-red-500">
                                ${expense}
                            </p>
                        </div>

                        {/* Avg Expense */}
                        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                            <div>
                                <p className="text-xs text-gray-500">Avg Expense</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Per Category
                                </p>
                            </div>
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