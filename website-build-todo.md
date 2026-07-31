# German Engineering Website Build Todo

**Project:** German Engineering Car Specialists website rebuild
**Architecture:** Next.js, React, TypeScript, Sanity, PostgreSQL, Vercel, and Cloudflare
**Delivery model:** Custom frontend connected to an automotive stock feed/API
**Target:** MVP production launch in 12-15 weeks

## How to use this list

- `[P0]` is required for MVP launch.
- `[P1]` is valuable but can be moved after launch if schedule or budget requires it.
- `[P2]` is a later enhancement.
- A phase is complete only when its exit criteria are satisfied.
- Every completed task should have evidence such as a design link, pull request, test result, approved document, or production check.

## Critical path

```text
Integration audit
  -> Requirements and architecture
  -> UX/design + platform foundation + content model
  -> Inventory + customer journeys + lead integrations
  -> SEO migration + compliance/security
  -> QA/UAT
  -> Production launch
  -> Handover and hypercare
```

## Definition of done

A build item is done when:

- [ ] Its agreed acceptance criteria are met.
- [ ] Responsive desktop and mobile behaviour is complete.
- [ ] Loading, empty, success, and error states are handled.
- [ ] Accessibility requirements are implemented.
- [ ] Analytics events are included where relevant.
- [ ] Automated checks and relevant manual tests pass.
- [ ] Content and legal wording are approved where relevant.
- [ ] Operational documentation is updated.
- [ ] No critical or high-severity defect remains.

---

## Phase 0: Discovery and integration audit

**Milestone:** `auditing-integrations`

### Business and access

- [ ] [P0] Confirm the client sponsor and primary decision-maker.
- [ ] [P0] Identify sales, service, finance, marketing, and compliance stakeholders.
- [ ] [P0] Agree project communication, review, and approval process.
- [ ] [P0] Collect current hosting and domain access.
- [ ] [P0] Collect Car Dealer 5 account, contract, and technical contact details.
- [ ] [P0] Collect DMS or stock-management system details.
- [ ] [P0] Collect AutoTrader feed and account details.
- [ ] [P0] Collect AutoConvert contract and integration documentation.
- [ ] [P0] Collect CRM and lead-routing details.
- [ ] [P0] Collect chat, call-tracking, email, maps, reviews, and workshop-system details.
- [ ] [P0] Collect GA4, Tag Manager, Search Console, and Google Business Profile access.
- [ ] [P0] Confirm image, logo, review, copy, and vehicle-data usage rights.

### Current-state audit

- [ ] [P0] Export or crawl all current public URLs.
- [ ] [P0] Capture current stock counts and vehicle status behaviour.
- [ ] [P0] Document current forms and their destinations.
- [ ] [P0] Document current finance and valuation journeys.
- [ ] [P0] Document current analytics events and lead attribution.
- [ ] [P0] Establish baseline traffic, leads, conversion rates, and device split.
- [ ] [P0] Establish baseline Core Web Vitals where field data is available.
- [ ] [P0] Identify duplicate, stale, inaccurate, or missing content.
- [ ] [P0] Record current legal, company, privacy, cookie, and FCA wording.
- [ ] [P0] Record all current third-party scripts and cookies.

### Integration feasibility

- [ ] [P0] Confirm the master source of vehicle stock.
- [ ] [P0] Obtain a sample API, XML, JSON, CSV, or webhook payload.
- [ ] [P0] Confirm authentication, rate limits, support, and service availability.
- [ ] [P0] Confirm stock update frequency.
- [ ] [P0] Confirm vehicle status values: available, reserved, sold, hidden, and coming soon.
- [ ] [P0] Confirm stable stock identifiers and vehicle URL requirements.
- [ ] [P0] Confirm image URLs, formats, ordering, and post-migration access.
- [ ] [P0] Confirm how stock is syndicated to AutoTrader and other marketplaces.
- [ ] [P0] Confirm whether finance examples are supplied per vehicle.
- [ ] [P0] Confirm whether the selected CRM exposes an API or email ingestion route.
- [ ] [P0] Confirm whether service booking is a callback form or calendar integration.
- [ ] [P0] Define the fallback if the current provider cannot expose stock data.

### Scope decisions

- [ ] [P0] Decide whether online reservation is in MVP.
- [ ] [P0] Decide whether WhatsApp is an approved contact channel.
- [ ] [P0] Decide whether live chat is retained, replaced, or removed.
- [ ] [P0] Decide whether registration lookup and automated valuation are in MVP.
- [ ] [P0] Decide whether service bookings require real-time availability.
- [ ] [P0] Decide whether favourites, comparison, and saved searches are MVP or phase two.
- [ ] [P0] Agree the required content-writing and photography scope.

### Phase 0 exit criteria

- [ ] A supported route for stock data has been confirmed.
- [ ] Finance, CRM, and lead integrations have a documented approach.
- [ ] Required access and provider contacts are available.
- [ ] MVP decisions and major exclusions are recorded.
- [ ] No unresolved integration issue prevents fixed scoping.

---

