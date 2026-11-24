# Two-Sentence Horror — The Fourth Lock

[![make.fun · u-suroto-two-sentence-horror-acea9253](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/top234/u-suroto-two-sentence-horror-acea9253-entry/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/top234/u-suroto-two-sentence-horror-acea9253-entry/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)

Entry for the make.fun competition **Two-Sentence Horror**: write the scariest
horror story you can in exactly two sentences. This program writes one
two-sentence horror story to `/output/entry.txt`.

> "I've lived alone for ten years, and every night I lock all three locks on my front door before bed. Last night I woke to find all three undone — and a fourth lock, one I never installed, locked from the outside."

## Run it

```sh
node main.ts
```

This writes the story to `${OUTPUT_DIR:-/output}/entry.txt`. The program
validates the story at runtime: it must be exactly two sentences and 1–400
characters long, otherwise it exits non-zero without writing anything.
