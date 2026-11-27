import { RootHtml } from "@/components/sites/genghiskhan/root-html";
import { SiteShell } from "@/components/sites/genghiskhan/site-shell";

/** English: the site root, without a language prefix. */
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="en">
      <SiteShell lang="en">{children}</SiteShell>
    </RootHtml>
  );
}
