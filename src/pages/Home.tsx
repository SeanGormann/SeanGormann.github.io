import { ArrowRight, FolderOpen, Microscope, Cpu, Network } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[690px] flex flex-col items-center justify-center overflow-hidden grid-background px-gutter">
        <div className="relative z-10 max-w-4xl text-center space-y-md">
          <div className="inline-block px-sm py-1 border border-primary-fixed/30 bg-primary-fixed/5 rounded-full mb-md">
            <span className="font-mono text-xs text-primary-fixed uppercase tracking-[0.2em]">
              System Status: Operational
            </span>
          </div>
          <h1 className="font-mono text-6xl md:text-8xl font-bold text-primary-fixed tracking-tighter terminal-cursor">
            BIO-ML // ARCHITECT
          </h1>
          <p className="font-sans text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Scaling biological intelligence through{" "}
            <span className="text-tertiary">distributed training</span> and{" "}
            <span className="text-tertiary">multi-agent systems</span>. Bridging
            the gap between genomic complexity and algorithmic efficiency.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-md pt-lg">
            <button className="bg-primary-fixed text-on-primary-fixed font-mono font-bold text-xs py-md px-lg rounded-lg transition-all duration-300 transform active:scale-95 glow-hover flex items-center gap-xs uppercase tracking-wider">
              INITIATE COLLABORATION
              <ArrowRight size={12} />
            </button>
            <button className="border border-outline-variant bg-surface-container-low/50 backdrop-blur-sm text-on-surface font-mono font-bold text-xs py-md px-lg rounded-lg transition-all hover:bg-surface-container-high flex items-center gap-xs uppercase tracking-wider">
              VIEW CORE REPOS
              <FolderOpen size={12} />
            </button>
          </div>
        </div>
        
        {/* Absolute Decorative Corners */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-primary-fixed/20 hidden lg:block"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-primary-fixed/20 hidden lg:block"></div>
      </section>

      {/* Stats Section */}
      <section className="py-xl border-y border-outline-variant/20 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="group p-lg bg-surface-container-low border border-outline-variant/30 rounded-lg hover:border-primary-fixed/50 transition-all duration-500">
            <div className="font-mono text-xs text-primary-fixed uppercase mb-xs tracking-widest">
              Archive.01
            </div>
            <div className="font-sans text-6xl font-bold text-tertiary mb-sm tabular-nums">
              5+
            </div>
            <div className="font-sans text-base text-secondary border-l-2 border-primary-fixed pl-md">
              Publications in high-impact computational biology journals and ML conferences.
            </div>
          </div>
          <div className="group p-lg bg-surface-container-low border border-outline-variant/30 rounded-lg hover:border-primary-fixed/50 transition-all duration-500">
            <div className="font-mono text-xs text-primary-fixed uppercase mb-xs tracking-widest">
              Protocol.02
            </div>
            <div className="font-sans text-6xl font-bold text-tertiary mb-sm tabular-nums">
              10+
            </div>
            <div className="font-sans text-base text-secondary border-l-2 border-primary-fixed pl-md">
              ML Hackathons won, focusing on drug discovery and protein folding optimization.
            </div>
          </div>
          <div className="group p-lg bg-surface-container-low border border-outline-variant/30 rounded-lg hover:border-primary-fixed/50 transition-all duration-500">
            <div className="font-mono text-xs text-primary-fixed uppercase mb-xs tracking-widest">
              Compute.03
            </div>
            <div className="font-sans text-6xl font-bold text-tertiary mb-sm tabular-nums">
              500B+
            </div>
            <div className="font-sans text-base text-secondary border-l-2 border-primary-fixed pl-md">
              Tokens trained across distributed clusters for genomic foundation models.
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Focus Areas */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <h2 className="font-sans text-4xl font-bold mb-lg flex items-center gap-sm">
          <Microscope className="text-primary-fixed" size={24} />
          CORE DOMAINS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          <div className="md:col-span-8 bg-surface-container-high rounded-xl overflow-hidden relative group min-h-[225px] md:min-h-[270px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb3jZZtzzJ9iIP4e-wOHUreBEOreSbaACt-VlRmrifJl5wtCdaTo-x16PhPjt4eGt0EmpVPA9SxunQXmQd_hEOFM1aBftVStn6HHIPn8QNqFjgys-mES0hGunsDhemV1mkTU3wXj79znTbGyTQ-QdcXp7SAujveLsfi9KyMsKlwtiSB6T2j4UMpOJ3qfQjcvU7L9zf_2CYTRNqZLWmmfkZUq4QepXx-uqjJgBIIYe0qrJNkrxRyxTF3uRkGH30DXRxHinAxr9_UQd8"
              alt="Neural Genomics"
            />
            <div className="absolute inset-0 p-lg flex flex-col justify-end bg-gradient-to-t from-background via-background/80 to-transparent">
              <div className="font-mono text-xs text-primary-fixed font-bold mb-xs tracking-widest uppercase">NEURAL GENOMICS</div>
              <h3 className="font-sans text-3xl font-bold text-tertiary mb-sm leading-tight">Large Language Models for Protein Sequencing</h3>
              <p className="text-secondary text-lg">Developing attention-based architectures to predict secondary structures and functional motifs in non-coding DNA.</p>
            </div>
          </div>
          <div className="md:col-span-4 bg-surface-container border border-outline-variant/30 rounded-xl p-lg flex flex-col justify-between hover:bg-surface-container-high transition-colors min-h-[188px] md:min-h-[270px]">
            <div>
              <Cpu className="text-primary-fixed mb-md" size={24} />
              <h3 className="font-sans text-2xl font-bold text-tertiary mb-sm leading-tight">Distributed Systems</h3>
            </div>
            <p className="text-secondary text-base">Orchestrating multi-node GPU training for massive-scale biological datasets using Ray and Kubernetes.</p>
          </div>
          <div className="md:col-span-4 bg-surface-container border border-outline-variant/30 rounded-xl p-lg flex flex-col justify-between hover:bg-surface-container-high transition-colors min-h-[188px] md:min-h-[270px]">
            <div>
              <Network className="text-primary-fixed mb-md" size={24} />
              <h3 className="font-sans text-2xl font-bold text-tertiary mb-sm leading-tight">Multi-Agent RL</h3>
            </div>
            <p className="text-secondary text-base">Simulating cellular environments using autonomous agents to discover novel metabolic pathways.</p>
          </div>
          <div className="md:col-span-8 bg-surface-container-high rounded-xl overflow-hidden relative group min-h-[225px] md:min-h-[270px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9MkOslfVGaPJvEfwJrMCFODBZzf98x2cTRjYmYa7JP8CjLGt6gkvVPBjFdHIZsUfr3yc2SAYmvyBik0VbIBtutquzAlIYle2cOwPhOrJn3Zspn0piGM9miY8cY0lx0181lZOawGMPU7B80aab0yNNl1SbM_-kbw3WbdqJw4A1amMjCYbs_9oUcnZal0yoB_QVfMx7xmAJhOZ9krJf26JMRrWSacrXCJj0uuiqXeaCOMf1tIg_syYcQhoOSFYnckOnJEqftuwFZAVl"
              alt="Precision Medicine"
            />
            <div className="absolute inset-0 p-lg flex flex-col justify-end bg-gradient-to-t from-background via-background/80 to-transparent">
              <div className="font-mono text-xs text-primary-fixed font-bold mb-xs tracking-widest uppercase">PRECISION MEDICINE</div>
              <h3 className="font-sans text-3xl font-bold text-tertiary mb-sm leading-tight">Generative Models for Drug Discovery</h3>
              <p className="text-secondary text-lg">Utilizing GANs and Diffusion models to synthesize de novo molecular structures with specific binding affinities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Block */}
      <section className="py-xl px-gutter bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto border-l-4 border-primary-fixed pl-lg">
          <div className="font-mono text-xs text-primary-fixed uppercase tracking-widest mb-md">
            Active Process // Simulation_049
          </div>
          <div className="bg-black/50 p-lg rounded-lg border border-outline-variant/20 font-mono text-sm overflow-x-auto">
            <pre className="text-on-surface-variant"><code><span className="text-primary-fixed">import</span> biolab <span className="text-primary-fixed">as</span> bl
<span className="text-primary-fixed">from</span> ml_core <span className="text-primary-fixed">import</span> DistributedTrainer

<span className="text-secondary"># Initialize biological sequence cluster</span>
cluster = bl.Cluster(nodes=128, gpu_per_node=8)
engine = DistributedTrainer(cluster)

<span className="text-secondary"># Load 500B token genomic dataset</span>
data = bl.load_genomic_atlas(<span className="text-primary-fixed">"v3.2-alpha"</span>)

<span className="text-secondary"># Start training sequence-to-function transformer</span>
engine.train(model=<span className="text-primary-fixed">"BioGPT-X"</span>, dataset=data)
<span className="text-primary-fixed">{">> "}</span> <span className="text-tertiary">Optimization complete. Accuracy: 99.8%</span></code></pre>
          </div>
        </div>
      </section>
    </>
  );
}
