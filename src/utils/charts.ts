export const formatCurrency = (value: number) => {
    if (value >= 1_000_000) {
        return `$${(value / 1_000_000).toFixed(1)}M`;
    }
    if (value >= 1_000) {
        return `$${(value / 1_000).toFixed(1)}K`;
    }
    return `$${value}`;
};

export const getStatColors = (change: string) => {
    // Normalize string (handles spaces + weird minus signs)
    const cleaned = change
        .replace(/\s/g, "")     // remove spaces
        .replace("−", "-")      // normalize unicode minus
        .replace("%", "");      // remove %

    const value = Number(cleaned);

    // Negative (red)
    if (value < 0) {
        return {
            text: "text-[#dc2828]",
            badge: "bg-red-50 text-[#dc2828] dark:bg-red-900/20 dark:text-[#dc2828]",
        };
    }

    // Positive (green)
    if (value > 0) {
        return {
            text: "text-[#20ac6b]",
            badge: "bg-green-50 text-[#20ac6b] dark:bg-green-900/20 dark:text-[#20ac6b]",
        };
    }

    // Neutral (0)
    return {
        text: "text-[#23a997]",
        badge: "bg-green-50 text-[#23a997] dark:bg-green-900/20 dark:text-[#23a997]",
    };
};