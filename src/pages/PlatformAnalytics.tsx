import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const barData = [
  { platform: "Facebook", followers: 48200, engagement: 3800 },
  { platform: "Telegram", followers: 32100, engagement: 5200 },
  { platform: "LinkedIn", followers: 18400, engagement: 2100 },
  { platform: "Instagram", followers: 12800, engagement: 3400 },
  { platform: "YouTube", followers: 8900, engagement: 1200 },
  { platform: "X/Twitter", followers: 6200, engagement: 890 },
];

const pieData = [
  { name: "Facebook", value: 38, color: "hsl(220, 88%, 50%)" },
  { name: "Telegram", value: 26, color: "hsl(200, 85%, 50%)" },
  { name: "LinkedIn", value: 15, color: "hsl(260, 70%, 55%)" },
  { name: "Instagram", value: 11, color: "hsl(340, 75%, 55%)" },
  { name: "YouTube", value: 7, color: "hsl(0, 72%, 50%)" },
  { name: "X/Twitter", value: 3, color: "hsl(220, 30%, 50%)" },
];

const weeklyData = [
  { day: "Mon", impressions: 4200, clicks: 320 },
  { day: "Tue", impressions: 5100, clicks: 410 },
  { day: "Wed", impressions: 3800, clicks: 290 },
  { day: "Thu", impressions: 6200, clicks: 520 },
  { day: "Fri", impressions: 7100, clicks: 680 },
  { day: "Sat", impressions: 4500, clicks: 350 },
  { day: "Sun", impressions: 3200, clicks: 240 },
];

const chartConfig = {
  followers: { label: "Followers", color: "hsl(220, 88%, 50%)" },
  engagement: { label: "Engagements", color: "hsl(142, 71%, 45%)" },
  impressions: { label: "Impressions", color: "hsl(220, 88%, 50%)" },
  clicks: { label: "Clicks", color: "hsl(38, 92%, 50%)" },
};

const PlatformAnalytics = () => (
  <AppLayout>
    <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold">Platform Analytics</h2>
        <p className="text-muted-foreground text-sm mt-1">Cross-platform performance metrics and trends.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-sm">Followers & Engagement by Platform</CardTitle></CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[280px] w-full">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,21%)" />
                <XAxis dataKey="platform" tick={{ fill: "hsl(220,30%,68%)", fontSize: 11 }} />
                <YAxis tick={{ fill: "hsl(220,30%,68%)", fontSize: 11 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="followers" fill="hsl(220,88%,50%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="engagement" fill="hsl(142,71%,45%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-sm">Traffic Share by Platform</CardTitle></CardHeader>
          <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ChartContainer config={chartConfig} className="h-[280px] w-full sm:flex-1">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" stroke="none">
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="flex flex-row flex-wrap sm:flex-col gap-2">
              {pieData.map((d) => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                  <span className="text-muted-foreground">{d.name}</span>
                  <span className="font-semibold text-foreground">{d.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader><CardTitle className="text-sm">Weekly Impressions & Clicks</CardTitle></CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[260px] w-full">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,21%)" />
                <XAxis dataKey="day" tick={{ fill: "hsl(220,30%,68%)", fontSize: 11 }} />
                <YAxis tick={{ fill: "hsl(220,30%,68%)", fontSize: 11 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="impressions" stroke="hsl(220,88%,50%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="clicks" stroke="hsl(38,92%,50%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  </AppLayout>
);

export default PlatformAnalytics;
