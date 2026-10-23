"use client";

import { Inter, Oswald } from "next/font/google";

import { usePlanContext } from "@/context/Plancontext";
import { useState } from "react";
import Singlecard from "./SingleCard";
import EmptyDesignSection from "./EmptyDesignSection";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-oswald",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// ----------------------------------------------- main desigbb

export default function Plan({ carddata }) {
  const { planlist, setPlanlist, savelist, setsavelist } = usePlanContext();

  // const {planlist} = usePlanContext();
  // console.log('dats comes?',planlist);

  const [active, setActive] = useState("plan");
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
              2
            </p>
          </div>
          <div className="border-t border-[#1c2030] py-3 sm:border-l sm:border-t-0 sm:px-[22px] sm:py-0">
            <p className="text-xs text-[#8b90a0]">Minutes</p>
            <p className="mt-1 font-[family-name:var(--font-oswald)] text-4xl font-bold leading-none">
              23
            </p>
          </div>
          <div className="border-t border-[#1c2030] py-3 sm:border-l sm:border-t-0 sm:px-[22px] sm:py-0">
            <p className="text-xs text-[#8b90a0]">Calories</p>
            <p className="mt-1 font-[family-name:var(--font-oswald)] text-4xl font-bold leading-none">
              190
            </p>
          </div>
        </section>
        {/* name of each tab group should be unique */}
        <div
          className="tabs tabs-box mt-8 rounded-xl border border-[#1c2030] bg-[#10131b] p-1
                [&_.tab]:rounded-lg
                [&_.tab]:text-xs
                [&_.tab]:text-[#8b90a0]
                [&_.tab:checked]:bg-[#c8f90a]
                [&_.tab:checked]:font-semibold
                [&_.tab:checked]:text-black"
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
            {planlist.length > 0 ? (
              planlist.map((carddata) => {
                return <Singlecard key={carddata.id} carddata={carddata} />;
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
            {savelist.length > 0 ? (
              savelist.map((carddata) => {
                return <Singlecard key={carddata.id} carddata={carddata} />;
              })
            ) : (
              <EmptyDesignSection />
            )}
          </div>
          <div className="flex items-center gap-3 ms-auto">
            <label htmlFor="sort" className="text-xs text-[#8b90a0]">
              Sort By
            </label>
            <select
              id="sort"
              className="rounded-xl border border-[#1c2030] bg-[#10131b] px-4 py-2.5 text-xs  outline-none"
            >
              <option>Duration</option>
              <option>Calories</option>
              <option>Name</option>
            </select>
          </div>
        </div>
      </div>
    </main>
  );
}
