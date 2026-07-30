# Website Redesign and Replatforming Proposal

**Prepared for:** German Engineering Car Specialists Ltd
**Date:** 30 July 2026
**Proposal status:** Initial planning proposal based on a public-site audit

## 1. Executive summary

German Engineering Car Specialists has a broad and credible offer: used cars and vans, finance, servicing, MOT, bodywork, tyres, recovery, delivery, aftercare, and vehicle purchasing. The current website exposes most of these services, but its template-led design, ageing technology, crowded navigation, and weak mobile conversion journey make the business feel less modern than the service it provides.

The recommended approach is a **custom, mobile-first storefront connected to an existing automotive stock platform or feed**. This avoids the cost and risk of rebuilding dealer stock management while providing a faster, more distinctive website with better search, stronger vehicle pages, measurable lead generation, and easier content management.

The proposed project would:

- Reposition the business as a trusted, premium but approachable automotive specialist.
- Make vehicle search and enquiry the primary sales journey.
- Give servicing and bodyshop customers a clear, separate booking journey.
- Preserve current search visibility, stock URLs, structured data, and finance integrations.
- Replace the ageing public-facing stack with a secure, supported platform.
- Add reliable analytics for calls, forms, finance applications, service bookings, and vehicle enquiries.

**Recommended delivery window:** 12-15 weeks
**Recommended planning budget:** GBP 24,000-38,000 excluding VAT and third-party licence fees

## 2. Current website audit

### 2.1 What is already working

The rebuild should preserve the valuable parts of the current site:

- Live used-car and used-van stock.
- Dedicated vehicle detail pages with images, specifications, descriptions, and pricing.
- Vehicle and breadcrumb structured data.
- Canonical URLs and an XML sitemap.
- AutoTrader trust and vehicle intelligence signals.
- AutoConvert finance integration.
- Visitor Chat integration.
- Service, MOT, bodywork, tyre, recovery, delivery, warranty, and aftercare content.
- Testimonials, FCA disclosure, company information, and local contact details.

### 2.2 Observed technical footprint

| Area | Current observation |
|---|---|
| Dealer platform | Car Dealer 5 "Symphony" template platform |
| Server | Apache and PHP 7.4.33 |
| Frontend | jQuery 2.2.4, template CSS, multiple carousel and UI plug-ins |
| Stock/images | Car Dealer 5 stock services and CD5 image CDN |
| Finance | AutoConvert |
| Chat | Visitor Chat |
| Other signals | AutoTrader, Google Maps, stock update subscription |
| SEO | Canonicals, XML sitemap, breadcrumb schema, vehicle schema |
| Current sitemap | 52 URLs at the time of review |

PHP 7.4 is outside active security support, and jQuery 2.2.4 is a legacy dependency. The site also exposes its runtime and server information in response headers.

### 2.3 Sample page measurements

These figures are a one-time response and markup sample, not a full laboratory performance test:

| Template | HTML response | Script tags | Stylesheets | Image tags | Sample total response time |
|---|---:|---:|---:|---:|---:|
| Home | 106 KB | 34 | 20 | 75 | 2.17s |
| Stock listing | 146 KB | 33 | 21 | 111 | 2.20s |
| Vehicle detail | 141 KB | 51 | 25 | 91 | 1.80s |

The number of assets, template overrides, and third-party scripts creates avoidable performance and maintenance overhead.

### 2.4 Main opportunities

1. **Weak above-the-fold conversion**
   - The desktop homepage is dominated by a large hero image without a strong visible value proposition, stock search, or primary call to action.
   - On mobile, the hero is heavily cropped and provides little useful information before scrolling.

2. **Crowded information architecture**
   - The desktop navigation contains nine top-level items plus several large drop-down menus.
   - Sales, servicing, bodyshop, and company information compete for equal attention.

3. **Limited stock search**
   - The primary listing search focuses on make, model, minimum price, and maximum price.
   - Modern buyers expect filters such as monthly payment, fuel, transmission, body type, mileage, year, and ULEZ status.

