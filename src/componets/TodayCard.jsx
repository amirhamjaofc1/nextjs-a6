import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import Removebtn from "./removebtn";
import MarkAsDone from "./MarkAsDone";

export default function TodayCard({ carddata }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 rounded-xl border border-[#252a35] bg-[#14171e] p-3 text-white sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={carddata.image}
              alt={carddata.name}
              fill
              sizes="112px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
              {carddata.name}
            </h3>

            <p className="mt-0.5 text-[11px] text-[#9299a8]">
              {carddata.equipment}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-[#b6bbc6]">
              <span className="inline-flex items-center gap-1">
                <svg
                  className="h-3 w-3 text-[#c6ff00]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {carddata.duration}
              </span>

              <span className="inline-flex items-center gap-1">
                <svg
                  className="h-3 w-3 text-[#c6ff00]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-3-2-6-4-8 0 4-2 5-3 5 1-4 1-7 0-11Z" />
                </svg>
                {carddata.equipment}
              </span>

              <span className="inline-flex items-center gap-1">
                <svg
                  className="h-3 w-3 text-[#c6ff00]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
                </svg>
                {carddata.rating}
              </span>
            </div>
          </div>
        </div>

        {/* <!-- Right: Actions --> */}
        <div className="flex shrink-0 items-center gap-2 sm:ml-4">
          <Link
            href={`/${carddata.id}`}
            className="rounded-full border border-[#343a46] px-3.5 py-2 text-[10px] font-medium text-[#e1e4eb] transition hover:border-[#c6ff00] hover:text-white"
          >
            View Details
          </Link>

          <MarkAsDone carddata={carddata} />

          <Removebtn carddata={carddata} />
        </div>
      </div>
    </div>
  );
}
