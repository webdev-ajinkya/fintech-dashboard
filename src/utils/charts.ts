export const formatCurrency = (value: number) => {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
    return `$${value}`;
};

export const getStatColors = (
    type: string,
    change: number,
    income: number,
    expense: number
) => {
    const isBadState = income < expense;

    // 🔴 Global bad state
    if (isBadState) {
        return {
            text: "text-red-500",
            badge: "bg-red-100 text-red-600",
        };
    }

    let isGood = true;

    switch (type) {
        case "income":
        case "balance":
        case "savings":
            isGood = true;
            break;

        case "expense":
            isGood = change < 0;
            break;
    }

    return {
        text: isGood ? "text-green-500" : "text-red-500",
        badge: isGood
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600",
    };
};