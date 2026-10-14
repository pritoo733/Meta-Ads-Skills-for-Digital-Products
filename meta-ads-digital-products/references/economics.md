# Digital-product acquisition economics

Use seller inputs and a stated time horizon. These calculations are decision aids, not predictions.

## Build contribution before acquisition

For a one-time order, estimate contribution before advertising:

`order contribution = net collected order revenue - payment/marketplace fees - expected refunds/chargebacks - variable delivery and support cost`

Define net collected revenue consistently: account for discounts, taxes collected/remitted when relevant, payment plans, and refunds. Do not subtract a cost twice.

For subscriptions, estimate contribution across an explicit horizon using observed cohort renewals, cancellations, refunds, payment failures, fees, and variable service/support costs. Do not multiply current monthly revenue by an invented lifetime. When retention history is sparse, show short-horizon scenarios and keep unknown outcomes pending.

## CAC, CPA, and payback

Define:

- **Media CAC:** ad spend / new paying customers attributed or matched under the stated rule.
- **Fully loaded CAC:** media plus allocated acquisition labor, creative, tools, and other agreed costs / new customers.
- **Allowable media CAC:** maximum acceptable fully loaded CAC less non-media acquisition costs allocated per acquired customer, when the accounting boundary is consistent.
- **Break-even CPA:** contribution available for acquisition over the chosen horizon. If a desired profit or cash buffer remains, subtract it before setting the target.
- **Payback:** time until cumulative customer contribution covers acquisition cost; use cash timing, not booked revenue alone.

For a proposed spend cap `B` and allowable media CAC `C`, `B / C` is the customer count required to meet that target if achieved. It is not a forecast or promised count. If the cap cannot plausibly produce decision-useful evidence, simplify the test, validate demand, or pause.

## ROAS is not contribution

`platform ROAS = platform-attributed purchase value / platform-reported ad spend`

This may differ from analytics or payment records because of attribution windows, modeled conversions, duplicated events, cross-device behavior, cancellations, refunds, and sales lag. Report the source and settings.

Where inputs support it, calculate:

`net revenue ROAS = net collected revenue in the stated cohort / ad spend`

`contribution ROAS = contribution before acquisition cost in the stated cohort / ad spend`

Neither ratio replaces CAC, payback, cash-flow, or retention analysis. A high revenue ROAS can still be unprofitable when margin, refunds, support, or acquisition labor are ignored.

## Scenarios when history is missing

Show at least a conservative and a central scenario only when the user needs a number to make a decision. Label each input and source. Vary only assumptions that materially change the answer. Avoid false precision: round outputs to a sensible level and state that scenarios are not Meta benchmarks.

Before recommending scale, confirm the cohort has matured through the relevant trial-to-paid, refund, and renewal period; event reconciliation is acceptable; contribution and payback meet the seller's own target; and product/support capacity can handle more customers.