4. **Vehicle conversion actions need greater prominence**
   - Price and specification are visible, but key actions such as enquire, call, book a test drive, apply for finance, reserve, or value a part exchange should be persistent and visible earlier, especially on mobile.

5. **Content and SEO quality issues**
   - The used-car page contains the heading "GREAT DEALS ON USED CAMPERVANS IN OUNDLE, PETERBOROUGH" despite being the Haverhill used-car page.
   - Phone numbers differ between metadata and prominent page content.
   - Business naming varies between "Car Sales" and "Car Specialists".
   - The finance footer includes an incomplete duplicate "FCA No:" field.

6. **Analytics appears incomplete**
   - Public page source currently contains the placeholder Google Analytics ID `G-XXXXXXXXXX`.
   - This makes reliable funnel measurement and marketing attribution uncertain.

7. **Cookie experience needs replacement**
   - The current notice obstructs content, offers only an accept action, and links to a generic third-party explanation.
   - A modern consent platform should provide clear information, appropriate controls, and consent-aware loading of analytics, chat, and finance scripts.

8. **Security hardening**
   - Sample responses did not expose common modern hardening headers such as HSTS, Content Security Policy, X-Content-Type-Options, Referrer-Policy, or Permissions-Policy.

## 3. Project objectives

The new website should achieve the following:

- Increase qualified vehicle, finance, part-exchange, and service leads.
- Improve trust through stronger presentation, reviews, warranties, inspections, and company credentials.
- Make the website fast and easy to use on mobile devices.
- Establish distinct journeys for vehicle sales and workshop services.
- Allow non-technical staff to update marketing content without developer support.
- Keep vehicle inventory automatically synchronised with the dealer's source system.
- Preserve or improve current organic search visibility during migration.
- Provide accurate conversion and marketing reporting.
- Reduce dependency on unsupported public-facing technologies.

## 4. Primary audiences and journeys

| Audience | Main need | Desired action |
|---|---|---|
| Used-car buyer | Find a suitable, trustworthy vehicle | Search, view, call, enquire, test drive, reserve |
| Finance-led buyer | Understand affordability | Filter by monthly payment, calculate finance, apply |
| Van or trade buyer | Find suitable commercial stock | Search vans, check VAT/details, contact sales |
| Vehicle seller | Obtain a simple valuation | Submit registration, mileage, condition, contact details |
| Part-exchange customer | Understand changeover cost | Request valuation against a selected vehicle |
| Service customer | Book maintenance or repair | Select service, request date, receive confirmation |
| Bodyshop/accident customer | Get urgent help or a quote | Upload details/photos, request callback |
| Fleet/business customer | Source vehicles or maintenance support | Submit a business enquiry |

## 5. Proposed scope

### 5.1 Brand and visual design

- Retain recognisable brand equity while modernising the presentation.
- Use a premium automotive palette built around navy, charcoal, white, and a controlled blue accent.
- Introduce a consistent typography, spacing, icon, button, form, and card system.
- Replace generic or inconsistent imagery with high-quality vehicle, team, showroom, and workshop photography.
- Use restrained animation only where it supports comprehension.
- Clarify the positioning: specialist expertise in German vehicles, with quality stock and servicing for all makes.

### 5.2 Homepage

The new homepage should include:

- Clear headline, supporting proposition, and immediate stock search.
- Primary calls to action: "Browse vehicles", "Sell your car", and "Book a service".
- Trust strip covering experience, vehicle checks, warranty, finance, reviews, and location.
- Featured and recently added vehicles.
- Clear split between vehicle sales and service/bodyshop.
- Finance and part-exchange explanation.
- Selected customer reviews with verified source links.
- Haverhill location, opening hours, map, directions, and contact options.

### 5.3 Vehicle inventory

