import type { Technology } from '../../../data/aboutData';

const TechCarousel = ({ technologies }: { technologies: Technology[] }) => (
  <div className="mt-16 overflow-hidden">
    <p className="text-[var(--muted)] text-xs tracking-widest uppercase mb-6">Tech Stack</p>
    <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
      {[...technologies, ...technologies].map((tech, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--muted)] whitespace-nowrap"
        >
          <span className="text-[var(--lime)]">{tech.icon}</span>
          {tech.name}
        </div>
      ))}
    </div>
  </div>
);

export default TechCarousel;