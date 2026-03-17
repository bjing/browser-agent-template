# Browser Agent Template

Basic project template for browser automation with TypeScript and Playwright.

## Includes

- TypeScript project setup with strict compiler settings
- Playwright automation script in `src/index.ts`
- Playwright test runner config in `playwright.config.ts`
- Example test in `tests/example.spec.ts`
- Environment variable template in `.env.example`

## Quick Start

```bash
npm install
cp .env.example .env
npm run install:browsers
```

Run the sample automation script:

```bash
npm run dev
```

Run the example Playwright test:

```bash
npm test
```

## Scripts

```bash
npm run dev              # run the sample automation script with tsx
npm run build            # compile TypeScript into dist/
npm run start            # run the compiled script
npm run check            # type-check the project
npm test                 # run Playwright tests
npm run test:ui          # open the Playwright UI runner
npm run codegen          # start Playwright codegen
npm run install:browsers # install Playwright browser binaries
```

## Environment Variables

```bash
BASE_URL=https://example.com
HEADLESS=true
NAVIGATION_TIMEOUT_MS=30000
```

## Next Steps

- Replace the example logic in `src/index.ts` with your automation flow
- Add reusable helpers under `src/`
- Add project-specific tests under `tests/`
