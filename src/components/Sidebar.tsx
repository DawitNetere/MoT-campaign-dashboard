import { cn } from "@/lib/utils";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

const navItems = [
  { icon: "dashboard", label: "Overview", path: "/" },
  { icon: "campaign", label: "Campaign Posts", path: "/campaigns" },
  { icon: "bar_chart", label: "Platform Analytics", path: "/analytics" },
  { icon: "group", label: "Audience Insights", path: "/audience" },
  { icon: "payments", label: "Budget & Spend", path: "/budget" },
  { icon: "description", label: "Reports & Export", path: "/reports" },
  { icon: "school", label: "Training Log", path: "/training" },
];

const bottomItems = [
  { icon: "settings", label: "Settings", path: "/settings" },
  { icon: "logout", label: "Log Out", path: "#" },
];

const Sidebar = ({ onNavigate }: { onNavigate?: () => void }) => {
  const location = useLocation();

  return (
    <aside className="w-72 bg-background border-r border-border flex flex-col h-full shrink-0 overflow-y-auto">
      <div className="p-6 flex items-center gap-3">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 border border-border"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3mU_vxejwv5ahW4s_JjJ1-soBHYlqtpZtyDDKu2sg4Da-eNMIxvBCXMzdtnLQxUanzxcYbN1ok88AO3AAAwUyzd1DqRDZ4SEumq-G41n1ya9wbSnUZiKO8uq3lzjJqXj9-uP1qtPZ0o-DiPvyyR776jlULQQ4khWcWqaaNfy0qQmaDOKR0J0JnmrKTYGYlAxVWWxIGITrI4diSZfTi8zWYCDQPfrgLgCAzWDLo0sUPCWe9gmRayCHenUYjpFeLVEcqle-iGkN3HE")`
          }}
        />
        <div className="flex flex-col overflow-hidden">
          <h1 className="text-foreground text-base font-bold leading-tight truncate">Ministry of Tourism</h1>
          <p className="text-muted-foreground text-xs font-medium leading-normal truncate">Ad Management</p>
        </div>
      </div>

      <nav className="flex-1 px-4 flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === "/"}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-muted-foreground hover:bg-card hover:text-foreground"
            activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            onClick={onNavigate}
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border flex flex-col gap-1 mt-auto">
        {bottomItems.map((item) =>
          item.path === "#" ? (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-card hover:text-foreground transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          ) : (
            <NavLink
              key={item.label}
              to={item.path}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-card hover:text-foreground transition-colors"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              onClick={onNavigate}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          )
        )}
        <NavLink to="/profile" onClick={onNavigate} className="mt-4 flex items-center gap-3 px-3 rounded-lg hover:bg-card transition-colors py-2" activeClassName="bg-card">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-8 border border-border"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuChEPgbNJks0-ROM1YYnriMkU8uMAxx2zkg8NwrGpF1H1uPui8ihhueS8QzqbsvoZ4efeQj0aRH6dayOzNSiNlKT0_XTnnlqgJNi3RnO7E_5V1yUJ77PpFkWwPct4NhpgqRw9jIHk1DVz-zC8ThRB6BqERhVUmTB-I2TRsqGURT4LYXZll4S11IzlHLCTHWlN53bz9ObrErdJydsFM28nRxqsxL2qU0iPKevXGnP0Me_8NOHMKvSemEz2s6BICv_dt76clVT-biQl8")`
            }}
          />
          <div className="flex flex-col">
            <p className="text-foreground text-xs font-semibold">Admin User</p>
            <p className="text-muted-foreground text-[10px]">admin@mot.gov.et</p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
