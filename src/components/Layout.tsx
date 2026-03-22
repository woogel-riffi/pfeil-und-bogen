import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Start", path: "/" },
  { label: "Verein", path: "/verein" },
  { label: "Training", path: "/training" },
  { label: "Partyraum", path: "/partyraum" },
  { label: "Preise", path: "/preise" },
  { label: "Kalender", path: "/kalender" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "FAQ", path: "/faq" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <div className="py-3 px-4" style={{ backgroundColor: '#5c9052' }}>
        <div className="container mx-auto">
          <Link to="/" className="font-display text-2xl md:text-3xl tracking-wide" style={{ color: '#2b2b29' }}>
            PFEIL UND BOGEN
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-forest-dark relative z-50">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          <button
            className="md:hidden text-cream"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden bg-forest-dark border-t border-border pb-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link block py-2 ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-forest-dark py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream opacity-80">
          <p>© {new Date().getFullYear()} Pfeil und Bogen Rifferswil · Bogenschiessen im Bezirk Affoltern</p>
          <p>Kontakt: info@pfeilundbogen.riffi.ch · 123 456 780</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;