import Image from "next/image";
import Link from "next/link";

export default function CardsSection({ workout }) {
  return (
    
    <article className="group overflow-hidden rounded-xl border border-[#272a30] bg-[#15171c] transition duration-300 hover:-translate-y-1 hover:border-lime-400/50">
      {/* Workout Image */}
      
      <div className="relative h-52 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-lime-400 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-black">
          {workout.difficulty}
        </span>

        <span className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white">
          ★ {workout.rating}
        </span>
      </div>

      {/* Workout Details */}
      <div className="p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded bg-[#272b20] px-2 py-1 text-[10px] font-bold uppercase text-lime-400"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
          {workout.name}
        </h2>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-400">
          {workout.description}
        </p>

        <p className="mt-3 text-xs text-gray-500">
          Equipment: <span className="text-gray-300">{workout.equipment}</span>
        </p>

        <div className="my-4 grid grid-cols-3 gap-2 border-y border-[#292c32] py-3">
          <div>
            <p className="text-[10px] text-gray-500">DURATION</p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.duration} min
            </p>
          </div>

          <div>
            <p className="text-[10px] text-gray-500">CALORIES</p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.caloriesBurned} kcal
            </p>
          </div>

          <div>
            <p className="text-[10px] text-gray-500">SETS × REPS</p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.sets} × {workout.reps}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-md bg-lime-400 py-2.5 text-xs font-extrabold uppercase tracking-wider text-black transition hover:bg-lime-300"
        >
          <Link href={`${workout.id}`}>
            View Workout
          
          </Link>
        </button>
      </div>
    </article>

  );
}
