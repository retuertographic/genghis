import type { MenuLine } from "./data";

/** Source pads numbers with non-breaking spaces so names roughly align. */
const PAD: Record<number, number> = { 1: 9, 2: 7, 3: 4 };

export const PARAGRAPH =
  "mb-5 text-[17px] leading-[26px] max-md:mb-[18.7px] max-md:leading-5";

function numbered(num: string, text: string) {
  return `${num}${" ".repeat(PAD[num.length] ?? 4)} ${text}`;
}

function withPrice(text: string, price?: string, note?: string) {
  let out = text;
  if (price) out += ` | ${price}`;
  if (note) out += ` ${note}`;
  return out;
}

export function MenuLines({ lines }: { lines: MenuLine[] }) {
  return (
    <>
      {lines.map((line, i) => {
        if (line.kind === "plain") {
          return (
            <p key={i} className={PARAGRAPH}>
              {line.text}
            </p>
          );
        }
        if (line.description) {
          return [
            <p key={`${i}-n`} className={PARAGRAPH}>
              {numbered(line.num, line.name)}
            </p>,
            <p key={`${i}-d`} className={PARAGRAPH}>
              {withPrice(line.description, line.price, line.note)}
            </p>,
          ];
        }
        return (
          <p key={i} className={PARAGRAPH}>
            {numbered(line.num, withPrice(line.name, line.price, line.note))}
          </p>
        );
      })}
    </>
  );
}
