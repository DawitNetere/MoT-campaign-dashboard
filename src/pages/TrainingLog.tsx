import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const courses = [
  { title: "Facebook Ads Fundamentals", progress: 100, status: "Completed", date: "Jan 20, 2026", duration: "4h 30m" },
  { title: "Content Strategy for Tourism Boards", progress: 72, status: "In Progress", date: "Feb 10, 2026", duration: "3h 15m" },
  { title: "Telegram Marketing Masterclass", progress: 45, status: "In Progress", date: "Feb 14, 2026", duration: "2h 00m" },
  { title: "Google Analytics for Government Agencies", progress: 100, status: "Completed", date: "Dec 15, 2025", duration: "5h 45m" },
  { title: "Video Production Basics", progress: 18, status: "In Progress", date: "Feb 18, 2026", duration: "0h 50m" },
  { title: "SEO for Tourism Destinations", progress: 0, status: "Not Started", date: "—", duration: "—" },
];

const team = [
  { name: "Hana Bekele", role: "Social Media Manager", completed: 8, inProgress: 2 },
  { name: "Kidus Alemu", role: "Content Writer", completed: 5, inProgress: 3 },
  { name: "Meron Tsegaye", role: "Graphic Designer", completed: 6, inProgress: 1 },
  { name: "Abel Fekadu", role: "Analytics Lead", completed: 10, inProgress: 1 },
];

const statusColor: Record<string, string> = {
  Completed: "bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))]",
  "In Progress": "bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))]",
  "Not Started": "bg-muted text-muted-foreground",
};

const TrainingLog = () => (
  <AppLayout>
    <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold">Training Log</h2>
        <p className="text-muted-foreground text-sm mt-1">Track team learning and professional development.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: "Total Courses", value: "24" },
          { label: "Completed", value: "14" },
          { label: "In Progress", value: "7" },
          { label: "Total Hours Logged", value: "86h" },
        ].map((k) => (
          <Card key={k.label}>
            <CardContent className="p-5">
              <p className="text-xs text-muted-foreground mb-1">{k.label}</p>
              <p className="text-2xl font-bold">{k.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader><CardTitle className="text-sm">Courses</CardTitle></CardHeader>
        <CardContent className="flex flex-col gap-4">
          {courses.map((c) => (
            <div key={c.title} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium truncate">{c.title}</p>
                  <Badge className={`${statusColor[c.status]} text-[10px] px-2 py-0 border-0 shrink-0`}>{c.status}</Badge>
                </div>
                <Progress value={c.progress} className="h-1.5" />
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-muted-foreground">{c.date}</p>
                <p className="text-[11px] text-muted-foreground">{c.duration}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-sm">Team Progress</CardTitle></CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {team.map((t) => (
              <div key={t.name} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{t.name[0]}</div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-[11px] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-muted-foreground">{t.completed} completed</span>
                  <span className="text-muted-foreground hidden sm:inline">{t.inProgress} active</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </AppLayout>
);

export default TrainingLog;