- Separate cars and vans while allowing an "all vehicles" view.
- Fast faceted filters:
  - Make and model
  - Price and monthly payment
  - Year
  - Mileage
  - Fuel
  - Transmission
  - Body type
  - ULEZ status
  - Colour
- Sort by newest, price, mileage, year, and monthly payment.
- Search filters reflected in the URL for sharing and analytics.
- Responsive stock cards with:
  - Strong image
  - Cash price
  - Indicative monthly price where compliant
  - Mileage, year, fuel, transmission, and body type
  - Key selling point or warranty
  - Favourite and compare options as a phase-two enhancement
- Saved searches and stock alerts as a phase-two enhancement.

### 5.4 Vehicle detail pages

- High-resolution, touch-friendly image gallery.
- Clear title, derivative, cash price, and compliant finance summary.
- Persistent mobile action bar.
- Prominent actions:
  - Call
  - WhatsApp or live chat
  - Enquire
  - Book a test drive
  - Apply for finance
  - Request part exchange
  - Reserve online, if the business wants payment functionality
- Key facts displayed before long specification lists.
- Vehicle description, equipment, service history, warranty, inspection, running costs, and ULEZ status.
- AutoTrader intelligence where licensing permits.
- Delivery and aftercare information.
- Related vehicles and recently viewed vehicles.
- Correct `Vehicle`, `Offer`, and breadcrumb structured data.

### 5.5 Finance

- Plain-English overview of available finance routes.
- Finance calculator or provider integration.
- Vehicle-specific finance examples where available.
- Clear credit broker status, representative examples, eligibility wording, commission disclosure, and lender information as required.
- Secure handoff to AutoConvert or another approved finance provider.
- Avoid storing detailed credit application data in the website platform unless there is a documented business and compliance need.

Final financial promotion content should be approved by the firm's compliance adviser before launch.

### 5.6 Sell your car and part exchange

- Registration-led valuation journey.
- Mileage, condition, service history, settlement, and contact questions.
- Photo upload option.
- Vehicle-specific part-exchange journey from each detail page.
- Lead delivery into the selected CRM with source vehicle and campaign data.
- Clear response-time expectation.

### 5.7 Service and bodyshop

- Service hub with clear categories:
  - Servicing
  - MOT
  - Diagnostics
  - Tyres and exhausts
  - Air conditioning
  - Bodywork and paint
  - Accident management
  - Recovery
- Simple booking or callback request form.
- Registration, mileage, requested work, preferred date, and contact details.
- Photo upload for bodywork enquiries.
- Manufacturer servicing and technician credentials where accurate.
- Optional integration with a workshop booking or garage management platform.

### 5.8 Trust, company, and content

- About the business and team.
- Customer reviews and external review profiles.
- Warranty and aftercare.
- Delivery.
- Vacancies.
- FAQs.
- Advice and buying guides for long-term local and organic search growth.

### 5.9 Content management

Authorised staff should be able to edit:

- Homepage sections and promotions.
- Service pages.
- Team and company information.
- Reviews and trust content.
- FAQs and guides.
- Opening hours, contact details, and alerts.
- SEO titles, descriptions, social images, and canonical settings.

Vehicle stock should remain automated and should not require duplicate manual entry.

## 6. Proposed information architecture

```text
Home
Vehicles
  Used Cars
  Used Vans
  Vehicle Details
  Recently Added
Sell Your Car
Part Exchange
Finance
Services
  Servicing
  MOT
  Diagnostics
  Tyres and Exhausts
  Air Conditioning
  Bodywork and Paint
  Accident Management
  Recovery
Warranty and Aftercare
Delivery
Reviews
About
  Our Story
  Team
  Vacancies
Guides and FAQs
Contact and Find Us
Legal
  Privacy
  Cookies
  Terms
  Complaints
  Finance Disclosures
```

The desktop navigation should expose approximately five primary choices: Vehicles, Sell/Part Exchange, Finance, Services, and About/Contact.

## 7. Recommended technology stack

### 7.1 Recommended hybrid architecture

