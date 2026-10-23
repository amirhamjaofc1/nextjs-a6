"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlinks(){
    const pathName = usePathname();
    return(
        <div>
            <Link
            href="/"
            // className=" "
            className={pathName === "/" ? "bg-[#c6ff00] rounded-full text-black px-5 py-2 text-xs font-semibold   " : "text-[#9ca3af] rounded-full text-white px-5 py-2 text-xs font-semibold   "}
          >
            Workouts
          </Link>

          <Link
            href="/plan"
            // className="rounded-full px-4 py-2 text-xs font-medium  text-[#9ca3af] transition hover:text-white"
            className={pathName === "/plan" ? "bg-[#c6ff00] rounded-full text-black px-5 py-2 text-xs font-semibold   " : "text-[#9ca3af] rounded-full text-white px-5 py-2 text-xs font-semibold   "}
          >
            My Plan
          </Link>
        </div>
    )
}