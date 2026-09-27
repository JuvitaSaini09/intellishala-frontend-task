import { AccountCard } from "./account-card";
import { product } from "./data";
import { Logo } from "./logo";
import { SidebarNav } from "./sidebar-nav";
import { SignOutButton } from "./sign-out-button";
import { Title } from "./title";
import { WorkspaceCard } from "./workspace-card";

export default function Sidebar() {
  return (
    <aside
      aria-label="Sidebar"
      className="hidden h-full w-64 shrink-0 flex-col border-r border-[#F0F1F5] bg-white px-5 pt-9 pb-5 md:flex"
    >
      <div className="flex items-center gap-3">
        <Logo letter={product.mark} />
        <Title>{product.name}</Title>
      </div>
      <div className="mt-8">
        <WorkspaceCard />
      </div>
      <SidebarNav />
      <footer className="mt-auto pt-6">
        <AccountCard />
        <div className="mt-3">
          <SignOutButton />
        </div>
      </footer>
    </aside>
  );
}
