export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white mt-[100px]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="text-2xl font-extrabold tracking-tight">
              FIT<span className="text-lime-400">LOG</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Train with intent. Log every set. Build a stronger version of
              yourself, one workout at a time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Navigation
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="/" className="transition hover:text-lime-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#library" className="transition hover:text-lime-400">
                  Workout Library
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-lime-400">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Training
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>Strength Training</li>
              <li>Full Body Workouts</li>
              <li>Muscle Building</li>
              <li>Fitness Tips</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Stay Consistent
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Every rep counts. Keep showing up and make progress your daily
              habit.
            </p>

            <a
              href="#library"
              className="mt-5 inline-flex rounded-md bg-lime-400 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-black transition hover:bg-lime-300"
            >
              Explore Workouts
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>©  FitLog. All rights reserved.</p>

          <p className="uppercase tracking-widest">
            Train Hard. Stay Consistent.
          </p>
        </div>
      </div>
    </footer>
  );
}
