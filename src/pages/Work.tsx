import {
  ArrowUpRight,
  Database,
  Github,
  Lock,
  Server,
  Terminal,
} from "lucide-react";
import workData from "../../data/work.json";
import cvData from "../../data/cv.json";

type Project = {
  id: string;
  name: string;
  badge?: string;
  description: string;
  github: string;
  tags: string[];
};
type Classified = { id: string; title: string };
type EngineeringCard = {
  category: string;
  title: string;
  description: string;
  metrics?: { label: string; value: string }[];
  span: number;
};
type FoundationModel = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  span: number;
};

const work = workData as {
  interestsIntro: string;
  interestTitles: string[];
  projects: Project[];
  classified: Classified[];
  engineering: EngineeringCard[];
  foundationModels: FoundationModel[];
};

const publications = (cvData as { publications: string[] }).publications;

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-sm mb-lg">
      <h2 className="font-sans text-4xl font-bold text-primary">{title}</h2>
      <div className="h-px flex-grow bg-outline-variant/30" />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-row bg-surface-container-low border border-outline-variant/30 rounded-xl overflow-hidden hover:border-primary-fixed/50 transition-all duration-300"
    >
      <div className="flex-1 p-md flex flex-col min-w-0">
        <div className="flex items-start justify-between gap-sm mb-sm">
          <h3 className="font-sans text-xl font-bold text-tertiary group-hover:text-primary-fixed transition-colors">
            {project.name}
          </h3>
          {project.badge && (
            <span className="font-mono text-[10px] text-primary-fixed border border-primary-fixed/30 px-2 py-0.5 shrink-0">
              {project.badge}
            </span>
          )}
        </div>
        <p className="font-sans text-sm text-secondary mb-md">{project.description}</p>
        <div className="flex flex-wrap gap-xs mb-md">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] font-bold uppercase border border-primary-fixed/20 bg-primary-fixed/5 px-2 py-1 text-primary-fixed"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="font-mono text-xs text-secondary group-hover:text-primary-fixed flex items-center gap-1 transition-colors mt-auto">
          <Github size={12} />
          VIEW REPO
          <ArrowUpRight size={11} />
        </span>
      </div>
      <div className="w-28 sm:w-36 md:w-44 shrink-0 bg-surface-container-high border-l border-outline-variant/20 flex items-center justify-center">
        <div className="w-[70%] aspect-square border border-dashed border-outline-variant/40 rounded-lg flex items-center justify-center">
          <span className="font-mono text-[10px] text-on-surface-variant/40 uppercase tracking-widest">
            Image
          </span>
        </div>
      </div>
    </a>
  );
}

