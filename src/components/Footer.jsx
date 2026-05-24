import { Link } from "react-router-dom";
import { GitBranch, Link as LinkIcon, MessageCircle } from "lucide-react";
import { site } from "../data/site";

const socialIcons = {
  github: GitBranch,
  linkedin: LinkIcon,
  twitter: MessageCircle,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 mt-8">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link
            to="/"
            className="font-heading font-semibold text-lg hover:text-accent transition-colors"
          >
            {site.name}
          </Link>
          <p className="text-sm text-muted mt-1">
            © {year} {site.name}. Built with React & Vite.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {Object.entries(site.socials).map(([key, url]) => {
            const Icon = socialIcons[key];
            if (!Icon || url === "#") return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-accent transition-colors"
                aria-label={key}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
