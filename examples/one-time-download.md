# Illustrative example: one-time download

**Fictional workflow only; no performance result is claimed.**

## Situation

A fictional seller offers a downloadable planning toolkit. Buyers can preview sample pages and purchase directly. The seller wants to know whether to change creative or checkout.

## Plan

1. Confirm the buyer, use case, file format, license, delivery, price, and refund terms.
2. Map ad → product page → checkout start → payment-confirmed order → delivery → refund/support.
3. Compute order contribution from net collected price less fees, refunds/chargebacks, and variable support/delivery cost. Use the seller's own allowable CAC.
4. Reconcile checkout-start, payment, and Meta purchase events. Look at failures and payment status before calling a checkout rate accurate.
5. If product-page visits occur but few checkout starts, test the preview and offer clarity. If checkout starts but orders fail, inspect payment and price/fee friction before rewriting the ad.
6. Set a spend cap and review only after the selected date window has enough mature purchases and refunds to inform the decision.

The example shows a diagnosis sequence. It does not imply a typical conversion rate or guarantee that the proposed changes will increase sales.
