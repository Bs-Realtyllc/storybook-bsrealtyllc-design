# @bsrealtyllc/design-system

Shared React components, icons, and design tokens for BSRealty products —
published to npm and reusable across projects. Every project can restyle the
components (colors, fonts, sizes, radius, spacing, icon sizes) with its own
theme file, without forking the package.

Browse all components with live props/controls in [Storybook](https://github.com/bsr2023/storybook-bsrealtyllc-design) (`npm run storybook`), or in the deployed Storybook docs if you host one.

## Install

```sh
npm install @bsrealtyllc/design-system react react-dom
```

`react` and `react-dom` (^18 or ^19) are peer dependencies — install them in
the consuming app if they aren't already there.

## Setup

Import the stylesheet **once**, near your app's root. It carries every
component's styles plus the design tokens (CSS variables) they read from:

```ts
import '@bsrealtyllc/design-system/style.css';
```

The stylesheet loads the **Lato** font from Google Fonts. If your project uses
a different font, override `--bsr-font-family-primary` (see [Theming](#theming)).

## Usage

```tsx
import { BSRealtyButton, BSRealtyTextField } from '@bsrealtyllc/design-system';

function Example() {
  return (
    <form>
      <BSRealtyTextField label="Email" type="email" placeholder="you@example.com" />
      <BSRealtyButton label="Get started" variant="primary" size="medium" type="submit" />
    </form>
  );
}
```

Or deep-import a single component, so bundlers only pull in what you use:

```tsx
import { BSRealtyButton } from '@bsrealtyllc/design-system/Button';
```

### Next.js (App Router)

Components are already marked `"use client"`, so you can import them straight
into Server Components — no wrapper needed. Import `style.css` in your root
`app/layout.tsx`.

## Theming

Every component reads its look from `--bsr-*` CSS variables. To give a project
its own look, create a theme file and load it **after** the package stylesheet:

```css
/* src/theme.css */
:root {
  /* Brand */
  --bsr-color-primary: #0f766e;
  --bsr-color-primary-hover: #115e59;

  /* Type */
  --bsr-font-family-primary: "Inter", system-ui, sans-serif;
  --bsr-font-size-body-medium: 15px;

  /* Shape */
  --bsr-radius-lg: 12px;
  --bsr-radius-input: 8px;

  /* Density: tighter or roomier spacing everywhere */
  --bsr-space-3: 10px;
  --bsr-space-4: 14px;

  /* Icons */
  --bsr-icon-size-lg: 24px;
}
```

```ts
import '@bsrealtyllc/design-system/style.css';
import './theme.css'; // your overrides win
```

To theme only part of a page, put the overrides on a class instead of `:root`
(`.admin-area { --bsr-color-primary: #7c3aed; }`) — the variables apply to
everything inside it.

| Group | Examples | What it changes |
| --- | --- | --- |
| Colors | `--bsr-color-primary`, `--bsr-color-text-body`, `--bsr-color-error` | Brand, text, borders, surfaces, status colors |
| Font family | `--bsr-font-family-primary` | Every component's font |
| Font size | `--bsr-font-size-body-medium`, `--bsr-font-size-headline-large` | Text sizes (desktop), plus `*-mobile` sizes for phones |
| Font weight | `--bsr-font-weight-medium`, `--bsr-font-weight-semibold` | Text weights |
| Radius | `--bsr-radius-sm` … `--bsr-radius-7xl`, `--bsr-radius-input` | Corner rounding |
| Spacing | `--bsr-space-1` (4px) … `--bsr-space-8` (32px) | Padding, margins and gaps |
| Icon size | `--bsr-icon-size-2xs` (12px) … `--bsr-icon-size-2xl` (24px) | Icons inside components |
| Shadows | `--bsr-shadow-card`, `--bsr-shadow-field` | Elevation |

The full list, with default values, is in
[`src/tokens/tokens.css`](src/tokens/tokens.css) and on the **Guides/Theming**
page in Storybook.

### One-off styling with `className`

Every component accepts `className` on its outermost element, for changes
that apply to one place only:

```tsx
<BSRealtyButton className="checkout-cta" label="Pay now" />
```

### Icons

```tsx
import { EyeIcon, iconSizeStyle } from '@bsrealtyllc/design-system/icons';

<EyeIcon style={iconSizeStyle('sm')} /> // sized by --bsr-icon-size-sm
```

### Images

The App Store and Google Play badges ship inside the package, so their
defaults work anywhere. `BSRealtyNavbar` defaults to the BS Realty logo at
`/Primary_Logo.png`, so **other projects should pass their own `logo`**.

## Components

Each component is a named export from the package root and also has its own
deep-import path, e.g. `@bsrealtyllc/design-system/Avatar`.

| Deep import | Exports |
| --- | --- |
| `/ActionCateg` | `BSRealtyActionCateg` |
| `/Alert` | `BSRealtyAlert` |
| `/AppStoreButton` | `BSRealtyAppStoreButton` |
| `/Avatar` | `BSRealtyAvatar` |
| `/BackButton` | `BSRealtyBackButton` |
| `/Breadcrumb` | `BSRealtyBreadcrumb` |
| `/Button` | `BSRealtyButton` |
| `/Calender` | `BSRealtyCalender` |
| `/Checkbox` | `BSRealtyCheckbox` |
| `/CourseCard` | `BSRealtyCourseCard` |
| `/CourseCard2` | `BSRealtyCourseCard2` |
| `/DatePicker` | `BSRealtyDatePicker` |
| `/Dropdown` | `BSRealtyDropdown` |
| `/EvolutionCard` | `BSRealtyEvolutionCard` |
| `/FAQ` | `BSRealtyFAQ` |
| `/FileUpload` | `BSRealtyFileUpload` |
| `/FilterItem` | `BSRealtyFilterItem` |
| `/GooglePlayButton` | `BSRealtyGooglePlayButton` |
| `/KPICard` | `BSRealtyKPICard` |
| `/Link` | `BSRealtyLink` |
| `/LinkOverlay` | `BSRealtyLinkBox`, `BSRealtyLinkOverlay` |
| `/Navbar` | `BSRealtyNavbar` |
| `/Notification` | `BSRealtyNotification` |
| `/PasswordField` | `BSRealtyPasswordField` |
| `/Radio` | `BSRealtyRadio` |
| `/SearchBar` | `BSRealtySearchbar` |
| `/ServiceCard` | `BSRealtyServiceCard` |
| `/SocialIcon` | `BSRealtySocialIcon` |
| `/Spinner` | `BSRealtySpinner` |
| `/StarRating` | `BSRealtyStarRating` |
| `/Tabs` | `BSRealtyTabs` |
| `/Testimonial` | `BSRealtyTestimonial` |
| `/TextField` | `BSRealtyTextField` |
| `/Toast` | `BSRealtyToast` |
| `/Toogle` | `BSRealtyToogle` |
| `/Tooltip` | `BSRealtyTooltip` |
| `/Typography` | `BSRealtyTypography` |
| `/icons` | Icon components, `iconSizeStyle` |

Every component ships its own TypeScript declarations — props are documented
inline via JSDoc and show up in your editor's autocomplete.

## Development

This repo is both the component source (built as a library) and a Storybook
app for developing/previewing components.

```sh
npm install
npm run storybook     # develop components with live previews
npm run build:lib     # build the publishable dist/ (also runs automatically
                       # before `npm publish`, via prepublishOnly)
npm run lint
```

Adding a component? Export it from `src/index.ts`, add its entry to
`vite.lib.config.ts`, and add its deep-import path to `package.json`
`"exports"`. Style it with the `--bsr-*` tokens rather than raw values so
projects can theme it.

Publishing is automated: pushing a GitHub Release triggers
[.github/workflows/publish.yml](.github/workflows/publish.yml), which builds
and publishes to npm via Trusted Publishing (OIDC) — no manual `npm publish`
or token needed.

## License

MIT © BS Realty
