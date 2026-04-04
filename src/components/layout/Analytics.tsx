"use client";
import BalanceImg from "../../../public/balance.png";
import Income from "../../../public/income.png";
import Expense from "../../../public/expense.png";
import Savings from "../../../public/savings.png";
import { useDashboard } from "@/store/DashboardContext";
import { getStatColors } from "@/lib/charts";
import { formatCurrency } from "@/lib/format";
import ExportMenu from "../ui/ExportButton";
import Balance from "./dashboard/Balance";
import Spend from "./dashboard/Spend";
import Transaction from "./dashboard/Transaction";
import Insight from "./dashboard/Insight";

const icons = [BalanceImg, Income, Expense, Savings];

export default function Content({ children }: { children: React.ReactNode }) {
    const { transactions } = useDashboard();
    const safeTransactions = transactions ?? [];

    //  Spending
    const spending: { name: string; amount: number }[] = Object.values(
        transactions
            .filter((t: typeof transactions[number]) => t.type === "expense")
            .reduce((acc: Record<string, { name: string; amount: number }>, curr: typeof transactions[number]) => {
                if (!acc[curr.category]) {
                    acc[curr.category] = { name: curr.category, amount: 0 };
                }
                acc[curr.category].amount += curr.amount;
                return acc;
            }, {} as Record<string, { name: string; amount: number }>)
    );

    const totalExpense = spending.reduce((acc: number, item: { name: string; amount: number }) => acc + item.amount, 0);

    const topSpending: { name: string; amount: number } = spending.length
        ? spending.reduce((max: { name: string; amount: number }, item: { name: string; amount: number }) =>
            item.amount > max.amount ? item : max,
            spending[0]
        )
        : { name: "-", amount: 0 };

    const avgExpense = spending.length
        ? Math.round(totalExpense / spending.length)
        : 0;

    // Income / Expense
    const income = transactions
        .filter((t: typeof transactions[number]) => t.type === "income")
        .reduce((sum: number, t: typeof transactions[number]) => sum + t.amount, 0);

    const expense = transactions
        .filter((t: typeof transactions[number]) => t.type === "expense")
        .reduce((sum: number, t: typeof transactions[number]) => sum + t.amount, 0);

    // Month separation
    const currentMonth = "2026-03";
    const prevMonth = "2026-02";

    const currentTx = transactions.filter((t: typeof transactions[number]) => t.date.startsWith(currentMonth));
    const prevTx = transactions.filter((t: typeof transactions[number]) => t.date.startsWith(prevMonth));

    // Helpers
    const getTotals = (data: typeof transactions) => {
        const income = data.filter((t: typeof transactions[number]) => t.type === "income").reduce((s: number, t: typeof transactions[number]) => s + t.amount, 0);
        const expense = data.filter((t: typeof transactions[number]) => t.type === "expense").reduce((s: number, t: typeof transactions[number]) => s + t.amount, 0);
        return { income, expense, balance: income - expense };
    };

    const calcChange = (curr: number, prev: number) => {
        if (prev === 0) {
            return curr === 0 ? 0 : 100;
        }
        return ((curr - prev) / prev) * 100;
    };

    // Current & Previous
    const current = getTotals(currentTx);
    const previous = getTotals(prevTx);

    // Savings
    const currentSavings = current.income ? (current.balance / current.income) * 100 : 0;
    const prevSavings = previous.income ? (previous.balance / previous.income) * 100 : 0;

    // Stats
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
                    <Balance safeTransactions={safeTransactions} />
                    <Spend spending={spending} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
                    <Transaction />
                    <Insight
                        topSpending={topSpending}
                        income={income}
                        expense={expense}
                        avgExpense={avgExpense}
                    />
                </div>

                {children}
            </div>
        </main>
    );
}