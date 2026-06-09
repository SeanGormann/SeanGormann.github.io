export default function Engineering() {
  return (
    <div className="pt-xl pb-xl max-w-container-max mx-auto px-gutter">
      {/* Header Section */}
      <header className="mb-xl">
        <h1 className="font-sans text-6xl font-bold mb-base">Engineering & Projects</h1>
        <p className="font-sans text-lg text-secondary max-w-2xl">
          Deploying large-scale computational infrastructure for the next generation of biological intelligence.
        </p>
      </header>

      {/* Bento Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md mb-xl">
        
        {/* Large Project Card: 8x H100 Cluster */}
        <div className="md:col-span-8 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-primary-fixed transition-colors p-lg flex flex-col justify-between overflow-hidden relative group">
          <div className="relative z-10">
            <span className="font-mono text-xs font-bold text-primary-fixed uppercase mb-sm block">
              Distributed Infrastructure
            </span>
            <h2 className="font-sans text-4xl font-bold mb-md">8x H100 Cluster Management</h2>
            <p className="text-secondary font-sans text-base mb-md">
              Custom SLURM orchestration for low-latency weight streaming in multi-node protein folding simulations.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm border-t border-outline-variant/30 pt-md">
              <div>
                <span className="font-mono text-xs text-outline uppercase block mb-1">Latency</span>
                <span className="font-mono text-sm text-primary-fixed">0.8ms</span>
              </div>
              <div>
                <span className="font-mono text-xs text-outline uppercase block mb-1">Scale</span>
                <span className="font-mono text-sm text-primary-fixed">64 Nodes</span>
              </div>
              <div>
                <span className="font-mono text-xs text-outline uppercase block mb-1">Throughput</span>
                <span className="font-mono text-sm text-primary-fixed">4.2 TB/s</span>
              </div>
              <div>
                <span className="font-mono text-xs text-outline uppercase block mb-1">Uptime</span>
                <span className="font-mono text-sm text-primary-fixed">99.98%</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Side Project: Agentic Protein Design */}
        <div className="md:col-span-4 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-primary-fixed transition-colors p-md flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-primary-fixed uppercase mb-sm block">
              Bio-Agents
            </span>
            <h2 className="font-sans text-2xl font-bold mb-sm">Agentic Protein Design</h2>
            <p className="font-mono text-sm text-secondary">
              LLM-driven iterative refinement of binding motifs via closed-loop laboratory feedback.
            </p>
          </div>
          <div className="mt-lg">
            <div className="bg-surface-container-lowest p-sm border border-outline-variant/20 mb-md relative overflow-hidden flex h-16">
               <div className="absolute inset-0 bg-gradient-to-r from-primary-fixed/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
