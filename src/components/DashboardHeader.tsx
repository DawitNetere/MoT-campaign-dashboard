const DashboardHeader = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5 border-b border-border bg-background/95 backdrop-blur z-10 shrink-0">
      <div className="flex items-center gap-3">
        {onMenuClick && (
          <button onClick={onMenuClick} className="p-1.5 rounded-lg hover:bg-card transition-colors md:hidden">
            <span className="material-symbols-outlined text-[22px]">menu</span>
          </button>
        )}
        <div>
          <h2 className="text-foreground text-lg md:text-xl font-bold tracking-tight">AACCSA Digital Boosting</h2>
          <p className="text-muted-foreground text-xs md:text-sm hidden sm:block">Multi-platform live campaign dashboard</p>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden md:flex items-center gap-2 bg-card border border-border rounded-lg p-1 pr-3">
          <button className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-secondary transition-colors">
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <div className="flex items-center gap-2 px-2 border-l border-r border-border h-6">
            <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
            <span className="text-foreground text-sm font-medium">Oct 1 - Oct 31, 2023</span>
          </div>
          <button className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-secondary transition-colors">
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-success/10 border border-success/20 rounded-full">
          <div className="size-2 rounded-full bg-success animate-pulse" />
          <span className="text-success text-xs font-bold uppercase tracking-wide">On Track</span>
        </div>
        <button className="bg-primary hover:brightness-110 text-primary-foreground p-2 rounded-lg transition-all">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
        </button>
      </div>
    </header>);};
export default DashboardHeader;