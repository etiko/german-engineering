# Legacy redirect map

**Status:** Implemented migration foundation
**Updated:** 30 July 2026

The application uses permanent HTTP 308 redirects, the status emitted by
Next.js for method-preserving permanent redirects.

## Implemented content redirects

| Legacy URL or pattern | Destination |
|---|---|
| `/index/` | `/` |
| `/used/cars/haverhill/` | `/vehicles` |
| `/used/vans/haverhill/` | `/vehicles` |
| `/used/cars/suffolk/` | `/vehicles` |
| `/used-cars/{make}/haverhill/` | `/vehicles?make={make}` |
| `/used-vans/{make}/haverhill/` | `/vehicles?make={make}` |
| `/used/{make}/haverhill/` | `/vehicles?make={make}` |
| `/cat/{body}/{id}/` | `/vehicles?body={body}` |
| `/sellyourcarform/` | `/sell-your-car` |
| `/partexchange/` | `/sell-your-car` |
| `/find_us/` | `/contact` |
| `/testimonials/` | `/reviews` |
| `/warranty/` | `/warranty-and-aftercare#warranty` |
| `/pages-delivery/` | `/warranty-and-aftercare#delivery` |
| `/pages-customer-aftercare/` | `/warranty-and-aftercare#aftercare` |
| `/privacy_policy/` | `/privacy` |
| Servicing/bodyshop hub and current workshop subpages | `/services` |

Legacy make and body identifiers are normalized so values such as
`land_rover` and `panel-van` select the matching current filter.

## Vehicle redirects

The catch-all legacy detail route extracts the final numeric stock ID. The 17
vehicles in the current snapshot redirect to their exact new detail routes,
regardless of the descriptive segments in the old URL.

Unmatched stock IDs return a real 404 until the feed and sold-vehicle policy
are implemented. They must not be redirected indiscriminately to the inventory
page.

Automated browser tests verify representative content, privacy and active-stock
redirects without following them, including the expected HTTP 308 status and
destination.

## Deferred destinations

These legacy URLs need an approved equivalent before a permanent redirect is
safe:

- `/pages-vacancies/`

Redirecting these pages to an unrelated destination would risk confusing users
and being treated as a soft 404 by search engines.

## Sold vehicles

Once the approved source marks a vehicle sold, its current and legacy detail
URLs redirect immediately to `/vehicles`. Unknown stock IDs still return 404.
See `docs/seo/sold-vehicle-policy.md` for the full rule.
