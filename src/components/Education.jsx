import useReveal from "../hooks/useReveal";

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Kadi Sarva Vishwavidyalaya, Gandhinagar",
    period: "Pursuing",
    detail:
      "Focused on software engineering, cloud computing, and AI technologies while building scalable enterprise solutions.",
    score: "CGPA: 9.2 / 10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Saurashtra University, Rajkot",
    period: "2022 — 2025",
    detail:
      "Built a strong foundation in programming, data structures, and database management systems.",
    score: "CGPA: 8.6 / 10",
  },
];

function EducationItem({ item, index, isLast }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in-view" : ""} relative pl-10 sm:pl-14 pb-12 last:pb-0`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* timeline rail */}
      {!isLast && (
        <span className="absolute left-[7px] sm:left-[11px] top-3 bottom-0 w-px bg-ink-border" />
      )}
      {/* node */}
      <span className="absolute left-0 sm:left-1 top-1 h-4 w-4 rounded-full bg-ink-panel border-2 border-amber flex items-center justify-center">
        <span className="h-1.5 w-1.5 rounded-full bg-amber" />
      </span>

      <div className="rounded-xl border border-ink-border bg-ink-panel p-6 hover:border-amber/40 transition-colors duration-300 group">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="font-mono text-xs text-teal bg-teal/10 border border-teal/20 rounded-full px-2.5 py-1">
            {item.period}
          </span>
          <span className="font-mono text-xs text-amber">{item.score}</span>
        </div>
        <h3 className="font-display text-xl text-paper font-semibold group-hover:text-amber transition-colors">
          {item.degree}
        </h3>
        <p className="font-mono text-sm text-muted mt-1">{item.school}</p>
        <p className="font-body text-muted/90 mt-3 leading-relaxed text-sm">
          {item.detail}
        </p>
      </div>
    </div>
  );
}

export default function Education() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="education" className="relative py-24 bg-ink">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          ref={headRef}
          className={`reveal ${headVisible ? "in-view" : ""} mb-16 text-center`}
        >
          <p className="font-mono text-sm text-amber mb-3">// education.log</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">
            Academic Background
          </h2>
          <p className="font-body text-muted mt-4 max-w-xl mx-auto">
            A timeline of the milestones, courses, and certifications that
            shaped how I think about engineering.
          </p>
        </div>

        <div>
          {EDUCATION.map((item, i) => (
            <EducationItem
              key={item.degree}
              item={item}
              index={i}
              isLast={i === EDUCATION.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
