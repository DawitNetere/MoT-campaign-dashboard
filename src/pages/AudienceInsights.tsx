import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const demographics = [
  { label: "18–24", pct: 18 },
  { label: "25–34", pct: 34 },
  { label: "35–44", pct: 26 },
  { label: "45–54", pct: 14 },
  { label: "55+", pct: 8 },
];

const locations = [
  { city: "Addis Ababa", pct: 62 },
  { city: "Dire Dawa", pct: 11 },
  { city: "Hawassa", pct: 8 },
  { city: "Bahir Dar", pct: 7 },
  { city: "Mekelle", pct: 5 },
  { city: "Other", pct: 7 },
];

const interests = [
  { topic: "Trade & Commerce", pct: 42 },
  { topic: "Manufacturing", pct: 28 },
  { topic: "Agriculture & Export", pct: 19 },
  { topic: "Technology", pct: 31 },
  { topic: "Finance & Banking", pct: 24 },
  { topic: "Real Estate", pct: 15 },
];

const recentFollowers = [
  { name: "Abebe Kebede", platform: "LinkedIn", date: "2h ago" },
  { name: "Tigist Mekonnen", platform: "Facebook", date: "4h ago" },
  { name: "Dawit Haile", platform: "Telegram", date: "5h ago" },
  { name: "Sara Girma", platform: "Instagram", date: "8h ago" },
  { name: "Yonas Tadesse", platform: "LinkedIn", date: "12h ago" },
];

const AudienceInsights = () => (
  <div className="flex h-screen overflow-hidden bg-background text-foreground font-display">
    <Sidebar />
    <main className="flex-1 flex flex-col h-full overflow-hidden">
      <DashboardHeader />
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-bold">Audience Insights</h2>
            <p className="text-muted-foreground text-sm mt-1">Understand who engages with your campaigns.</p>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { label: "Total Audience", value: "126.6K", sub: "+4.2% this month" },
              { label: "Active Users (30d)", value: "34.8K", sub: "27.5% of total" },
              { label: "Avg. Session Duration", value: "2m 48s", sub: "+12s vs last month" },
              { label: "Gender Split", value: "58% M / 42% F", sub: "Across all platforms" },
            ].map((kpi) => (
              <Card key={kpi.label}>
                <CardContent className="p-5">
                  <p className="text-xs text-muted-foreground mb-1">{kpi.label}</p>
                  <p className="text-xl font-bold">{kpi.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{kpi.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-sm">Age Distribution</CardTitle></CardHeader>
              <CardContent className="flex flex-col gap-3">
                {demographics.map((d) => (
                  <div key={d.label} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-10">{d.label}</span>
                    <Progress value={d.pct} className="flex-1 h-2" />
                    <span className="text-xs font-semibold w-8 text-right">{d.pct}%</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-sm">Top Locations</CardTitle></CardHeader>
              <CardContent className="flex flex-col gap-3">
                {locations.map((l) => (
                  <div key={l.city} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-24 truncate">{l.city}</span>
                    <Progress value={l.pct} className="flex-1 h-2" />
                    <span className="text-xs font-semibold w-8 text-right">{l.pct}%</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-sm">Interest Topics</CardTitle></CardHeader>
              <CardContent className="flex flex-col gap-3">
                {interests.map((i) => (
                  <div key={i.topic} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-32 truncate">{i.topic}</span>
                    <Progress value={i.pct} className="flex-1 h-2" />
                    <span className="text-xs font-semibold w-8 text-right">{i.pct}%</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader><CardTitle className="text-sm">Recent Followers</CardTitle></CardHeader>
            <CardContent>
              <div className="divide-y divide-border">
                {recentFollowers.map((f) => (
                  <div key={f.name} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">{f.name[0]}</div>
                      <div>
                        <p className="text-sm font-medium">{f.name}</p>
                        <p className="text-[11px] text-muted-foreground">{f.platform}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{f.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  </div>
);

export default AudienceInsights;
