import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "I've lived alone for ten years, and every night I lock all three locks on my front door before bed. Last night I woke to find all three undone — and a fourth lock, one I never installed, locked from the outside.";

function countSentences(text: string): number {
  const trimmed = text.trim();
  if (trimmed.length === 0) return 0;
  const matches = trimmed.match(/[^.!?]+[.!?]+["'”)]*\s*/g);
  return matches ? matches.length : 1;
}

function validate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 400) {
    throw new Error(`story must be 1-400 characters, got ${length}`);
  }
  const sentences = countSentences(text);
  if (sentences !== 2) {
    throw new Error(`story must be exactly 2 sentences, got ${sentences}`);
  }
}

function main(): void {
  validate(story);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, story, "utf8");
}

main();
