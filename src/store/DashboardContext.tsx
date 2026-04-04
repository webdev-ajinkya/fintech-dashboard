'use client';

import { createContext, useContext } from "react";
import { useDashboardData } from "@/hooks/useDashboardData";

const DashboardContext = createContext<any>(null);

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    const data = useDashboardData();
    return (
        <DashboardContext.Provider value={data} >
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboard = () => useContext(DashboardContext);