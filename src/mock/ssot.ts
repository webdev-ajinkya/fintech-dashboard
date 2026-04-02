export const dashboardData = {
    currency: "USD",

    transactions: [
        // 🔵 PREVIOUS MONTH (FEB)
        { id: 1, date: "2026-02-05", description: "Salary", category: "Salary", amount: 1800, type: "income" },
        { id: 2, date: "2026-02-10", description: "Freelance", category: "Salary", amount: 600, type: "income" },
        { id: 3, date: "2026-02-12", description: "Groceries", category: "Food", amount: 500, type: "expense" },
        { id: 4, date: "2026-02-15", description: "Shopping", category: "Shopping", amount: 700, type: "expense" },
        { id: 5, date: "2026-02-18", description: "Travel", category: "Travel", amount: 600, type: "expense" },
        { id: 6, date: "2026-02-20", description: "Bills", category: "Bills", amount: 350, type: "expense" },

        // 🟢 CURRENT MONTH (MAR) → POSITIVE STATE
        { id: 7, date: "2026-03-05", description: "Salary", category: "Salary", amount: 2500, type: "income" },
        { id: 8, date: "2026-03-15", description: "Freelance", category: "Salary", amount: 1200, type: "income" },

        { id: 9, date: "2026-03-05", description: "Groceries", category: "Food", amount: 400, type: "expense" },
        { id: 10, date: "2026-03-12", description: "Online Shopping", category: "Shopping", amount: 600, type: "expense" },
        { id: 11, date: "2026-03-18", description: "Trip", category: "Travel", amount: 500, type: "expense" },
        { id: 12, date: "2026-03-22", description: "Electricity Bill", category: "Bills", amount: 300, type: "expense" },
        { id: 13, date: "2026-03-25", description: "Dining Out", category: "Food", amount: 250, type: "expense" },
    ],

    categories: [
        { name: "Food", color: "#6366f1" },
        { name: "Travel", color: "#22c55e" },
        { name: "Shopping", color: "#f59e0b" },
        { name: "Bills", color: "#ef4444" },
        { name: "Salary", color: "#3b82f6" },
    ],
};
// Expense More Dashboard Mock Data
// export const dashboardData = {
//     currency: "USD",

//     transactions: [
//         // 🔵 PREVIOUS MONTH (FEB)
//         { id: 1, date: "2026-02-05", description: "Salary", category: "Salary", amount: 1800, type: "income" },
//         { id: 2, date: "2026-02-10", description: "Freelance", category: "Salary", amount: 600, type: "income" },
//         { id: 3, date: "2026-02-12", description: "Groceries", category: "Food", amount: 500, type: "expense" },
//         { id: 4, date: "2026-02-15", description: "Shopping", category: "Shopping", amount: 700, type: "expense" },
//         { id: 5, date: "2026-02-18", description: "Travel", category: "Travel", amount: 600, type: "expense" },
//         { id: 6, date: "2026-02-20", description: "Bills", category: "Bills", amount: 350, type: "expense" },

//         // 🟢 CURRENT MONTH (MAR)
//         { id: 7, date: "2026-03-05", description: "Salary", category: "Salary", amount: 2000, type: "income" },
//         { id: 8, date: "2026-03-15", description: "Freelance", category: "Salary", amount: 800, type: "income" },
//         { id: 9, date: "2026-03-05", description: "Groceries", category: "Food", amount: 600, type: "expense" },
//         { id: 10, date: "2026-03-12", description: "Online Shopping", category: "Shopping", amount: 1200, type: "expense" },
//         { id: 11, date: "2026-03-18", description: "Trip", category: "Travel", amount: 900, type: "expense" },
//         { id: 12, date: "2026-03-22", description: "Electricity Bill", category: "Bills", amount: 400, type: "expense" },
//         { id: 13, date: "2026-03-25", description: "Dining Out", category: "Food", amount: 350, type: "expense" },
//     ],

//     categories: [
//         { name: "Food", color: "#6366f1" },
//         { name: "Travel", color: "#22c55e" },
//         { name: "Shopping", color: "#f59e0b" },
//         { name: "Bills", color: "#ef4444" },
//         { name: "Salary", color: "#3b82f6" },
//     ],
// };