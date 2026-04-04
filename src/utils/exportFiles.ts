export function exportToCSV(data: any[], filename = "data.csv") {
    if (!data || !data.length) {
        window.alert("No data to export");
        return;
    }

    const csv = [
        Object.keys(data[0]).join(","),
        ...data.map(row => Object.values(row).join(","))
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

export function exportToJSON(data: any[], filename = "data.json") {
    if (!data || !data.length) {
        window.alert("No data to export");
        return;
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}