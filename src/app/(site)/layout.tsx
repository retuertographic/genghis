import { SiteShell } from "@/components/sites/genghiskhan/site-shell";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
