"use client";
import { useDashboard } from "@/store/DashboardContext";
import { Transaction } from "@/types/transaction";
import { useEffect, useState } from "react";

const categories = ["Food", "Travel", "Shopping", "Bills", "Salary"];

export default function TransactionTable() {
  const { transactions, setTransactions, mode } = useDashboard();
  const isAdmin = mode === "admin";

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [searchInput, setSearchInput] = useState("");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    category: "all",
    from: "",
    to: "",
    min: "",
    max: "",
  });

  const [form, setForm] = useState<Transaction>({
    id: Date.now(),
    date: "",
    description: "",
    category: "Food",
    amount: 0,
    type: "expense",
  });

  const handleSave = () => {
    if (!form.date || !form.description) return;

    if (editingId) {
      setTransactions((prev: Transaction[]) =>
        prev.map((t: Transaction) =>
          t.id === editingId ? { ...form, id: editingId } : t
        )
      );
    } else {
      setTransactions((prev: Transaction[]) => [
        ...prev,
        { ...form, id: Date.now() }
      ]);
    }

    setShowForm(false);
    setEditingId(null);

    setForm({
      id: Date.now(),
      date: "",
      description: "",
      category: "Food",
      amount: 0,
      type: "expense",
    });
  };

  const filtered = transactions.filter((t: Transaction) => {
    const tDate = new Date(t.date).getTime();

    if (
      filters.search &&
      !t.description.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;

    if (filters.type !== "all" && t.type !== filters.type) return false;
    if (filters.category !== "all" && t.category !== filters.category)
      return false;

    if (filters.from && tDate < new Date(filters.from).getTime()) return false;
    if (filters.to && tDate > new Date(filters.to).getTime()) return false;

    if (filters.min && t.amount < Number(filters.min)) return false;
    if (filters.max && t.amount > Number(filters.max)) return false;

    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    const diff =
      new Date(a.date).getTime() - new Date(b.date).getTime();
    return sortOrder === "asc" ? diff : -diff;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);

  const paginatedData = sorted.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchInput]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prev) => ({ ...prev, search: searchInput }));
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const inputStyle =
    "px-2 py-1 text-xs rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-[#23a997]";
  return (
    <div className="lg:col-span-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-4">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Transactions
        </h3>

        {isAdmin && (
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingId(null);
            }}
            className="text-xs px-3 py-1 rounded-md bg-[#23a997] hover:opacity-90 text-white"
          >
            + Add
          </button>
        )}
      </div>

      {/* FORM */}
      {showForm && (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-3">

          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
              className={inputStyle}
            />

            <input
              type="number"
              value={form.amount}
              placeholder="Amount"
              onChange={(e) =>
                setForm({ ...form, amount: Number(e.target.value) })
              }
              className={inputStyle}
            />
          </div>

          <input
            value={form.description}
            placeholder="Description"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className={inputStyle}
          />

          <div className="grid grid-cols-2 gap-3">
            <select
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              className={inputStyle}
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value as any })
              }
              className={inputStyle}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <button
            onClick={handleSave}
            className="bg-[#23a997] hover:opacity-90 text-white py-2 rounded-md text-xs mt-2"
          >
            {editingId ? "Update Transaction" : "Save Transaction"}
          </button>
        </div>
      )}

      {/* FILTERS */}
      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="grid gap-3 md:grid-cols-3">
          <input
            placeholder="Search By Description..."
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
            className={inputStyle}
          />

          <select
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value })
            }
            className={inputStyle}
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <select
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
            className={inputStyle}
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-3 md:grid-cols-4 mt-3">
          <input type="date" onChange={(e) => setFilters({ ...filters, from: e.target.value })} className={inputStyle} />
          <input type="date" onChange={(e) => setFilters({ ...filters, to: e.target.value })} className={inputStyle} />
          <input type="number" placeholder="Min $" onChange={(e) => setFilters({ ...filters, min: e.target.value })} className={inputStyle} />
          <input type="number" placeholder="Max $" onChange={(e) => setFilters({ ...filters, max: e.target.value })} className={inputStyle} />
        </div>
      </div>

      {/* TABLE (NO SCROLL) */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500">
            <tr>
              <th
                onClick={() =>
                  setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                }
                className="py-2 px-3 text-left cursor-pointer select-none"
              >
                <div className="flex items-center gap-1">
                  Date
                  <span className="text-[10px]">
                    {sortOrder === "asc" ? "▲" : "▼"}
                  </span>
                </div>
              </th>

              <th className="px-3 text-left">Description</th>
              <th className="px-3 text-left">Category</th>
              <th className="px-3 text-right">Amount</th>
              {isAdmin && <th className="px-3 text-right">Edit</th>}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length ? (
              paginatedData.map((t) => (
                <tr key={t.id} className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="py-2 px-3">{t.date}</td>
                  <td className="px-3">{t.description}</td>
                  <td className="px-3">{t.category}</td>
                  <td className={`px-3 text-right font-semibold ${t.type === "income" ? "text-green-500" : "text-red-500"}`}>
                    ${t.amount}
                  </td>

                  {isAdmin && (
                    <td className="px-3 text-right">
                      <button
                        onClick={() => {
                          setForm(t);
                          setEditingId(t.id);
                          setShowForm(true);
                        }}
                        className="text-blue-500 text-xs hover:underline"
                      >
                        Edit
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={isAdmin ? 5 : 4} className="py-10 text-center text-gray-500 dark:text-gray-400">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-3 text-xs">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-gray-500">
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages || totalPages === 0}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}