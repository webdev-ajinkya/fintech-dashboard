export type TransactionType = "income" | "expense";

export type Transaction = {
    id: number;
    date: string;
    description: string;
    category: string;
    amount: number;
    type: TransactionType;
};