The website should not recreate a complete dealer management system. The existing stock platform, or a replacement automotive data platform, should remain the source of truth. The new website should consume its API, feed, or webhook output.

| Layer | Recommendation | Reason |
|---|---|---|
| Frontend | Next.js with TypeScript | Fast server rendering, strong SEO, image optimisation, and maintainable components |
| Styling | Tailwind CSS with documented design tokens | Consistent responsive design without large template override files |
| Content CMS | Sanity | Simple editorial experience, structured content, previews, and flexible APIs |
| Vehicle source | Existing dealer/DMS feed or replacement platform API | Avoids duplicate stock administration and preserves syndication workflows |
| Data cache | Managed PostgreSQL using Supabase or Neon | Reliable stock normalisation, filtering, audit history, and webhook processing |
| Search | PostgreSQL filters initially; Typesense only if scale requires it | Current stock volume does not justify unnecessary search infrastructure |
| Images | Existing licensed stock CDN or Cloudinary | WebP/AVIF delivery, resizing, responsive images, and predictable quality |
| Finance | AutoConvert retained initially, preferably through approved API or controlled embed | Reduces migration and compliance risk |
| Forms/CRM | Existing CRM or HubSpot, with secure server-side submission | Central lead management, source tracking, and automated response |
| Transactional email | Postmark | Reliable delivery and searchable form audit trail |
| Hosting | Vercel, protected by Cloudflare DNS/WAF | Global CDN, preview deployments, SSL, caching, and deployment safety |
| Bot protection | Cloudflare Turnstile and server-side rate limiting | Reduces spam without adding excessive user friction |
| Analytics | GA4, Google Tag Manager, Search Console, and consent-aware call tracking | Measures the complete lead funnel |
| Monitoring | Sentry plus uptime monitoring | Fast visibility of broken forms, integrations, and production errors |
| Testing | Vitest, Playwright, axe accessibility checks | Covers components, critical journeys, browsers, and accessibility |
| Delivery pipeline | GitHub and GitHub Actions | Version control, review, automated checks, and repeatable deployments |

### 7.2 High-level data flow

```text
Dealer stock system/API ----> Stock sync service ----> PostgreSQL
                                      |                    |
Sanity CMS ---------------------------+--------------------+
                                                           |
                                                Next.js website
                                                           |
                                     Customers on mobile and desktop
                                                           |
                         Enquiries / bookings / valuations / calls
                                                           |
                                            CRM + email + analytics

Finance journeys are handed securely to the approved finance provider.
```

### 7.3 Important discovery gate

Before final pricing, the project must confirm:

- Which system is the master source for stock.
- Whether Car Dealer 5 provides an API, XML/JSON feed, webhook, or export.
- Whether AutoTrader syndication is managed by Car Dealer 5 or another DMS.
- Image usage rights and CDN access after migration.
- AutoConvert integration options and contract requirements.
- Existing CRM, call tracking, chat, valuation, and workshop systems.

If the current provider cannot supply reliable data access, the fallback is to select a modern dealer platform with an API and complete the website migration around that platform.

## 8. UX and design principles

- **Mobile first:** most high-intent automotive browsing happens on a phone.
- **One clear action per section:** reduce competing buttons and visual noise.
- **Search immediately:** place stock search in the first screen on home and inventory pages.
- **Persistent conversion:** maintain call, enquiry, finance, and part-exchange actions on mobile.
- **Progressive disclosure:** show essential vehicle facts first, then detailed specifications.
- **Trust near decisions:** position warranty, reviews, checks, finance status, and aftercare beside conversion actions.
- **Accessible interaction:** keyboard support, visible focus, adequate contrast, correctly labelled forms, and meaningful alternatives for images.
- **Real photography:** prioritise genuine vehicles, premises, workshop, and team over generic banners.

## 9. SEO and migration plan

SEO preservation is a core deliverable, not a post-launch task.

### 9.1 Migration work

