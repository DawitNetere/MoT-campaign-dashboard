import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import postCoffee from "@/assets/post-coffee.jpg";
import postTradefair from "@/assets/post-tradefair.jpg";
import postShoes from "@/assets/post-shoes.jpg";
import postPolicy from "@/assets/post-policy.jpg";
import postWomen from "@/assets/post-women.jpg";
import postNewsletter from "@/assets/post-newsletter.jpg";

const posts = [
  {
    id: 1,
    title: "Ethiopian Coffee Week Campaign",
    platform: "Facebook",
    status: "Published",
    date: "Feb 18, 2026",
    reach: "12.4K",
    engagement: "3.2%",
    image: postCoffee,
  },
  {
    id: 2,
    title: "Trade Fair 2026 — Early Bird Registration",
    platform: "Telegram",
    status: "Scheduled",
    date: "Feb 22, 2026",
    reach: "—",
    engagement: "—",
    image: postTradefair,
  },
  {
    id: 3,
    title: "Member Spotlight: Anbessa Shoes",
    platform: "LinkedIn",
    status: "Published",
    date: "Feb 15, 2026",
    reach: "8.7K",
    engagement: "4.1%",
    image: postShoes,
  },
  {
    id: 4,
    title: "New Export Policy Explainer",
    platform: "YouTube",
    status: "Draft",
    date: "—",
    reach: "—",
    engagement: "—",
    image: postPolicy,
  },
  {
    id: 5,
    title: "Women in Business Forum Recap",
    platform: "Instagram",
    status: "Published",
    date: "Feb 12, 2026",
    reach: "15.1K",
    engagement: "5.8%",
    image: postWomen,
  },
  {
    id: 6,
    title: "Monthly Newsletter — February Issue",
    platform: "Email",
    status: "Scheduled",
    date: "Feb 25, 2026",
    reach: "—",
    engagement: "—",
    image: postNewsletter,
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
