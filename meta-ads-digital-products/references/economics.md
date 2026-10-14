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

When spend changes and comparable data exists, also inspect incremental (marginal) ROAS: `change in comparable purchase revenue / change in ad spend`. State the comparison periods and other changes. Blended account ROAS can stay high while the additional spend performs below break-even; do not assume a prior average will hold at higher spend.

Neither ratio replaces CAC, payback, cash-flow, or retention analysis. A high revenue ROAS can still be unprofitable when margin, refunds, support, or acquisition labor are ignored.

## Set a target ROAS from the offer's economics

When the user asks for a ROAS target, do not present an industry number as a guarantee. Calculate from the seller's own order economics and state which revenue definition is being targeted.

For a one-time order, using the same gross or net revenue definition in both the margin and ROAS calculation:

`pre-ad contribution margin = contribution before ad spend / revenue`

`break-even revenue ROAS = 1 / pre-ad contribution margin`

This is the revenue ROAS that covers ad spend at the contribution break-even point, before fixed overhead or desired profit. If contribution margin is 80%, break-even is 1.25×; if it is 50%, break-even is 2×. A margin of zero or below has no finite break-even revenue ROAS under this model. For subscriptions, only use observed contribution over a stated, mature horizon; label first-order and cohort ROAS separately.

Set the operating target above break-even by the seller's required profit/cash buffer and any fixed costs they want the target to recover. One useful order-level calculation is:

`target revenue ROAS = average order revenue / allowable media CAC`

If a seller asks to aim for 3×+, record it as a user-selected ambition, then check it against calculated break-even and margin. If break-even exceeds 3×, flag that 3× is below break-even. If break-even is lower, 3× may be profitable before fixed costs, but confirm refunds, actual processor/platform fees, payment timing, attribution, and cohort maturity. Never say the skill or campaign will deliver 3×, or imply that 3× revenue ROAS itself means profit.

Example: a $100 course order yields $80 contribution before ads after variable fees and expected refunds. The pre-ad contribution margin is 80%; break-even revenue ROAS is $100 / $80 = 1.25×. At 3× gross purchase ROAS, $100 ad spend yields $300 attributed revenue, or $240 contribution before ads if the assumptions hold, leaving $140 before fixed costs and other overhead. This illustration assumes payment-confirmed sales and the stated refund/fee estimate; it is not a benchmark or forecast.

## Scenarios when history is missing

Show at least a conservative and a central scenario only when the user needs a number to make a decision. Label each input and source. Vary only assumptions that materially change the answer. Avoid false precision: round outputs to a sensible level and state that scenarios are not Meta benchmarks.

Before recommending scale, confirm the cohort has matured through the relevant trial-to-paid, refund, and renewal period; event reconciliation is acceptable; contribution and payback meet the seller's own target; and product/support capacity can handle more customers.
