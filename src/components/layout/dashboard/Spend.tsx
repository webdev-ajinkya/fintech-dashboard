import SpendingChart from "@/components/charts/SpendingChart";

export default function Spend({ spending }: { spending: any[] }) {
    return (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-4">

            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Spending Breakdown
            </h3>

            <div className="h-52 flex items-center justify-center">
                <div className="w-44 h-44">
                    {spending.length ? <SpendingChart /> : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-sm text-gray-500">No spending data</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                {spending.map((item: any, i: number) => {
                    const colors = [
                        "#6366f1",
                        "#22c55e",
                        "#f59e0b",
                        "#ef4444",
                        "#3b82f6",
                    ];

                    return (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[i] }} />
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {item.name}
                                </span>
                            </div>

                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                ${item.amount.toFixed(2)}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}