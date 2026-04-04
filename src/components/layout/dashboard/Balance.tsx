import BalanceChart from "@/components/charts/BalenceChart";

export default function Balance({ safeTransactions }: { safeTransactions: any[] }) {
    return (
        <div className="lg:col-span-2 min-h-[300px] h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col">
            {safeTransactions.length ? <BalanceChart /> : (
                <>
                    <h3 className="text-sm font-medium dark:text-gray-300">
                        Balance Trend
                    </h3>
                    <div className="flex flex-col items-center justify-center h-full">
                        <p className="text-sm text-gray-500 text-center mt-10">No data available</p>
                    </div>
                </>
            )}
        </div>
    );
}