import Icon from "./Icon.jsx";
import Pill from "./Pill.jsx";
import { riskSignals, accounts } from "../data/content.js";

export default function DashboardPanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/10">
      <div className="p-0">
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
      </div>
    </div>
  );
}
