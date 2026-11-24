# CarboSafe — Carbon Management Platform UI

CarboSafe is a Next.js frontend prototype exploring a carbon-management experience for individuals, businesses, developers, and administrators. The current application focuses on the landing page, role-based route layouts, dashboard concepts, carbon-footprint/offset flows, and marketplace-style interface components.

> **Important scope note:** this repository currently contains a frontend application. The presence of UI labels such as “AI-verified”, “blockchain-secured”, or “carbon credits” does not establish that a verification service, carbon-credit registry, payment backend, or blockchain integration is implemented. Dashboard figures are illustrative UI data, not audited emissions or offset records.

## Product areas represented

- Public landing page with feature sections and a three-step carbon-offset process.
- Signup and role-specific authentication routes for individuals, businesses, developers, and administrators.
- Role-specific dashboard pages.
- Individual dashboard components for carbon calculation, marketplace, certificates, academy, payments, onboarding, and profile.
- Responsive UI components, charts, icons, and theme support.

## Routes

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/signup` | Role selection / signup |
| `/auth/individual` | Individual authentication |
| `/auth/business` | Business authentication |
| `/auth/developer` | Developer authentication |
| `/auth/admin` | Admin authentication |
| `/dashboard/individual` | Individual dashboard |
| `/dashboard/business` | Business dashboard |
| `/dashboard/developer` | Developer dashboard |
| `/dashboard/admin` | Admin dashboard |

## Technology

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Radix UI primitives and reusable UI components
- Framer Motion
- Recharts
- Lucide icons
- Zod and React Hook Form

## Local development

### Requirements
- Node.js version compatible with the installed Next.js release (Node.js 20.9+ recommended)
- pnpm (the repository includes `pnpm-lock.yaml`)

### Install and start

```bash
git clone https://github.com/aman-UI2006/new_v0-carbo-safe-architecture.git
cd new_v0-carbo-safe-architecture
pnpm install
pnpm dev
```

Open the local URL printed by Next.js (normally http://localhost:3000).

### Production build

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Project structure

```text
app/            Next.js routes and layouts
components/
  landing/      Public landing-page sections
  dashboards/   Role-specific dashboard shells
  individual/   Individual user experience components
  auth/         Authentication and role-selection UI
  ui/           Reusable UI primitives
lib/            Shared frontend utilities
public/         Static images and icons
styles/         Global styles
```

## Engineering roadmap

1. Connect authentication routes to a secure identity provider and server-side authorization.
2. Build a backend for emissions records, project metadata, user accounts, and payments.
3. Integrate authoritative emissions factors and document calculation methodology.
4. Integrate a credible MRV workflow and independent project verification.
5. Connect any credit issuance or retirement flow to audited contracts and verifiable registries.
6. Add automated tests, accessibility checks, and end-to-end coverage.

## Deployment

The project is configured for a standard Next.js deployment. Set production environment variables only after the corresponding backend services are implemented. Review the deployment target and access controls before publishing user or business data.

## License

No license file is currently included. All rights remain with the respective copyright holders unless a license is added.
