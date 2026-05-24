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
  "Yes": "bg-sage text-cream",
  "Yes, if...": "bg-amber-100 text-amber-800",
  "Skip it": "bg-red-100 text-red-700",
};

const needItStyles: Record<NonNullable<CourseCardProps["needIt"]>, string> = {
  "Yes": "bg-sage text-cream",
  Depends: "bg-amber-100 text-amber-800",
  "Not yet": "bg-slate-100 text-slate-600",
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
    <article className="bg-card border border-[#B2C9B4] border-l-4 border-l-[#4A6741] rounded-lg p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:border-l-[#7C9A7E] transition-colors">
      <h2 className="font-headline text-xl font-bold text-ink">{title}</h2>
      <p className="text-sm text-sage mt-1">{provider}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="bg-sage-light text-ink text-xs font-medium px-3 py-1 rounded-full">{cost}</span>
        <span className="bg-sage-light text-ink text-xs font-medium px-3 py-1 rounded-full">{time}</span>
      </div>

      <p className="italic text-sm text-ink/75 mt-3">{description}</p>

      <div className="mt-4">
        <div className="font-subhead text-lg text-ink">My Take</div>
        <p className="mt-2 text-sm text-ink/75">{myTake}</p>
      </div>

      <p className="mt-3 text-sm text-ink/75">
        <span className="font-semibold text-ink">Best For:</span> {bestFor}
      </p>

      <div className="mt-4">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${worthItStyles[worthIt]}`}>
          Worth it? {worthIt}
        </span>
      </div>

      {needIt ? (
        <div className="mt-4">
          <span className="text-sm font-semibold text-ink">Do you actually need this?</span>
          <span className={`mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full ${needItStyles[needIt]}`}>
            {needIt}
          </span>
        </div>
      ) : null}
    </article>
  );
}
