import { dashboardData } from "./ssot";

const transactions = dashboardData.transactions;

export const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

export const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

export const totalBalance = totalIncome - totalExpense;

export const savingsRate = Number(
    ((totalBalance / totalIncome) * 100).toFixed(1)
);

export const spending = Object.values(
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

export const topSpending = spending.reduce((max, item) =>
    item.amount > max.amount ? item : max,
    spending[0]
);

export const avgExpense = Math.round(
    totalExpense / spending.length
);