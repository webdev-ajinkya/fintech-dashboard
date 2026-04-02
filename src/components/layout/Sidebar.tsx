import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-5 flex-col gap-6 h-full">
      <div className="flex items-center gap-2">
        <Image src="/favicon.ico" alt="Logo" width={22} height={22} />
        <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          ExpenseTracker
        </span>
      </div>

      <nav className="flex flex-col gap-2 mt-2">
        <div className="h-10 flex items-center px-3 bg-[#23a997] text-white rounded-lg text-sm font-medium">
          Dashboard
        </div>
      </nav>
    </aside>
  );
}
