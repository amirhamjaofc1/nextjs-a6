"use client";

import { Inter, Oswald } from "next/font/google";

import { usePlanContext } from "@/context/Plancontext";
import Singlecard from "./SingleCard";
import EmptyDesignSection from "./EmptyDesignSection";
import TodayCard from "./TodayCard";
import SavedCard from "./SavedCard";
import { useState } from "react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-oswald",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// ----------------------------------------------- main desigbb

export default function Plan({ carddata }) {
  const { planlist, savelist, setsavelist, active, setActive } =
    usePlanContext();

  const displayedList = active === "saved" ? savelist : planlist;

  const totalMinutes = displayedList.reduce(
    (total, item) => total + Number(item.duration || 0),
    0,
  );
  const totalCalories = displayedList.reduce(
    (total, item) => total + Number(item.caloriesBurned || 0),
    0,
  );

  const [sortBy, setSortBy] = useState("duration");

  const sortList = (list) => {
    const field = sortBy === "calories" ? "caloriesBurned" : sortBy;

    return [...list].sort(
      (a, b) => Number(a[field] || 0) - Number(b[field] || 0),
    );
  };
  const sortedPlanList = sortList(planlist);
  const sortedSavedList = sortList(savelist);

  // const {planlist} = usePlanContext();
  // console.log('dats comes?',planlist);

  return (
    <main
      className={`${inter.variable} ${oswald.variable} min-h-screen bg-[#0b0c10] px-6 py-10 font-[family-name:var(--font-inter)] text-white sm:px-10`}
    >
      <div className="mx-auto max-w-[1100px]">
        {/* ---------- Header ---------- */}
        <header>
          <h1 className="font-[family-name:var(--font-oswald)] text-[32px] font-bold uppercase leading-none tracking-wide">
            My Plan
          </h1>
          <p className="mt-2 text-sm text-[#8b90a0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>

        {/* ---------- Stats card ---------- */}
        <section className="mt-8 grid grid-cols-1 rounded-3xl border border-[#1c2030] bg-[#10131b] px-6 py-6 sm:grid-cols-3 sm:px-0 sm:py-7">
          <div className="py-3 sm:px-[22px] sm:py-0">
            <p className="text-xs text-[#8b90a0]">Exercises</p>
            <p className="mt-1 font-[family-name:var(--font-oswald)] text-4xl font-bold leading-none text-[#c8f90a]">
              {displayedList.length}
            </p>
          </div>
          <div className="border-t border-[#1c2030] py-3 sm:border-l sm:border-t-0 sm:px-[22px] sm:py-0">
            <p className="text-xs text-[#8b90a0]">Minutes</p>
            <p className="mt-1 font-[family-name:var(--font-oswald)] text-4xl font-bold leading-none">
              {totalMinutes}
            </p>
          </div>
          <div className="border-t border-[#1c2030] py-3 sm:border-l sm:border-t-0 sm:px-[22px] sm:py-0">
            <p className="text-xs text-[#8b90a0]">Calories</p>
            <p className="mt-1 font-[family-name:var(--font-oswald)] text-4xl font-bold leading-none">
              {totalCalories}
            </p>
          </div>
        </section>
        {/* name of each tab group should be unique */}
        <div
          className={[
            "tabs tabs-box mt-8 rounded-xl border border-[#1c2030] bg-[#10131b] p-1",
            "[&_.tab]:rounded-lg",
            "[&_.tab]:text-xs",
            "[&_.tab]:text-[#8b90a0]",
            "[&_.tab:checked]:bg-[#c8f90a]",
            "[&_.tab:checked]:font-semibold",
            "[&_.tab:checked]:text-black",
          ].join(" ")}
        >
          <input
            type="radio"
            name="my_tabs_3"
            className="tab rounded-lg px-5 text-xs text-[#8b90a0]"
            aria-label="Today's Plan"
            checked={active === "plan"}
            onChange={() => {
              setActive("plan");
            }}
          />

          <div className="tab-content w-full border-0 p-6">
            {sortedPlanList.length > 0 ? (
              sortedPlanList.map((carddata) => {
                return <TodayCard carddata={carddata} key={carddata.id} />;
              })
            ) : (
              <EmptyDesignSection />
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab rounded-lg px-5 text-xs text-[#8b90a0]"
            aria-label="Saved"
            checked={active === "saved"}
            onChange={() => {
              setActive("saved");
            }}
          />

          <div className="tab-content w-full border-0 p-6">
            {sortedSavedList.length > 0 ? (
              sortedSavedList.map((carddata) => {
                return <SavedCard carddata={carddata} key={carddata.id} />;
              })
            ) : (
              <EmptyDesignSection />
            )}
          </div>
          <div className="relative ms-auto">
            <select
              id="sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="appearance-none rounded-xl border border-[#1c2030] bg-[#10131b] py-2.5 pl-4 pr-9 text-xs outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#8b90a0]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="m7 10 5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
