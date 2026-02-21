import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import KpiCards from "@/components/KpiCards";
import PlatformTargets from "@/components/PlatformTargets";
import GrowthChart from "@/components/GrowthChart";
import InsightsPanel from "@/components/InsightsPanel";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground font-display">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <DashboardHeader />
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">
            <div className="col-span-12 xl:col-span-9 flex flex-col gap-6">
              <KpiCards />
              <PlatformTargets />
              <GrowthChart />
            </div>
            <div className="col-span-12 xl:col-span-3">
              <InsightsPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
