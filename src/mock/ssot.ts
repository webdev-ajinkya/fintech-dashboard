export const dashboardData = {
    currency: "USD",

    transactions: [
        // 🔵 JAN (baseline)
        { id: 1, date: "2026-01-03", description: "Salary", category: "Salary", amount: 8.5, type: "income" },
        { id: 2, date: "2026-01-08", description: "Freelance", category: "Salary", amount: 2.5, type: "income" },
        { id: 3, date: "2026-01-10", description: "Groceries", category: "Food", amount: 4.2, type: "expense" },
        { id: 4, date: "2026-01-15", description: "Electric Bill", category: "Bills", amount: 2.8, type: "expense" },
        { id: 5, date: "2026-01-20", description: "Dining", category: "Food", amount: 3.5, type: "expense" },

        // 🔵 FEB (higher expense)
        { id: 6, date: "2026-02-03", description: "Salary", category: "Salary", amount: 9.0, type: "income" },
        { id: 7, date: "2026-02-08", description: "Freelance Project", category: "Salary", amount: 3.2, type: "income" },
        { id: 8, date: "2026-02-10", description: "Groceries", category: "Food", amount: 5.5, type: "expense" },
        { id: 9, date: "2026-02-14", description: "Shopping", category: "Shopping", amount: 7.8, type: "expense" },
        { id: 10, date: "2026-02-21", description: "Internet Bill", category: "Bills", amount: 3.0, type: "expense" },

        // 🟢 MAR (best growth)
        { id: 11, date: "2026-03-04", description: "Salary", category: "Salary", amount: 9.5, type: "income" },
        { id: 12, date: "2026-03-10", description: "Freelance App", category: "Salary", amount: 4.0, type: "income" },
        { id: 13, date: "2026-03-06", description: "Groceries", category: "Food", amount: 3.8, type: "expense" },
        { id: 14, date: "2026-03-11", description: "Amazon Order", category: "Shopping", amount: 5.0, type: "expense" },
        { id: 15, date: "2026-03-16", description: "Travel", category: "Travel", amount: 2.5, type: "expense" },
        { id: 16, date: "2026-03-20", description: "Electric Bill", category: "Bills", amount: 3.2, type: "expense" },

        // 🟡 APR (bad month - high expense)
        { id: 17, date: "2026-04-03", description: "Salary", category: "Salary", amount: 8.8, type: "income" },
        { id: 18, date: "2026-04-09", description: "Freelance", category: "Salary", amount: 3.0, type: "income" },
        { id: 19, date: "2026-04-07", description: "Groceries", category: "Food", amount: 6.2, type: "expense" },
        { id: 20, date: "2026-04-14", description: "Trip", category: "Travel", amount: 9.0, type: "expense" },
        { id: 21, date: "2026-04-22", description: "Dining", category: "Food", amount: 4.5, type: "expense" },

        // 🟠 MAY (recovery)
        { id: 22, date: "2026-05-03", description: "Salary", category: "Salary", amount: 9.2, type: "income" },
        { id: 23, date: "2026-05-11", description: "Freelance UI", category: "Salary", amount: 3.8, type: "income" },
        { id: 24, date: "2026-05-05", description: "Groceries", category: "Food", amount: 4.0, type: "expense" },
        { id: 25, date: "2026-05-12", description: "Shopping", category: "Shopping", amount: 6.0, type: "expense" },
        { id: 26, date: "2026-05-18", description: "Gym", category: "Bills", amount: 3.5, type: "expense" },

        // 🔴 JUN (best month)
        { id: 27, date: "2026-12-03", description: "Salary", category: "Salary", amount: 9.8, type: "income" },
        { id: 28, date: "2026-12-08", description: "Freelance Project", category: "Salary", amount: 4.5, type: "income" },
        { id: 29, date: "2026-12-12", description: "Groceries", category: "Food", amount: 4.2, type: "expense" },
        { id: 30, date: "2026-12-10", description: "Vacation", category: "Travel", amount: 9.5, type: "expense" },
        { id: 31, date: "2026-12-21", description: "Electric Bill", category: "Bills", amount: 3.8, type: "expense" },
    ],

    categories: [
        { name: "Food", color: "#6366f1" },
        { name: "Travel", color: "#22c55e" },
        { name: "Shopping", color: "#f59e0b" },
        { name: "Bills", color: "#ef4444" },
        { name: "Salary", color: "#3b82f6" },
    ],
};
