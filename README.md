# Currency Converter

Simple USD to IRR currency converter built with React and TypeScript.

## Features
- Convert dollars to rials and rials to dollars
- The user enters the rate (price of 1 dollar in rials) and the amount
- Result is formatted with thousand separators
- Validation for zero and negative values

## Tech
React, TypeScript, Vite, Tailwind CSS, pnpm

## Run locally
pnpm install
pnpm dev

## Decisions
- The task has no API, so the user enters the rate. The task text was
  ambiguous about "dollar value", so I take both rate and amount from the user.
- Conversion logic is in a separate pure function (`converter.ts`),
  so it is easy to change later.
- Zero and negative values are invalid. Before anything is entered, the result shows 0.

## Sources
- Tailwind CSS docs
- Claude (AI assistant): used for code review and for discussing design decisions