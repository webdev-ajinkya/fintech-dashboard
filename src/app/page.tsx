'use client';
import { Header, Sidebar } from "@/components";
import Content from "@/components/layout/Content";
import { DashboardProvider } from "@/provider/DashboardContext";

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