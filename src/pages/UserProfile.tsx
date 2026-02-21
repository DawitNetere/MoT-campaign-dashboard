import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const activityLog = [
  { action: "Published Campaign Post", detail: "Ethiopian Coffee Week Campaign", time: "2 hours ago" },
  { action: "Generated Report", detail: "Q1 2026 Campaign Performance", time: "5 hours ago" },
  { action: "Updated Budget Allocation", detail: "Increased Facebook Ads by ETB 20K", time: "Yesterday" },
  { action: "Completed Training", detail: "Facebook Ads Fundamentals", time: "3 days ago" },
  { action: "Added Team Member", detail: "Kidus Alemu — Content Writer", time: "1 week ago" },
];

const UserProfile = () => (
  <AppLayout>
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div
              className="w-20 h-20 rounded-full bg-center bg-cover border-2 border-primary shrink-0"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuChEPgbNJks0-ROM1YYnriMkU8uMAxx2zkg8NwrGpF1H1uPui8ihhueS8QzqbsvoZ4efeQj0aRH6dayOzNSiNlKT0_XTnnlqgJNi3RnO7E_5V1yUJ77PpFkWwPct4NhpgqRw9jIHk1DVz-zC8ThRB6BqERhVUmTB-I2TRsqGURT4LYXZll4S11IzlHLCTHWlN53bz9ObrErdJydsFM28nRxqsxL2qU0iPKevXGnP0Me_8NOHMKvSemEz2s6BICv_dt76clVT-biQl8")`
              }}
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg font-bold">Admin User</h2>
              <p className="text-sm text-muted-foreground">admin@aaccsa.org.et</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                <Badge className="text-[10px]">Administrator</Badge>
                <Badge variant="secondary" className="text-[10px]">Active</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-xs">Edit Profile</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-sm">Profile Details</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "Full Name", value: "Admin User" },
              { label: "Email", value: "admin@aaccsa.org.et" },
              { label: "Phone", value: "+251 911 234 567" },
              { label: "Department", value: "Marketing & Communications" },
              { label: "Joined", value: "September 2024" },
              { label: "Last Login", value: "Feb 21, 2026 — 09:14 AM" },
            ].map((d) => (
              <div key={d.label}>
                <label className="text-xs text-muted-foreground">{d.label}</label>
                <p className="text-sm font-medium">{d.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-sm">Account Security</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Password</p>
                <p className="text-[11px] text-muted-foreground">Last changed 45 days ago</p>
              </div>
              <Button variant="outline" size="sm" className="text-xs">Change</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Two-Factor Authentication</p>
                <p className="text-[11px] text-muted-foreground">Authenticator app enabled</p>
              </div>
              <Badge className="bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))] border-0 text-[10px]">Enabled</Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Active Sessions</p>
                <p className="text-[11px] text-muted-foreground">2 devices currently logged in</p>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">Manage</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-sm">Recent Activity</CardTitle></CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {activityLog.map((a, i) => (
              <div key={i} className="flex items-center justify-between py-3 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-muted-foreground text-[18px] shrink-0">history</span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{a.action}</p>
                    <p className="text-[11px] text-muted-foreground truncate">{a.detail}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{a.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </AppLayout>
);

export default UserProfile;
