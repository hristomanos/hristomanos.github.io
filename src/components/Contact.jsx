import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Copy, Check, Send } from "lucide-react";
import { site } from "../data/site";
import { useReducedMotion } from "../hooks/useReducedMotion";

const emailjsConfigured =
  import.meta.env.VITE_EMAILJS_SERVICE_ID &&
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const reduced = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailjsConfigured) {
      window.location.href = `mailto:${site.email}?subject=Portfolio contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: site.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Have a project in mind or want to connect? Send a message.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div className="card p-6 md:p-8">
            <p className="text-muted text-sm">Email</p>
            <div className="mt-2 flex items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-accent hover:underline"
              >
                {site.email}
              </a>
              <button 
                type="button"
                onClick={copyEmail}
                className="p-2 text-muted hover:text-accent transition-colors"
                aria-label="Copy email"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <p className="text-muted text-sm mt-4">Response time</p>
            <p className="font-mono text-accent mt-2">24 hours </p>
            <p className="text-muted text-sm mt-4">Resume</p>
            <p className="font-mono text-accent mt-2"><a href={site.resumeUrl} download className="hover:underline">View CV</a></p>

            {!emailjsConfigured && (
              <p className="mt-4 text-xs text-muted">
                Add EmailJS keys to <code className="text-accent">.env</code>{" "}
                for in-page sending, or the form opens your mail client.
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-text focus:outline-none focus:border-accent/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-text focus:outline-none focus:border-accent/50"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-text focus:outline-none focus:border-accent/50 resize-y"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-medium hover:bg-accent/90 disabled:opacity-60 transition-colors"
            >
              <Send size={18} />
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-accent">Message sent. Thank you!</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Try emailling directly to {site.email}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
