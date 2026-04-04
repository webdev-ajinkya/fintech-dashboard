export default function Insight({
    topSpending,
    income,
    expense,
    avgExpense
}: any) {
    return (
        <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Key Insights
            </h3>

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

            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-500">Income Trend</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Growth
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-sm font-semibold text-green-500">
                        ${income}
                    </p>
                    <span className="text-[10px] text-gray-400">
                        vs last month
                    </span>
                </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-500">Expense Trend</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Reduction
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-sm font-semibold text-green-500">
                        ${expense}
                    </p>
                    <span className="text-[10px] text-gray-400">
                        vs last month
                    </span>
                </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-500">Avg Expense</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Per Category
                    </p>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    ${avgExpense}
                </p>
            </div>
        </div>
    );
}