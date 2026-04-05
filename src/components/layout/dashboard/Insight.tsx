export default function Insight({
    topSpending,
    avgExpense,
    trends
}: any) {
    const getTrendLabel = (value: number, isExpense = false) => {
        if (value === 0) return "No Change";
        if (isExpense) return value < 0 ? "Reduction" : "Increase";
        return value > 0 ? "Growth" : "Decline";
    };

    const getTrendColor = (value: number, isExpense = false) => {
        if (value === 0) return "text-gray-400";
        if (isExpense) return value < 0 ? "text-green-500" : "text-red-500";
        return value > 0 ? "text-green-500" : "text-red-500";
    };

    return (
        <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Key Insights
            </h3>

            {/* Top Spending */}
            {topSpending && (
                <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-500">Top Spending</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {topSpending.name}
                        </p>
                    </div>
                    <p className="text-sm font-semibold text-red-500">
                        ${topSpending.amount}
                    </p>
                </div>
            )}

            {/* Income Trend */}
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-500">Income Trend</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {getTrendLabel(trends.incomeChange)}
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <p className={`text-sm font-semibold ${getTrendColor(trends.incomeChange)}`}>
                        {trends.incomeChange.toFixed(1)}%
                    </p>
                    <span className="text-[10px] text-gray-400">
                        vs last month
                    </span>
                </div>
            </div>

            {/* Expense Trend */}
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-500">Expense Trend</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {getTrendLabel(trends.expenseChange, true)}
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <p className={`text-sm font-semibold ${getTrendColor(trends.expenseChange, true)}`}>
                        {trends.expenseChange.toFixed(1)}%
                    </p>
                    <span className="text-[10px] text-gray-400">
                        vs last month
                    </span>
                </div>
            </div>

            {/* Avg Expense */}
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-500">Avg Expense</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Per Transaction
                    </p>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    ${avgExpense.toFixed(2)}
                </p>
            </div>
        </div>
    );
}