## Phase 1: Requirements and frontend architecture

**Milestone:** `defining-requirements`

### Product requirements

- [ ] [P0] Write MVP user stories for vehicle buyers.
- [ ] [P0] Write MVP user stories for finance-led buyers.
- [ ] [P0] Write MVP user stories for sellers and part-exchange customers.
- [ ] [P0] Write MVP user stories for service and bodyshop customers.
- [ ] [P0] Define functional acceptance criteria for every route and form.
- [ ] [P0] Define stock sync accuracy and freshness requirements.
- [ ] [P0] Define form delivery, retry, and notification requirements.
- [ ] [P0] Define content-editor roles and permissions.
- [ ] [P0] Define supported browsers, devices, and screen sizes.
- [ ] [P0] Define availability, recovery, and backup requirements.

### Frontend architecture

- [ ] [P0] Confirm a single modular Next.js application rather than micro-frontends.
- [ ] [P0] Confirm TypeScript strict mode.
- [ ] [P0] Confirm server components as the default.
- [ ] [P0] Identify components that require client-side interaction.
- [ ] [P0] Define SSR, static generation, and incremental revalidation by route.
- [ ] [P0] Define route and URL conventions.
- [ ] [P0] Define feature-module boundaries:
  - Vehicles
  - Finance
  - Sell and part exchange
  - Services
  - Enquiries
  - Content
  - Analytics and consent
- [ ] [P0] Define the backend-for-frontend boundary for external providers.
- [ ] [P0] Define typed API contracts and error formats.
- [ ] [P0] Define stock and CMS caching rules.
- [ ] [P0] Define URL search-parameter behaviour for inventory filters.
- [ ] [P0] Confirm that Redux is not required for MVP.
- [ ] [P0] Use local state, URLs, server data, and form state by default.
- [ ] [P0] Define component, utility, type, and server-only module conventions.

### Data and integration design

- [ ] [P0] Define the normalised vehicle data model.
- [ ] [P0] Define stock-provider-to-domain field mappings.
- [ ] [P0] Define vehicle slug and stable ID strategy.
- [ ] [P0] Define sold and reserved vehicle behaviour.
- [ ] [P0] Define stock sync idempotency and reconciliation.
- [ ] [P0] Define CMS content models and references.
- [ ] [P0] Define lead data models and provider mappings.
- [ ] [P0] Define data retention and deletion rules.
- [ ] [P0] Define audit logging without storing unnecessary personal data.

### Quality and operations

- [ ] [P0] Define Core Web Vitals and page-weight budgets.
- [ ] [P0] Define WCAG 2.2 AA acceptance requirements.
- [ ] [P0] Define security-header and form-security requirements.
- [ ] [P0] Define monitoring, logging, alerting, and ownership.
- [ ] [P0] Define the analytics event and conversion model.
- [ ] [P0] Define release, rollback, and incident procedures.
- [ ] [P0] Create the final delivery plan and dependency map.

### Phase 1 exit criteria

- [ ] MVP scope and acceptance criteria are approved.
- [ ] Frontend and integration architecture is approved.
- [ ] Data contracts and provider responsibilities are documented.
- [ ] Performance, accessibility, security, and analytics requirements are measurable.

---

## Phase 2: Information architecture, UX, and visual design

**Milestone:** `designing-experience`

### Information architecture

- [ ] [P0] Finalise the sitemap.
- [ ] [P0] Reduce desktop navigation to approximately five primary choices.
- [ ] [P0] Define mobile navigation and persistent contact actions.
- [ ] [P0] Define breadcrumbs and related-content paths.
- [ ] [P0] Define footer navigation and required legal links.

### User flows

- [ ] [P0] Design browse-to-enquiry flow.
- [ ] [P0] Design monthly-budget-to-finance flow.
- [ ] [P0] Design vehicle-detail-to-part-exchange flow.
- [ ] [P0] Design sell-your-car flow.
- [ ] [P0] Design service and bodyshop booking flow.
- [ ] [P0] Design sold, reserved, empty-stock, and no-results flows.
- [ ] [P0] Design consent and preference-management flow.

### Wireframes

- [ ] [P0] Wireframe desktop and mobile homepage.
- [ ] [P0] Wireframe stock listing and filter drawer.
- [ ] [P0] Wireframe vehicle detail page.
- [ ] [P0] Wireframe finance page and provider handoff.
- [ ] [P0] Wireframe sell-your-car and part-exchange forms.
- [ ] [P0] Wireframe services hub and service detail pages.
- [ ] [P0] Wireframe service/bodyshop enquiry form.
- [ ] [P0] Wireframe reviews, about, guides, contact, and legal templates.
- [ ] [P0] Wireframe loading, empty, validation, success, and error states.

### Design system

