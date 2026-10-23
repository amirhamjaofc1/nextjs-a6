import Link from "next/link";

export default function EmptyDesignSection() {
  return (
    <section className="mt-6 flex min-h-[270px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#262b3b] px-6 py-16 text-center">
      <h2 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wide">
        Nothing here yet
      </h2>
      <p className="mt-2 text-xs text-[#8b90a0]">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/"
        className="mt-6 rounded-full bg-[#c8f90a] px-6 py-3 text-xs font-semibold text-black shadow-[0_8px_24px_-6px_rgba(200,249,10,0.45)]"
      >
        Go to workouts
      </Link>
    </section>
  );
}
