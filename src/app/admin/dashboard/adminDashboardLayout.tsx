"use client";

import React, { ReactNode } from "react";
import AdminDashboardHeader from "./dashboardComponents/dashboardHeader";
import AdminDashboardSidebar from "./dashboardComponents/dashboardSidenav";

interface AdminDashboardLayoutProps {
  children: ReactNode;
}

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({ children }) => {
  return (
    <section className="flex pt-16 min-h-screen bg-background-light">
      {/* Sidebar */}
      <AdminDashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Header */}
        <AdminDashboardHeader />

        {/* Dynamic Content */}
        <main className="p-6">{children}</main>
      </div>
    </section>
  );
};

export default AdminDashboardLayout;