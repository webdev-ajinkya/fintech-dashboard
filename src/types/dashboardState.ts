import { Transaction } from "./transaction";

export type DashboardState = {
    transactions: Transaction[];
    setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
    mode: "admin" | "view";
    setMode: (mode: "admin" | "view") => void;
};