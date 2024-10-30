"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DashBoard from "@/components/Dashboard/Dashboard_admin";
import Appointments from "@/components/Dashboard/Appointments";
import Add_Doctor from "@/components/Dashboard/Add_Doctor";
import Doctor_List from "@/components/Dashboard/Doctor_List";
import Navbar_dashboard from "@/components/Dashboard/Navbar_dashboard";
import Sidebar from "@/components/Dashboard/Sidebar";

const Page = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const router = useRouter();

  useEffect(() => {
    const adminToken = localStorage.getItem("admin_token");

    if (!adminToken) {
      router.push("/admin");
    }
  }, [router]);

  const renderMainContent = () => {
    switch (currentView) {
      case "dashboard":
        return <DashBoard />;
      case "appointments":
        return <Appointments />;
      case "add-doctor":
        return <Add_Doctor />;
      case "doctor-list":
        return <Doctor_List />;
      default:
        return <DashBoard />;
    }
  };

  return (
    <div className="h-full relative flex flex-col bg-gray-100">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar_dashboard />
      </div>

      <div className="flex flex-grow pt-16">
        {/* Fixed Sidebar */}
        <div className="fixed top-[13vh] border-[1px] border-gray-200 h-[calc(100vh-13vh)] left-0 w-64">
          <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        </div>
        {/* Main Content Area */}
        <div className="fixed left-64 top-[13vh] w-full h-full p-6 flex-1 bg-white rounded-md">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default Page;
