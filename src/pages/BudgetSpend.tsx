import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const budgetSummary = [
  { label: "Total Budget (Q1)", value: "ETB 850,000", sub: "Jan – Mar 2026" },
  { label: "Spent to Date", value: "ETB 412,300", sub: "48.5% utilized" },
  { label: "Remaining", value: "ETB 437,700", sub: "38 days left in quarter" },
  { label: "Cost per Acquisition", value: "ETB 24.80", sub: "↓ 8% vs last quarter" },
];

const allocations = [
  { channel: "Facebook Ads", budget: 280000, spent: 142000 },
  { channel: "Google Ads", budget: 180000, spent: 98000 },
  { channel: "Telegram Promotions", budget: 120000, spent: 68000 },
  { channel: "LinkedIn Sponsored", budget: 100000, spent: 52000 },
  { channel: "Print & Events", budget: 90000, spent: 32000 },
  { channel: "Content Production", budget: 80000, spent: 20300 },
];

const transactions = [
  { id: "TXN-2841", desc: "Facebook — Coffee Week Boost", amount: "ETB 12,500", date: "Feb 18, 2026", status: "Completed" },
  { id: "TXN-2840", desc: "Google Ads — Trade Fair Keywords", amount: "ETB 8,200", date: "Feb 17, 2026", status: "Completed" },
  { id: "TXN-2839", desc: "Telegram — Channel Promo", amount: "ETB 3,800", date: "Feb 16, 2026", status: "Completed" },
  { id: "TXN-2838", desc: "LinkedIn — Member Spotlight", amount: "ETB 6,100", date: "Feb 15, 2026", status: "Completed" },
  { id: "TXN-2837", desc: "Print — Addis Fortune Half Page", amount: "ETB 15,000", date: "Feb 14, 2026", status: "Pending" },
  { id: "TXN-2836", desc: "Video Production — Export Policy", amount: "ETB 22,000", date: "Feb 12, 2026", status: "Processing" },
];

const fmt = (n: number) => `ETB ${(n / 1000).toFixed(0)}K`;

const BudgetSpend = () => (
  <div className="flex h-screen overflow-hidden bg-background text-foreground font-display">
    <Sidebar />
    <main className="flex-1 flex flex-col h-full overflow-hidden">
      <DashboardHeader />
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-bold">Budget & Spend</h2>
            <p className="text-muted-foreground text-sm mt-1">Track campaign budgets, expenditures, and ROI.</p>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {budgetSummary.map((k) => (
              <Card key={k.label}>
                <CardContent className="p-5">
                  <p className="text-xs text-muted-foreground mb-1">{k.label}</p>
                  <p className="text-xl font-bold">{k.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{k.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader><CardTitle className="text-sm">Budget Allocation</CardTitle></CardHeader>
            <CardContent className="flex flex-col gap-4">
              {allocations.map((a) => (
                <div key={a.channel} className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground w-40 truncate">{a.channel}</span>
                  <Progress value={(a.spent / a.budget) * 100} className="flex-1 h-2.5" />
                  <span className="text-xs text-muted-foreground w-28 text-right">{fmt(a.spent)} / {fmt(a.budget)}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm">Recent Transactions</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">ID</TableHead>
                    <TableHead className="text-xs">Description</TableHead>
                    <TableHead className="text-xs">Amount</TableHead>
                    <TableHead className="text-xs">Date</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell className="text-xs font-mono">{t.id}</TableCell>
                      <TableCell className="text-xs">{t.desc}</TableCell>
                      <TableCell className="text-xs font-semibold">{t.amount}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{t.date}</TableCell>
                      <TableCell>
                        <Badge variant={t.status === "Completed" ? "default" : "secondary"} className="text-[10px]">{t.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  </div>
);

export default BudgetSpend;
