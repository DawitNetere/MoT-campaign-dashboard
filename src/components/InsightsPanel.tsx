const insights = [
  {
    icon: "trending_up",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    title: "Telegram Spike",
    description: (
      <>
        Engagement has spiked <span className="text-success font-bold">15%</span> since the trade fair announcement. Consider posting a follow-up poll today.
      </>
    ),
  },
  {
    icon: "warning",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    title: "Budget Alert",
    description: (
      <>
        Budget utilization on Facebook is trending lower than projected. You have <span className="text-foreground font-bold">ETB 25k</span> unspent for this week.
      </>
    ),
  },
  {
    icon: "videocam",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    title: "Content Optimization",
    description:
      "Video content on YouTube requires optimization for mobile viewers. 65% of drop-offs happen in the first 5 seconds.",
  },
];

const InsightsPanel = () => {
  return (
    <div className="bg-card rounded-xl border border-border h-full flex flex-col overflow-hidden">
      <div className="p-5 border-b border-border flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-[24px]">lightbulb</span>
        <h3 className="text-foreground text-lg font-bold">This Week's Insights</h3>
      </div>
      <div className="p-5 flex flex-col gap-6 overflow-y-auto flex-1">
        {insights.map((insight, i) => (
          <div key={insight.title}>
            <div className="flex gap-3 items-start">
              <div className={`shrink-0 size-8 rounded-full ${insight.iconBg} flex items-center justify-center ${insight.iconColor} mt-0.5`}>
                <span className="material-symbols-outlined text-[16px]">{insight.icon}</span>
              </div>
              <div>
                <h4 className="text-foreground text-sm font-semibold mb-1">{insight.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{insight.description}</p>
              </div>
            </div>
            {i < insights.length - 1 && <div className="h-px bg-border w-full mt-6" />}
          </div>
        ))}

        <div className="mt-auto pt-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
            <p className="text-foreground text-sm font-medium mb-3">Ready to adjust your strategy?</p>
            <button className="w-full bg-primary hover:brightness-110 text-primary-foreground text-sm font-bold py-2 rounded-lg transition-all flex items-center justify-center gap-2">
              Open Campaign Manager
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;
