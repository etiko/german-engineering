# Current website parity audit

**Audit date:** 30 July 2026  
**Current site:** <https://www.germanengineeringcarsales.co.uk/>  
**Result:** Core journeys are represented, but the replacement is not yet
ready for a traffic switch.

## Scope and evidence

The comparison covered:

- The live homepage and navigation.
- The live XML sitemap and robots file.
- Current car and van listings.
- A representative vehicle-detail page.
- Finance, valuation, part-exchange and contact forms.
- Workshop, warranty, delivery, aftercare, reviews, recovery, accident
  management, vacancies and privacy pages.
- Third-party scripts and links visible in public page source.
- Every customer-facing route currently implemented in `web/src/app`.

At the audit snapshot:

- The current sitemap contained 52 URLs: 43 vehicle URLs and 9 landing pages.
- The current listing pages linked to 15 cars and 2 vans.
- The difference between 43 sitemap vehicles and 17 listed vehicles requires
  investigation before migration.
- The replacement now uses a 17-vehicle public-site snapshot and six primary
  customer routes: home, vehicles, vehicle detail, finance, sell your car and
  services. The snapshot is temporary and does not replace a supported feed.

The objective is not to recreate every legacy page. Repeated or weak pages
should be consolidated, but every valuable customer promise, lead route and
indexed URL needs an explicit migration decision.

## Parity matrix

| Area | Current-site capability | Replacement status | Required decision or work |
|---|---|---|---|
| Homepage | Sales, sourcing, workshop, finance and contact messaging | Core proposition, stock search and featured stock are present | Add reviews, opening hours, location and approved trust promises |
| Inventory | Separate car and van listings, make/model and price search, sorting and make/body landing URLs | Combined 17-vehicle snapshot with cars, vans and make/body/max-price filters | Connect the live feed, add model/type/sorting and automate stock reconciliation |
| Vehicle detail | Full description, multiple specifications and equipment, service/warranty copy, AutoTrader intelligence, callback and part exchange | One image, basic facts, short description, call/email and generic valuation link | Add full provider data, gallery, equipment/history, compliant finance, enquiry/test-drive and vehicle-linked part exchange |
| Finance | Full credit application on the dealer platform | Initial non-sensitive email enquiry | Integrate the approved AutoConvert/provider handoff; do not reproduce credit-data storage without compliance approval |
| Sell your car | Detailed straight-sale, commissioned-sale and part-exchange form with condition and image fields | Basic valuation enquiry with service-history and finance questions | Add secure lead delivery, image upload if required and intent-specific fields |
| Part exchange | Dedicated form tied to a selected stock vehicle | Generic sell-your-car route | Preserve the target vehicle ID and distinguish part exchange from a cash valuation |
| Workshop | Hub plus MOT, servicing, tyres, air conditioning and bodywork pages; selected enquiry/booking forms | Modern services hub with primary categories | Add a service/bodywork enquiry, requested date, registration, mileage and photo support |
| MOT | Published Class 4/Class 7 pricing, booking claim and courtesy-car claim | Mentioned within the services hub | Confirm current prices and promises, then add approved content and booking behaviour |
| Recovery and accident management | Dedicated service pages | Accident support is summarised; recovery is absent | Confirm whether both remain active and either add routes or intentionally consolidate them |
| Warranty | 30-day warranty claim and Warranty First extended-cover options | Only a generic vehicle disclaimer | Add approved warranty and eligibility content near vehicle decisions |
| Delivery and aftercare | Dedicated ownership-support pages | Not represented | Add approved support content, either as pages or a consolidated ownership hub |
| Reviews | Testimonials page plus AutoTrader and Google review links | Not represented | Add verified review content and external-source links |
| Contact and location | Contact form, map, directions and opening hours | Phone, email, linked directions, postal address and confirmed footer hours | Add a contact/find-us page with a map and enquiry delivery |
| Stock updates | External email subscription | Not represented | Decide whether to retain, replace or retire it |
| Vacancies | Vacancies page and enquiry form | Not represented | Confirm recruitment need and create a page or an intentional redirect |
| Privacy and cookies | Privacy page and legacy consent notice | No legal routes or consent manager | Add approved privacy, cookies and consent controls before analytics or third-party embeds |
| Regulatory copy | Company and FCA details in the footer | Concise company/FCA footer statement | Obtain approved finance, commission, complaints and company wording |
| Analytics and providers | Placeholder GA tag, Visitor Chat, AutoConvert assets, AutoTrader and Google Maps links | No production integrations | Configure consent-aware analytics and only the providers the business approves |
| SEO migration | Existing canonicals, sitemap, robots and legacy route footprint | Page metadata and vehicle JSON-LD only | Add sitemap, robots, redirects, sold-vehicle policy and Search Console migration |

## Launch-critical gaps

### 1. Inventory source and vehicle completeness

The temporary 17-vehicle snapshot is not a launch substitute for the dealer
stock system.
Before launch, the site must:

- Synchronise all active cars and vans from the approved source of truth.
- Reconcile price, availability, images and status.
- Carry production fields such as engine, doors, registration, owners, service
  history, equipment, warranty, ULEZ and multiple images where supplied.
