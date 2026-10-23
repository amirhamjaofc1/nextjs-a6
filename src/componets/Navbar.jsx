"use client";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Navlinks from "./nav-links";
import { usePlanContext } from "@/context/Plancontext";
// import {usePlan} from "@/context/Plancontext"

export default function Navbar() {
  const { planlist, savelist, setActive } = usePlanContext();

  return (
    <header className="h-[87px] border-b border-[#1b1d22] bg-[#0b0c0f]">
      <nav className="relative mx-auto flex h-full items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            className="p-1.5"
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="logo"
          ></Image>

          <span className="text-xl font-black tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
          <Suspense fallback={null}>
            <Navlinks />
          </Suspense>
        </div>

        <div className="flex items-center gap-5 text-xs">
          <Link
            href="/plan"
            className="flex items-center gap-2 text-[#c0c4ce] transition hover:text-white"
          >
            <span
              onClick={() => {
                setActive("plan");
              }}
            >
              Plan
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c6ff00] text-[11px] font-bold text-black">
              {planlist.length}
            </span>
          </Link>

          <Link
            href="/plan"
            className="flex items-center gap-2 text-[#a3a8b4] transition hover:text-white"
          >
            <span
              onClick={() => {
                setActive("saved");
              }}
            >
              Saved
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#343740] text-[11px] text-[#c0c4ce]">
              {savelist.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
