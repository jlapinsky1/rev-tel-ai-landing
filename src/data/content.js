export const motions = [
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

export const riskSignals = [
  { name: "Product friction", value: 82, tone: "risk" },
  { name: "Onboarding delay", value: 68, tone: "warn" },
  { name: "Executive engagement", value: 31, tone: "muted" },
  { name: "Expansion readiness", value: 24, tone: "muted" },
];

export const accounts = [
  { name: "Northgate AI", status: "Silent churn", tone: "risk", arr: "$420K" },
  { name: "Meridian Cloud", status: "Ghosting", tone: "warn", arr: "$310K" },
  { name: "Brightfield SaaS", status: "Healthy", tone: "good", arr: "$260K" },
  { name: "Stackwell", status: "Expansion", tone: "good", arr: "$180K" },
];

export const problemCards = [
  ["Siloed account context", "Support sees tickets while leadership needs account-level revenue risk."],
  ["Late churn signals", "Risk often appears in behavior months before it shows up in CRM or renewal notes."],
  ["Product friction hidden", "Repeated issues by feature reveal adoption breakdowns and roadmap pressure."],
  ["AI without context", "Generic automation can close cases without understanding the customer value story."],
];

export const cdiSignals = [
  ["Repeated API tickets", "Product friction"],
  ["No executive response", "Engagement risk"],
  ["Onboarding milestone slipped", "Activation risk"],
];

export const accountIntelligenceCards = [
  ["building", "Account context", "Customer, contact, ARR, ownership, and engagement in one view."],
  ["layers", "Product context", "Tickets mapped to products, features, modules, and friction areas."],
  ["shield", "Risk context", "Distress signals connected to playbooks and executive action."],
  ["barChart", "Revenue context", "Post-sale signals translated into ARR exposure and expansion potential."],
];