- Crawl and catalogue all current public URLs.
- Preserve valuable URL patterns where practical.
- Produce a one-to-one 301 redirect map for replaced pages.
- Preserve vehicle IDs as stable identifiers.
- Keep sold vehicles available temporarily with a clear sold status and relevant alternatives, or redirect them to the closest useful category.
- Remove unavailable vehicles from the active stock sitemap.
- Validate canonical tags, robots directives, XML sitemaps, and pagination.
- Retain and improve existing metadata and structured data.
- Monitor Google Search Console before and after launch.

### 9.2 Structured data

Implement and validate:

- `AutoDealer` or appropriate local business schema.
- `Vehicle`.
- `Offer`.
- `BreadcrumbList`.
- `Review` and `AggregateRating` only where source and eligibility rules are met.
- `FAQPage` only for genuinely visible FAQ content and where supported.

### 9.3 Content and local SEO

- Standardise business name, address, telephone numbers, and opening hours.
- Correct stale location and vehicle-category copy.
- Build unique service pages around genuine customer needs, not repeated keyword text.
- Optimise Google Business Profile links and campaign tracking.
- Add useful local content for Haverhill, Suffolk, Cambridge, and surrounding areas without creating thin doorway pages.

## 10. Performance targets

The build should use performance budgets and real-user monitoring.

| Metric | Target |
|---|---:|
| Largest Contentful Paint | 2.5 seconds or less at the 75th percentile |
| Interaction to Next Paint | 200 ms or less at the 75th percentile |
| Cumulative Layout Shift | 0.1 or less at the 75th percentile |
| Lighthouse performance | 90+ on representative mobile templates |
| Lighthouse accessibility | 95+ |
| Lighthouse SEO | 95+ |
| Initial JavaScript | Kept within an agreed page-level budget |

Implementation measures should include server rendering, route-level code splitting, responsive images, image preloading only when justified, lazy loading, font optimisation, third-party script control, CDN caching, and removal of unused plug-ins.

## 11. Accessibility, privacy, and compliance

### 11.1 Accessibility

- Target WCAG 2.2 Level AA.
- Keyboard-operable navigation, search, filters, gallery, and forms.
- Visible focus states and logical heading order.
- Accessible error messages and form validation.
- Adequate colour contrast and touch target sizes.
- Reduced-motion support.
- Manual screen-reader and zoom testing for key journeys.

### 11.2 Privacy and cookies

- Replace the current banner with a modern consent management platform.
- Load non-essential analytics, chat, advertising, and finance scripts according to current UK requirements and the selected consent model.
- Provide clear cookie categories, policy information, preference changes, and consent records.
- Apply data minimisation, documented retention periods, and secure deletion.
- Keep personal data out of logs and analytics.

### 11.3 Finance and company disclosures

- Ensure every relevant finance promotion is clear, fair, and not misleading.
- Prominently identify the business as a credit broker rather than a lender where applicable.
- Display representative examples and APR information when triggered by the promotion.
- Confirm lender-panel, commission, complaints, and regulatory wording with the firm's compliance adviser.
- Standardise company number, registered office, FCA number, legal name, and trading name across the site.

### 11.4 Security

- Supported runtime and dependency update policy.
- HSTS, Content Security Policy, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy.
- Server-side form validation and sanitisation.
- Rate limiting and bot protection.
- Secure secrets management.
- Least-privilege CMS and hosting access.
- Multi-factor authentication for administration.
- Automated dependency and vulnerability monitoring.
- Daily managed backups for stored application data.

## 12. Analytics and reporting

The site should define a measurable event model before launch.

Track:

- Stock searches and filter usage.
- Vehicle detail views.
- Calls and phone-link clicks.
- Email, WhatsApp, and chat actions.
- Vehicle enquiry submissions.
- Test-drive requests.
- Finance calculator use and application handoff.
- Part-exchange and sell-your-car submissions.
- Service and bodyshop booking requests.
- Direction and map clicks.
- Lead source, campaign, landing page, and selected vehicle.

