import { Terminal, Code2, Bolt, Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <div className="pt-xl pb-xl px-gutter max-w-container-max mx-auto">
      {/* Hero Section: The Bio-ML Synthesis */}
      <section className="mb-xl relative">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-fixed/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl relative z-10">
          <p className="font-mono text-xs text-primary-fixed mb-xs uppercase tracking-widest font-bold">
            Bridging domains // Building futures
          </p>
          <h1 className="font-sans text-6xl md:text-[60px] font-bold text-on-background mb-md leading-none tracking-tighter">
            The Bio-ML Synthesis
          </h1>
          <p className="font-sans text-lg text-secondary max-w-2xl">
            Forging a new frontier where biological complexity meets computational precision. As a hybrid architect, I engineer systems that translate genomic language into actionable machine intelligence, scaling from single-cell analysis to distributed production environments.
          </p>
        </div>
      </section>

      {/* Bento Grid: The Journey & Competencies */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-md mb-xl">
        {/* Journey Card */}
        <div className="md:col-span-8 bg-surface-container-low border border-outline-variant/30 p-lg relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="font-mono text-xs font-bold text-primary-fixed mb-md uppercase">The Journey</h2>
            <div className="space-y-lg">
              
              <div className="flex gap-md">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary-fixed"></div>
                  <div className="w-px h-full bg-outline-variant/50"></div>
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-on-surface mb-xs">Biology Background</h3>
                  <p className="font-sans text-base text-secondary">Foundational expertise in wet-lab protocols and molecular biology. Understanding the organic entropy before attempting digital synthesis.</p>
                </div>
              </div>
              
              <div className="flex gap-md">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary-fixed"></div>
                  <div className="w-px h-full bg-outline-variant/50"></div>
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-on-surface mb-xs">ML Research</h3>
                  <p className="font-sans text-base text-secondary">Applying deep learning to high-dimensional genomic datasets. Developing transformer-based models for protein folding and sequence prediction.</p>
                </div>
              </div>
              
              <div className="flex gap-md">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary-fixed"></div>
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-on-surface mb-xs">Entrepreneurial Engineer</h3>
                  <p className="font-sans text-base text-secondary">Deploying scalable AI agents into the market. Focusing on the "last mile" of biotechnology: turning research into robust, distributed products.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Competencies Card */}
        <div className="md:col-span-4 flex flex-col gap-md">
          <div className="bg-surface-container-low border border-outline-variant/30 p-md h-full">
            <h2 className="font-mono text-xs font-bold text-primary-fixed mb-md uppercase">Core Competencies</h2>
            <div className="flex flex-wrap gap-xs">
              {['Distributed Systems', 'Agentic Workflows', 'Molecular Biology', 'Computational Genomics', 'PyTorch', 'Rust'].map(comp => (
                <span key={comp} className="px-sm py-xs bg-primary-fixed/5 border border-primary-fixed text-primary-fixed font-mono text-xs rounded-sm uppercase">
                  {comp}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-primary-fixed p-md flex flex-col justify-end min-h-[120px]">
            <Bolt className="text-surface mb-xs" size={30} />
            <h3 className="font-sans text-2xl font-bold text-surface">Accelerating Discovery</h3>
            <p className="font-mono text-xs text-surface/80">Operationalizing the bench-to-cloud pipeline.</p>
          </div>
        </div>
      </section>

      {/* Narrative & Code Synthesis */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl items-center">
        <div>
          <h2 className="font-sans text-4xl font-bold text-on-background mb-md">Engineering the Lab-to-Code Pipeline</h2>
          <div className="space-y-sm font-sans text-base text-secondary">
            <p>I believe the next decade of innovation won't come from software or biology alone, but from the seamless integration of both. My work focuses on building the infrastructure that allows biological data to be treated as first-class software objects.</p>
            <p>By leveraging <span className="text-primary-fixed">Distributed Systems</span> and <span className="text-primary-fixed">Agentic Workflows</span>, I automate the interpretation of massive genomics datasets, allowing for real-time hypothesis generation and testing.</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant/20 p-md border-l-2 border-l-primary-fixed">
          <div className="flex items-center gap-xs mb-md border-b border-outline-variant/10 pb-xs">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim/30"></div>
            <div className="w-3 h-3 rounded-full bg-primary-fixed/30"></div>
            <span className="ml-auto font-mono text-xs text-secondary-fixed-dim/50 uppercase">genomic_engine.rs</span>
          </div>
          <pre className="font-mono text-sm overflow-x-auto text-secondary">
<span className="text-primary-fixed">impl</span> <span className="text-on-surface">SynthesisEngine</span> {"{"}
    <span className="text-primary-fixed">pub fn</span> <span className="text-primary-fixed-dim">bridge_domains</span>(&self, bio_data: <span className="text-secondary">GenomicSequence</span>) -{">"} <span className="text-secondary">MLInput</span> {"{"}
        <span className="text-on-surface-variant/50">// Normalizing biological entropy...</span>
        <span className="text-primary-fixed">let</span> features = self.distributed_node.process(bio_data);
        <span className="text-primary-fixed">let</span> agents = <span className="text-on-surface">AgenticSwarm</span>::<span className="text-primary-fixed-dim">new</span>(<span className="text-secondary">"GenomicInterpreter"</span>);
        
        agents.<span className="text-primary-fixed-dim">synthesize</span>(features)
    {"}"}
{"}"}
          </pre>
        </div>
      </section>

      {/* Visual Anchor: Abstract Cell Representation */}
      <section className="w-full h-64 md:h-96 mb-xl relative bg-surface-container-low overflow-hidden rounded-lg group">
        <img 
          className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
          alt="Visual anchor"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        <div className="absolute bottom-md left-md z-10">
          <p className="font-mono text-xs text-primary-fixed uppercase tracking-tighter font-bold">Visualizing the Neural-Genomic Interface</p>
          <h3 className="font-sans text-2xl font-bold text-on-surface">Synthetic Biota v4.2</h3>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-surface-container border border-outline-variant/30 p-lg md:p-xl rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div>
            <h2 className="font-sans text-4xl font-bold text-on-background mb-md">Initialize Connection</h2>
            <p className="font-sans text-base text-secondary mb-lg">Available for deep-tech consulting, research collaboration, or strategic partnerships at the intersection of Bio and AI.</p>
            <div className="space-y-sm">
              <div className="flex items-center gap-md">
                <Mail className="text-primary-fixed shrink-0" size={12} />
                <span className="font-mono text-sm text-on-surface">seangorman117@gmail.com</span>
              </div>
              <div className="flex items-center gap-md">
                <MapPin className="text-primary-fixed shrink-0" size={12} />
                <span className="font-mono text-sm text-on-surface">Lisbon, Portugal</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-md">
            <a
              href="https://github.com/SeanGormann"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-sm p-lg bg-surface-container-low border border-outline-variant/30 rounded-xl hover:border-primary-fixed hover:bg-surface-container-high transition-all duration-300"
            >
              <Github size={27} className="text-secondary group-hover:text-primary-fixed transition-colors duration-300" />
              <span className="font-mono text-xs uppercase tracking-widest text-secondary group-hover:text-primary-fixed transition-colors">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/seangorman8"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-sm p-lg bg-surface-container-low border border-outline-variant/30 rounded-xl hover:border-primary-fixed hover:bg-surface-container-high transition-all duration-300"
            >
              <Linkedin size={27} className="text-secondary group-hover:text-primary-fixed transition-colors duration-300" />
              <span className="font-mono text-xs uppercase tracking-widest text-secondary group-hover:text-primary-fixed transition-colors">LinkedIn</span>
            </a>

            <a
              href="mailto:seangorman117@gmail.com"
              className="group flex flex-col items-center justify-center gap-sm p-lg bg-surface-container-low border border-outline-variant/30 rounded-xl hover:border-primary-fixed hover:bg-surface-container-high transition-all duration-300"
            >
              <Mail size={27} className="text-secondary group-hover:text-primary-fixed transition-colors duration-300" />
              <span className="font-mono text-xs uppercase tracking-widest text-secondary group-hover:text-primary-fixed transition-colors">Email</span>
            </a>

            <a
              href="https://www.kaggle.com/seangormann"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-sm p-lg bg-surface-container-low border border-outline-variant/30 rounded-xl hover:border-primary-fixed hover:bg-surface-container-high transition-all duration-300"
            >
              <ExternalLink size={27} className="text-secondary group-hover:text-primary-fixed transition-colors duration-300" />
              <span className="font-mono text-xs uppercase tracking-widest text-secondary group-hover:text-primary-fixed transition-colors">Kaggle</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
