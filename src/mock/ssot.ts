export const dashboardData = {
    currency: "USD",

    transactions: [
        // 🟢 JAN (baseline)
        { id: 1, date: "2026-01-03", description: "Salary", category: "Salary", amount: 8.0, type: "income" },
        { id: 2, date: "2026-01-10", description: "Freelance", category: "Salary", amount: 2.0, type: "income" },
        { id: 3, date: "2026-01-12", description: "Groceries", category: "Food", amount: 5.0, type: "expense" },
        { id: 4, date: "2026-01-18", description: "Bills", category: "Bills", amount: 3.0, type: "expense" },

        // 🟢 FEB (income ↑ expense ↓)
        { id: 5, date: "2026-02-03", description: "Salary", category: "Salary", amount: 8.5, type: "income" },
        { id: 6, date: "2026-02-10", description: "Freelance", category: "Salary", amount: 2.5, type: "income" },
        { id: 7, date: "2026-02-12", description: "Groceries", category: "Food", amount: 4.5, type: "expense" },
        { id: 8, date: "2026-02-18", description: "Bills", category: "Bills", amount: 2.8, type: "expense" },

        // 🟢 MAR
        { id: 9, date: "2026-03-03", description: "Salary", category: "Salary", amount: 9.0, type: "income" },
        { id: 10, date: "2026-03-10", description: "Freelance", category: "Salary", amount: 3.0, type: "income" },
        { id: 11, date: "2026-03-12", description: "Groceries", category: "Food", amount: 4.2, type: "expense" },
        { id: 12, date: "2026-03-18", description: "Bills", category: "Bills", amount: 2.5, type: "expense" },

        // 🟢 APR
        { id: 13, date: "2026-04-03", description: "Salary", category: "Salary", amount: 9.5, type: "income" },
        { id: 14, date: "2026-04-10", description: "Freelance", category: "Salary", amount: 3.5, type: "income" },
        { id: 15, date: "2026-04-12", description: "Groceries", category: "Food", amount: 4.0, type: "expense" },
        { id: 16, date: "2026-04-18", description: "Bills", category: "Bills", amount: 2.3, type: "expense" },

        // 🟢 MAY
        { id: 17, date: "2026-05-03", description: "Salary", category: "Salary", amount: 10.0, type: "income" },
        { id: 18, date: "2026-05-10", description: "Freelance", category: "Salary", amount: 4.0, type: "income" },
        { id: 19, date: "2026-05-12", description: "Groceries", category: "Food", amount: 3.8, type: "expense" },
        { id: 20, date: "2026-05-18", description: "Bills", category: "Bills", amount: 2.0, type: "expense" },

        // 🟢 JUN (best month)
        { id: 21, date: "2026-06-03", description: "Salary", category: "Salary", amount: 10.5, type: "income" },
        { id: 22, date: "2026-06-10", description: "Freelance", category: "Salary", amount: 4.5, type: "income" },
        { id: 23, date: "2026-06-12", description: "Groceries", category: "Food", amount: 3.5, type: "expense" },
        { id: 24, date: "2026-06-18", description: "Bills", category: "Bills", amount: 1.8, type: "expense" },
    ],

    categories: [
        { name: "Food", color: "#6366f1" },
        { name: "Travel", color: "#22c55e" },
        { name: "Shopping", color: "#f59e0b" },
        { name: "Bills", color: "#ef4444" },
        { name: "Salary", color: "#3b82f6" },
    ],
};