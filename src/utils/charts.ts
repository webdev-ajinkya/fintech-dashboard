export const formatCurrency = (value: number) => {
    if (value >= 1_000_000) {
        return `$${(value / 1_000_000).toFixed(1)}M`;
    }
    if (value >= 1_000) {
        return `$${(value / 1_000).toFixed(1)}K`;
    }
    return `$${value}`;
};

export const getStatColors = (title: string) => {
    switch (title) {
        case "Total Balance":
            return {
                text: "text-[#23a997]",
                badge: "bg-green-50 text-[#23a997] dark:bg-green-900/20 dark:text-[#23a997]",
            };

        case "Total Income":
            return {
                text: "text-[#20ac6b]",
                badge: "bg-green-50 text-[#20ac6b] dark:bg-green-900/20 dark:text-[#20ac6b]",
            };

        case "Total Expense":
            return {
                text: "text-[#dc2828]",
                badge: "bg-red-50 text-[#dc2828] dark:bg-red-900/20 dark:text-[#dc2828]",
            };

        case "Savings":
        case "Savings Rate":
            return {
                text: "text-[#23a997]",
                badge: "bg-green-50 text-[#23a997] dark:bg-green-900/20 dark:text-[#23a997]",
            };

        default:
            return {
                text: "text-gray-900 dark:text-white",
                badge: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
            };
    }
};