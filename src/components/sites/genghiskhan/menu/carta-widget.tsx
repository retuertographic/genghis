"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { ASSETS } from "../data";
import styles from "./carta.module.css";
import {
  LANG_NAMES,
  MENU_CATEGORIES,
  MENU_I18N,
  MENU_LANGS,
  type CategoryId,
  type MenuCategory,
  type MenuLang,
  type MenuStrings,
} from "./menu-data";

const LANG_KEY = "gk-carta-lang";
const ES = MENU_I18N.es;

/** Source behaviour: a missing translation falls back to the Spanish text. */
function strings(lang: MenuLang): MenuStrings {
  const s = MENU_I18N[lang];
  return {
    ...s,
    cats: { ...ES.cats, ...s.cats },
    subs: { ...ES.subs, ...s.subs },
    notes: { ...ES.notes, ...s.notes },
    alts: { ...ES.alts, ...s.alts },
    dishes: { ...ES.dishes, ...s.dishes },
    descs: { ...ES.descs, ...s.descs },
  };
}

function toLang(code: string | null | undefined): MenuLang | null {
  const short = String(code ?? "").slice(0, 2).toLowerCase();
  return (MENU_LANGS as readonly string[]).includes(short) ? (short as MenuLang) : null;
}

/** Initial language: ?lang= in the URL, then the last choice, otherwise English. */
function initialLang(): MenuLang {
  const fromUrl = toLang(new URLSearchParams(window.location.search).get("lang"));
  if (fromUrl) return fromUrl;
  try {
    const saved = toLang(window.localStorage.getItem(LANG_KEY));
    if (saved) return saved;
  } catch {
    /* private mode */
  }
  return "en";
}

function Placeholder({ className, label }: { className: string; label: string }) {
  return (
    <div className={cn(className, styles.placeholder)}>
      <span>{label}</span>
    </div>
  );
}

function AccordionItem({
  category,
  t,
  open,
  instantRef,
  onToggle,
}: {
  category: MenuCategory;
  t: MenuStrings;
  open: boolean;
  instantRef: RefObject<CategoryId | null>;
  onToggle: (id: CategoryId) => void;
}) {
  const { id } = category;
  const bodyRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  // max-height slide like the source: measure scrollHeight, animate px, then release to `none`
  // while open so language changes and resizes re-flow without re-measuring.
  useLayoutEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    if (!mounted.current) {
      mounted.current = true;
      body.style.maxHeight = open ? "none" : "0px";
      return;
    }
    if (open) {
      if (instantRef.current === id) {
        body.style.transition = "none";
        body.style.maxHeight = "none";
        void body.offsetHeight;
        body.style.transition = "";
        return;
      }
      body.style.maxHeight = "none";
      const height = body.scrollHeight;
      body.style.maxHeight = "0px";
      void body.offsetHeight;
      body.style.maxHeight = `${height}px`;
    } else {
      body.style.maxHeight = `${body.scrollHeight}px`;
      void body.offsetHeight;
      body.style.maxHeight = "0px";
    }
  }, [open, id, instantRef]);

  const subtitle = ES.subs[id] ? t.subs[id] : undefined;
  const note = ES.notes[id] ? t.notes[id] : undefined;

  return (
    <article id={id} data-id={id} className={cn(styles.item, open && styles.itemOpen)}>
      <button
        type="button"
        className={styles.header}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => onToggle(id)}
      >
        <span className={styles.headerLeft}>
          <Placeholder className={styles.thumb} label={t.photo} />
          <span className="block">
            <span className={cn("block", styles.categoryTitle)}>{t.cats[id]}</span>
            {subtitle && <span className={cn("block", styles.categorySubtitle)}>{subtitle}</span>}
          </span>
        </span>
        <span aria-hidden className={styles.icon}>
          ›
        </span>
      </button>
      <div
        ref={bodyRef}
        id={`${id}-panel`}
        role="region"
        aria-label={t.cats[id]}
        className={styles.body}
        onTransitionEnd={(e) => {
          if (e.target === e.currentTarget && e.propertyName === "max-height" && open) {
            e.currentTarget.style.maxHeight = "none";
          }
        }}
        inert={!open}
      >
        <div className={styles.inner}>
          <div className={styles.grid}>
            <ul className={styles.list}>
              {category.dishes.map((dish) => {
                const desc = ES.descs[dish.num] ? t.descs[dish.num] : undefined;
                return (
                  <li key={dish.num} className={styles.row}>
                    <div>
                      <span className={styles.name}>
                        {dish.num}. {t.dishes[dish.num]}
                      </span>
                      {dish.badge && (
                        <span aria-hidden className={styles.badge}>
                          {dish.badge}
                        </span>
                      )}
                      {desc && <div className={styles.desc}>{desc}</div>}
                    </div>
                    <span className={styles.price}>{dish.price}</span>
                  </li>
                );
              })}
            </ul>
            <div>
              <Placeholder className={styles.sectionImage} label={t.photoSoon} />
              {note && <p className={styles.note}>{note}</p>}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/** The source's custom "carta" widget: hero, category nav, language pills, accordion, allergen note. */
