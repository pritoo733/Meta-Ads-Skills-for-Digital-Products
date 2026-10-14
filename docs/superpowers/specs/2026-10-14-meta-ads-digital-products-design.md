# Meta Ads Skills for Digital Products: Design

## Purpose

Create a standalone, reusable skill repository that helps digital-product sellers use Meta Ads to acquire customers and generate profitable sales. The repository is separate from `Meta-Ads-Skills-for-Digital-Agency` and must not depend on agency lead-generation assumptions.

## Intended users and products

The skill serves founders, creators, and marketers selling:

- SaaS and software subscriptions
- PDFs and other downloadable products
- Video courses
- Paid communities and memberships
- Templates
- Plugins and extensions

It should adapt the funnel and economics to each product instead of assuming every seller wants a booked sales call.

## Design principles

1. Optimize for qualified purchases and contribution, not cheap clicks, leads, or platform-reported conversions alone.
2. Start with the offer, buyer, evidence, price, gross margin, fulfillment capacity, and refund or churn exposure before recommending spend.
3. Distinguish one-time purchases, subscriptions, trials, freemium, and higher-consideration products; define the right conversion event and evaluation window for each.
4. Treat Meta campaign features and policies as time-sensitive. Verify current controls and rules before advising live changes.
5. Label facts as observed, user-provided, inferred, or unverified. Never promise sales, ROAS, or a guaranteed outcome.
6. Draft recommendations by default. Apply account, site, or budget changes only when specifically authorized and supported by available access.

## Proposed repository contents

- `meta-ads-digital-products/SKILL.md`: the entrypoint with routing, workflow, product-type distinctions, evidence boundaries, and output expectations.
- `meta-ads-digital-products/references/`: focused guides for offer and unit economics, funnel and measurement, creative testing, product-specific playbooks, and launch/optimization decisions.
- `README.md`: audience, scope, installation/use instructions, examples, limitations, and contribution guidance.
- `scripts/` and `tests/`: lightweight package validation and checks for required skill metadata, links, and structure.
- `LICENSE`: MIT, consistent with the related public skill repository unless repository-level constraints require otherwise.

## Core workflow

1. Identify product model, buyer, offer, price, fulfillment, and desired purchase path.
2. Check unit economics and break-even constraints, including payment fees, variable delivery cost, refunds, trial-to-paid conversion, subscription retention, and allowable CAC where data exists.
3. Map the buyer journey from ad to landing page or checkout, purchase, onboarding, and (for subscriptions) retained value. Select an event that represents a real business outcome and can be verified.
4. Develop distinct creative hypotheses based on buyer problems, desired outcomes, mechanism, proof, objections, and product experience. Respect claims and evidence.
5. Set up a bounded test with a clear spend cap, measurement plan, review condition, and rules for continue, revise, pause, or scale.
6. Evaluate matured cohorts using reconciled platform, website, checkout, and business data; account for attribution limits and sales-cycle or retention lag.
7. Diagnose the earliest evidenced bottleneck and change one primary variable at a time when practical.

## Product-specific guidance

- **SaaS:** separate trial or signup acquisition from activated, paid, and retained customers; consider payback and cohort retention rather than signup CPA alone.
- **PDFs and downloads:** prioritize purchase conversion, checkout friction, price and bundle tests, refund rate, and contribution after fees.
- **Courses:** account for consideration time, proof quality, curriculum and outcome claims, payment plans, refunds, and cohort or evergreen delivery.
- **Communities and memberships:** distinguish initial join from renewal and retained participation; avoid optimizing only for low-cost joins.
- **Templates:** clarify use case, compatibility, preview quality, license, bundle value, and post-purchase support expectations.
- **Plugins:** account for platform compatibility, installation and activation, trial or purchase path, recurring value, and support burden.

## Scope boundaries

The repository focuses on Meta Ads strategy and execution for digital products. It does not provide legal, tax, or financial advice; guarantee outcomes; claim access to an ad account; or cover unrelated agency operations. Product-specific details are decision aids, not universal benchmarks.

## Success criteria

- A new user can identify the applicable product playbook and follow a complete path from offer assessment through measurement and optimization.
- Recommendations use product-appropriate purchase and retention metrics, with assumptions and missing evidence stated plainly.
- The package follows the current Agent Skills format and its local links and validation checks pass.
- The repository is self-contained, discoverable, licensed, and ready for public use on GitHub.

## Risks and mitigations

- **Stale platform instructions:** avoid hard-coded UI steps and require current official-source verification for changing controls and policies.
- **Optimizing vanity metrics:** define business outcomes, cohort windows, and reconciliation before launch.
- **Overgeneralized economics:** use seller-specific inputs or clearly labeled scenarios; do not invent benchmarks.
- **Product breadth obscures differences:** keep a short core workflow and route into focused product playbooks.
- **Unsupported outcome claims:** require substantiation and reflect the product experience in ad and landing-page claims.
