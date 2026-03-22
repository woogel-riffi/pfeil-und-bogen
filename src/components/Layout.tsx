import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Logo_transparent.png";

const navItems = [
{ label: "Start", path: "/" },
{ label: "Verein", path: "/verein" },
{ label: "Training", path: "/training" },
{ label: "Partyraum", path: "/partyraum" },
{ label: "Preise", path: "/preise" },
{ label: "Kalender", path: "/kalender" },
{ label: "Über uns", path: "/ueber-uns" },
{ label: "FAQ", path: "/faq" }];


const Layout = ({ children }: {children: React.ReactNode;}) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Combined Header with Logo spanning both rows */}
      <div className="relative z-50">
        <div className="flex" style={{ backgroundColor: '#4a773e' }}>
          {/* Logo column */}
          <Link to="/" className="flex-shrink-0 flex items-center pl-4 md:pl-8">
            <img src={logo} alt="Pfeil und Bogen Logo" className="h-32 md:h-40 w-auto py-1" />
          </Link>

          {/* Right column with title + nav */}
          <div className="flex-1 flex flex-col">
            {/* Top row: title */}
            <div className="py-2 px-4 flex items-center">
              <Link to="/" className="font-display text-3xl md:text-4xl tracking-wide text-secondary-foreground font-thin lg:text-7xl text-right" style={{ color: '#2b2b29' }}>PFEIL UND BOGEN

              </Link>
            </div>

            {/* Bottom row: navigation */}
            <div className="py-2 px-4 flex items-center justify-end text-xl">
              <button
                className="md:hidden text-cream"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu">
                
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) =>
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}>
                  
                    {item.label}
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen &&
        <nav className="md:hidden bg-forest-dark border-t border-border pb-4 px-4">
            {navItems.map((item) =>
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link block py-2 ${location.pathname === item.path ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}>
            
                {item.label}
              </Link>
          )}
          </nav>
        }
      </div>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-forest-dark py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream opacity-80">
          <p>© {new Date().getFullYear()} Pfeil und Bogen Rifferswil · Bogenschiessen im Bezirk Affoltern</p>
          <p>Kontakt: info@pfeilundbogen.riffi.ch </p>
        </div>
      </footer>
    </div>);

};

export default Layout;