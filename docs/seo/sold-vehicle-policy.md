# Sold vehicle policy

**Decision:** Redirect sold vehicle pages immediately to current stock.

When the approved stock source changes a vehicle to `sold`:

1. Remove it from inventory results, featured stock, filter facets and the
   sitemap.
2. Stop pre-generating its detail page.
3. Permanently redirect both its current detail URL and any numeric legacy
   detail URL to `/vehicles`.
4. Do not retain an indexable or noindex sold archive.

The redirect uses HTTP 308, consistent with the rest of the Next.js migration
map. A vehicle is treated as sold only when the data source provides that
status. Unknown stock IDs continue to return 404 because absence alone is not
enough evidence that a vehicle was sold.

The repository already enforces this contract. It becomes operational when the
live stock adapter supplies sold statuses.
