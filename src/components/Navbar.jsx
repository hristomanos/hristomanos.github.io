import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-heading font-semibold text-lg hover:text-accent transition-colors"
          onClick={closeMenu}
        >
          {site.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-text transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/blog"
              className="text-sm text-muted hover:text-text transition-colors"
            >
              All posts
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden p-2 text-muted hover:text-text"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-lg">
          <ul className="flex flex-col items-center gap-6 pt-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg text-muted hover:text-accent transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                className="text-lg text-muted hover:text-accent transition-colors"
                onClick={closeMenu}
              >
                All posts
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
