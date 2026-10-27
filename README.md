# Currency Converter

Simple USD to IRR currency converter built with React and TypeScript.

## Features
- Convert dollars to rials and rials to dollars
- The user enters the rate (price of 1 dollar in rials) and the amount
- Validation for negative values

## Tech
React, TypeScript, Vite, Tailwind CSS, pnpm

## Run locally
pnpm install
pnpm dev

## Decisions
- The task has no API, so the user enters the rate. The rate starts at 269000 
  a default and the user can change it.
- Conversion logic is in a separate pure function (`converter.ts`),
  so it is easy to change later.
- negative values are invalid.

## Sources
- Tailwind CSS docs
- Claude (AI assistant): used for code review and for discussing design decisions