function ClassifiedCard({ item }: { item: Classified }) {
  return (
    <div className="classified-card relative bg-classified-surface border border-error/30 rounded-xl overflow-hidden p-md flex flex-col min-h-[280px]">
      <div className="classified-hatch absolute inset-0 pointer-events-none" />
      <div className="absolute top-sm right-sm font-mono text-[10px] text-error border border-error/40 px-2 py-0.5 tracking-widest">
        CLASSIFIED
      </div>
      <Lock className="classified-lock mb-md relative z-10" size={18} />
      <h3 className="font-sans text-xl font-bold text-classified-text mb-sm relative z-10">
        {item.title}
      </h3>
      <div className="space-y-xs mb-md relative z-10 flex-1">
        <div className="classified-redact-bar w-full" />
        <div className="classified-redact-bar w-[90%]" />
        <div className="classified-redact-bar w-[75%]" />
        <div className="classified-redact-bar w-[85%]" />
      </div>
      <div className="flex flex-wrap gap-xs relative z-10">
        {["REDACTED", "DEEPWORK", "████████"].map((tag) => (
          <span
            key={tag}
            className="classified-tag font-mono text-[10px] uppercase border px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="font-mono text-[10px] text-classified-muted mt-md relative z-10 tracking-wider">
        CLEARANCE REQUIRED // DEEPWORK INTERNAL
      </p>
    </div>
  );
}

const MODEL_ICONS = [Server, Database, Terminal, Server];

function FoundationModelCard({
  model,
  iconIndex,
}: {
  model: FoundationModel;
  iconIndex: number;
}) {
  const Icon = MODEL_ICONS[iconIndex % MODEL_ICONS.length];

  return (
    <div className="md:col-span-6 bg-surface-container-low border border-surface-container-highest p-md flex flex-col justify-between glow-hover transition-all">
      <div>
        <div className="flex justify-between items-start mb-md">
          <span className="font-mono text-xs text-primary-fixed border border-primary-fixed/30 px-2 py-1">
            {model.id}
          </span>
          <Icon className="text-secondary" size={18} />
        </div>
        <h3 className="font-sans text-2xl font-bold text-primary mb-sm">{model.name}</h3>
        <p className="font-sans text-base text-secondary mb-md">{model.description}</p>
        <div className="flex flex-wrap gap-xs">
          {model.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] font-bold uppercase border border-primary-fixed/20 bg-primary-fixed/5 px-2 py-1 text-primary-fixed"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div className="pt-xl pb-xl max-w-container-max mx-auto px-gutter space-y-xl">
      <header className="py-lg border-l-2 border-primary-fixed pl-md">
        <div className="font-mono text-xs text-primary-fixed uppercase tracking-widest mb-xs">
          Portfolio . v4.2
        </div>
        <h1 className="font-sans text-6xl font-bold text-primary mb-sm leading-tight">
          The Work
        </h1>
        <p className="font-sans text-lg text-secondary max-w-2xl">
          Research, engineering, and projects at the intersection of biological
          intelligence and scalable systems.
        </p>
      </header>

      {/* My Interests */}
      <section>
        <SectionHeading title="My Interests" />
        <p className="font-sans text-base text-secondary max-w-3xl leading-relaxed mb-lg">
          {work.interestsIntro}
        </p>
        <div className="flex flex-wrap gap-xs">
          {work.interestTitles.map((title) => (
            <span
              key={title}
              className="px-sm py-xs bg-surface-container-low border border-outline-variant/30 text-tertiary font-mono text-xs rounded-sm hover:border-primary-fixed/40 transition-colors"
            >
              {title}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <SectionHeading title="Projects" />
        <div className="space-y-md mb-lg">
          {work.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <p className="font-mono text-xs text-on-surface-variant/60 uppercase tracking-widest mb-md">
          Classified // Current Role
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          {work.classified.map((item) => (
            <ClassifiedCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Engineering */}
      <section>
        <SectionHeading title="Engineering" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {work.engineering.map((card) => (
            <div
              key={card.title}
              className={`${
                card.span === 8 ? "md:col-span-8" : "md:col-span-4"
              } bg-engineering-surface border border-engineering-border hover:border-primary-fixed transition-colors p-lg flex flex-col justify-between`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-primary-fixed uppercase mb-sm block">
                  {card.category}
                </span>
                <h3
                  className={`font-sans font-bold mb-md ${
                    card.span === 8 ? "text-4xl" : "text-2xl"
                  }`}
                >
                  {card.title}
                </h3>
                <p className="text-secondary font-sans text-base mb-md">{card.description}</p>
                {card.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm border-t border-outline-variant/30 pt-md">
                    {card.metrics.map((metric) => (
                      <div key={metric.label}>
                        <span className="font-mono text-xs text-outline uppercase block mb-1">
                          {metric.label}
                        </span>
                        <span className="font-mono text-sm text-primary-fixed">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {card.span === 4 && card.category === "Bio-Agents" && (
                <div className="mt-lg">
                  <div className="bg-surface-container-lowest p-sm border border-outline-variant/20 relative overflow-hidden flex h-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-fixed/20 to-transparent animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section>
        <SectionHeading title="Research" />

        <div className="mb-lg">
          <h3 className="font-sans text-2xl font-bold text-primary mb-sm">
            Foundation Models
          </h3>
          <p className="font-sans text-base text-secondary max-w-3xl">
            Models I respect and have applied, fine-tuned, or built upon in research and
            production work. Full credit and rights belong to the original
            authors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-md mb-xl">
          {work.foundationModels.map((model, i) => (
            <FoundationModelCard key={model.id} model={model} iconIndex={i} />
          ))}
        </div>

        <div className="flex items-center gap-sm mb-lg">
          <h3 className="font-sans text-2xl font-bold text-primary">
            Selected Publications
          </h3>
          <div className="h-px flex-grow bg-outline-variant/30" />
        </div>
        <ol className="space-y-md list-none">
          {publications.map((pub, i) => (
            <li
              key={i}
              className="group p-md hover:bg-surface-container-low border-l-2 border-transparent hover:border-primary-fixed transition-all"
            >
              <div className="flex gap-md">
                <span className="font-mono text-xs text-primary-fixed/60 shrink-0 mt-0.5">
                  [{i + 1}]
                </span>
                <span
                  className="font-sans text-sm text-secondary leading-relaxed group-hover:text-on-surface transition-colors"
                  dangerouslySetInnerHTML={{ __html: pub }}
                />
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