A simple monthly dashboard should report traffic, stock engagement, lead volume, lead source, conversion rate, top vehicles, service leads, and technical health.

## 13. Delivery approach and timeline

| Phase | Duration | Main outputs |
|---|---:|---|
| 1. Discovery and integration audit | 1-2 weeks | Requirements, analytics review, provider/API audit, content inventory, confirmed scope |
| 2. Information architecture and UX | 2 weeks | Sitemap, user flows, wireframes, stock and vehicle-page behaviour |
| 3. Visual design | 2 weeks | Design direction, responsive key screens, component system |
| 4. Core development | 4-6 weeks | Frontend, CMS, stock search, vehicle pages, forms, technical SEO |
| 5. Integrations and migration | 3-4 weeks, overlapping | Stock feed, finance, CRM, content, redirects, analytics |
| 6. QA and user acceptance | 2 weeks | Browser/device, accessibility, performance, security, content and lead testing |
| 7. Launch and hypercare | 1 week plus monitoring | DNS launch, monitoring, fixes, Search Console and lead verification |

Total expected duration is **12-15 weeks**, subject to provider access, content approval, and integration documentation.

## 14. Deliverables

- Discovery report and confirmed specification.
- Content inventory and migration plan.
- Information architecture and user journeys.
- Responsive wireframes.
- Final visual designs and reusable design system.
- Responsive production website.
- Content management system.
- Automated vehicle stock integration.
- Finance-provider integration or secure handoff.
- CRM/form integration.
- Analytics, consent, and conversion tracking.
- SEO migration and redirect map.
- Structured data and XML sitemaps.
- Accessibility, performance, browser, and device testing.
- Editor training and operating documentation.
- Deployment documentation and access handover.
- 30-day post-launch defect warranty.

## 15. Budget options

These are planning ranges. A fixed quotation requires the discovery and integration audit.

| Option | Scope | Timeline | Planning range |
|---|---|---:|---:|
| A. Dealer-platform refresh | New design within a modern dealer platform, standard stock and finance modules | 6-9 weeks | GBP 12,000-18,000 |
| B. Hybrid custom storefront - recommended | Bespoke Next.js site, headless CMS, existing stock feed/API, finance and CRM integrations | 12-15 weeks | GBP 24,000-38,000 |
| C. Full custom dealer platform | Custom storefront plus stock administration, workflows, feeds, and broader back-office replacement | 20+ weeks | GBP 50,000+ |

### 15.1 Recommended option B breakdown

| Workstream | Planning allowance |
|---|---:|
| Discovery and technical specification | GBP 2,500-4,000 |
| UX, information architecture, and visual design | GBP 5,000-7,500 |
| Frontend, CMS, and core functionality | GBP 10,000-15,000 |
| Stock, finance, CRM, and third-party integrations | GBP 4,000-7,500 |
| Content migration, SEO, QA, training, and launch | GBP 2,500-4,000 |

### 15.2 Ongoing costs

- Hosting, CMS, monitoring, email, and related cloud services: approximately GBP 75-250 per month, depending on plans and traffic.
- Managed support and continuous improvement: approximately GBP 300-900 per month.
- Dealer platform, stock feed, finance, valuation, chat, call-tracking, CRM, photography, and advertising fees are excluded and remain subject to provider contracts.

### 15.3 Suggested payment schedule

- 30% on project commencement.
- 30% on UX and design approval.
- 30% when the staging site enters user acceptance testing.
- 10% on launch.

## 16. Assumptions and exclusions

### Assumptions

- The business owns or can license all supplied text, images, logos, reviews, and vehicle data.
- A reliable stock API, feed, export, or provider-supported integration is available.
- The client supplies provider contacts, account access, approved finance wording, and timely feedback.
- Existing third-party contracts permit the proposed integrations.
- One primary decision-maker coordinates client feedback.
- Feedback is returned within two business days where possible.

