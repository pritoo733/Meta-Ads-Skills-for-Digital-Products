# Testing and optimization decisions

Make one decision at a time from a stated hypothesis, an authorized cap, and a review condition. Do not use a universal budget, minimum conversion count, audience size, or creative refresh cadence.

The test should answer one commercial question about one selected offer. Keep the number of concepts and campaign branches within the budget's ability to produce a useful read. Do not double a budget to soothe deadline pressure or spend the remaining balance just because it is available.

## Set a success contract

Before the test, record:

- Business outcome and event definition.
- Product, buyer, market, price, billing/refund terms, contribution assumptions, and capacity.
- Cohort date range, currency, timezone, attribution settings, source of truth, and maturity window.
- Maximum spend/loss, owner, review condition, and any operational stop trigger.
- One primary hypothesis and the evidence that would support or weaken it.
- Continue, revise, pause, and scale conditions tied to the seller's own economics.
- If the path starts with a signup, webinar, demo, or trial: the downstream paid-customer measure, owner and follow-up timing, and the join between ad, lead/trial, and payment records.

If the spend cap cannot afford a useful chance to answer the question, reduce test complexity or gather evidence before running it.

## Choose the test by the bottleneck

| Evidence | Candidate test | Keep stable where practical |
| --- | --- | --- |
| Offer interest but weak purchase intent | Clarify offer, terms, price presentation, fit, or product demo | Audience and event definition |
| Ad response weak relative to account's own comparable history | Test a distinct buyer insight or demonstration | Offer and destination |
| Product-page views without checkout starts | Test message match, product explanation, proof, price clarity, mobile experience | Traffic source and offer |
| Checkout starts without paid orders | Inspect payment failures, surprise fees, checkout usability, trust, and terms before creative changes | Product and audience |
| Purchase count acceptable but contribution weak | Review discounts, refunds, fees, bundles, payment mix, and customer quality | Acquisition setup until economics understood |
| Trial signups without activation or paid conversion | Inspect onboarding, activation definition, trial fit, and time-to-value | Signup promise and audience |
| Leads/webinar signups without verified sales | Reconcile payment records; inspect attendance or demo completion, follow-up, offer engagement, checkout starts, and paid orders by cohort | Offer and acquisition setup until the downstream leak is evidenced |
| Early joins/purchases with poor later retention | Inspect product delivery, onboarding, expectations, refunds, churn, and capacity | Do not increase spend until quality is explained |

These are diagnostic hypotheses, not automatic causes. Confirm them with stage-specific evidence before acting.

Use this sequence when the user says “ads are not making sales”:

1. **Confirm the sale count.** Reconcile unique captured payments and refunds with Meta Purchase events, values, currency, deduplication, attribution settings, and date windows. A dashboard value mismatch is unresolved evidence, not revenue.
2. **Locate the earliest measured leak.** Compare delivery → qualified visit → checkout/trial/lead → attended/activated → paid order → net contribution. Use counts and denominators; mark missing or immature stages instead of inventing a conversion rate.
3. **Match the intervention to the stage.** Weak qualified response suggests a buyer/message/creative hypothesis. Visits without checkout suggest offer, page, or message-match inspection. Checkouts without captured payment suggest payment and checkout QA. Leads without sales require follow-up, attendance, offer, and payment analysis before optimizing for more leads.
4. **Protect the decision quality.** Hold scale while purchase measurement or economics are unresolved. Continue only inside the agreed cap when the next spend can answer a defined question; pause for a broken purchase path, unreliable tracking, reached loss cap, failed economics rule, policy issue, or capacity limit.
5. **Set the next checkpoint from the real lag.** Use checkout, sales-cycle, trial-to-paid, refund, and renewal timing. A review date can catch technical failures early; it cannot make an immature cohort mature.

Do not stop or scale solely because spend crossed a fixed multiple of target CAC, a fixed number of days elapsed, or CTR led the account. These can prompt a review but do not establish whether additional spend is affordable or whether a business outcome has occurred. With very few purchases, state that the result is directional or inconclusive and keep the decision bounded by the seller's risk limit.

When Meta Purchase counts or values conflict with payment records, hold scaling and reconcile the discrepancy. If the purchase path or reporting cannot be verified, or the seller has not set an affordable loss cap, do not recommend more prospecting spend until the discrepancy and cap are resolved. A previously authorized, bounded test may continue only if it can still answer a defined question without relying on the disputed purchase signal.

## Read the cohort and decide

- **Continue within cap:** measurement works, quality is within the user's stated tolerance, and the remaining test can answer the hypothesis. Define the next evidence checkpoint.
- **Revise and retest:** evidence points to a specific constraint. Change one primary variable and preserve the previous cohort for comparison.
- **Pause or stop:** the cap is reached, economics fail the agreed rule, tracking is unreliable, policy/consent is unresolved, or delivery capacity is exceeded.
- **Scale in bounded steps:** mature cohorts meet contribution, CAC/payback, refund, and retention rules; measurement reconciles; capacity is available. Recheck marginal cost and quality after each change.

Keep pending outcomes visible. A recent cohort should not be judged on renewals or refunds it has not had time to produce. Use counts beside rates; say “not estimable” when there is no denominator. Attribution is not causal proof, and a small test may remain inconclusive.
