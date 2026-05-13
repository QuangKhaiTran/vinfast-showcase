import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Trang chủ" },
  { to: "/xe-o-to", label: "Xe ô tô" },
  { to: "/xe-may-dien", label: "Xe máy điện" },
  { to: "/tram-sac", label: "Trạm sạc" },
  { to: "/uu-dai", label: "Ưu đãi" },
  { to: "/dich-vu", label: "Dịch vụ" },
  { to: "/tin-tuc", label: "Tin tức" },
  { to: "/dai-ly", label: "Đại lý" },
  { to: "/ve-chung-toi", label: "Về VinFast" },
  { to: "/lien-he", label: "Liên hệ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-gradient-primary">
            VINFAST
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/lien-he"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
        >
          Đặt xe ngay
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border/50 bg-background/95 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-foreground/80 py-2"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}