"use client";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { PlanProvider } from "@/context/Plancontext";

export default function ClientLayout({ children }) {
  return (
    <div>
      <PlanProvider>
        <Navbar />

        {children}

        <Footer />
        <Toaster />
      </PlanProvider>
    </div>
  );
}
