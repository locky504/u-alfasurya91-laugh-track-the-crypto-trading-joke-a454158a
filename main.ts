// Laugh Track: The Crypto Trading Joke Contest
// https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a
//
// The entry is a single original joke about crypto and trading life,
// capped at 200 characters. This program prints it and writes the
// identical text to /output/entry.txt for the judge.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I did my own research: a YouTuber in a rented Lamborghini pitched a dog coin, so naturally I bought the top.";

const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

// The gate rejects anything empty, whitespace-only, or over 200 chars,
// so fail loudly here instead of shipping a bad entry.
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be empty");
}
if (ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry is ${ENTRY.length} characters, over the ${MAX_CHARS} cap`,
  );
}
// The entry is one line: a stray newline would split the joke and break
// the "one line" rule, so reject it rather than writing a two-line file.
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line with no line breaks");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");
console.log(ENTRY);
console.error(`entry written: ${ENTRY.length} characters -> ${OUT_PATH}`);
