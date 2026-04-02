export const formatCurrency = (value: number) => {
    if (value >= 1_000_000) {
        return `$${(value / 1_000_000).toFixed(1)}M`;
    }
    if (value >= 1_000) {
        return `$${(value / 1_000).toFixed(1)}K`;
    }
    return `$${value}`;
};

export const getValueColor = (title: string) => {
    switch (title) {
        case "Total Balance":
            return "text-[#23a997]";
        case "Total Income":
            return "text-[#20ac6b]";
        case "Total Expense":
            return "text-[#dc2828]";
        case "Savings":
        case "Savings Rate":
            return "text-[#23a997]";
        default:
            return "text-gray-900 dark:text-white";
    }
};