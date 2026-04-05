import { Transaction } from "@/types/transaction";

export function computeDashboard(transactions: Transaction[]) {
  let totalIncome = 0;
  let totalExpense = 0;

  const categoryMap: Record<string, number> = {};
  const monthlyMap: Record<string, { income: number; expense: number }> = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);

    if (!monthlyMap[month]) {
      monthlyMap[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") {
      totalIncome += t.amount;
      monthlyMap[month].income += t.amount;
    } else {
      totalExpense += t.amount;
      monthlyMap[month].expense += t.amount;

      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const balance = totalIncome - totalExpense;

  const spending = Object.entries(categoryMap).map(
    ([name, amount]) => ({
      name,
      amount,
    })
  );

  const topSpending = spending.length
    ? spending.reduce((max, item) =>
      item.amount > max.amount ? item : max
    )
    : null;

  const expenseTxCount = transactions.filter(
    (t) => t.type === "expense"
  ).length;

  const avgExpense = expenseTxCount
    ? totalExpense / expenseTxCount
    : 0;

  const monthly = Object.entries(monthlyMap)
    .map(([month, val]) => ({
      month,
      ...val,
      balance: val.income - val.expense,
    }))
    .sort((a, b) => a.month.localeCompare(b.month));

  const current = monthly[monthly.length - 1];
  const previous = monthly[monthly.length - 2];

  const calcChange = (curr = 0, prev = 0) => {
    if (!prev) return curr ? 100 : 0;
    return ((curr - prev) / prev) * 100;
  };

  const trends = {
    incomeChange: calcChange(current?.income, previous?.income),
    expenseChange: calcChange(current?.expense, previous?.expense),
    balanceChange: calcChange(current?.balance, previous?.balance),
  };

  const insights: string[] = [];

  if (topSpending) {
    insights.push(
      `Top spending: ${topSpending.name} (${topSpending.amount})`
    );
  }

  if (totalExpense > totalIncome) {
    insights.push("⚠️ Expenses exceed income");
  }

  if (trends.expenseChange > 20) {
    insights.push("Expenses increased significantly this month");
  }

  if (avgExpense > 500) {
    insights.push("High average spending detected");
  }

  return {
    totalIncome,
    totalExpense,
    balance,
    spending,
    topSpending,
    avgExpense,
    monthly,
    trends,
    insights,
  };
}