- [ ] [P0] Approve colour palette and contrast combinations.
- [ ] [P0] Approve typography scale and font-loading strategy.
- [ ] [P0] Define spacing, grid, breakpoint, radius, shadow, and motion tokens.
- [ ] [P0] Design buttons, links, icons, badges, and status indicators.
- [ ] [P0] Design form fields, selects, checkboxes, radios, uploads, and errors.
- [ ] [P0] Design stock cards and featured-vehicle cards.
- [ ] [P0] Design header, menus, footer, cookie controls, and mobile action bar.
- [ ] [P0] Design dialogs, drawers, accordions, tabs, alerts, and toasts.
- [ ] [P0] Design image gallery and thumbnails.
- [ ] [P0] Design skeleton and loading states.

### Page designs

- [ ] [P0] Complete high-fidelity homepage design.
- [ ] [P0] Complete high-fidelity stock-listing design.
- [ ] [P0] Complete high-fidelity vehicle-detail design.
- [ ] [P0] Complete high-fidelity finance design.
- [ ] [P0] Complete high-fidelity valuation and service-form designs.
- [ ] [P0] Complete representative content and legal-page designs.
- [ ] [P0] Annotate responsive behaviour.
- [ ] [P0] Annotate keyboard, focus, error, and screen-reader expectations.
- [ ] [P0] Review designs against real stock data and long vehicle names.

### Phase 2 exit criteria

- [ ] Critical desktop and mobile screens are approved.
- [ ] Component states and responsive behaviour are documented.
- [ ] Accessibility review has no unresolved design blocker.
- [ ] Real content and stock data fit the approved layouts.

---

## Phase 3: Platform and repository foundation

**Milestone:** `establishing-platform`

### Repository and application

- [x] [P0] Create the Git repository.
- [ ] [P0] Configure branch protection and pull-request review rules.
- [x] [P0] Scaffold Next.js with the App Router and TypeScript.
- [x] [P0] Enable TypeScript strict mode.
- [x] [P0] Configure the agreed package manager and lockfile policy.
- [ ] [P0] Configure linting, formatting, unit tests, and end-to-end tests.
- [x] [P0] Add an environment-variable schema and startup validation.
- [ ] [P0] Establish the agreed project structure:

```text
src/
  app/
  components/
    ui/
    layout/
  features/
    vehicles/
    finance/
    valuations/
    services/
    enquiries/
  lib/
    analytics/
    cms/
    inventory/
    validation/
  server/
    integrations/
    repositories/
  types/
```

- [x] [P0] Add import aliases and module-boundary conventions.
- [x] [P0] Separate server-only provider code from browser bundles.

### Environments and delivery

- [ ] [P0] Create development, preview, staging, and production environments.
- [ ] [P0] Configure Vercel projects and access controls.
- [ ] [P0] Configure Cloudflare DNS and WAF plan.
- [ ] [P0] Configure preview deployments for pull requests.
- [ ] [P0] Configure CI checks for type-checking, linting, tests, and builds.
- [ ] [P0] Configure protected production deployment.
- [ ] [P0] Document secret creation, rotation, and ownership.

### Observability and security baseline

- [ ] [P0] Configure Sentry for browser and server errors.
- [ ] [P0] Configure uptime monitoring for public pages and critical endpoints.
- [ ] [P0] Configure structured logging with personal-data redaction.
- [ ] [P0] Configure health and integration-status checks.
- [x] [P0] Add HSTS and baseline security headers.
- [ ] [P0] Add initial Content Security Policy in report-only mode.
- [ ] [P0] Add rate-limiting infrastructure.
- [ ] [P0] Configure Cloudflare Turnstile.
- [x] [P0] Configure dependency and vulnerability monitoring.

### Shared quality tooling

- [ ] [P0] Add Vitest.
- [ ] [P0] Add React Testing Library.
- [ ] [P0] Add Playwright.
- [ ] [P0] Add axe accessibility checks.
- [ ] [P0] Add test fixtures and provider mocks.
- [ ] [P0] Add bundle analysis.
- [ ] [P0] Add performance-budget checks where practical.

### Phase 3 exit criteria

- [ ] A basic application deploys through CI to preview and staging.
- [x] Environment validation prevents missing production configuration.
- [ ] Monitoring captures a test browser and server error.
- [ ] Security headers and access controls are active in staging.

---

## Phase 4: CMS and content model

**Milestone:** `modelling-content`

### Sanity setup

- [ ] [P0] Create Sanity development and production datasets.
- [ ] [P0] Configure authenticated editorial access.
- [ ] [P0] Configure preview URLs and draft mode.
- [ ] [P0] Configure deployment and schema validation.

### Content schemas

- [ ] [P0] Create site-settings singleton.
- [ ] [P0] Create navigation and footer models.
- [ ] [P0] Create homepage model.
- [ ] [P0] Create modular marketing-page model.
- [ ] [P0] Create service and service-category models.
- [ ] [P0] Create team-member model.
- [ ] [P0] Create review/testimonial model with source details.
- [ ] [P0] Create FAQ model.
- [ ] [P0] Create guide/article and category models.
- [ ] [P0] Create campaign banner and alert model.
- [ ] [P0] Create contact, opening-hours, and location models.
- [ ] [P0] Create reusable SEO fields.
- [ ] [P0] Create social-sharing image support.

### Editorial experience

