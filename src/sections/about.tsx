export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-0 top-1/2 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm tracking-[0.25em] uppercase text-neutral-400 backdrop-blur">
              About Us
            </span>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Building products that feel
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                effortless & memorable.
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-neutral-400">
              We believe exceptional digital experiences are created through
              thoughtful design, modern technology, and a relentless focus on
              people. Every interaction is crafted to be simple, elegant, and
              meaningful.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105">
                Explore Work
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 px-7 py-3 font-medium backdrop-blur transition hover:bg-white/10">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="grid gap-6">
                <div className="rounded-3xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-8">
                  <h2 className="mb-3 text-2xl font-bold">Our Vision</h2>
                  <p className="leading-7 text-neutral-300">
                    To create beautiful, scalable, and impactful digital
                    products that inspire confidence and elevate everyday
                    experiences.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                    <h3 className="mb-2 text-xl font-semibold">Design First</h3>
                    <p className="text-sm leading-7 text-neutral-400">
                      Clean interfaces, thoughtful interactions, and delightful
                      user experiences.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                    <h3 className="mb-2 text-xl font-semibold">Engineering</h3>
                    <p className="text-sm leading-7 text-neutral-400">
                      Modern technologies powering fast, reliable, and scalable
                      applications.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                    <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                    <p className="text-sm leading-7 text-neutral-400">
                      Constant experimentation to deliver meaningful solutions
                      that stand out.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                    <h3 className="mb-2 text-xl font-semibold">Community</h3>
                    <p className="text-sm leading-7 text-neutral-400">
                      Collaboration, transparency, and long-term relationships
                      built on trust.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <div>
                    <h4 className="text-3xl font-bold">100+</h4>
                    <p className="mt-2 text-sm text-neutral-400">Projects</p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-bold">50+</h4>
                    <p className="mt-2 text-sm text-neutral-400">Clients</p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-bold">5★</h4>
                    <p className="mt-2 text-sm text-neutral-400">Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl" />
            <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full border border-white/10 bg-gradient-to-br from-violet-500 to-cyan-400" />
          </div>
        </div>
      </section>
    </main>
  );
}