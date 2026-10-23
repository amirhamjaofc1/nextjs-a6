"use client";
import toast, { Toaster, ToastBar } from "react-hot-toast";
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
        <Toaster>
          {(t) => (
            <ToastBar toast={t}>
              {({ icon, message }) => (
                <>
                  {icon}
                  {message}
                  <button
                    type="button"
                    aria-label="Dismiss notification"
                    onClick={() => toast.dismiss(t.id)}
                    className="ml-3 rounded p-1 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    x
                  </button>
                </>
              )}
            </ToastBar>
          )}
        </Toaster>
      </PlanProvider>
    </div>
  );
}