- [ ] [P0] Add field descriptions and validation.
- [ ] [P0] Add logical desk structure and document ordering.
- [ ] [P0] Add live preview for key templates.
- [ ] [P0] Add broken-reference and required-field checks.
- [ ] [P0] Add publishing permissions by role.
- [ ] [P0] Add webhook-based cache revalidation.
- [ ] [P0] Document editorial workflow and rollback.

### Phase 4 exit criteria

- [ ] Editors can create, preview, publish, and update all agreed content.
- [ ] Invalid or incomplete critical content cannot be published.
- [ ] Published changes revalidate the correct website routes.

---

## Phase 5: Vehicle inventory and search

**Milestone:** `integrating-inventory`

### Database and domain model

- [ ] [P0] Provision managed PostgreSQL.
- [ ] [P0] Create vehicle, image, feature, price, and sync-run tables.
- [ ] [P0] Add stable provider and internal identifiers.
- [ ] [P0] Add available, reserved, sold, hidden, and coming-soon statuses.
- [ ] [P0] Add make, model, derivative, body type, fuel, transmission, year, and mileage fields.
- [ ] [P0] Add cash price, VAT status, and compliant monthly-payment fields.
- [ ] [P0] Add ULEZ, emissions, engine, colour, doors, and registration fields.
- [ ] [P0] Add warranty, service-history, description, feature, and AutoTrader fields where licensed.
- [ ] [P0] Add created, updated, published, and sold timestamps.
- [ ] [P0] Add indexes for public filters and sorting.

### Provider adapter and sync

- [ ] [P0] Implement authenticated stock-provider client.
- [ ] [P0] Validate external payloads before processing.
- [ ] [P0] Map provider fields into the internal vehicle model.
- [ ] [P0] Make sync processing idempotent.
- [ ] [P0] Implement scheduled sync or provider webhooks.
- [ ] [P0] Implement full and incremental sync modes.
- [ ] [P0] Implement reserved, sold, hidden, and deleted reconciliation.
- [ ] [P0] Preserve the last known good data after provider failure.
- [ ] [P0] Record sync summaries and rejected records.
- [ ] [P0] Alert on stale stock, repeated failures, or unusual count changes.
- [ ] [P0] Add a manual re-sync operation for authorised administrators.

### Images

- [ ] [P0] Confirm permitted image-hosting approach.
- [ ] [P0] Preserve provider image ordering.
- [ ] [P0] Handle missing and broken images.
- [ ] [P0] Generate or proxy responsive WebP/AVIF variants.
- [ ] [P0] Define vehicle image alt-text rules.
- [ ] [P0] Prevent layout shift by storing image dimensions or aspect ratios.

### Search and listing API

- [ ] [P0] Implement public vehicle query service.
- [ ] [P0] Implement cars, vans, and all-vehicle scopes.
- [ ] [P0] Implement make and dependent-model filters.
- [ ] [P0] Implement cash-price and monthly-payment filters.
- [ ] [P0] Implement year and mileage filters.
- [ ] [P0] Implement fuel, transmission, body type, ULEZ, and colour filters.
- [ ] [P0] Implement sorting by newest, price, mileage, year, and monthly payment.
- [ ] [P0] Implement pagination and total counts.
- [ ] [P0] Validate and normalise URL search parameters.
- [ ] [P0] Return useful empty states rather than provider errors.
- [ ] [P0] Add caching and targeted invalidation after stock changes.

### Vehicle route behaviour

- [ ] [P0] Generate stable, readable vehicle URLs.
- [ ] [P0] Resolve old vehicle URLs by stock ID where possible.
- [ ] [P0] Define reserved vehicle presentation.
- [ ] [P0] Define sold vehicle retention and related-vehicle behaviour.
- [ ] [P0] Return the correct status for permanently unavailable pages.
- [x] [P0] Exclude unavailable stock from active sitemaps.

### Inventory tests

- [ ] [P0] Add provider-contract fixtures.
- [ ] [P0] Test new, updated, reserved, sold, hidden, and removed vehicles.
- [ ] [P0] Test missing optional fields.
- [ ] [P0] Test duplicate provider records.
- [ ] [P0] Test invalid prices and image URLs.
- [ ] [P0] Test filter combinations and sort stability.
- [ ] [P0] Test sync retry and stale-data alerts.

### Phase 5 exit criteria

- [ ] Staging stock matches the source system within the agreed tolerance.
- [ ] Status changes appear within the agreed update interval.
- [ ] Search filters and counts are accurate.
- [ ] Provider failure does not produce an empty or broken public site.

---

## Phase 6: Shared frontend components

**Part of milestone:** `building-customer-journeys`

### Foundations

- [ ] [P0] Implement global design tokens.
- [ ] [P0] Implement typography and responsive layout primitives.
- [ ] [P0] Implement accessible buttons and links.
- [ ] [P0] Implement icon system.
- [ ] [P0] Implement badges and vehicle-status indicators.
- [ ] [P0] Implement cards and content sections.
- [ ] [P0] Implement responsive image component.
- [ ] [P0] Implement skeleton and loading components.
- [ ] [P0] Implement error, empty, and not-found components.

