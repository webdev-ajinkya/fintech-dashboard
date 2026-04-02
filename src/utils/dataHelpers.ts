export function groupByMonth(data: any[]) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

    const result = months.map((m) => ({
        month: m,
        income: 0,
        expense: 0,
    }));

    data.forEach((t) => {
        const monthIndex = new Date(t.date).getMonth();

        if (t.type === "income") {
            result[monthIndex].income += t.amount;
        } else {
            result[monthIndex].expense += t.amount;
        }
    });

    return result;
}

export function groupByCategory(data: any[]) {
    const map: any = {};

    data.forEach((t) => {
        if (t.type !== "expense") return;

        if (!map[t.category]) map[t.category] = 0;
        map[t.category] += t.amount;
    });

    return Object.entries(map).map(([name, amount]) => ({
        name,
        amount,
    }));
}