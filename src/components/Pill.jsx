const toneClasses = {
  default: "bg-slate-100 text-slate-700 border-slate-200",
  risk: "bg-amber-50 text-amber-800 border-amber-200",
  warn: "bg-blue-50 text-blue-800 border-blue-200",
  good: "bg-teal-50 text-teal-800 border-teal-200",
  dark: "bg-slate-900 text-white border-slate-800",
};

export default function Pill({ children, tone = "default" }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${toneClasses[tone] || toneClasses.default}`}>
      {children}
    </span>
  );
}
