import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { site } from "../data/site";
import Footer from "./Footer";

export default function BlogLayout({ children, backTo = "/blog", backLabel = "All posts" }) {
  return (
    <div className="min-h-screen bg-bg relative z-10">
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-heading font-semibold hover:text-accent transition-colors"
          >
            {site.name}
          </Link>
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