export function CartaWidget() {
  const [lang, setLang] = useState<MenuLang>("en");
  const [openIds, setOpenIds] = useState<ReadonlySet<CategoryId>>(() => new Set());
  const [activeId, setActiveId] = useState<CategoryId | null>(null);
  const [showTop, setShowTop] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const accordionRef = useRef<HTMLElement>(null);
  const instantRef = useRef<CategoryId | null>(null);
  const navScrolling = useRef(false);
  const navScrollTimer = useRef<number | undefined>(undefined);

  const t = strings(lang);

  useEffect(() => {
    const saved = initialLang();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- URL/localStorage are only readable after hydration
    if (saved !== "en") setLang(saved);
  }, []);

  const chooseLang = (code: MenuLang) => {
    setLang(code);
    try {
      window.localStorage.setItem(LANG_KEY, code);
    } catch {
      /* private mode */
    }
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", code);
      window.history.replaceState(window.history.state, "", url);
    } catch {
      /* no history */
    }
  };

  const toggle = useCallback((id: CategoryId) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  /** Height the sticky bar covers (0 on phones, where the source's bar doesn't stick). */
  const navOffset = () => {
    const nav = navRef.current;
    if (!nav) return 0;
    const wrapper = nav.parentElement;
    return wrapper && getComputedStyle(wrapper).position === "sticky" ? nav.offsetHeight : 0;
  };

  const jumpTo = (id: CategoryId) => {
    // Open without animation so the page already has its final height when the scroll is computed.
    instantRef.current = id;
    flushSync(() => setOpenIds((prev) => (prev.has(id) ? prev : new Set(prev).add(id))));
    instantRef.current = null;
    const item = document.getElementById(id);
    if (!item) return;
    const top = window.scrollY + item.getBoundingClientRect().top - (navOffset() + 16);
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
    navScrolling.current = true;
    window.clearTimeout(navScrollTimer.current);
    navScrollTimer.current = window.setTimeout(() => {
      navScrolling.current = false;
    }, 1500);
  };

  // Back-to-top visibility and scroll-spy highlighting of the category nav.
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 160);
      if (navScrolling.current) {
        // Keep the clicked category highlighted until its smooth scroll settles.
        window.clearTimeout(navScrollTimer.current);
        navScrollTimer.current = window.setTimeout(() => {
          navScrolling.current = false;
        }, 200);
        return;
      }
      // At the very bottom the last categories never reach the top: leave the highlight as is.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) return;
      const accordion = accordionRef.current;
      if (!accordion) return;
      const offset = (navRef.current?.offsetHeight ?? 0) + 24;
      let current: CategoryId | null = null;
      accordion.querySelectorAll<HTMLElement>("article[data-id]").forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) current = item.dataset.id as CategoryId;
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(navScrollTimer.current);
    };
  }, []);

  return (
    <div className={styles.root} lang={lang}>
      <div className={styles.page}>
        <header className={styles.hero}>
          <Image
            src={`${ASSETS}/images/menu-hero-ribs.jpg`}
            alt=""
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 1060px"
            className={styles.heroBg}
          />
          <h1 className={styles.heroTitle}>Genghis Khan Grill</h1>
          <p className={styles.heroSubtitle}>{t.subtitle}</p>
          <span className={styles.igic}>{t.igic}</span>
        </header>

        <div className={styles.navWrapper}>
          <nav ref={navRef} className={styles.nav} aria-label={t.menu}>
            <div className={styles.navLabel}>{t.menu}</div>
            <div className={styles.navLinks}>
              {MENU_CATEGORIES.map(({ id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={cn(styles.navLink, activeId === id && styles.navLinkActive)}
                  onClick={(e) => {
                    e.preventDefault();
                    jumpTo(id);
                  }}
                >
                  {t.cats[id]}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <section className={styles.controls}>
          <div className={styles.langSwitch} role="group" aria-label={t.language}>
            {MENU_LANGS.map((code) => (
              <button
                key={code}
                type="button"
                lang={code}
                title={LANG_NAMES[code]}
                aria-pressed={lang === code}
                className={cn(styles.langBtn, lang === code && styles.langBtnActive)}
                onClick={() => chooseLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button type="button" className={styles.closeAll} onClick={() => setOpenIds(new Set())}>
            <span aria-hidden>✕</span> <span>{t.closeAll}</span>
          </button>
        </section>

        <section ref={accordionRef} className={styles.accordion}>
          {MENU_CATEGORIES.map((category) => (
            <AccordionItem
              key={category.id}
              category={category}
              t={t}
              open={openIds.has(category.id)}
              instantRef={instantRef}
              onToggle={toggle}
            />
          ))}
        </section>

        <div className={styles.footerNotes}>
          <strong>{t.allergenTitle}</strong>
          <span>{t.allergenText}</span>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        className={cn(styles.btnTop, showTop && styles.btnTopVisible)}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span aria-hidden>↑</span>
      </button>
    </div>
  );
}
