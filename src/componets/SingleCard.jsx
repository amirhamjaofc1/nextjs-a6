import Image from "next/image";
import SinglePagebtn from "./todaysplanbtn";
import SavedBtn from "./savedbtn";

export default function Singlecard({ carddata }) {
  return (
    <section className="min-h-screen bg-[#0e1014] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Left: Workout Image */}
        <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-white/10 sm:min-h-[500px] lg:min-h-[650px]">
          <Image
            src={carddata.image}
            alt={carddata.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right: Workout Information */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
            {carddata.name}
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            {carddata.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex flex-wrap gap-2">
            {carddata.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c6ff00] px-3 py-1 text-[11px] font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Stats */}
          <div className="mt-5 overflow-hidden rounded-xl border border-[#272b34] bg-[#171a21]">
            {[
              ["Equipment", carddata.equipment],
              ["Difficulty", carddata.difficulty],
              ["Sets", carddata.sets],
              ["Reps", carddata.reps],
              ["Duration", `${carddata.duration} min`],
              ["Calories", `${carddata.caloriesBurned} kcal`],
              ["Rating", `★ ${carddata.rating}`],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 border-b border-[#272b34] px-4 py-3 last:border-b-0"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  {label}
                </span>

                <span className="text-right text-xs font-medium text-gray-200">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="mt-3 list-inside list-decimal space-y-2 text-xs leading-5 text-gray-300">
              {carddata.instructions.map((instruction, index) => (
                <li key={index} className="pl-1">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <SinglePagebtn carddata={carddata} />

            <SavedBtn carddata={carddata} />
          </div>
          {/* <div className="">
          </div> */}
        </div>
      </div>
    </section>
  );
}