- Handle reserved, sold and removed stock.
- Preserve the provider stock ID for enquiries, analytics and redirects.

### 2. Reliable lead delivery

Finance and valuation forms currently open a prepared email. This is honest for
the prototype, but it is not sufficient for production because delivery,
confirmation, retry and attribution cannot be guaranteed.

Production needs server-side validation, spam protection, CRM/email delivery,
customer confirmation, failure alerting and campaign/source retention for:

- Vehicle enquiries and test drives.
- Finance handoff.
- Valuations and selected-vehicle part exchange.
- Service/bodywork bookings.
- General contact.

### 3. Trust and ownership information

Warranty, delivery, aftercare and verified reviews materially affect purchase
confidence and are prominent on the current site. They should not disappear
during redesign. The copy must be approved rather than copied blindly because
it creates customer and regulatory commitments.

### 4. Contact and local-business information

A dealership and workshop need an accessible find-us experience with approved
opening hours, directions and a map or map link. This information should also
be reflected consistently in local-business structured data.

### 5. Legal, privacy and finance compliance

The replacement still needs:

- Privacy and cookie information.
- Consent-aware loading for analytics, chat, maps and finance embeds.
- Approved credit-broker, lender, commission and complaints wording.
- Data-retention and form-consent behaviour.
- Appropriate finance-provider handoff rather than local collection of a full
  credit application.

### 6. SEO migration controls

There is no generated sitemap, robots route or redirect map yet. A launch must
not strand the current listing, make, body-style, service and vehicle-detail
URLs. Each current URL needs a destination, redirect status and validation
result.

## Important feature decisions

These are not automatically launch blockers, but each needs an explicit retain,
replace or retire decision:

- Stock-update subscription.
- Vacancies.
- Vehicle sourcing.
- Personal/business contract hire.
- Interest-free workshop service plans.
- Courtesy-car availability and MOT online booking.
- Recovery and accident-management detail pages.
- Visitor Chat.
- Bodywork video and photo-upload workflow.
- Separate make, body-style and local SEO landing pages.

## Legacy data conflicts to resolve

The audit found information that must not be migrated without client approval:

| Item | Conflict |
|---|---|
| Telephone | Most pages use `01440 269543`; the find-us content also shows `01440 387968` |
| Business name | Both "German Engineering Car Specialists Ltd" and "German Engineering Car Sales Ltd" are used |
| Address | Some content includes `Sturmer`; the current replacement does not |
| Opening hours | Visible hours show Saturday `08:00-18:00` and Sunday `10:00-16:00`; current structured data reverses those weekend hours |
| Stock URLs | The sitemap exposes 43 vehicles while live listing pages expose 17 |
| FCA copy | The legacy footer contains a second incomplete `FCA No:` field |
| Analytics | The public GA configuration uses placeholder ID `G-XXXXXXXXXX` |
| Location copy | A van page incorrectly refers to campervans in Oundle/Peterborough |
| Email | The public email uses the `.com` domain while the website uses `.co.uk`; confirm that this is intentional |

## Required redirect coverage

At minimum, the migration map must cover:

| Current pattern | Intended replacement |
|---|---|
| `/used/cars/haverhill/` | `/vehicles` with a car filter |
| `/used/vans/haverhill/` | `/vehicles` with a van filter |
| `/used-cars/{make}/haverhill/`, `/used/{make}/haverhill/` | `/vehicles?make={make}` |
| `/cat/{body}/{id}/` | `/vehicles?body={body}` |
| `/details/.../{stock-id}/` | Exact new vehicle route using the same stock ID |
| `/finance/` | `/finance` |
| `/sellyourcarform/` | `/sell-your-car` |
| `/partexchange/` | Part-exchange flow with selected vehicle retained where available |
| `/pages-servicing-bodyshop/`, `/pages-our-services/` | `/services` |
| Workshop subpages | Approved service child route or the relevant `/services` section |
| `/testimonials/` | Reviews page |
| `/find_us/` | Contact/find-us page |
| `/warranty/`, delivery and aftercare URLs | Approved ownership-support routes |
| `/privacy_policy/` | Privacy page |
| `/pages-vacancies/` | Vacancies page or intentional replacement |

## Safe-to-retire legacy behaviour

Parity does not require preserving:

- Car Dealer 5 branding or template-generated duplication.
- PHP/jQuery implementation details.
- Repeated make links in global navigation.
- Stale location copy.
- The obstructive legacy cookie experience.
- Placeholder analytics configuration.
- Duplicate or incomplete regulatory text.

## Completion criteria

The replacement can be considered functionally equivalent when:

1. Stock totals and records reconcile with the approved source.
2. All critical enquiries arrive at the agreed destination and failure paths
   are monitored.
3. Finance, warranty and regulatory content is formally approved.
4. Reviews, ownership support, contact details, opening hours and directions
   are present.
5. Every valuable current URL has a tested redirect or retained route.
6. Sitemap, robots, structured data, consent and analytics are production
   ready.
7. Client sign-off confirms which optional legacy services remain active.
