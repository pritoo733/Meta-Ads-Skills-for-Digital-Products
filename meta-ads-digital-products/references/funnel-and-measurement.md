# Purchase funnel and measurement

Map one real buyer journey and one source of truth for each stage. Do not report a recommended configuration as if it were installed.

## Funnel map

For a direct sale:

`ad impression → click or destination view → product/landing page → checkout start → paid order → fulfilled/activated customer → refund, repeat purchase, or renewal`

For SaaS, trial products, or freemium:

`ad → signup/trial → meaningful activation → paid conversion → retained paid cohort`

Use a webinar, demo, email sequence, or consultation only when buyer friction and product complexity justify that route. It is not the default for every digital product.

At each step, document the definition, system of record, identifier, timestamp, and owner. Identify important missing joins before attributing downstream sales to a specific ad.

When an app or landing-page builder (including Lovable) hands buyers to a separate checkout or payment provider, map the handoff explicitly. Identify which system owns the captured order, how campaign identifiers/UTMs persist where technically and legally supported, and how a successful payment is joined back to the ad click. Test the live purchase path across both domains, including success, failure, cancellation, and refund states. Do not assume the page builder or a reloadable thank-you page proves a captured payment; verify implementation against the actual checkout/provider and current platform documentation.

## Event map and source of truth

Prefer an event that represents the business outcome the campaign is intended to create, provided it is available, accurately recorded, consented, and supported for the selected campaign configuration. A page view or signup can be a useful diagnostic stage but is not equivalent to a paid customer.

For every event, record:

| Field | Example prompt |
| --- | --- |
| Business meaning | What actually happened for the buyer? |
| Event source | Browser pixel, server event, app/store, payment platform, or CRM? |
| Deduplication | Are browser and server copies matched according to current Meta guidance? |
| Value and currency | Does value reflect the event and agreed revenue definition? |
| Consent and minimization | Is collection permitted and limited to needed data? |
| QA evidence | Was a real test purchase/signup traced through each system? |

Do not put sensitive personal data or unnecessary product answers into ad event payloads. Respect consent, applicable law, platform terms, and data retention policy. Avoid collecting or sending customer information without a lawful basis and proper controls.

For purchase optimization, confirm Purchase represents a successfully captured order in the source of truth; document how asynchronous payment methods, duplicate notifications, cancellations, and refunds are handled. Use a stable order/event identifier for duplicate handling across sources where the integration supports it, and reconcile order ID, value, and currency. Check current provider and Meta documentation before recommending a specific implementation.

## Reconcile before diagnosing

Compare Meta event totals with the website or app analytics and payment/order source over the same timezone, date range, event definition, and currency. Check test orders, duplicate browser/server events, payment authorization versus capture, cancellations, refunds, rejected payments, cross-device paths, delayed conversion, and attribution settings.

Label platform-attributed, analytics-recorded, and payment-confirmed sales separately. A mismatch is an investigation item; do not silently choose the largest count.

## Find the earliest evidenced leak

Use counts and rates with denominators:

- Delivery/reach problem: confirmed only after spend and eligible audience delivery are checked.
- Weak response: inspect creative, audience eligibility, placement, and message relevance; CTR alone is not a sale verdict.
- Page gap: check landing sessions, mobile rendering, load failures, offer match, proof, price/terms clarity, and purchase action.
- Checkout gap: inspect checkout-start-to-paid completion, errors, shipping/tax/fee surprises if applicable, payment options, and failed transactions.
- Purchase quality gap: inspect refunds, chargebacks, support load, activation, and retention by cohort.

Do not diagnose a stage from totals with different windows or incomplete cohorts. Record where measurement itself is unverified.
