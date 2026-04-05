export function groupByMonth(data: any[]) {
    const map: Record<string, { income: number; expense: number }> = {};

    data.forEach((t) => {
        const date = new Date(t.date);

        const month = date.toLocaleString("default", { month: "short" });

        if (!map[month]) {
            map[month] = { income: 0, expense: 0 };
        }

        if (t.type === "income") {
            map[month].income += t.amount;
        } else {
            map[month].expense += t.amount;
        }
    });

    return Object.entries(map).map(([month, values]) => ({
        month,
        ...values,
    }));
}