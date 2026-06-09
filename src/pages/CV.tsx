import { Download, Mail, Github, Linkedin, ExternalLink, MapPin, Phone } from "lucide-react";
import cvData from "../../data/cv.json";

type Section = { heading: string | null; bullets: string[] };
type Job = { role: string; company: string; period: string; sections: Section[] };
type Edu = { degree: string; institution: string; period: string; thesis: string; modules: string };
type Award = { title: string; description: string };
type Project = { name: string; description: string };

const cv = cvData as {
  header: { name: string; phone: string; email: string; linkedin: string; github: string; kaggle: string };
  projects: Project[];
  experience: Job[];
  education: Edu[];
  awards: Award[];
  skills: string[];
  publications: string[];
};

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="mb-md">
      <p className="font-mono text-xs font-bold text-primary-fixed uppercase tracking-[0.2em] mb-xs">{label}</p>
      <div className="h-px bg-outline-variant/40 w-full" />
    </div>
  );
}

export default function CV() {
  return (
    <div className="pt-xl pb-xl px-gutter max-w-container-max mx-auto">

      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
        <div>
          <p className="font-mono text-xs text-primary-fixed uppercase tracking-widest mb-xs">Curriculum Vitae</p>
          <h1 className="font-sans text-6xl font-bold leading-none">{cv.header.name}</h1>
          <div className="flex flex-wrap gap-md mt-md text-secondary font-mono text-xs">
            <span className="flex items-center gap-xs"><Phone size={12} />{cv.header.phone}</span>
            <span className="flex items-center gap-xs"><Mail size={12} />{cv.header.email}</span>
            <span className="flex items-center gap-xs"><MapPin size={12} />Lisbon, Portugal</span>
          </div>
          <div className="flex flex-wrap gap-md mt-sm">
            <a href={`https://${cv.header.github}`} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-xs font-mono text-xs text-secondary hover:text-primary-fixed transition-colors">
              <Github size={12} />{cv.header.github}
            </a>
            <a href={`https://${cv.header.linkedin}`} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-xs font-mono text-xs text-secondary hover:text-primary-fixed transition-colors">
              <Linkedin size={12} />{cv.header.linkedin}
            </a>
            <a href={`https://${cv.header.kaggle}`} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-xs font-mono text-xs text-secondary hover:text-primary-fixed transition-colors">
              <ExternalLink size={12} />{cv.header.kaggle}
            </a>
          </div>
        </div>
        <a
          href="/files/SeanGorman-CV.pdf"
          download
          className="shrink-0 flex items-center gap-sm bg-primary-fixed text-on-primary-fixed font-mono font-bold text-xs py-md px-lg rounded-lg glow-hover transition-all uppercase tracking-wider"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <div className="space-y-xl">

        {/* Projects */}
        <section>
          <SectionHeader label="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {cv.projects.map((p) => (
              <div key={p.name} className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-md hover:border-primary-fixed/50 transition-colors">
                <p className="font-sans font-bold text-on-surface mb-xs">{p.name}</p>
                <p className="font-sans text-sm text-secondary leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: p.description }} />
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <SectionHeader label="Experience" />
          <div className="space-y-lg">
            {cv.experience.map((job) => (
              <div key={job.role + job.company} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-xs md:gap-md">
                <div className="md:col-span-2 flex flex-col md:flex-row md:items-baseline justify-between gap-xs border-l-2 border-primary-fixed/40 pl-md">
                  <div>
                    <p className="font-sans font-bold text-lg text-on-surface">{job.role}</p>
                    <p className="font-sans text-sm text-secondary italic">{job.company}</p>
                  </div>
                  <span className="font-mono text-xs text-primary-fixed whitespace-nowrap">{job.period}</span>
                </div>
                <div className="md:col-span-2 pl-md space-y-sm">
                  {job.sections.map((sec, si) => (
                    <div key={si}>
                      {sec.heading && (
                        <p className="font-mono text-xs font-bold text-primary-fixed/70 uppercase tracking-widest mb-xs"
                           dangerouslySetInnerHTML={{ __html: sec.heading }} />
                      )}
                      <ul className="space-y-xs">
                        {sec.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-sm text-sm text-secondary leading-relaxed">
                            <span className="text-primary-fixed/50 mt-1 shrink-0">—</span>
                            <span dangerouslySetInnerHTML={{ __html: b }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education + Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          <section>
            <SectionHeader label="Education" />
            <div className="space-y-lg">
              {cv.education.map((e) => (
                <div key={e.degree} className="border-l-2 border-outline-variant/40 pl-md">
                  <p className="font-sans font-bold text-on-surface">{e.degree}</p>
                  <p className="font-sans text-sm text-secondary">{e.institution} · {e.period}</p>
                  <p className="font-sans text-sm text-secondary italic mt-xs">{e.thesis}</p>
                  <p className="font-mono text-xs text-outline mt-xs">{e.modules}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader label="Awards" />
            <div className="space-y-md">
              {cv.awards.map((a) => (
                <div key={a.title} className="bg-surface-container-low border-l-4 border-primary-fixed/60 pl-md py-sm pr-sm rounded-r-lg">
                  <p className="font-sans font-bold text-sm text-on-surface mb-xs">{a.title}</p>
                  <p className="font-sans text-sm text-secondary leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Skills */}
        <section>
          <SectionHeader label="Skills" />
          <div className="flex flex-wrap gap-xs">
            {cv.skills.map((skill) => (
              <span key={skill}
                className="px-sm py-xs bg-primary-fixed/5 border border-primary-fixed/30 text-primary-fixed font-mono text-xs rounded-sm uppercase hover:bg-primary-fixed/10 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section>
          <SectionHeader label="Academic Publications" />
          <ol className="space-y-sm list-none">
            {cv.publications.map((pub, i) => (
              <li key={i} className="flex gap-md text-sm text-secondary leading-relaxed">
                <span className="font-mono text-xs text-primary-fixed/60 shrink-0 mt-0.5">[{i + 1}]</span>
                <span dangerouslySetInnerHTML={{ __html: pub }} />
              </li>
            ))}
          </ol>
        </section>

      </div>
    </div>
  );
}
