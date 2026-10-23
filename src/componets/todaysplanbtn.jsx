"use client";

import { usePlanContext } from "@/context/Plancontext";
import toast from "react-hot-toast";

export default function SinglePagebtn({ carddata }) {
  const { planlist, setPlanlist } = usePlanContext();

  const handleclickbtn = () => {
    if (planlist.some((item) => item.id === carddata.id)) {
      toast.error(`${carddata.name} is already in the Plan list`);
      return;
    }

    setPlanlist((prev) => {
      if (prev.some((item) => item.id === carddata.id)) {
        return prev;
      }

      return [...prev, carddata];
    });
    toast.success(`${carddata.name} is added to the Plan list`);
  };
  return (
    <div>
      <button
        onClick={handleclickbtn}
        type="button"
        className="flex items-center justify-center gap-2 rounded-lg bg-[#c6ff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-lime-300"
      >
        <span>▦</span>
        Add to today&apos;s plan
      </button>
      {/* <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-lg border border-[#343945] px-5 py-3 text-xs font-semibold text-gray-200 transition hover:border-lime-400 hover:text-lime-400"
      >
        <span>♧</span>
        Save for later
      </button> */}
    </div>
  );
}
