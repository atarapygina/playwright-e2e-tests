
## About

This repository is part of my QA learning and portfolio work, focused on developing practical Playwright and TypeScript E2E testing skills.

## What this project covers

* UI and functional E2E testing
* Page navigation and content validation
* Link validation
* Opening and validating links in new tabs
* Negative testing and HTTP 404 validation
* Playwright assertions and locators
* HTML test reports
* Screenshots, video, and traces for test debugging

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Git / GitHub

## Tests

Current test scenarios include:

* Portfolio page displays key QA information
* LinkedIn link points to a valid LinkedIn URL
* LinkedIn link opens the correct profile
* Non-existent portfolio page returns HTTP 404

## Running the Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test:

```bash
npx playwright test tests/portfolio_content.test.ts
```

Generate and open the HTML report:

```bash
npx playwright test --reporter=html
npx playwright show-report
```

## Project Structure

```text
playwright-e2e-tests/
├── tests/
│   ├── portfolio_content.test.ts
│   ├── li_link_works.test.ts
│   ├── li_acc_opened.test.ts
│   └── negative.test.ts
├── playwright.config.ts
├── package.json
└── README.md
```

