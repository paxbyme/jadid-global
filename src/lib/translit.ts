// MVP uchun: lotin -> kirill (uzc) juda soddalashtirilgan.
// Keyinroq: imlo qoidalari, 'ng', 'sh', 'ch', 'o‘', 'g‘' va h.k. ni to‘liq qilamiz.

const pairs: Array<[RegExp, string]> = [
  [/o‘/gi, "ў"],
  [/g‘/gi, "ғ"],
  [/sh/gi, "ш"],
  [/ch/gi, "ч"],
  [/ng/gi, "нг"],
  [/ya/gi, "я"],
  [/yu/gi, "ю"],
  [/yo/gi, "ё"],
  [/a/gi, "а"],
  [/b/gi, "б"],
  [/d/gi, "д"],
  [/e/gi, "е"],
  [/f/gi, "ф"],
  [/g/gi, "г"],
  [/h/gi, "ҳ"],
  [/i/gi, "и"],
  [/j/gi, "ж"],
  [/k/gi, "к"],
  [/l/gi, "л"],
  [/m/gi, "м"],
  [/n/gi, "н"],
  [/o/gi, "о"],
  [/p/gi, "п"],
  [/q/gi, "қ"],
  [/r/gi, "р"],
  [/s/gi, "с"],
  [/t/gi, "т"],
  [/u/gi, "у"],
  [/v/gi, "в"],
  [/x/gi, "х"],
  [/y/gi, "й"],
  [/z/gi, "з"],
];

export function toUzc(text: string): string {
  let out = text ?? "";
  for (const [re, repl] of pairs) out = out.replace(re, repl);
  return out;
}