### Forms

- [ ] [P0] Configure React Hook Form and Zod patterns.
- [ ] [P0] Implement text, email, telephone, numeric, select, radio, checkbox, and textarea fields.
- [ ] [P0] Implement accessible inline and summary errors.
- [ ] [P0] Implement file upload with type and size validation.
- [ ] [P0] Implement consent and marketing preference fields.
- [ ] [P0] Implement submit loading, success, duplicate, and failure states.

### Navigation and shell

- [ ] [P0] Implement announcement or campaign bar.
- [ ] [P0] Implement desktop header and navigation.
- [ ] [P0] Implement accessible mobile menu.
- [ ] [P0] Implement breadcrumbs.
- [ ] [P0] Implement footer with legal and business information.
- [x] [P0] Implement persistent mobile contact bar.
- [ ] [P0] Implement cookie preferences entry point.
- [ ] [P0] Implement skip link and keyboard focus management.

### Interactive components

- [ ] [P0] Implement accessible dialog.
- [ ] [P0] Implement mobile filter drawer.
- [ ] [P0] Implement accordion.
- [ ] [P0] Implement tabs only where content requires them.
- [ ] [P0] Implement alert and toast pattern.
- [ ] [P0] Implement gallery and thumbnail controls.
- [ ] [P0] Implement carousel only where it improves the journey.

### Phase 6 exit criteria

- [ ] Shared components match approved designs.
- [ ] Components work with keyboard, touch, zoom, and screen readers.
- [ ] Components include representative automated tests.

---

## Phase 7: Customer-facing pages and journeys

**Milestone:** `building-customer-journeys`

### Homepage

- [ ] [P0] Build headline, proposition, and immediate vehicle search.
- [ ] [P0] Build browse, sell, and service primary actions.
- [ ] [P0] Build trust and credential strip.
- [ ] [P0] Build featured and recently added stock.
- [ ] [P0] Build sales and service journey split.
- [ ] [P0] Build finance and part-exchange section.
- [ ] [P0] Build reviews section with source links.
- [x] [P0] Build location, opening hours, directions, and contact section.
- [ ] [P0] Add page metadata and structured data.

### Stock listing

- [ ] [P0] Build cars, vans, and all-vehicles routes.
- [ ] [P0] Build desktop filter panel.
- [ ] [P0] Build mobile filter drawer.
- [ ] [P0] Keep filter state in URL search parameters.
- [ ] [P0] Build active-filter chips and clear actions.
- [ ] [P0] Build result count and sorting.
- [ ] [P0] Build responsive stock cards.
- [x] [P0] Build pagination.
- [ ] [P0] Build loading and no-results states.
- [ ] [P0] Build filter validation and invalid-URL recovery.
- [ ] [P0] Add listing metadata, canonicals, and breadcrumbs.

### Vehicle detail

- [ ] [P0] Build title, derivative, price, and status area.
- [ ] [P0] Build responsive image gallery.
- [ ] [P0] Build key vehicle facts.
- [ ] [P0] Build call, enquiry, test-drive, finance, and part-exchange actions.
- [ ] [P0] Build persistent mobile action bar.
- [ ] [P0] Build compliant finance summary or provider handoff.
- [ ] [P0] Build description, equipment, and specification sections.
- [ ] [P0] Build service-history, warranty, inspection, and aftercare sections.
- [ ] [P0] Build delivery information.
- [ ] [P0] Build AutoTrader intelligence where licensed.
- [ ] [P0] Build related vehicles.
- [ ] [P0] Build reserved and sold variants.
- [ ] [P0] Add vehicle, offer, and breadcrumb structured data.
- [ ] [P1] Build recently viewed vehicles.
- [ ] [P1] Build downloadable brochure if still required.

### Finance

- [x] [P0] Build plain-English finance overview.
- [ ] [P0] Build approved credit-broker and regulatory disclosure.
- [ ] [P0] Integrate the approved finance calculator or provider embed.
- [ ] [P0] Build secure application handoff.
- [ ] [P0] Track calculator and handoff events.
- [ ] [P0] Add error and provider-unavailable handling.

### Sell your car

- [x] [P0] Build vehicle registration and mileage step.
- [x] [P0] Build condition, history, finance, and contact steps.
- [ ] [P0] Build optional image upload.
- [ ] [P0] Build consent, confirmation, and response-time messaging.
- [ ] [P0] Preserve campaign and referrer information.
- [ ] [P1] Add automated registration lookup if approved.
- [ ] [P1] Add automated valuation if approved.

### Part exchange

- [ ] [P0] Launch part exchange from a selected vehicle.
- [ ] [P0] Preserve the target stock ID and vehicle details.
- [ ] [P0] Collect customer vehicle and contact information.
- [ ] [P0] Show a clear confirmation and next step.

### Services and bodyshop

