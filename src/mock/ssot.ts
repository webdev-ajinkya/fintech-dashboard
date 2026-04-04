export const dashboardData = {
    currency: "USD",

    transactions: [
        // 🔵 PREVIOUS MONTH (FEB)
        { id: 2875123491823, date: "2026-02-03", description: "Salary", category: "Salary", amount: 2000, type: "income" },
        { id: 2875189234567, date: "2026-02-08", description: "Freelance Project", category: "Salary", amount: 400, type: "income" },

        { id: 2875234567891, date: "2026-02-10", description: "Groceries", category: "Food", amount: 650, type: "expense" },
        { id: 2875289123456, date: "2026-02-14", description: "Clothes Shopping", category: "Shopping", amount: 900, type: "expense" },
        { id: 2875345678123, date: "2026-02-17", description: "Weekend Trip", category: "Travel", amount: 750, type: "expense" },
        { id: 2875398123456, date: "2026-02-21", description: "Internet Bill", category: "Bills", amount: 200, type: "expense" },
        { id: 2875456789123, date: "2026-02-25", description: "Dining", category: "Food", amount: 300, type: "expense" },

        // 🟢 CURRENT MONTH (MAR)
        { id: 2876012345678, date: "2026-03-04", description: "Salary", category: "Salary", amount: 2600, type: "income" },
        { id: 2876123456789, date: "2026-03-10", description: "Freelance App", category: "Salary", amount: 900, type: "income" },

        { id: 2876056789123, date: "2026-03-06", description: "Groceries", category: "Food", amount: 450, type: "expense" },
        { id: 2876189234561, date: "2026-03-11", description: "Amazon Order", category: "Shopping", amount: 500, type: "expense" },
        { id: 2876234567890, date: "2026-03-16", description: "Cab & Travel", category: "Travel", amount: 300, type: "expense" },
        { id: 2876289123457, date: "2026-03-20", description: "Electric Bill", category: "Bills", amount: 280, type: "expense" },
        { id: 2876345678124, date: "2026-03-24", description: "Restaurant", category: "Food", amount: 350, type: "expense" },
        { id: 2876401234567, date: "2026-03-27", description: "Gym Membership", category: "Bills", amount: 150, type: "expense" },
    ],

    categories: [
        { name: "Food", color: "#6366f1" },
        { name: "Travel", color: "#22c55e" },
        { name: "Shopping", color: "#f59e0b" },
        { name: "Bills", color: "#ef4444" },
        { name: "Salary", color: "#3b82f6" },
    ],
};

// export const dashboardData = {
//     currency: "USD",
//     transactions: [],
//     categories: [],
// };