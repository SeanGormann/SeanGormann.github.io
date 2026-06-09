import { Workflow, Server, Cpu, ArrowUpRight, FileText, Database, Terminal } from "lucide-react";

export default function Research() {
  return (
    <div className="pt-xl pb-xl max-w-container-max mx-auto px-gutter">
      {/* Hero Section */}
      <header className="py-lg mb-xl border-l-2 border-primary-fixed pl-md">
        <div className="font-mono text-xs text-primary-fixed uppercase tracking-widest mb-xs">
          Portfolio . v4.2
        </div>
        <h1 className="font-sans text-6xl font-bold text-primary mb-sm leading-tight">
          Computational<br/>Genomics Research
        </h1>
        <p className="font-sans text-lg text-secondary max-w-2xl">
          Exploring the intersection of geometric deep learning and molecular biology to decode the fundamental language of life.
        </p>
      </header>

      {/* Foundation Models Section */}
      <section className="mb-xl">
        <div className="flex items-center gap-sm mb-lg">
          <h2 className="font-sans text-4xl font-bold text-primary">Foundation Models</h2>
          <div className="h-px flex-grow bg-outline-variant/30"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          
          {/* Boltz Highlight */}
          <div className="md:col-span-8 bg-surface-container-low border border-surface-container-highest p-md flex flex-col justify-between glow-hover transition-all group">
            <div>
              <div className="flex justify-between items-start mb-md">
                <span className="font-mono text-xs text-primary-fixed border border-primary-fixed/30 px-2 py-1">GENOMIC_MODEL_01</span>
                <Server className="text-secondary group-hover:text-primary-fixed transition-colors" size={18} />
              </div>
              <h3 className="font-sans text-2xl font-bold text-primary mb-sm">Boltz</h3>
              <p className="font-sans text-base text-secondary mb-md">
                A large-scale pre-trained transformer model optimized for protein folding trajectories. Boltz introduces a novel temporal attention mechanism that captures micro-second molecular dynamics with unprecedented fidelity.
              </p>
              <div className="flex flex-wrap gap-xs mb-lg">
                <span className="font-mono text-[10px] font-bold uppercase border border-primary-fixed/20 bg-primary-fixed/5 px-2 py-1 text-primary-fixed">Molecular Bio</span>
                <span className="font-mono text-[10px] font-bold uppercase border border-primary-fixed/20 bg-primary-fixed/5 px-2 py-1 text-primary-fixed">Large Scale Pre-training</span>
                <span className="font-mono text-[10px] font-bold uppercase border border-primary-fixed/20 bg-primary-fixed/5 px-2 py-1 text-primary-fixed">Temporal Attention</span>
              </div>
            </div>
            <div className="flex gap-md">
              <a href="#" className="font-mono text-xs text-secondary hover:text-primary-fixed flex items-center gap-1 transition-all">
                PDF <ArrowUpRight className="w-[11px] h-[11px]" />
              </a>
              <a href="#" className="font-mono text-xs text-secondary hover:text-primary-fixed flex items-center gap-1 transition-all">
                CODE <ArrowUpRight className="w-[11px] h-[11px]" />
              </a>
              <a href="#" className="font-mono text-xs text-secondary hover:text-primary-fixed flex items-center gap-1 transition-all">
                ARXIV <ArrowUpRight className="w-[11px] h-[11px]" />
              </a>
            </div>
          </div>

          {/* Abstract Decorative/Metric Card */}
          <div className="md:col-span-4 bg-surface-container-highest border border-outline-variant/30 p-md flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-primary-fixed font-sans text-6xl font-bold mb-xs">98.4%</div>
              <div className="font-mono text-xs uppercase text-secondary">Prediction Accuracy</div>
              <div className="mt-md font-sans text-base text-on-surface-variant">Benchmarked against CASP15 standard dataset.</div>
            </div>
          </div>

          {/* Geneformer */}
          <div className="md:col-span-6 bg-surface-container-low border border-surface-container-highest p-md flex flex-col justify-between glow-hover transition-all">
            <div>
              <div className="flex justify-between items-start mb-md">
                <span className="font-mono text-xs text-primary-fixed border border-primary-fixed/30 px-2 py-1">GENOMIC_MODEL_02</span>
                <Database className="text-secondary" size={18} />
              </div>
              <h3 className="font-sans text-2xl font-bold text-primary mb-sm">Geneformer</h3>
              <p className="font-sans text-base text-secondary mb-md">
                Context-aware embeddings for single-cell transcriptomics. Geneformer leverages transfer learning to predict gene network perturbations in rare disease states.
              </p>
              <div className="flex flex-wrap gap-xs mb-lg">
                <span className="font-mono text-[10px] font-bold uppercase border border-primary-fixed/20 bg-primary-fixed/5 px-2 py-1 text-primary-fixed">Single-Cell</span>
                <span className="font-mono text-[10px] font-bold uppercase border border-primary-fixed/20 bg-primary-fixed/5 px-2 py-1 text-primary-fixed">Transcriptomics</span>
              </div>
            </div>
            <div className="flex gap-md">
              <a href="#" className="font-mono text-xs text-secondary hover:text-primary-fixed flex items-center gap-1">PDF <ArrowUpRight className="w-[11px] h-[11px]" /></a>
              <a href="#" className="font-mono text-xs text-secondary hover:text-primary-fixed flex items-center gap-1">CODE <ArrowUpRight className="w-[11px] h-[11px]" /></a>
            </div>
          </div>

          {/* GEARS */}
          <div className="md:col-span-6 bg-surface-container-low border border-surface-container-highest p-md flex flex-col justify-between glow-hover transition-all">
            <div>
              <div className="flex justify-between items-start mb-md">
                <span className="font-mono text-xs text-primary-fixed border border-primary-fixed/30 px-2 py-1">GENOMIC_MODEL_03</span>
                <Terminal className="text-secondary" size={18} />
              </div>
              <h3 className="font-sans text-2xl font-bold text-primary mb-sm">GEARS</h3>
              <p className="font-sans text-base text-secondary mb-md">
                Graph Ensemble of Allelic Response Systems. A specialized GNN framework for modeling multi-gene interactions and epistatic effects in synthetic biology.
              </p>
              <div className="flex flex-wrap gap-xs mb-lg">
                <span className="font-mono text-[10px] font-bold uppercase border border-primary-fixed/20 bg-primary-fixed/5 px-2 py-1 text-primary-fixed">Graph Neural Nets</span>
                <span className="font-mono text-[10px] font-bold uppercase border border-primary-fixed/20 bg-primary-fixed/5 px-2 py-1 text-primary-fixed">Synthetic Bio</span>
              </div>
            </div>
            <div className="flex gap-md">
              <a href="#" className="font-mono text-xs text-secondary hover:text-primary-fixed flex items-center gap-1">PDF <ArrowUpRight className="w-[11px] h-[11px]" /></a>
              <a href="#" className="font-mono text-xs text-secondary hover:text-primary-fixed flex items-center gap-1">ARXIV <ArrowUpRight className="w-[11px] h-[11px]" /></a>
            </div>
          </div>

        </div>
      </section>

      {/* Selected Publications Section */}
      <section>
        <div className="flex items-center gap-sm mb-lg">
          <h2 className="font-sans text-4xl font-bold text-primary">Selected Publications</h2>
          <div className="h-px flex-grow bg-outline-variant/30"></div>
        </div>
        <div className="space-y-sm">
          
          <div className="group flex flex-col md:flex-row items-start gap-md p-md hover:bg-surface-container-low border-l-2 border-transparent hover:border-primary-fixed transition-all">
            <div className="w-32 flex-shrink-0 pt-1">
              <div className="font-mono text-xs text-primary-fixed">JUNE 2024</div>
              <div className="font-mono font-bold text-[10px] text-secondary">NATURE MACHINE INTELLIGENCE</div>
            </div>
            <div className="flex-grow">
              <h4 className="font-sans text-2xl font-bold text-primary group-hover:text-primary-fixed transition-colors mb-2">Zero-Shot Prediction of Protein Stability via Structural Contrastive Learning</h4>
              <p className="font-sans text-base text-on-surface-variant max-w-3xl mb-md">
                We present a method for predicting mutation-induced changes in protein stability without explicit training on thermodynamic data, leveraging a billion-parameter structure-sequence model.
              </p>
              <div className="flex gap-md">
                <button className="font-mono text-xs text-primary-fixed flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                  <FileText className="w-[12px] h-[12px]" /> FULL PAPER
                </button>
                <button className="font-mono text-xs text-primary-fixed flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                  <Database className="w-[12px] h-[12px]" /> DATASET
                </button>
              </div>
            </div>
          </div>

          <div className="group flex flex-col md:flex-row items-start gap-md p-md hover:bg-surface-container-low border-l-2 border-transparent hover:border-primary-fixed transition-all">
            <div className="w-32 flex-shrink-0 pt-1">
              <div className="font-mono text-xs text-primary-fixed">FEB 2024</div>
              <div className="font-mono font-bold text-[10px] text-secondary">ICLR (ORAL)</div>
            </div>
            <div className="flex-grow">
              <h4 className="font-sans text-2xl font-bold text-primary group-hover:text-primary-fixed transition-colors mb-2">Latent Space Geodesics for DNA Sequence Optimization</h4>
              <p className="font-sans text-base text-on-surface-variant max-w-3xl mb-md">
                Introducing an optimization framework that traverses the manifold of functional DNA sequences, ensuring high-fitness generations stay within biologically plausible regions.
              </p>
              <div className="flex gap-md">
                <button className="font-mono text-xs text-primary-fixed flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                  <FileText className="w-[12px] h-[12px]" /> FULL PAPER
                </button>
                <button className="font-mono text-xs text-primary-fixed flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                  <Terminal className="w-[12px] h-[12px]" /> NOTEBOOK
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Decorative Terminal */}
      <section className="mt-xl py-lg">
        <div className="bg-[#050505] border border-outline-variant/30 border-l-2 border-l-primary-fixed p-md font-mono text-sm custom-scrollbar overflow-x-auto">
          <div className="flex gap-2 mb-xs">
            <div className="w-2 h-2 rounded-full bg-error"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-primary-fixed"></div>
          </div>
          <div className="text-on-surface-variant/40 mb-2">// Initializing bio-ml environment...</div>
          <div className="text-primary-fixed">root@bio-ml:~$ <span className="text-primary">python train.py --model boltz_v2 --epochs 500</span></div>
          <div className="text-on-surface-variant/60">Epoch [1/500] - Loss: 0.8422 - Accuracy: 0.1245</div>
          <div className="text-on-surface-variant/60">Epoch [100/500] - Loss: 0.2410 - Accuracy: 0.8942</div>
          <div className="text-primary-fixed">Training complete. Model weights saved to ./checkpoints/boltz_latest.pth</div>
          <div className="text-primary-fixed">root@bio-ml:~$ <span className="animate-pulse">_</span></div>
        </div>
      </section>
    </div>
  );
}