- [x] [P0] Build services hub.
- [ ] [P0] Build servicing page.
- [ ] [P0] Build MOT page.
- [ ] [P0] Build diagnostics page.
- [ ] [P0] Build tyres and exhausts page.
- [ ] [P0] Build air-conditioning page.
- [ ] [P0] Build bodywork and paint page.
- [ ] [P0] Build accident-management page.
- [ ] [P0] Build recovery page.
- [ ] [P0] Build service/bodyshop enquiry form.
- [ ] [P0] Support preferred date, registration, mileage, requested work, and photo upload.

### Company and content

- [ ] [P0] Build warranty and aftercare page.
- [ ] [P0] Build delivery page.
- [ ] [P0] Build reviews page.
- [ ] [P0] Build about and team page.
- [ ] [P0] Build vacancies page.
- [x] [P0] Build contact and find-us page.
- [ ] [P0] Build guide listing and article templates.
- [ ] [P0] Build FAQ presentation.
- [ ] [P0] Build privacy, cookies, terms, complaints, and finance-disclosure pages.

### Phase 7 exit criteria

- [ ] Every MVP route works with production-shaped data.
- [ ] Primary sales and service journeys are complete on mobile and desktop.
- [ ] Loading, empty, reserved, sold, success, and error states are implemented.
- [ ] Page metadata and conversion events are present.

---

## Phase 8: Leads and third-party integrations

**Milestone:** `connecting-lead-systems`

### Secure form service

- [ ] [P0] Implement server-side validation for every form.
- [ ] [P0] Implement Turnstile verification and rate limiting.
- [ ] [P0] Implement idempotency to reduce duplicate leads.
- [ ] [P0] Implement CRM field mapping.
- [ ] [P0] Implement lead-source, campaign, page, and vehicle attribution.
- [ ] [P0] Implement Postmark acknowledgement and staff notifications.
- [ ] [P0] Implement retry handling for temporary provider failures.
- [ ] [P0] Implement an operational alert for permanently failed delivery.
- [ ] [P0] Record a minimal lead-delivery audit without exposing sensitive data.
- [ ] [P0] Add automated tests for validation, spam, success, retry, and failure.

### Provider integrations

- [ ] [P0] Integrate AutoConvert using the approved approach.
- [ ] [P0] Prevent finance scripts from bypassing required consent controls.
- [ ] [P0] Integrate CRM or approved lead destination.
- [ ] [P0] Integrate call tracking and dynamic numbers if retained.
- [ ] [P0] Integrate chat only after the agreed consent and performance checks.
- [ ] [P0] Integrate maps without loading unnecessary tracking before consent.
- [ ] [P0] Integrate verified review source links.
- [ ] [P1] Integrate workshop calendar or garage-management platform if approved.

### Phase 8 exit criteria

- [ ] Every form reaches the correct operational team.
- [ ] Temporary provider failures retry safely.
- [ ] Failed lead delivery produces an actionable alert.
- [ ] Third-party scripts comply with the approved consent model.

---

## Phase 9: Content, SEO, analytics, compliance, and security

**Milestones:** `migrating-content-seo` and `implementing-compliance-security`

### Content

- [ ] [P0] Approve the final brand proposition and tone of voice.
- [ ] [P0] Rewrite homepage content.
- [ ] [P0] Rewrite sales, finance, valuation, and part-exchange content.
- [ ] [P0] Rewrite service and bodyshop content.
- [ ] [P0] Standardise business name and trading name.
- [ ] [P0] Standardise telephone numbers, email, address, and opening hours.
- [ ] [P0] Correct stale Haverhill/Oundle/Peterborough content.
- [ ] [P0] Correct and approve FCA and company details.
- [ ] [P0] Prepare approved photography and image alt text.
- [ ] [P0] Migrate reviews with source attribution.
- [ ] [P0] Enter and proofread all CMS content.

### SEO migration

- [ ] [P0] Crawl all current URLs and metadata.
- [ ] [P0] Classify URLs as retain, replace, redirect, or remove.
- [ ] [P0] Create one-to-one 301 redirect map.
- [ ] [P0] Preserve valuable stock IDs and route patterns.
- [ ] [P0] Define sold-vehicle indexation and redirect rules.
- [ ] [P0] Add page title and description generation.
- [ ] [P0] Add canonical rules.
- [ ] [P0] Add breadcrumb structured data.
- [ ] [P0] Add AutoDealer/local-business structured data.
- [ ] [P0] Add vehicle and offer structured data.
- [ ] [P0] Add review structured data only where eligible.
- [ ] [P0] Generate separate content and active-stock sitemaps.
- [x] [P0] Generate production robots rules.
- [ ] [P0] Add Open Graph and social-card metadata.
- [ ] [P0] Validate structured data and sitemap output.
- [ ] [P0] Prepare Search Console launch and monitoring plan.

### Analytics

