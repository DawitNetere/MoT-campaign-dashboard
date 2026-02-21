import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Oct 1", reach: 2000, engagement: 800 },
  { date: "Oct 4", reach: 2200, engagement: 850 },
  { date: "Oct 7", reach: 3500, engagement: 1200 },
  { date: "Oct 10", reach: 3200, engagement: 1100 },
  { date: "Oct 13", reach: 5000, engagement: 2000 },
  { date: "Oct 16", reach: 6500, engagement: 2500 },
  { date: "Oct 18", reach: 12500, engagement: 3000 },
  { date: "Oct 21", reach: 11000, engagement: 3200 },
  { date: "Oct 24", reach: 10500, engagement: 3500 },
  { date: "Oct 27", reach: 14000, engagement: 4000 },
  { date: "Oct 31", reach: 15000, engagement: 4200 },
];

const GrowthChart = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 flex flex-col gap-6 flex-1 min-h-[400px]">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-foreground text-lg font-bold">Follower Growth Trends</h3>
          <p className="text-muted-foreground text-sm">Multi-platform performance over time</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-secondary text-foreground text-sm rounded-lg border-none px-3 py-1.5 focus:ring-1 focus:ring-primary outline-none cursor-pointer">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
            <option>Last 90 Days</option>
          </select>
          <button className="p-1.5 bg-secondary text-foreground rounded-lg hover:bg-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">download</span>
          </button>
        </div>
      </div>

      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(220, 88%, 50%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(220, 88%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 30%, 21%)" vertical={false} />
            <XAxis dataKey="date" stroke="hsl(220, 30%, 68%)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(220, 30%, 68%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => v >= 1000 ? `${v / 1000}k` : v} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(216, 30%, 15%)",
                border: "1px solid hsl(220, 30%, 21%)",
                borderRadius: "8px",
                color: "white",
                fontSize: "13px",
              }}
            />
            <Area type="monotone" dataKey="reach" stroke="hsl(220, 88%, 50%)" strokeWidth={3} fill="url(#colorReach)" name="Combined Reach" />
            <Area type="monotone" dataKey="engagement" stroke="hsl(142, 71%, 45%)" strokeWidth={2} strokeDasharray="5 5" fill="none" name="Engagement" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-6 justify-center">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-primary" />
          <span className="text-muted-foreground text-sm">Combined Reach</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-success/60" />
          <span className="text-muted-foreground text-sm">Engagement</span>
        </div>
      </div>
    </div>
  );
};

export default GrowthChart;
