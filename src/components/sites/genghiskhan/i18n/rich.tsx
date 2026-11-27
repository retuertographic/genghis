import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { localizedPath, type Lang } from "./config";

const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders dictionary text with **bold** and [label](href) markup. Hrefs starting with "/" are pages of this
 * site and get the language prefix; other links (mailto:, tel:, https:) are left as they are.
 */
export function Rich({ text, lang, linkClassName }: { text: string; lang: Lang; linkClassName?: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(<strong key={m.index}>{m[1]}</strong>);
    } else {
      const [label, href] = [m[2], m[3]];
      out.push(
        href.startsWith("/") ? (
          <Link key={m.index} href={localizedPath(lang, href)} className={linkClassName}>
            {label}
          </Link>
        ) : (
          <a key={m.index} href={href} className={linkClassName} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {label}
          </a>
        ),
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <Fragment>{out}</Fragment>;
}