- [ ] [P0] Create or verify real GA4 property and web stream.
- [ ] [P0] Create or verify Tag Manager container.
- [ ] [P0] Implement consent-aware analytics initialisation.
- [ ] [P0] Track stock search and filter use.
- [ ] [P0] Track vehicle views.
- [ ] [P0] Track call, email, WhatsApp, and chat actions.
- [ ] [P0] Track enquiry and test-drive submissions.
- [ ] [P0] Track finance calculator and application handoff.
- [ ] [P0] Track sell, part-exchange, service, and bodyshop submissions.
- [ ] [P0] Track map and directions actions.
- [ ] [P0] Exclude personal data from analytics payloads.
- [ ] [P0] Build conversion and technical-health dashboard.
- [ ] [P0] Validate events in staging and production debug views.

### Privacy and cookies

- [ ] [P0] Select and configure consent-management platform.
- [ ] [P0] Categorise every cookie and third-party script.
- [ ] [P0] Block non-essential services according to the approved model.
- [ ] [P0] Provide clear preference controls and withdrawal route.
- [ ] [P0] Publish approved privacy and cookie policies.
- [ ] [P0] Document data retention and deletion.
- [ ] [P0] Test consent records and regional behaviour.

### Finance and legal compliance

- [ ] [P0] Obtain compliance approval for all finance promotions.
- [ ] [P0] Confirm credit-broker wording.
- [ ] [P0] Confirm representative example and APR triggers.
- [ ] [P0] Confirm lender-panel and commission wording.
- [ ] [P0] Confirm complaints and Financial Ombudsman information.
- [ ] [P0] Confirm company number, FCA number, registered office, and legal name.
- [ ] [P0] Confirm terms for reservations, valuations, deliveries, and warranties.

### Accessibility

- [ ] [P0] Test keyboard access and focus order.
- [ ] [P0] Test screen-reader names, roles, states, and errors.
- [ ] [P0] Test 200% and 400% zoom/reflow.
- [ ] [P0] Test colour contrast.
- [ ] [P0] Test touch target sizes.
- [ ] [P0] Test reduced motion.
- [ ] [P0] Test forms and validation.
- [ ] [P0] Test gallery, menu, filters, dialogs, and accordions.
- [ ] [P0] Resolve all critical and high-severity findings.
- [ ] [P0] Prepare accessibility statement.

### Security

- [ ] [P0] Enforce HTTPS and HSTS.
- [ ] [P0] Finalise Content Security Policy.
- [ ] [P0] Enable X-Content-Type-Options.
- [ ] [P0] Enable Referrer-Policy.
- [ ] [P0] Enable Permissions-Policy.
- [ ] [P0] Review CORS and webhook authentication.
- [ ] [P0] Verify rate limits and bot protection.
- [ ] [P0] Verify secrets are not exposed to client bundles or logs.
- [ ] [P0] Review dependencies and remediate high-severity findings.
- [ ] [P0] Verify admin multi-factor authentication.
- [ ] [P0] Verify backup and restore process.

### Phase 9 exit criteria

- [ ] Approved content and legal wording are loaded.
- [ ] Redirects, metadata, structured data, sitemaps, and robots rules are complete.
- [ ] Analytics and consent work together correctly.
- [ ] No unresolved critical/high accessibility or security issue remains.

---

## Phase 10: QA and user acceptance

**Milestone:** `validating-release`

### Automated checks

- [ ] [P0] Run type-checking, linting, unit tests, and production build.
- [ ] [P0] Run integration tests for stock and lead providers.
- [ ] [P0] Run Playwright critical-journey suite.
- [ ] [P0] Run automated accessibility checks.
- [ ] [P0] Run bundle and performance-budget checks.

### Functional QA

- [ ] [P0] Verify every navigation link.
- [ ] [P0] Verify all stock filters, sorting, counts, and pagination.
- [ ] [P0] Verify every vehicle status and detail-page variant.
- [ ] [P0] Verify all finance and valuation handoffs.
- [ ] [P0] Verify every form success and failure path.
- [ ] [P0] Verify email and CRM content.
- [ ] [P0] Verify file uploads and limits.
- [ ] [P0] Verify consent changes and script blocking.
- [ ] [P0] Verify analytics events and campaign attribution.
- [ ] [P0] Verify CMS preview, publishing, and rollback.

### Data QA

- [ ] [P0] Reconcile staging inventory with the source system.
- [ ] [P0] Verify prices, status, images, mileage, registration, and specifications.
- [ ] [P0] Verify missing-data behaviour.
- [ ] [P0] Verify sold and removed vehicles.
- [ ] [P0] Verify finance examples against provider output.

### Browser and device QA

- [ ] [P0] Test current Chrome, Safari, Firefox, and Edge.
- [ ] [P0] Test representative iPhone and Android sizes.
- [ ] [P0] Test tablet and large desktop layouts.
- [ ] [P0] Test touch, keyboard, mouse, and zoom.
- [ ] [P0] Test slow network and provider timeout behaviour.

### Performance and SEO QA

- [ ] [P0] Test home, listing, detail, finance, service, and form templates.
- [ ] [P0] Resolve agreed Core Web Vitals and Lighthouse blockers.
- [ ] [P0] Verify no unexpected layout shift.
- [ ] [P0] Verify third-party scripts are deferred or consent controlled.
- [ ] [P0] Crawl staging for broken links, duplicate metadata, and indexation errors.
- [ ] [P0] Validate every redirect in the migration map.
- [ ] [P0] Validate canonicals, robots rules, sitemaps, and structured data.

