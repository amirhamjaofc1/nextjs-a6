import Singlecard from "@/componets/SingleCard";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default function SingleCardPage({ params }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0e1014] px-4 py-10 text-white sm:px-6 lg:px-8">
          <p className="mx-auto max-w-7xl text-sm text-gray-400">
            Loading workout...
          </p>
        </div>
      }
    >
      <WorkoutDetails params={params} />
    </Suspense>
  );
}

async function WorkoutDetails({ params }) {
  const { cardid } = await params;
  const carddata = await getWorkout(cardid);

  if (!carddata) {
    notFound();
  }

  return (
    <div>
      <Singlecard carddata={carddata} />
    </div>
  );
}

async function getWorkout(cardid) {
  "use cache";
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${cardid}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}
