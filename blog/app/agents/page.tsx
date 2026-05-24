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
        </header>
      </section>

      <section className="py-10 md:py-14">
        <h2 className="font-serif text-3xl text-sage-dark font-bold">Three questions about agents</h2>
        <p className="mt-3 text-sage-dark leading-relaxed text-lg">
          When I started taking courses, I was searching for answers to these key questions.
        </p>
        <div className="mt-3 space-y-3">
            <div className="bg-card border border-sage-light rounded-lg p-6 border-l-4 border-l-sage-dark hover:border-l-sage transition-colors">
            <h3 className="font-hand text-xl text-sage">What exactly is an Agent?</h3>
            <p className="text-sage-dark mt-2 leading-relaxed">
              Is it an app? A bot? Code I have to write? And once it exists — where does it actually live?
            </p>
          </div>

            <div className="bg-card border border-sage-light rounded-lg p-6 border-l-4 border-l-sage-dark hover:border-l-sage transition-colors">
            <h3 className="font-hand text-xl text-sage">Can I use an agent?</h3>
            <p className="text-sage-dark mt-2 leading-relaxed">
              Or is this only relevant for operational, repeatable tasks — and not for the judgment-heavy work that strategy roles actually do?
            </p>
          </div>

            <div className="bg-card border border-sage-light rounded-lg p-6 border-l-4 border-l-sage-dark hover:border-l-sage transition-colors">
            <h3 className="font-hand text-xl text-sage">What does using an agent really look like?</h3>
            <p className="text-sage-dark mt-2 leading-relaxed">
              Not in a demo — in an actual workday. What do I hand off, what do I still own, and what does the output look like?
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
