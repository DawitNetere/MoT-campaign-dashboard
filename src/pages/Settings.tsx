import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const integrations = [
  { name: "Facebook Business Suite", connected: true, icon: "share" },
  { name: "Google Analytics", connected: true, icon: "analytics" },
  { name: "Telegram Bot API", connected: true, icon: "smart_toy" },
  { name: "LinkedIn Marketing", connected: false, icon: "work" },
  { name: "Mailchimp", connected: false, icon: "mail" },
];

const Settings = () => (
  <AppLayout>
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold">Settings</h2>
        <p className="text-muted-foreground text-sm mt-1">Manage workspace preferences and integrations.</p>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-sm">Organization</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground">Organization Name</label>
              <p className="text-sm font-medium mt-0.5">Ministry of Tourism</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Domain</label>
              <p className="text-sm font-medium mt-0.5">aaccsa.org.et</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Industry</label>
              <p className="text-sm font-medium mt-0.5">Trade & Commerce</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Timezone</label>
              <p className="text-sm font-medium mt-0.5">EAT (UTC+3)</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="text-xs">Edit Organization</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-sm">Notifications</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "Campaign performance alerts", desc: "Get notified when a post exceeds or falls below targets", on: true },
            { label: "Weekly digest email", desc: "Summary of all platform activity sent every Monday", on: true },
            { label: "Budget threshold warnings", desc: "Alert when spending exceeds 80% of allocation", on: true },
            { label: "New follower milestones", desc: "Notify when a platform hits a follower milestone", on: false },
          ].map((n) => (
            <div key={n.label} className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium">{n.label}</p>
                <p className="text-[11px] text-muted-foreground">{n.desc}</p>
              </div>
              <Switch defaultChecked={n.on} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-sm">Integrations</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {integrations.map((int) => (
            <div key={int.name} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="material-symbols-outlined text-muted-foreground text-[20px]">{int.icon}</span>
                <span className="text-sm truncate">{int.name}</span>
              </div>
              <Button variant={int.connected ? "outline" : "default"} size="sm" className="text-xs shrink-0">
                {int.connected ? "Connected" : "Connect"}
              </Button>
            </div>
          ))}
          <Separator />
          <p className="text-[11px] text-muted-foreground">Need help connecting? Contact support@aaccsa.org.et</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-sm">Danger Zone</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Reset Dashboard Data</p>
              <p className="text-[11px] text-muted-foreground">Clear all cached analytics and re-sync from platforms.</p>
            </div>
            <Button variant="destructive" size="sm" className="text-xs shrink-0">Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </AppLayout>
);

export default Settings;
