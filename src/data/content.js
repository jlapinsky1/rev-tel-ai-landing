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
  { name: "Meridan", status: "Silent churn", tone: "risk", arr: "$420K" },
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

export const faqs = [
  {
    q: "What is ARR defense?",
    a: "ARR defense is the process of identifying and acting on customer signals that threaten recurring revenue before they become churn, contraction, or failed renewals. In the SaaS reset, CFOs and CEOs are scrutinizing every software investment more aggressively. If a platform cannot prove adoption, value, and business impact, it becomes vulnerable to consolidation, replacement, or a build-versus-buy decision. ARR defense helps B2B SaaS companies see where customer value is strong, where it is breaking down, and where revenue is at risk.",
  },
  {
    q: "What is post-sale revenue intelligence?",
    a: "Post-sale revenue intelligence is the practice of connecting customer data after the sale to understand revenue risk, product value, and expansion opportunity. It brings together support tickets, onboarding progress, product friction, customer health, account engagement, and renewal signals so leaders can see which customers are adopting, stalling, growing, ghosting, or silently churning. This matters because the post-sale experience is where software value is either proven or questioned.",
  },
  {
    q: "How do support tickets reveal churn risk?",
    a: "Support tickets reveal churn risk because they show where customers are struggling to receive value from the product. Repeated issues, unresolved friction, stalled workflows, low adoption questions, frustrated language, feature gaps, and high ticket volume from strategic accounts can all signal that a customer is losing confidence. In today's market, those signals matter because frustrated customers are not just renewal risks. They may also start asking whether the workflow should be replaced, consolidated, automated, or built internally.",
  },
  {
    q: "How is Meridian different from a help desk?",
    a: "A traditional help desk is built to manage and close tickets. Meridian is built to connect support activity to revenue intelligence. It combines omnichannel support workflows with account-level context, product areas, onboarding signals, customer distress scoring, and ARR risk visibility. The result is a system that helps B2B SaaS leaders understand not just what happened in support, but what it means for retention, expansion, and defensible customer value.",
  },
  {
    q: "Who uses Meridian?",
    a: "Meridian is designed for B2B SaaS companies that need to protect and grow recurring revenue after the sale. It is used by support, customer success, product, revenue, and executive teams who need a shared view of customer risk, product friction, adoption health, and renewal readiness. The primary executive audience is CEOs, CFOs, CROs, and post-sale leaders responsible for ARR, NRR, retention, and customer value in a market where every vendor must prove why they deserve to stay in the stack.",
  },
  {
    q: "What signals does the Customer Distress Index analyze?",
    a: "The Customer Distress Index analyzes account-level signals that may indicate churn risk, declining adoption, or weakening customer value. These signals can include ticket volume, unresolved issues, repeated product friction, onboarding delays, customer engagement changes, response patterns, sentiment trends, renewal proximity, adoption gaps, escalation history, and signs that an account is ghosting or disengaging. The goal is to surface risk early enough for teams to intervene before ARR is at stake and before the customer starts questioning whether the software is still worth buying.",
  },
];

export const accountIntelligenceCards = [
  ["building", "Account context", "Customer, contact, ARR, ownership, and engagement in one view."],
  ["layers", "Product context", "Tickets mapped to products, features, modules, and friction areas."],
  ["shield", "Risk context", "Distress signals connected to playbooks and executive action."],
  ["barChart", "Revenue context", "Post-sale signals translated into ARR exposure and expansion potential."],
];
