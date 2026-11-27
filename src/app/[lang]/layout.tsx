import { PREFIXED_LANGS, type Lang } from "@/components/sites/genghiskhan/i18n";
import { RootHtml } from "@/components/sites/genghiskhan/root-html";
import { SiteShell } from "@/components/sites/genghiskhan/site-shell";

/** /es/, /de/, /fr/, /it/, /nl/: one static copy of every page per language. */
export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Lang;
  return (
    <RootHtml lang={lang}>
      <SiteShell lang={lang}>{children}</SiteShell>
    </RootHtml>
  );
}
