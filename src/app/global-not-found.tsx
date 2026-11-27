import { NotFoundPage } from "@/components/sites/genghiskhan/not-found-page";
import { RootHtml } from "@/components/sites/genghiskhan/root-html";
import { pageMetadata } from "@/components/sites/genghiskhan/routes";

/* The <title> is rendered by NotFoundPage, which knows the language. */
export const metadata = { ...pageMetadata("notFound", "en"), title: undefined };

/** One 404 for every language (the page switches language from the URL). */
export default function GlobalNotFound() {
  return (
    <RootHtml lang="en">
      <NotFoundPage />
    </RootHtml>
  );
}
