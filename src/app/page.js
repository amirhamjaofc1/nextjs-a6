import Navbar from "@/componets/Navbar";
import Image from "next/image";
import Hero from "@/componets/hero";
import CardsSection from "@/componets/cardssection";
// export const instant = false;
export default async function Home() {
  "use cache";
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();


  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
          The Library
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Explore our collection of exercises and find the perfect workout to
          reach your fitness goals.
        </p>
      </section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((workout) => (
          <CardsSection key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
