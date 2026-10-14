# Funnel event map and QA

| Stage | Business definition | System of record | Event/source | Identifier and timestamp | QA evidence | Known gap |
| --- | --- | --- | --- | --- | --- | --- |
| Ad click / arrival |  |  |  |  |  |  |
| Product-page view |  |  |  |  |  |  |
| Checkout/trial start |  |  |  |  |  |  |
| Paid order/signup |  |  |  |  |  |  |
| Activation/fulfillment |  |  |  |  |  |  |
| Refund/renewal/retention |  |  |  |  |  |  |

## Verification notes

- Date range, timezone, and currency:
- Meta attribution settings:
- Payment/order source:
- Browser and server event overlap/deduplication:
- Consent and data minimization:
- Test transaction/activation trace:
- If checkout is separate from the landing page: handoff/domain path, campaign-identifier continuity where supported, and checkout system of record:
- Captured-payment verification; success/failure/cancel/refund paths; stable order/event ID and value/currency checks:
- Difference between Meta, analytics, and payment counts:
- What remains unverified:
