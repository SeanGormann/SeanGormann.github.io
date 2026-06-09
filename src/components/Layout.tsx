import { Link, Outlet, useLocation } from "react-router-dom";
import { Terminal, Code2 } from "lucide-react";

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "RESEARCH", path: "/research" },
    { name: "ENGINEERING", path: "/engineering" },
    { name: "CV", path: "/cv" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col custom-scrollbar overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-8 max-w-container-max mx-auto left-0 right-0 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
        <Link to="/" className="font-mono text-2xl font-bold text-primary-fixed">
          BIO-ML // ARCHITECT
        </Link>
        <div className="hidden md:flex gap-lg items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-mono text-base uppercase tracking-widest transition-colors duration-200 ${
                  isActive
                    ? "text-primary-fixed border-b-4 border-primary-fixed"
                    : "text-on-surface-variant hover:text-primary-fixed"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-sm">
          <button className="text-primary-fixed scale-95 active:scale-90 transition-transform">
            <Terminal size={30} />
          </button>
          <button className="text-primary-fixed scale-95 active:scale-90 transition-transform">
            <Code2 size={30} />
          </button>
        </div>
      </nav>

      <main className="flex-1 pt-32">
        <Outlet />
      </main>

      <footer className="w-full py-lg px-gutter flex flex-col md:flex-row justify-between items-center gap-md max-w-container-max mx-auto border-t border-outline-variant/20 bg-surface-container-lowest">
        <div className="font-mono text-xs text-primary-fixed">
          © 2026 COMPUTATIONAL GENOMICS ENGINE. ALL SYSTEMS OPERATIONAL.
        </div>
        <div className="flex items-center gap-md">
          {["GITHUB", "LINKEDIN", "SCHOLAR", "CONTACT"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-mono text-xs text-secondary hover:text-primary-fixed transition-all cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
