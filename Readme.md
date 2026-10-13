# Sufyan Rasheed — portfolio

Complete static Next.js portfolio for `https://katro87.github.io`. The original site files (including Umer and Masood) have been replaced. Sufyan’s existing portrait is preserved locally. Git history is retained for recovery.

## Develop and publish

Requires Node.js 22 or newer. No environment variables, backend, paid APIs or account integrations are needed for the portfolio itself.

```powershell
cd web
npm ci
npm run dev
# http://127.0.0.1:3000
npm run check
npm run build
```

`npm run build` statically exports every route and copies the publishable output to the repository root. Commit the source and the generated output together, then push `main`. GitHub Pages should publish from **main / root**. `.nojekyll` keeps the Next.js asset directory available. There is no server-side Next.js runtime on Pages.

## File tree

```text
web/
  app/                 Pages, metadata, sitemap, robots, global styling
    services/[slug]/   35 statically generated service pages
    projects/[slug]/   Four project case studies
    [page]/            How it works, privacy and service terms
  components/          Navigation, searchable directory and shared UI
  lib/                 Typed service, project and supporting-page content
  public/images/       Preserved portrait and brand Open Graph image
scripts/
  export.mjs           Copies static output to the Pages publishing root
  brand-image.mjs      Produces the brand Open Graph image
index.html             Generated homepage
services/, projects/   Generated detail pages
_next/                 Generated CSS and JavaScript
sitemap.xml, robots.txt, 404.html, .nojekyll
```

Content changes belong in `web/lib`, page changes in `web/app`, and shared design in `web/app/globals.css`. Rebuild after any change. Generated files are not the editing source. No fake inquiry form is used: contact buttons open WhatsApp with page-specific text or email with a relevant subject. Search and category filtering run in the browser. Mobile navigation supports Escape and a keyboard focus loop.

## Assets and facts to confirm

- Preserved portrait: `web/public/images/sufyan-portrait.jpg`, from the original `Katro87/project-assets` reference. Original dimensions: 853 × 1280. No replacement portrait was generated.
- Genuine screenshots are pending: `images/projects/kandrex-dashboard.png`, `outreach-workflow.png`, `customwebx.png`, `rental-platform.png`. Suggested dimensions: 1600 × 1000. The site displays explicitly labeled compositional placeholders, not invented dashboards. To use real images, replace the `AssetFrame` component with the approved asset while keeping meaningful alt text.
- Confirm Kandrex’s exact live feature inventory before removing “availability to confirm” labels. AI answering is planned/unconfirmed; messaging depends on provider verification.
- Rental Trust remains **in development / academic final-year project**. No live NADRA integration or government partnership is claimed.
- Review formal privacy operations, retention/deletion arrangements and engagement-specific refund/cancellation terms. Current pages transparently identify these as items to agree, rather than inventing settled policies.
- Review company attribution, service scope and contact details supplied in the brief. No age, experience metrics, clients, testimonials, prices or licences were invented.
- Official references included for SECP incorporation, FBR Iris/filing and Punjab DLIMS. Province/provider-specific requirements and fees are checked per task; no fixed eligibility, fees or approval timelines are advertised.

The site provides guidance and authorized assistance, with qualified professional review recommended where applicable. Third-party fees, access permissions and institutional decisions remain separate.

## Verification

- Production build and TypeScript checking pass; all 48 content pages plus the 404 export are generated.
- `python scripts/verify-export.py` checks every exported page, internal link, asset, fragment, H1, canonical URL and service-specific inquiry message.
- Browser checks: directory search, category filtering, no-results state, reset, mobile drawer, Escape, and desktop services menu.
- Homepage checked at 360, 768, 1024 and 1440 pixels with no horizontal overflow; service detail checked at 360 pixels. Main copy is 16px, with larger navigation and labels. Preserved portrait uses top alignment to retain the full head.
- Dependency audit after upgrading to Next.js 16.4.0 reports no known vulnerabilities.
