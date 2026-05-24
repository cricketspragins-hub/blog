interface TamStage {
  stage: number;
  title: string;
  tools: string;
  time: string;
  quality: string;
  whatChanged: string;
  comingSoon: boolean;
}

const stages: TamStage[] = [
  {
    stage: 1,
    title: "Before AI",
    tools: "Traditional research (Google, reports, intuition)",
    time: "1 week",
    quality: "Good",
    whatChanged:
      "Nothing yet — this is the baseline. Hours of manual research, a day to build the slide, another to revise and socialize.",
    comingSoon: false,
  },
  {
    stage: 2,
    title: "Basic AI",
    tools: "Deep Research",
    time: "2-3 days",
    quality: "Better, more comprehensive sourcing",
    whatChanged:
      "Research that took days now takes hours. Broader coverage, less manual effort.",
    comingSoon: false,
  },
  {
    stage: 3,
    title: "Intermediate AI",
    tools: "Deep Research + NotebookLM",
    time: "1-2 days",
    quality: "More refined, better synthesis",
    whatChanged:
      "NotebookLM helps synthesize large documents and surface insights I would have missed.",
    comingSoon: true,
  },
  {
    stage: 4,
    title: "Advanced AI",
    tools: "+ RAG (Retrieval Augmented Generation)",
    time: "Hours",
    quality: "Higher precision, domain-specific",
    whatChanged:
      "Bringing in proprietary data and domain knowledge lifts the output quality significantly.",
    comingSoon: true,
  },
  {
    stage: 5,
    title: "Expert AI",
    tools: "Domain-specific Agent",
    time: "1-2 hours",
    quality: "Repeatable, scalable, institutional",
    whatChanged:
      "A specialized agent that knows the domain runs the process while I focus on decisions.",
    comingSoon: true,
  },
];

function getBorderClass(stage: number) {
  if (stage === 1) return "border-l-4 border-l-sage-light";
  if (stage === 2) return "border-l-4 border-l-sage";
  return "border-l-4 border-l-sage-dark";
}

export const metadata = {
  title: "AI in the Real World | My AI Journey",
  description: "A real-world case study showing how AI changes work, from weekly analysis to repeatable processes.",
};

export default function RealWorldPage() {
  return (
    <div className="animate-fade-in mx-auto max-w-4xl px-6 pb-16">
      <section className="pt-6 md:pt-8 pb-0">
        <header className="mb-6">
          <h1 className="font-serif text-4xl text-sage-dark font-bold">
            AI in the Real <span className="text-sage-dark">World</span>
          </h1>
          <p className="font-hand text-2xl text-sage mt-1">
            How this changes actual work — not just what you know
          </p>
        </header>
      </section>

      <section className="py-16 md:py-24 space-y-3 text-sage-dark text-lg leading-relaxed">
        <p>
          Learning AI tools is one thing. Using them to do real work faster and better is another. This section documents exactly that — using a real task I do regularly as a before-and-after case study.
        </p>
        <p>
          The task: building a TAM (Total Addressable Market analysis) for a new business opportunity. It used to take me a week. Here's how that's changing.
        </p>
      </section>

      <section className="py-16 md:py-24 space-y-4">
        {stages.map((stage) => (
          <div
            key={stage.stage}
            className={`relative bg-card border border-sage-light rounded-lg p-6 mt-4 ${getBorderClass(
              stage.stage,
            )} hover:border-l-sage transition-colors`}
          >
            <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-sage text-cream font-bold">
              {stage.stage}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-headline text-xl text-sage-dark">{stage.title}</h2>
              {stage.comingSoon ? (
                <span className="bg-sage-light/30 text-sage-dark text-xs px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              ) : null}
            </div>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-sage-dark">🛠 Tools</dt>
                <dd className="mt-1 text-sm text-sage-dark/75">{stage.tools}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-sage-dark">⏱ Time</dt>
                <dd className="mt-1 text-sm text-sage-dark/75">{stage.time}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-sage-dark">✨ Output Quality</dt>
                <dd className="mt-1 text-sm text-sage-dark/75">{stage.quality}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-sage-dark">💡 What Changed</dt>
                <dd className="mt-1 text-sm text-sage-dark/75">{stage.whatChanged}</dd>
              </div>
            </dl>
          </div>
        ))}
      </section>

      <section className="py-16 md:py-24">
        <h2 className="font-subhead text-2xl text-sage">Why this matters</h2>
        <div className="mt-4 space-y-4 text-sage-dark/75 text-lg leading-relaxed">
          <p>
            The goal was never to learn AI for its own sake. It was to get better outputs in less time — and eventually, to build processes that run themselves. That's what this progression shows.
          </p>
          <p>I'll update each stage as I reach it.</p>
        </div>
      </section>
    </div>
  );
}