### Exclusions unless added to scope

- Replacement of the full dealer management system.
- Bespoke lender decisioning or storage of full credit applications.
- Vehicle photography and video production.
- Major logo redesign or full corporate rebrand.
- Paid media management.
- CRM data cleansing or historical lead migration.
- Native iOS or Android applications.
- Legal, FCA, tax, or data-protection advice.
- Third-party licence and transaction fees.

## 17. Key risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| No usable stock API/feed | Blocks custom inventory | Confirm in discovery; retain current backend temporarily or select an API-enabled platform |
| Provider contract restrictions | Delays or extra cost | Review contracts and technical documentation before design sign-off |
| SEO loss during migration | Reduced organic enquiries | Full crawl, URL mapping, redirects, staged validation, and post-launch monitoring |
| Incomplete finance wording | Compliance risk | Compliance review and sign-off before publication |
| Inconsistent stock data | Poor user trust | Normalisation rules, sync monitoring, reconciliation, and visible last-updated status internally |
| Slow content approval | Delayed launch | Agree content owners, deadlines, and approval workflow during discovery |
| Excessive third-party scripts | Performance/privacy issues | Load only required services, defer scripts, and apply consent controls |

## 18. Success measures and acceptance criteria

### 18.1 Business targets

Targets should be finalised after access to current analytics and lead data. Suggested six-month objectives:

- Increase completed digital enquiries per qualified session.
- Increase mobile stock-to-detail engagement.
- Increase finance, part-exchange, and service lead completion.
- Reduce avoidable form abandonment.
- Preserve branded organic visibility at launch.
- Grow non-brand local organic traffic through improved service and stock content.

These are targets, not guaranteed commercial outcomes.

### 18.2 Launch acceptance criteria

- Stock synchronises automatically and accurately within the agreed interval.
- Sold, reserved, and available statuses are reflected correctly.
- All critical forms reach the correct destination and create an auditable record.
- Analytics records agreed conversion events without storing prohibited personal data.
- Existing priority URLs have validated destinations or redirects.
- XML sitemap, robots rules, canonicals, and structured data pass review.
- Key templates meet agreed mobile performance budgets.
- Critical journeys pass current Chrome, Safari, Firefox, Edge, iOS, and Android testing.
- No critical or high-severity accessibility defects remain.
- Finance and legal wording receives client/compliance approval.
- CMS users complete training and can edit agreed content.

## 19. Recommended next step

Begin with a paid discovery and integration phase. Its output should be a fixed scope, confirmed stock and finance architecture, wireframes, migration inventory, delivery schedule, and fixed build quotation.

Before that phase starts, collect:

- Current Car Dealer 5 contract and technical contact.
- Stock/DMS and AutoTrader feed details.
- AutoConvert agreement and integration documentation.
- CRM, chat, call-tracking, email, and workshop-system details.
- GA4, Tag Manager, Search Console, and Google Business Profile access.
- Current lead volumes and conversion data.
- Brand assets, photography, reviews, legal wording, and FCA compliance contact.

## 20. Reference points

Public website reviewed on 30 July 2026:

- [Current homepage](https://www.germanengineeringcarsales.co.uk/)
- [Current used-car listing](https://www.germanengineeringcarsales.co.uk/used/cars/haverhill/)
- [Current finance page](https://www.germanengineeringcarsales.co.uk/finance/)
- [Current sitemap](https://www.germanengineeringcarsales.co.uk/sitemap.xml)
- [Google Web Vitals](https://web.dev/articles/vitals)
- [W3C Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [ICO cookies and similar technologies guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/)
- [FCA credit broking rules](https://www.fca.org.uk/firms/credit-broking-rules)
- [FCA CONC 3.7](https://handbook.fca.org.uk/handbook/conc3/conc3s7)

---

This proposal is based on publicly visible information and does not include access to the current administration system, analytics, contracts, lead data, or provider documentation. Final scope, timeline, and pricing should be confirmed after discovery.
