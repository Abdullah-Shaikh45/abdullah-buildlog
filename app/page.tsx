"use client";
import Image from "next/image";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen px-6 py-20 flex justify-center bg-white">
      <div
        className="w-full max-w-6xl bg-white rounded-3xl 
     px-6 py-10 
     md:px-10 md:py-16 
     space-y-16 md:space-y-24 shadow-sm border-2"
      >
        <section className="space-y-6">
          <span className="inline-block bg-[#B6F000] text-[#111111] px-4 py-1 rounded-full text-sm font-medium">
            Co-founder • Builder • Survivor
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#111111]">
            Hi, I’m Abdullah Shaikh.
          </h1>

          <p className="max-w-2xl text-lg text-[#525252]">
            I’m a product-focused creative at{" "}
            <strong className="text-[#111111]">LixaNetwork</strong> and a
            co-founder of <strong className="text-[#111111]">Komunity</strong>,
            where I design thoughtful systems that bring people, products, and
            progress into alignment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-[#B6F000] text-[#111111] px-5 py-3 rounded-xl font-semibold hover:bg-[#9AD400] w-full sm:w-auto text-center"
            >
              See What I’m Building
            </button>

            <button
              onClick={() => scrollToSection("timeline")}
              className="border border-gray-300 text-[#111111] px-5 py-3 rounded-xl font-semibold w-full sm:w-auto text-center"
            >
              Read My Journey
            </button>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-[#111111]">
            What makes this space different
          </h2>

          <p className="max-w-2xl text-[#525252] leading-relaxed">
            This isn’t a <strong className="text-[#030303] ">portfolio</strong>.
            It’s not a <strong className="text-[#111111]">resume</strong>{" "}
            either.
            <br />
            <br />
            It’s a <strong className="text-[#111111]">living record</strong> of
            someone
            <strong className="text-[#111111]"> building in public</strong>,
            learning deliberately, moving forward imperfectly and focusing on
            <strong className="text-[#111111]"> meaningful work</strong> without
            pretending to have everything figured out.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-[#111111]">Why I build</h2>

          <p className="max-w-2xl text-[#525252] leading-relaxed">
            I started because I was{" "}
            <strong className="text-[#111111]">confused</strong>,
            <strong className="text-[#111111]"> curious</strong> and wanted to
            build things that genuinely{" "}
            <strong className="text-[#111111]">help people</strong>.
            <br />
            <br />
            Today, I build <strong className="text-[#111111]">tools</strong>,
            <strong className="text-[#111111]"> communities</strong> and
            <strong className="text-[#111111]"> systems</strong> that aim to
            reduce that confusion for others and make the learning curve feel a
            little less lonely.
          </p>
        </section>

        <section id="projects" className="space-y-10">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#111111]">
              Things I’m building
            </h2>

            <p className="max-w-2xl text-[#525252]">
              These aren’t experiments for the sake of it. Each product started
              as a personal frustration and turned into something worth
              building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Komunity",
                desc: "A people-first ecosystem designed for learning, growth and building together without the noise.",
                intent:
                  "To create a space where progress feels shared, not isolating.",
                status: "Co-founder",
              },
              {
                title: "PathForge",
                desc: "An AI-powered learning navigator that helps developers find clarity instead of restarting from scratch.",
                intent:
                  "Born out of repeated confusion around what to learn next and why.",
                status: "Founder",
              },
              {
                title: "NeuraShield",
                desc: "An awareness-focused security initiative using simulations to educate people about modern cyber threats.",
                intent:
                  "To make security knowledge practical, accessible, and rooted in real scenarios.",
                status: "Paused · 2026",
              },
              {
                title: "CommitGuard",
                desc: "A preventive system designed to stop accidental secret leaks before code ever reaches production.",
                intent:
                  "To rethink how developers safeguard their work in high-stakes environments.",
                status: "Paused · 2026",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 space-y-5 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-[#111111]">
                    {item.title}
                  </h3>

                  {/* <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-[#525252]">
                    {item.status}
                  </span> */}
                </div>

                <p className="text-sm text-[#525252] leading-relaxed">
                  {item.desc}
                </p>

                <p className="text-sm text-[#737373] leading-relaxed">
                  <span className="font-medium text-[#111111]">Intent:</span>{" "}
                  {item.intent}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111111]">
            Lessons the hard way
          </h2>

          <p className="max-w-2xl text-[#525252] leading-relaxed">
            Not everything I built worked but each misstep shaped how I think
            and build today.
          </p>

          <ul className="max-w-2xl list-disc list-inside space-y-2 text-[#525252] leading-relaxed">
            <li>
              Building{" "}
              <span className="text-[#111111] font-medium">
                polished projects
              </span>{" "}
              that looked complete but lacked real direction
            </li>
            <li>
              Assuming{" "}
              <span className="text-[#111111] font-medium">more tools</span>{" "}
              would automatically lead to clarity
            </li>
            <li>
              Confusing{" "}
              <span className="text-[#111111] font-medium">
                watching tutorials
              </span>{" "}
              with making real progress
            </li>
          </ul>
        </section>

        <section id="timeline" className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111111]">Growth timeline</h2>

          <p className="max-w-2xl text-[#525252] leading-relaxed">
            A short visual record of how my focus, thinking, and direction
            evolved over time.
          </p>

          <div className="relative max-w-2xl rounded-2xl border border-gray-200 bg-white px-6 py-8">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-200" />

            <div className="space-y-8">
              <div className="relative flex gap-6">
                <div className="relative z-10 h-3 w-3 mt-1 rounded-full bg-[#111111]" />
                <div>
                  <p className="text-sm font-medium text-[#111111]">2022</p>
                  <p className="text-sm text-[#525252]">
                    Curious, inconsistent, exploring ideas without clear
                    direction.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-6">
                <div className="relative z-10 h-3 w-3 mt-1 rounded-full bg-[#111111]" />
                <div>
                  <p className="text-sm font-medium text-[#111111]">2023</p>
                  <p className="text-sm text-[#525252]">
                    Learned the fundamentals, restarted often, struggled with
                    focus and clarity.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-6">
                <div className="relative z-10 h-3 w-3 mt-1 rounded-full bg-[#111111]" />
                <div>
                  <p className="text-sm font-medium text-[#111111]">2024</p>
                  <p className="text-sm text-[#525252]">
                    Built real things, failed publicly, and started thinking
                    long-term.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-6">
                <div className="relative z-10 h-3 w-3 mt-1 rounded-full bg-[#B6F000]" />
                <div>
                  <p className="text-sm font-medium text-[#111111]">
                    2025 (Now)
                  </p>
                  <p className="text-sm text-[#525252]">
                    Co-founded Komunity, building with intention, patience, and
                    consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-[#111111]">
            Let’s build together
          </h2>

          <p className="max-w-2xl text-[#525252] leading-relaxed">
            If you’re building something meaningful, exploring an idea, or just
            want to exchange thoughts I’m always open to a conversation.
          </p>

          <button
            onClick={() =>
              window.open("mailto:abdullah.shaikh76ir@gmail.com", "_blank")
            }
            className="bg-[#B6F000] px-6 py-3 text-[#111111] rounded-xl font-semibold hover:bg-[#9AD400] transition"
          >
            Connect
          </button>
        </section>
      </div>
    </main>
  );
}
