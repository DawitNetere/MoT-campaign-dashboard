interface KpiCardProps {
  icon: string;
  label: string;
  value: string;
  badge?: { text: string; type: "success" | "neutral" };
}

const KpiCard = ({ icon, label, value, badge }: KpiCardProps) => {
  return (
    <div className="bg-card rounded-xl p-5 border border-border flex flex-col justify-between gap-4 hover:border-primary/50 transition-colors group">
      <div className="flex justify-between items-start">
        <div className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:text-foreground transition-colors">
          <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
        {badge && (
          <span
            className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
              badge.type === "success"
                ? "text-success bg-success/10"
                : "text-muted-foreground bg-secondary"
            }`}
          >
            {badge.type === "success" && (
              <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
            )}
            {badge.text}
          </span>
        )}
      </div>
      <div>
        <p className="text-muted-foreground text-sm font-medium mb-1">{label}</p>
        <h3 className="text-foreground text-2xl font-bold">{value}</h3>
      </div>
    </div>
  );
};

const KpiCards = () => {
  const kpis: KpiCardProps[] = [
    { icon: "public", label: "Total Reach", value: "1.2M", badge: { text: "+12%", type: "success" } },
    { icon: "account_balance_wallet", label: "Budget Utilized (ETB)", value: "450,000", badge: { text: "75% used", type: "neutral" } },
    { icon: "rocket_launch", label: "Posts Boosted", value: "24" },
    { icon: "thumb_up", label: "Avg. Engagement Rate", value: "4.8%", badge: { text: "+0.5%", type: "success" } },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </div>
  );
};

export default KpiCards;
