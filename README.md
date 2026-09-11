# @bsrealtyllc/design-system

Shared React components, icons, and design tokens for BSRealty products —
published to npm and reusable across projects.

Browse all components with live props/controls in [Storybook](https://github.com/bsr2023/storybook-bsrealtyllc-design) (`npm run storybook`), or in the deployed Storybook docs if you host one.

## Install

```sh
npm install @bsrealtyllc/design-system react react-dom
```

`react` and `react-dom` (^18 or ^19) are peer dependencies — install them in
the consuming app if they aren't already there.

## Usage

Import the stylesheet **once**, anywhere near your app's root (it carries
every component's styles plus the shared design tokens — colors,
typography, radii, etc. that components reference via CSS variables):

```ts
import '@bsrealtyllc/design-system/style.css';
```

Then import components from the package root:

```tsx
import { BSRealtyButton, BSRealtyTextField } from '@bsrealtyllc/design-system';

function Example() {
  return (
    <BSRealtyButton
      label="Get started"
      variant="primary"
      size="medium"
      onClick={() => console.log('clicked')}
    />
  );
}
```

...or deep-import a single component, so bundlers only pull in what you use:

```tsx
import { BSRealtyButton } from '@bsrealtyllc/design-system/Button';
```

Icons are available the same way:

```tsx
import { /* icon components */ } from '@bsrealtyllc/design-system/icons';
```

## Available components

Each entry below is both a named export from the package root and its own
deep-import subpath (e.g. `@bsrealtyllc/design-system/Avatar`):

| Component | Deep import |
| --- | --- |
| Avatar | `@bsrealtyllc/design-system/Avatar` |
| Button | `@bsrealtyllc/design-system/Button` |
| FAQ | `@bsrealtyllc/design-system/FAQ` |
| Navbar | `@bsrealtyllc/design-system/Navbar` |
| PasswordField | `@bsrealtyllc/design-system/PasswordField` |
| SearchBar | `@bsrealtyllc/design-system/SearchBar` |
| ServiceCard | `@bsrealtyllc/design-system/ServiceCard` |
| StarRating | `@bsrealtyllc/design-system/StarRating` |
| Testimonial | `@bsrealtyllc/design-system/Testimonial` |
| TextField | `@bsrealtyllc/design-system/TextField` |
| Typography | `@bsrealtyllc/design-system/Typography` |
| CourseCard | `@bsrealtyllc/design-system/CourseCard` |
| CourseCard2 | `@bsrealtyllc/design-system/CourseCard2` |
| GooglePlayButton | `@bsrealtyllc/design-system/GooglePlayButton` |
| AppStoreButton | `@bsrealtyllc/design-system/AppStoreButton` |
| SocialIcon | `@bsrealtyllc/design-system/SocialIcon` |
| Dropdown | `@bsrealtyllc/design-system/Dropdown` |
| Breadcrumb | `@bsrealtyllc/design-system/Breadcrumb` |
| BackButton | `@bsrealtyllc/design-system/BackButton` |
| ActionCateg | `@bsrealtyllc/design-system/ActionCateg` |
| EvolutionCard | `@bsrealtyllc/design-system/EvolutionCard` |
| FilterItem | `@bsrealtyllc/design-system/FilterItem` |

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

Publishing is automated: pushing a GitHub Release triggers
[.github/workflows/publish.yml](.github/workflows/publish.yml), which builds
and publishes to npm via Trusted Publishing (OIDC) — no manual `npm publish`
or token needed.

## License

MIT © BS Realty
