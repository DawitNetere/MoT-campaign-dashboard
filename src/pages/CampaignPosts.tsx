import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "Ethiopian Coffee Week Campaign",
    platform: "Facebook",
    status: "Published",
    date: "Feb 18, 2026",
    reach: "12.4K",
    engagement: "3.2%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNpAuZTBEVSJGGF_G29_O08BM64xvDTZBdUb1xYBxMiCm_WT0JLYT4Sk6_gOHxpLHB0p9u9dFpnXdHOQj7nBJLHsELdw",
  },
  {
    id: 2,
    title: "Trade Fair 2026 — Early Bird Registration",
    platform: "Telegram",
    status: "Scheduled",
    date: "Feb 22, 2026",
    reach: "—",
    engagement: "—",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGOAO2m-N8bQ3I6k83HlvhLT0w29SZiJSvYHt0C4PNhPBB98RIU2ypxL6gRWvRXdVxqHXLJ8YMxZ9bPxdvBtNP_pSWJw",
  },
  {
    id: 3,
    title: "Member Spotlight: Anbessa Shoes",
    platform: "LinkedIn",
    status: "Published",
    date: "Feb 15, 2026",
    reach: "8.7K",
    engagement: "4.1%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3mU_vxejwv5ahW4s_JjJ1-soBHYlqtpZtyDDKu2sg4Da-eNMIxvBCXMzdtnLQxUanzxcYbN1ok88AO3AAAwUyzd1DqRDZ4SEumq-G41n1ya9wbSnUZiKO8uq3lzjJqXj9-uP1qtPZ0o-DiPvyyR776jlULQQ4khWcWqaaNfy0qQmaDOKR0J0JnmrKTYGYlAxVWWxIGITrI4diSZfTi8zWYCDQPfrgLgCAzWDLo0sUPCWe9gmRayCHenUYjpFeLVEcqle-iGkN3HE",
  },
  {
    id: 4,
    title: "New Export Policy Explainer",
    platform: "YouTube",
    status: "Draft",
    date: "—",
    reach: "—",
    engagement: "—",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChEPgbNJks0-ROM1YYnriMkU8uMAxx2zkg8NwrGpF1H1uPui8ihhueS8QzqbsvoZ4efeQj0aRH6dayOzNSiNlKT0_XTnnlqgJNi3RnO7E_5V1yUJ77PpFkWwPct4NhpgqRw9jIHk1DVz-zC8ThRB6BqERhVUmTB-I2TRsqGURT4LYXZll4S11IzlHLCTHWlN53bz9ObrErdJydsFM28nRxqsxL2qU0iPKevXGnP0Me_8NOHMKvSemEz2s6BICv_dt76clVT-biQl8",
  },
  {
    id: 5,
    title: "Women in Business Forum Recap",
    platform: "Instagram",
    status: "Published",
    date: "Feb 12, 2026",
    reach: "15.1K",
    engagement: "5.8%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNpAuZTBEVSJGGF_G29_O08BM64xvDTZBdUb1xYBxMiCm_WT0JLYT4Sk6_gOHxpLHB0p9u9dFpnXdHOQj7nBJLHsELdw",
  },
  {
    id: 6,
    title: "Monthly Newsletter — February Issue",
    platform: "Email",
    status: "Scheduled",
    date: "Feb 25, 2026",
    reach: "—",
    engagement: "—",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGOAO2m-N8bQ3I6k83HlvhLT0w29SZiJSvYHt0C4PNhPBB98RIU2ypxL6gRWvRXdVxqHXLJ8YMxZ9bPxdvBtNP_pSWJw",
  },
];

const statusColor: Record<string, string> = {
  Published: "bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))]",
  Scheduled: "bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))]",
  Draft: "bg-muted text-muted-foreground",
};

const CampaignPosts = () => (
  <div className="flex h-screen overflow-hidden bg-background text-foreground font-display">
    <Sidebar />
    <main className="flex-1 flex flex-col h-full overflow-hidden">
      <DashboardHeader />
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Campaign Posts</h2>
              <p className="text-muted-foreground text-sm mt-1">Manage and monitor all campaign content across platforms.</p>
            </div>
            <Button><span className="material-symbols-outlined text-[18px] mr-1">add</span>New Post</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden group hover:border-primary/40 transition-colors">
                <div className="h-40 bg-secondary overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground font-medium">{post.platform}</span>
                    <Badge className={`${statusColor[post.status]} text-[10px] px-2 py-0.5 font-semibold border-0`}>{post.status}</Badge>
                  </div>
                  <CardTitle className="text-sm leading-snug">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>Reach: {post.reach}</span>
                    <span>Eng: {post.engagement}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default CampaignPosts;
