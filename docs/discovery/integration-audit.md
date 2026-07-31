# Integration audit

**Status:** In progress
**Started:** 30 July 2026

## Publicly observed systems

| Area | Observed system |
|---|---|
| Dealer website and stock | Car Dealer 5 / Symphony |
| Vehicle images | CD5 image CDN |
| Marketplace signals | AutoTrader |
| Finance | AutoConvert |
| Chat | Visitor Chat |
| Maps | Google Maps |
| Analytics | Google tag present with placeholder ID |
| Hosting/runtime | Apache, Plesk and PHP 7.4 on the current public site |

## Confirmed public behaviour

- Live cars and vans are published as individual vehicle pages.
- Current listing pages exposed 15 cars and 2 vans on 30 July 2026, while the
  sitemap exposed 43 vehicle URLs; stock and sitemap reconciliation is required.
- Vehicle pages expose schema.org `Vehicle` and `Offer` data.
- Stock records have stable numeric IDs.
- The current sitemap contained 52 URLs at the audit snapshot.
- Stock images are delivered from `img-uk3.cd5.uk`.
- The current site links to AutoTrader and loads AutoConvert and Visitor Chat.
- Current contact and regulatory copy contains inconsistencies that must be resolved before migration.

The route and feature comparison is documented in
`docs/discovery/current-site-parity-audit.md`.

## Access required from the client

- Car Dealer 5 contract, technical contact and administration access.
- Stock/DMS name, owner and feed/API documentation.
- AutoTrader syndication ownership and feed details.
- AutoConvert account and integration documentation.
- CRM or lead-destination details.
- Workshop or garage-management system details.
- Chat and call-tracking account details.
- GA4, Tag Manager, Search Console and Google Business Profile access.
- Approved company, FCA, privacy and finance wording.
- Confirmation of logo, vehicle-image and photography usage rights.

## Architecture decision pending

The current implementation uses a typed server-only fixture behind the vehicle data-access module. The UI does not import provider payloads directly. Once the approved stock source is confirmed, the fixture can be replaced by an adapter without rewriting the pages or cards.

## Blocking questions

1. Does Car Dealer 5 provide a supported JSON, XML or webhook feed?
2. Which system is the source of truth for availability, pricing and images?
3. Does moving the public frontend affect AutoTrader syndication?
4. Can AutoConvert be integrated by API, or must it remain an iframe/embed?
5. Where should sales, valuation and service leads be delivered?
6. Is online reservation required for MVP?
7. Is real-time workshop availability required for MVP?
