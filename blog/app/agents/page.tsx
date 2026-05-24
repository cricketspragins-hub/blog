import Link from "next/link";
import CourseCard from "../../components/CourseCard";

export const metadata = {
  title: "Agents | My AI Journey",
  description: "Agentic AI reviews, practical learnings, and whether this emerging category is worth your time.",
};

export default function AgentsPage() {
  return (
    <div className="animate-fade-in mx-auto max-w-4xl px-6 pb-12">
      <section className="pt-4 md:pt-6 pb-0">
        <header className="mb-6">
          <h1 className="font-serif text-4xl text-sage-dark font-bold">
            <span className="text-sage-dark">Agents</span>
          </h1>
          <p className="font-hand text-2xl text-sage mt-1">
            What exactly is this — and do I need to know it?
          </p>
        </header>
      </section>

      <section className="py-10 md:py-14">
        <h2 className="font-serif text-3xl text-sage-dark font-bold">Three questions I needed answered before anything else</h2>
        <p className="mt-3 text-sage-dark leading-relaxed text-lg">
          When I started hearing about 'agentic AI' I had the same reaction most people have: vague curiosity mixed with mild panic. So before I dive into course reviews, here's where I landed on my three core questions:
        </p>
        <div className="mt-3 space-y-3">
            <div className="bg-card border border-sage-light rounded-lg p-6 border-l-4 border-l-sage-dark hover:border-l-sage transition-colors">
            <h3 className="font-hand text-xl text-sage">What exactly is this?</h3>
            <p className="text-sage-dark mt-2 leading-relaxed">
              An agent is an AI that doesn't just answer a question — it takes a sequence of actions to complete a task. Think less 'smart search' and more 'capable intern who works while you sleep.'
            </p>
          </div>

            <div className="bg-card border border-sage-light rounded-lg p-6 border-l-4 border-l-sage-dark hover:border-l-sage transition-colors">
            <h3 className="font-hand text-xl text-sage">Can I use them?</h3>
            <p className="text-sage-dark mt-2 leading-relaxed">
              Yes. You don't need to be a developer. There are no-code and low-code ways to build and use agents that are well within reach if you're comfortable with tools like Alteryx or Google Workspace.
            </p>
          </div>

            <div className="bg-card border border-sage-light rounded-lg p-6 border-l-4 border-l-sage-dark hover:border-l-sage transition-colors">
            <h3 className="font-hand text-xl text-sage">What does that actually look like?</h3>
            <p className="text-sage-dark mt-2 leading-relaxed">
              That's where the Real World section comes in. The short answer: think about any multi-step research or analysis task you do repeatedly at work. That's your agent opportunity. The courses below helped me go from confused to hands-on.
            </p>
          </div>
        </div>

        <Link
          href="/ai-in-the-real-world"
          className="mt-6 inline-block text-sage underline font-medium focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none"
        >
          See it in action → AI in the Real World
        </Link>
      </section>

      <section className="py-10 md:py-14">
        <div className="font-subhead text-2xl text-sage mb-6">Course Reviews</div>
        <CourseCard
          title="Course Name Here"
          provider="Platform Name"
          cost="Free / $XX"
          time="X hours"
          description="One sentence about what this course covers."
          myTake="Your honest 2-3 sentence review goes here. What surprised you. What stuck."
          bestFor="Who this is ideal for"
          worthIt="Yes"
          needIt="Depends"
        />
      </section>
    </div>
  );
}
