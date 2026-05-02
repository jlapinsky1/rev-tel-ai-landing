import React, { useMemo, useState } from "react";

const ICON_NAMES = new Set([
  "arrowRight",
  "barChart",
  "shield",
  "activity",
  "trendingUp",
  "refresh",
  "layers",
  "download",
  "check",
  "alert",
  "eye",
  "building",
]);

function Icon({ name = "check", className = "h-5 w-5" }) {
  const safeName = ICON_NAMES.has(name) ? name : "check";
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (safeName === "arrowRight") {
    return (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
      </svg>
    );
  }

  if (safeName === "barChart") {
    return (
      <svg {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <rect x="7" y="11" width="3" height="5" rx="1" />
        <rect x="12" y="8" width="3" height="8" rx="1" />
        <rect x="17" y="5" width="3" height="11" rx="1" />
      </svg>
    );
  }

  if (safeName === "shield") {
    return (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  if (safeName === "activity") {
    return (
      <svg {...common}>
        <path d="M22 12h-4l-3 8L9 4l-3 8H2" />
      </svg>
    );
  }

  if (safeName === "trendingUp") {
    return (
      <svg {...common}>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    );
  }

  if (safeName === "refresh") {
    return (
      <svg {...common}>
        <path d="M21 12a9 9 0 0 1-15.5 6.2" />
        <path d="M3 12A9 9 0 0 1 18.5 5.8" />
        <path d="M18 2v4h4" />
        <path d="M6 22v-4H2" />
      </svg>
    );
  }

  if (safeName === "layers") {
    return (
      <svg {...common}>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    );
  }

  if (safeName === "download") {
    return (
      <svg {...common}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    );
  }

  if (safeName === "alert") {
    return (
      <svg {...common}>
        <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    );
  }

  if (safeName === "eye") {
    return (
      <svg {...common}>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  if (safeName === "building") {
    return (
      <svg {...common}>
        <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
        <path d="M3 21h18" />
        <path d="M8 7h1" />
        <path d="M12 7h1" />
        <path d="M8 11h1" />
        <path d="M12 11h1" />
        <path d="M8 15h1" />
        <path d="M12 15h1" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

function Button({ children, className = "", variant = "primary", onClick, href }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const styles = {
    primary: "bg-slate-950 text-white hover:bg-slate-800",
    white: "bg-white text-slate-950 hover:bg-blue-50",
    outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
  };
  const finalClassName = `${base} ${styles[variant] || styles.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClassName}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const motions = [
  {
    label: "01",
    title: "Activation",
    subtitle: "Onboarding risk",
    icon: "activity",
    copy: "See which accounts are reaching value and which are stalling before onboarding failure becomes renewal risk.",
  },
  {
    label: "02",
    title: "Adoption",
    subtitle: "Product friction",
    icon: "layers",
    copy: "Connect support tickets to products, features, and accounts so leaders can see where usage is expanding or breaking down.",
  },
  {
    label: "03",
    title: "Growth",
    subtitle: "Expansion signals",
    icon: "trendingUp",
    copy: "Find the accounts showing signals of growth, unmet demand, new teams, feature requests, or deeper platform dependency.",
  },
  {
    label: "04",
    title: "Renewal",
    subtitle: "ARR protection",
    icon: "refresh",
    copy: "Surface silent churn, ghosting, unresolved friction, and executive risk before the renewal conversation starts.",
  },
];

const riskSignals = [
  { name: "Product friction", value: 82, tone: "risk" },
  { name: "Onboarding delay", value: 68, tone: "warn" },
  { name: "Executive engagement", value: 31, tone: "muted" },
  { name: "Expansion readiness", value: 24, tone: "muted" },
];

const accounts = [
  { name: "Northgate AI", status: "Silent churn", tone: "risk", arr: "$420K" },
  { name: "Meridian Cloud", status: "Ghosting", tone: "warn", arr: "$310K" },
  { name: "Brightfield SaaS", status: "Healthy", tone: "good", arr: "$260K" },
  { name: "Stackwell", status: "Expansion", tone: "good", arr: "$180K" },
];

const problemCards = [
  ["Siloed account context", "Support sees tickets while leadership needs account-level revenue risk."],
  ["Late churn signals", "Risk often appears in behavior months before it shows up in CRM or renewal notes."],
  ["Product friction hidden", "Repeated issues by feature reveal adoption breakdowns and roadmap pressure."],
  ["AI without context", "Generic automation can close cases without understanding the customer value story."],
];

const cdiSignals = [
  ["Repeated API tickets", "Product friction"],
  ["No executive response", "Engagement risk"],
  ["Onboarding milestone slipped", "Activation risk"],
];

const accountIntelligenceCards = [
  ["building", "Account context", "Customer, contact, ARR, ownership, and engagement in one view."],
  ["layers", "Product context", "Tickets mapped to products, features, modules, and friction areas."],
  ["shield", "Risk context", "Distress signals connected to playbooks and executive action."],
  ["barChart", "Revenue context", "Post-sale signals translated into ARR exposure and expansion potential."],
];

function runSmokeTests() {
  const errors = [];
  const iconUses = [
    "barChart",
    "alert",
    "shield",
    "eye",
    "download",
    "arrowRight",
    "check",
    ...motions.map((motion) => motion.icon),
    ...accountIntelligenceCards.map(([icon]) => icon),
  ];

  if (!motions.length) errors.push("motions should not be empty");
  if (motions.some((motion) => !motion.title || !motion.icon || !motion.copy)) errors.push("each motion needs a title, icon, and copy");
  if (riskSignals.some((signal) => typeof signal.value !== "number" || signal.value < 0 || signal.value > 100)) errors.push("risk signal values must be numbers between 0 and 100");
  if (accounts.some((account) => !account.name || !account.status || !account.arr)) errors.push("each account needs a name, status, and ARR value");
  if (problemCards.length !== 4) errors.push("why-now section should have four problem cards");
  if (cdiSignals.length < 3) errors.push("CDI section should include at least three visible signals");
  if (accountIntelligenceCards.length !== 4) errors.push("account intelligence section should have four cards");
  if (iconUses.some((icon) => !ICON_NAMES.has(icon))) errors.push("all icon names must be registered in ICON_NAMES");

  return errors;
}

function Pill({ children, tone = "default" }) {
  const classes = {
    default: "bg-slate-100 text-slate-700 border-slate-200",
    risk: "bg-amber-50 text-amber-800 border-amber-200",
    warn: "bg-blue-50 text-blue-800 border-blue-200",
    good: "bg-teal-50 text-teal-800 border-teal-200",
    dark: "bg-slate-900 text-white border-slate-800",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${classes[tone] || classes.default}`}>
      {children}
    </span>
  );
}

function DownloadModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="mb-6 flex items-start justify-between gap-6">
          <div>
            <Pill tone="dark">ARR Defense Report</Pill>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">Download the revenue risk brief</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A CFO and CEO guide to finding hidden churn, adoption gaps, and product friction inside post-sale customer signals.
            </p>
          </div>
          <button aria-label="Close modal" type="button" onClick={onClose} className="rounded-full px-3 py-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
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

        <Button className="mt-5 w-full py-4" variant="primary">
          Download the ARR Defense Report <Icon name="download" className="ml-2 h-4 w-4" />
        </Button>
        <p className="mt-3 text-center text-xs text-slate-400">No spam. Just the framework and practical revenue risk checklist.</p>
      </div>
    </div>
  );
}

function DashboardPanel() {
  return (
    <Card className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/10">
      <CardContent className="p-0">
        <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Revenue Risk Monitor</p>
              <p className="mt-1 text-sm text-slate-600">Account-level post-sale intelligence</p>
            </div>
            <Pill tone="risk">
              <Icon name="alert" className="mr-1 h-3 w-3" /> 3 risks detected
            </Pill>
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-slate-100 p-6 md:border-b-0 md:border-r">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Customer Distress Index</p>
                <div className="mt-2 flex items-end gap-3">
                  <span className="text-6xl font-semibold tracking-tight text-slate-950">74</span>
                  <span className="mb-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">Elevated</span>
                </div>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon name="shield" className="h-7 w-7" />
              </div>
            </div>

            <div className="space-y-4">
              {riskSignals.map((signal) => (
                <div key={signal.name}>
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-600">{signal.name}</span>
                    <span className="text-slate-400">{signal.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${signal.tone === "risk" ? "bg-amber-500" : signal.tone === "warn" ? "bg-blue-500" : "bg-slate-300"}`}
                      style={{ width: `${signal.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-700">Accounts to watch</p>
              <Icon name="eye" className="h-4 w-4 text-slate-400" />
            </div>
            <div className="space-y-3">
              {accounts.map((account) => (
                <div key={account.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-slate-900">{account.name}</p>
                      <p className="mt-1 text-xs text-slate-500">ARR {account.arr}</p>
                    </div>
                    <Pill tone={account.tone}>{account.status}</Pill>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const smokeTestErrors = useMemo(() => runSmokeTests(), []);

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-950">
      {smokeTestErrors.length > 0 && (
        <div className="fixed bottom-4 left-4 z-[60] max-w-sm rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-lg">
          <p className="font-semibold">Component smoke test warning</p>
          <ul className="mt-2 list-disc pl-5">
            {smokeTestErrors.map((error) => <li key={error}>{error}</li>)}
          </ul>
        </div>
      )}

      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Icon name="barChart" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">RevTel.AI</p>
              <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:block">Revenue Intelligence</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#why" className="hover:text-slate-950">Why now</a>
            <a href="#cdi" className="hover:text-slate-950">CDI</a>
            <a href="#motions" className="hover:text-slate-950">ARR motions</a>
          </nav>

          <Button onClick={() => setModalOpen(true)} className="rounded-full px-5 py-2.5">
            Download Report
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f4f7fb_52%,#eef6ff_100%)]">
          <div className="absolute right-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-teal-100/60 blur-3xl" />
          <div className="absolute right-[12%] top-[18%] h-32 w-32 rounded-full border border-blue-200/70 bg-white/30" />
          <div className="absolute bottom-[16%] right-[38%] h-20 w-20 rounded-full border border-teal-200/70 bg-white/20" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
            <div>
              <Pill tone="default">Revenue intelligence for B2B SaaS</Pill>
              <h1 className="mt-7 max-w-4xl text-6xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-7xl lg:text-8xl">
                Your help desk is hiding revenue risk.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-600">
                RevTel.AI is an omnichannel support system with native revenue intelligence, built from 15 years of B2B SaaS customer operations experience dating back to early IBM Watson-era churn prediction. It helps leaders see stalled adoption, product friction, silent churn, and expansion risk hiding inside everyday support interactions.
              </p>
              <div className="mt-8 max-w-2xl rounded-[1.5rem] border border-slate-200 bg-white/70 p-2 shadow-sm backdrop-blur">
                <div className="divide-y divide-slate-200 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">System</p>
                    <p className="mt-2 text-sm font-medium text-slate-800">Omnichannel B2B support</p>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Intelligence</p>
                    <p className="mt-2 text-sm font-medium text-slate-800">Native account-level risk</p>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">AI lineage</p>
                    <p className="mt-2 text-sm font-medium text-slate-800">15 years of signal history</p>
                  </div>
                </div>
              </div>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button onClick={() => setModalOpen(true)} className="px-7 py-4 text-base">
                  Download the ARR Defense Report <Icon name="arrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button href="#why" variant="outline" className="px-7 py-4 text-base">
                  See the revenue risk framework
                </Button>
              </div>
            </div>

            <DashboardPanel />
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Why this matters now</p>
              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-slate-950 lg:text-6xl">
                Is your support team losing you revenue?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The hard truth: horizontal help desks were never designed to protect ARR. Here's what that costs you.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5">
              {problemCards.map(([title, copy], index) => (
                <div key={title} className={`grid gap-4 rounded-3xl p-6 sm:grid-cols-[180px_1fr] ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon name="check" className="h-4 w-4" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Signal 0{index + 1}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cdi" className="bg-slate-950 px-5 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">Customer Distress Index</p>
                <h2 className="mt-5 text-5xl font-semibold tracking-[-0.045em] lg:text-6xl">
                  Built to predict churn, not report it.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  RevTel.AI identifies account-level churn risk from support, onboarding, product friction, engagement, and renewal signals before the risk shows up in CRM or at renewal.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold">5</p>
                    <p className="mt-1 text-sm text-slate-400">Signal categories connected</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold">1</p>
                    <p className="mt-1 text-sm text-slate-400">Account-level risk view</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-400">Account</p>
                    <p className="text-xl font-semibold">Acme Enterprise</p>
                  </div>
                  <Pill tone="risk">CDI 74</Pill>
                </div>
                <div className="rounded-3xl bg-white p-6 text-slate-950">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Risk profile</p>
                      <p className="mt-2 text-6xl font-semibold tracking-tight">High</p>
                    </div>
                    <div className="rounded-2xl bg-amber-50 p-4 text-amber-700">
                      <Icon name="alert" className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="mt-8 space-y-3">
                    {cdiSignals.map(([title, label]) => (
                      <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <p className="font-medium text-slate-900">{title}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">ARR Defense System</p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-slate-950 lg:text-7xl">
              Stop asking if your support is fast. Start asking if it's protecting ARR.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-8 text-slate-600">
              We show you where customer value is being created, where it's breaking down, and what to do before ARR is at risk. That's not support software. That's an ARR defense system.
            </p>
            <Button onClick={() => setModalOpen(true)} className="mt-9 px-8 py-4 text-base">
              Download the ARR Defense Report <Icon name="download" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="motions" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Four ARR motions</p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-slate-950 lg:text-6xl">
              Revenue protection across the full post-sale lifecycle.
            </h2>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
            {motions.map((motion) => (
              <div key={motion.title} className="grid gap-6 border-b border-slate-100 p-7 last:border-b-0 md:grid-cols-[160px_1fr_1.5fr] md:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon name={motion.icon} className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{motion.label}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{motion.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">{motion.subtitle}</p>
                </div>
                <p className="text-sm leading-6 text-slate-600">{motion.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid items-center gap-12 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-900/5 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Account intelligence</p>
              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-slate-950 lg:text-6xl">
                Not a generic help desk with AI on top.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                At its core, RevTel.AI is a full B2B support platform: email, portal, ticketing, routing, AI triage, customer records, product areas, playbooks, and reporting. The difference is that revenue intelligence is native to the system, not bolted on after the support data is created.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {accountIntelligenceCards.map(([icon, title, copy]) => (
                <div key={title} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                  <Icon name={icon} className="mb-5 h-6 w-6 text-blue-700" />
                  <h3 className="font-semibold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 pt-10 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-16 text-center text-white shadow-2xl shadow-slate-900/20 lg:px-20">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">Executive guide</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] lg:text-7xl">
              Find the revenue risk your help desk cannot explain.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Download the ARR Defense Report and see how B2B SaaS leaders can turn support signals into revenue intelligence.
            </p>
            <Button onClick={() => setModalOpen(true)} variant="white" className="mt-9 px-8 py-4 text-base">
              Download the ARR Defense Report <Icon name="arrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-semibold text-slate-950">RevTel.AI</p>
          <p>Revenue intelligence for B2B SaaS after the sale.</p>
          <p>Activation. Adoption. Growth. Renewal.</p>
        </div>
      </footer>
    </div>
  );
}
