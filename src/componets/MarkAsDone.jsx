"use client";

import { usePlanContext } from "@/context/Plancontext";
import toast from "react-hot-toast";

export default function MarkAsDone({ carddata }) {
  const { setPlanlist } = usePlanContext();

  return (
    <div>
      <button
        onClick={() => {
          setPlanlist((previous) =>
            previous.filter((item) => item.id !== carddata.id),
          );
          toast.success(`${carddata.name} is marked done`);
        }}
        type="button"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#c6ff00] px-3.5 py-2 text-[10px] font-bold text-black transition hover:bg-[#d5ff40]"
      >
        <svg
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path d="m5 12 4 4L19 6" />
        </svg>
        Mark as Done
      </button>
    </div>
  );
}
