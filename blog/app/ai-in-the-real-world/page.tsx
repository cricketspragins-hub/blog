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
    title: "Intermediate AI (where I am today)",
    tools: "Deep Research, NotebookLM, Gems, Workspace App Scripts",
    time: "1-2 days",
    quality: "More refined, better synthesis",
    whatChanged:
      "I know when to reach for which tool. I've built a prompt inventory I actually reuse. I work across multiple LLMs and iterate — layering in new data, asking the model to walk through its reasoning, and refining from there.",
    comingSoon: false,
  },
  {
    stage: 4,
    title: "Advanced AI",
    tools: "An early agent for TAM construction + RAG (Retrieval Augmented Generation)",
    time: "Hours",
    quality: "Higher precision, domain-specific",
    whatChanged:
      "I hand off the searching and initial TAM construction to a tool. I come in at the synthesis and judgment layer — which is where a strategist should be spending their time anyway.",
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
    <div className="animate-fade-in mx-auto max-w-4xl px-6 pb-12">
      <section className="pt-4 md:pt-6 pb-0">
        <header className="mb-6">
          <h1 className="font-serif text-4xl text-sage-dark font-bold">
            AI Applied: From Tools to Outputs
          </h1>
        </header>
      </section>

      <section className="py-10 md:py-14 space-y-3 text-sage-dark text-lg leading-relaxed">
        <p>
          I'm starting to see how agents could change how I build strategy. Most decks have 4-7 core slides. I think an agent could own at least two: the TAM and the Competitive Landscape.
        </p>
        <p>
          What follows is a before-and-after progression that mirrors my actual learning — not where I plan to be, but where I've been, where I am, and where I can now see myself going.
        </p>
      </section>

      <section className="py-10 md:py-14 space-y-4">
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

      <section className="py-10 md:py-14">
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
