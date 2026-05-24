import Link from "next/link";

export const metadata = {
  title: "My AI Journey | Real AI Course Reviews",
  description: "Real AI course reviews with practical takeaways, honest recommendations, and learning notes.",
};

export default function Home() {
  return (
    <div className="animate-fade-in space-y-20">
      <section className="pt-8 md:pt-12 pb-0 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-sage">
              <span>✨</span>
            <span>LEARNING IN PUBLIC</span>
          </p>
          <header className="mb-6">
            <h1 className="font-serif text-6xl md:text-7xl font-bold leading-tight tracking-tight mt-0 text-sage-dark">
              Why this blog <span className="text-sage-dark"></span>exists
            </h1>
            <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-sage-dark">
              My AI Journey — Documented So You Don't Have To Start From <span className="text-sage-dark">Scratch</span>
            </h2>
          </header>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-sage-dark">
            Real reviews from a real learner — so you can skip the guesswork and choose the right AI learning path for your work.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/general-ai-tools"
              className="inline-flex items-center justify-center rounded-full bg-sage-dark px-6 py-3 text-sm font-medium text-sage-dark transition hover:bg-sage focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none"
            >
              Browse Reviews →
            </Link>
            <Link
              href="/ai-in-the-real-world"
              className="inline-flex items-center justify-center rounded-full bg-sage-dark text-sage-light px-6 py-3 font-sans font-medium hover:bg-sage transition-colors"
            >
              See the Real-World Story →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-3xl text-sage-dark font-bold">Why This Exists</h2>
        <div className="mt-3 space-y-3 text-sage-dark">
          <p>
            Every time I completed a course or posted a certificate on LinkedIn, the same questions came up in my DMs and over coffee:
          </p>
          <p className="text-sage">'Was it worth it?' 'Is it too technical?' 'Should I take that one?'</p>
          <p>
            So I decided to just write it all down. This is my running log of every AI course I've taken — what I learned, what surprised me, and most importantly, whether I'd recommend it to someone like me.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h3 className="font-hand text-2xl text-sage">Who 'Someone Like Me' Is</h3>
        <div className="mt-3 space-y-3 text-sage-dark text-sm">
          <p>Before you trust my take, you should know where I'm coming from:</p>
          <ul className="list-disc list-inside marker:text-sage space-y-2 text-sage-dark">
            <li>I know Python — not an expert, but I can read and run it</li>
            <li>I've built advanced models in Excel for years</li>
            <li>I use Tableau and Alteryx regularly</li>
            <li>My workplace runs on Google — I'm comfortable with Workspace, Gemini, and Google's AI tools</li>
            <li>This site was built using vibe coding — AI-assisted development. No traditional web development background required.</li>
          </ul>
          <p>If that sounds like you, my assessments are probably well-calibrated for your starting point.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-3xl text-sage-dark font-bold">One Question Drives Every Review</h2>
        <p className="font-hand text-3xl text-sage text-center py-6 italic mt-1">
          Is this course worth your time — and money?
        </p>
        <p className="text-sage-dark text-lg leading-relaxed mt-3">
          Nothing more, nothing less. I'm not here to summarize the syllabus. I'm here to tell you what it felt like to sit through it, what actually stuck, and whether I'd do it again.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-headline text-3xl text-sage-dark font-bold">What You'll Find Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-card border border-sage-light rounded-lg p-6 border-l-4 border-l-sage-dark hover:-translate-y-0.5 transition-transform hover:border-l-sage transition-colors">
            <h3 className="font-serif text-xl text-sage-dark">General AI Tools</h3>
            <p className="mt-4 text-sage-dark text-sm">
              Courses on the tools reshaping how we work — and which one to reach for when.
            </p>
            <Link
              href="/general-ai-tools"
              className="mt-4 inline-block rounded-full bg-sage-dark px-4 py-2 text-sm font-medium text-white transition hover:bg-sage focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none"
            >
              See Reviews →
            </Link>
          </div>

          <div className="bg-card border border-sage-light rounded-lg p-6 border-l-4 border-l-sage-dark hover:-translate-y-0.5 transition-transform hover:border-l-sage transition-colors">
            <h3 className="font-serif text-xl text-sage-dark">Agents</h3>
            <p className="mt-4 text-sage-dark text-sm">
              What agentic AI actually is, whether you need it, and what's worth learning.
            </p>
            <Link
              href="/agents"
              className="mt-4 inline-block rounded-full bg-sage-dark px-4 py-2 text-sm font-medium text-white transition hover:bg-sage focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none"
            >
              See Reviews →
            </Link>
          </div>

          <div className="bg-card border border-sage-light rounded-lg p-6 border-l-4 border-l-sage-dark hover:-translate-y-0.5 transition-transform hover:border-l-sage transition-colors">
            <h3 className="font-serif text-xl text-sage-dark">AI in the Real <span className="text-sage-dark">World</span></h3>
            <p className="mt-4 text-sage-dark text-sm">
              How everything I've learned is changing the way I do real work. Spoiler: I used to spend a full week on market analysis. That's changing fast.
            </p>
            <Link
              href="/ai-in-the-real-world"
              className="mt-4 inline-block rounded-full bg-sage-dark px-4 py-2 text-sm font-medium text-white transition hover:bg-sage focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none"
            >
              See It →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-center italic text-sm text-sage-dark mt-16">
          This is a living document. I'm still learning. New reviews drop every couple of weeks, roughly in sync with my LinkedIn updates. If you've ever asked me 'what are you taking now?' — this page is my answer.
        </p>
      </section>
    </div>
  );
}
