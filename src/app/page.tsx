'use client';
import { DashboardProvider } from "@/store/DashboardContext";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Content from "@/components/layout/Analytics";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardProvider>
      <div className="h-screen flex overflow-hidden bg-gray-100 dark:bg-gray-950">
        <Sidebar />

        <div className="flex-1 flex flex-col h-full">
          <Header />
          <Content>{children}</Content>
        </div>
      </div>
    </DashboardProvider>
  );
}