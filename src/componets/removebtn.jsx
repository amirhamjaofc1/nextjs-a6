"use client";

import { usePlanContext } from "@/context/Plancontext";

export default function Removebtn({ carddata }) {
  const { setPlanlist } = usePlanContext();

  return (
    <div>
      <button
        onClick={() =>
          setPlanlist((previous) =>
            previous.filter((item) => item.id !== carddata.id),
          )
        }
        type="button"
        aria-label="Remove workout"
        className="ml-0.5 rounded-full p-1 text-[#737b8b] transition hover:bg-[#252a35] hover:text-white"
      >
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="m18 6-12 12M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
