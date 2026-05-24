interface CourseCardProps {
  title: string;
  provider: string;
  cost: string;
  time: string;
  description: string;
  myTake: string;
  bestFor: string;
  worthIt: "Yes" | "Yes, if..." | "Skip it";
  needIt?: "Yes" | "Depends" | "Not yet";
}

const worthItStyles: Record<CourseCardProps["worthIt"], string> = {
  "Yes": "bg-sage-dark text-sage-light",
  "Yes, if...": "bg-sage-light text-sage-dark",
  "Skip it": "bg-sage-light/80 text-sage-dark",
};

const needItStyles: Record<NonNullable<CourseCardProps["needIt"]>, string> = {
  "Yes": "bg-sage-dark text-sage-light",
  Depends: "bg-sage-light text-sage-dark",
  "Not yet": "bg-sage-light/80 text-sage-dark",
};

export default function CourseCard({
  title,
  provider,
  cost,
  time,
  description,
  myTake,
  bestFor,
  worthIt,
  needIt,
}: CourseCardProps) {
  return (
    <article className="bg-card border border-sage-light border-l-4 border-l-sage-dark rounded-lg p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:border-l-sage transition-colors">
      <h2 className="font-serif text-xl font-bold text-sage-dark">{title}</h2>
      <p className="text-sm text-sage-dark mt-1">{provider}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="bg-sage-light text-sage-dark text-xs font-medium px-3 py-1 rounded-full">{cost}</span>
        <span className="bg-sage-light text-sage-dark text-xs font-medium px-3 py-1 rounded-full">{time}</span>
      </div>

      <p className="italic text-sm text-sage-dark mt-3">{description}</p>

      <div className="mt-4">
        <div className="font-hand text-lg text-sage-dark">My Take</div>
        <p className="mt-2 text-sm text-sage-dark">{myTake}</p>
      </div>

      <p className="mt-3 text-sm text-sage-dark">
        <span className="font-semibold text-sage-dark">Best For:</span> {bestFor}
      </p>

      <div className="mt-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${worthItStyles[worthIt]}`}>
          Worth it? {worthIt}
        </span>
      </div>

      {needIt ? (
        <div className="mt-4">
          <span className="text-sm font-semibold text-sage-dark">Do you actually need this?</span>
          <span className={`mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full ${needItStyles[needIt]}`}>
            {needIt}
          </span>
        </div>
      ) : null}
    </article>
  );
}
