import CourseCard from "../../components/CourseCard";

export const metadata = {
  title: "General AI Tools | My AI Journey",
  description: "General AI tool reviews and recommendations for which platforms to use and when.",
};

export default function GeneralAIToolsPage() {
  return (
    <div className="animate-fade-in mx-auto max-w-4xl px-6 pb-12">
      <section className="pt-4 md:pt-6 pb-0">
        <header className="mb-6">
          <h1 className="font-serif text-4xl text-sage-dark font-bold">
            General AI <span className="text-sage-dark">Tools</span>
          </h1>
          <p className="font-hand text-2xl text-sage mt-1">
            Which tool do I actually use — and when?
          </p>
        </header>
      </section>

      <section className="py-10 md:py-14 space-y-3 text-sage-dark text-lg leading-relaxed">
        <p>
          That's the question I kept asking myself when I started. Gemini, NotebookLM, Gems, Deep Research — they're all 'AI tools' but they do very different things. After taking several courses and experimenting on real work tasks, I started to develop a mental model for when to reach for which one.
        </p>
        <p>
          My reviews below reflect that lens. It's not just 'was the course good?' — it's 'did this help me make smarter choices about which tool to use?'
        </p>
      </section>

      <section className="py-10 md:py-14">
        <div className="font-subhead text-2xl text-sage mb-3">Course Reviews</div>
        <CourseCard
          title="Course Name Here"
          provider="Platform Name"
          cost="Free / $XX"
          time="X hours"
          description="One sentence about what this course covers."
          myTake="Your honest 2-3 sentence review goes here. What surprised you. What stuck."
          bestFor="Who this is ideal for"
          worthIt="Yes"
        />
      </section>
    </div>
  );
}
