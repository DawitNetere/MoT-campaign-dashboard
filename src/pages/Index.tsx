import AppLayout from "@/components/AppLayout";
import KpiCards from "@/components/KpiCards";
import PlatformTargets from "@/components/PlatformTargets";
import GrowthChart from "@/components/GrowthChart";
import InsightsPanel from "@/components/InsightsPanel";

const Index = () => {
  return (
    <AppLayout>
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
    </AppLayout>
  );
};

export default Index;
