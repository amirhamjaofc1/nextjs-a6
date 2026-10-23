import Image from "next/image";

export default function Hero() {
  return (
    <div className=" bg-[#0b0c0f] px-4 py-6 md:px-8">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden rounded-xl border border-[#25272d] bg-[#15171c] px-6 py-10 md:flex-row md:px-12 md:py-12">
        {/* Left Content */}
        <div className="w-full md:max-w-xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-lime-400">
            Workout Library
          </p>

          <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, log it,
            and improve your performance with every workout.
          </p>

          <a
            href="#workouts"
            className="mt-6 inline-flex rounded-md bg-lime-400 px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-black transition hover:bg-lime-300"
          >
            Browse Workouts
          </a>
        </div>

        {/* Right Image */}
        <div className="relative flex w-full items-center justify-center md:w-1/2">
          <Image
            src="/assets/banner.png"
            alt="Athlete training on a stationary bike"
            width={420}
            height={420}
            priority
            className="h-auto w-full max-w-sm object-contain"
          />
        </div>
      </section>
    </div>
  );
}
