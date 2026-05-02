import { useState, useEffect } from "react";
import Icon from "./Icon.jsx";
import Pill from "./Pill.jsx";

function Button({ children, className = "", variant = "primary", onClick }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const styles = {
    primary: "bg-slate-950 text-white hover:bg-slate-800",
  };
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles[variant] || styles.primary} ${className}`}>
      {children}
    </button>
  );
}

export default function DownloadModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-modal", handler);
    return () => window.removeEventListener("open-modal", handler);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-6">
          <div>
            <Pill tone="dark">ARR Defense Report</Pill>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">Download the revenue risk brief</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A CFO and CEO guide to finding hidden churn, adoption gaps, and product friction inside post-sale customer signals.
            </p>
          </div>
          <button
            aria-label="Close modal"
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full px-3 py-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            ×
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500" placeholder="Full name" />
          <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500" placeholder="Work email" />
          <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500" placeholder="Company" />
          <select className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-500 outline-none focus:border-blue-500" defaultValue="">
            <option value="" disabled>Role</option>
            <option>CFO</option>
            <option>CEO or Founder</option>
            <option>CRO or Revenue Leader</option>
            <option>Customer Success Leader</option>
          </select>
        </div>

        <Button className="mt-5 w-full py-4">
          Download the ARR Defense Report <Icon name="download" className="ml-2 h-4 w-4" />
        </Button>
        <p className="mt-3 text-center text-xs text-slate-400">No spam. Just the framework and practical revenue risk checklist.</p>
      </div>
    </div>
  );
}
