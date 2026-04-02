"use client";

import ExportMenu from "../controls/ExportButton";

const dummyData = [
    { name: "Food", amount: 200 },
    { name: "Travel", amount: 500 },
    { name: "Shopping", amount: 800 },
];

export default function Content({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto bg-gray-100 dark:bg-gray-950 transition">

            {/* 🔥 TOP ACTION BAR */}
            <div className="max-w-7xl mx-auto flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Dashboard Overview
                </h2>

                <ExportMenu data={dummyData} />
            </div>

            <div className="max-w-7xl mx-auto space-y-6">

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="h-24 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm"
                        />
                    ))}
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="lg:col-span-2 h-72 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm" />
                    <div className="h-72 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm" />
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    {/* Transactions */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-3">
                        <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded" />

                        <div className="space-y-2 overflow-y-auto pr-1">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-10 bg-gray-100 dark:bg-gray-800 rounded"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Insights */}
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-3">
                        <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded" />

                        <div className="space-y-3 overflow-y-auto pr-1">
                            {[...Array(2)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-16 bg-gray-100 dark:bg-gray-800 rounded"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {children}
            </div>
        </main>
    );
}