import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateQ1Report } from "@/lib/generateReport";

const reports = [
  { name: "Q1 2026 Campaign Performance", type: "PDF", size: "2.4 MB", date: "Feb 15, 2026", status: "Ready" },
  { name: "Social Media Audit — January", type: "XLSX", size: "1.1 MB", date: "Feb 01, 2026", status: "Ready" },
  { name: "Audience Growth Report", type: "PDF", size: "3.8 MB", date: "Jan 28, 2026", status: "Ready" },
  { name: "Budget Utilization Summary", type: "CSV", size: "420 KB", date: "Jan 25, 2026", status: "Ready" },
  { name: "Weekly Digest — Week 7", type: "PDF", size: "1.6 MB", date: "Feb 17, 2026", status: "Generating" },
  { name: "Platform Comparison H2 2025", type: "PPTX", size: "5.2 MB", date: "Jan 10, 2026", status: "Ready" },
];

const scheduled = [
  { name: "Weekly Campaign Digest", frequency: "Every Monday, 9:00 AM", format: "PDF", recipients: "3 members" },
  { name: "Monthly Budget Report", frequency: "1st of each month", format: "XLSX", recipients: "5 members" },
  { name: "Quarterly Board Summary", frequency: "End of quarter", format: "PPTX", recipients: "Board (8)" },
];

const ReportsExport = () => (
  <AppLayout>
    <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Reports & Export</h2>
          <p className="text-muted-foreground text-sm mt-1">Generate, schedule, and download campaign reports.</p>
        </div>
        <Button className="self-start"><span className="material-symbols-outlined text-[18px] mr-1">note_add</span>Generate Report</Button>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-sm">Available Reports</CardTitle></CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {reports.map((r) => (
              <div key={r.name} className="flex items-center justify-between py-3 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-muted-foreground text-[20px] shrink-0">description</span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{r.name}</p>
                    <p className="text-[11px] text-muted-foreground">{r.type} · {r.size} · {r.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant={r.status === "Ready" ? "default" : "secondary"} className="text-[10px]">{r.status}</Badge>
                  <Button variant="ghost" size="sm" disabled={r.status !== "Ready"} onClick={() => r.name.includes("Q1") ? generateQ1Report() : alert("Only Q1 report has sample data")}>
                    <span className="material-symbols-outlined text-[16px]">download</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-sm">Scheduled Reports</CardTitle></CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {scheduled.map((s) => (
              <div key={s.name} className="flex items-center justify-between py-3 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-muted-foreground text-[20px] shrink-0">schedule</span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{s.name}</p>
                    <p className="text-[11px] text-muted-foreground">{s.frequency} · {s.format} · {s.recipients}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-xs shrink-0">Edit</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </AppLayout>
);

export default ReportsExport;