### Client UAT

- [ ] [P0] Provide UAT script and issue-reporting route.
- [ ] [P0] Complete sales-team UAT.
- [ ] [P0] Complete service-team UAT.
- [ ] [P0] Complete marketing/editor UAT.
- [ ] [P0] Complete finance/compliance UAT.
- [ ] [P0] Resolve all launch-blocking defects.
- [ ] [P0] Obtain written launch approval.

### Phase 10 exit criteria

- [ ] Production release candidate passes all critical checks.
- [ ] UAT approval is recorded.
- [ ] Rollback procedure has been rehearsed or verified.
- [ ] Launch checklist has named owners and timings.

---

## Phase 11: Production launch

**Milestone:** `launching-production`

### Pre-launch

- [ ] [P0] Freeze migration-sensitive content and URL changes.
- [ ] [P0] Take final content, redirect, and stock snapshots.
- [ ] [P0] Verify production environment variables and provider credentials.
- [ ] [P0] Verify production monitoring and alert recipients.
- [ ] [P0] Verify database backups and restore access.
- [ ] [P0] Reduce DNS TTL in advance.
- [ ] [P0] Confirm launch contacts and rollback authority.
- [ ] [P0] Publish a maintenance notice only if required.

### Launch

- [ ] [P0] Complete final stock sync.
- [ ] [P0] Deploy the approved production release.
- [ ] [P0] Switch DNS or origin routing.
- [ ] [P0] Verify TLS, redirects, security headers, and canonical host.
- [ ] [P0] Verify homepage, inventory, vehicle detail, finance, services, and contact.
- [ ] [P0] Submit test vehicle, finance, valuation, and service leads.
- [ ] [P0] Verify CRM, email, and operational receipt.
- [ ] [P0] Verify analytics and consent in production.
- [ ] [P0] Submit sitemaps in Search Console.
- [ ] [P0] Confirm robots rules permit intended indexing.

### Immediate monitoring

- [ ] [P0] Monitor errors, latency, stock sync, forms, and provider health.
- [ ] [P0] Monitor 404s and redirect misses.
- [ ] [P0] Monitor analytics event volume.
- [ ] [P0] Monitor Search Console coverage and crawl issues.
- [ ] [P0] Correct launch-critical issues or execute rollback.

### Phase 11 exit criteria

- [ ] Production traffic is stable.
- [ ] Stock and all critical lead journeys work.
- [ ] Search engines can access the correct site and sitemaps.
- [ ] No launch-critical issue remains open.

---

## Phase 12: Handover and hypercare

**Milestone:** `handing-over-platform`

### Handover

- [ ] [P0] Train CMS editors.
- [ ] [P0] Train administrators on users, access, and publishing.
- [ ] [P0] Train staff on lead and provider failure handling.
- [ ] [P0] Deliver architecture and integration documentation.
- [ ] [P0] Deliver deployment and rollback runbook.
- [ ] [P0] Deliver stock-sync and reconciliation runbook.
- [ ] [P0] Deliver form, CRM, and alert runbook.
- [ ] [P0] Deliver analytics event and dashboard documentation.
- [ ] [P0] Deliver credential ownership and renewal register.
- [ ] [P0] Confirm support contacts, severity definitions, and SLA.

### Hypercare

- [ ] [P0] Review production errors daily during the initial launch period.
- [ ] [P0] Review failed leads and stock-sync alerts daily.
- [ ] [P0] Review Search Console and 404 reports.
- [ ] [P0] Review real-user Core Web Vitals as data becomes available.
- [ ] [P0] Fix defects covered by the 30-day warranty.
- [ ] [P0] Complete a 30-day KPI and operational review.
- [ ] [P0] Close or transfer all remaining issues.

### Phase 12 exit criteria

- [ ] Client users can operate the CMS and understand support routes.
- [ ] Operational ownership is documented.
- [ ] Hypercare issues are resolved or moved into an agreed backlog.
- [ ] Phase-two priorities are approved.

---

## Phase-two enhancement backlog

These items are excluded from MVP unless explicitly approved:

- [ ] [P2] Customer accounts.
- [ ] [P2] Saved vehicles.
- [ ] [P2] Vehicle comparison.
- [ ] [P2] Saved searches and stock alerts.
- [ ] [P2] Recently viewed vehicles across devices.
- [ ] [P2] Online reservation with payment and refund workflow.
- [ ] [P2] Automated valuation provider.
- [ ] [P2] Registration lookup provider.
- [ ] [P2] Real-time workshop calendar and booking.
- [ ] [P2] Service reminders.
- [ ] [P2] Advanced vehicle recommendations.
- [ ] [P2] Personalised landing pages.
- [ ] [P2] Customer document upload portal.
- [ ] [P2] Automated review requests.
- [ ] [P2] Additional marketplace and advertising feeds.
- [ ] [P2] A/B testing programme.
- [ ] [P2] Extended editorial and local-search content programme.
