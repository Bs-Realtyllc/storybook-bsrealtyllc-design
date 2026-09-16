/**
 * @bsrealtyllc/design-system — public entry point.
 *
 * Consumers can import from here directly:
 *   import { BSRealtyButton, BSRealtyTextField } from '@bsrealtyllc/design-system';
 *
 * ...or deep-import a single component (see package.json "exports"):
 *   import { BSRealtyButton } from '@bsrealtyllc/design-system/Button';
 *
 * Both paths are backed by the same per-component barrel files below, so
 * there is exactly one place (each component's own index.ts) that decides
 * what that component publicly exports.
 *
 * Consumers must also import the stylesheet once, e.g.
 *   import '@bsrealtyllc/design-system/style.css';
 * See README.md.
 */

// Design tokens (colors, typography, radii, …) — every component's CSS
// references these as `var(--bsr-*)`. cssCodeSplit is false in
// vite.lib.config.ts, so importing this once here bundles it into the
// single published dist/style.css alongside every component's styles,
// regardless of which entry point a consumer actually imports from.
import './tokens/tokens.css';

// Components
export * from "./components/Avatar";
export * from "./components/Button";
export * from "./components/FAQ";
export * from "./components/Navbar";
export * from "./components/PasswordField";
export * from "./components/SearchBar";
export * from "./components/ServiceCard";
export * from "./components/StarRating";
export * from "./components/Testimonial";
export * from "./components/TextField";
export * from "./components/Typography";
export * from "./components/CourseCard";
export * from "./components/GooglePlayButton";
export * from "./components/AppStoreButton";
export * from "./components/SocialIcon";
export * from "./components/Dropdown";
export * from "./components/Breadcrumb";
export * from "./components/BackButton";
export * from "./components/ActionCateg";
export * from "./components/EvolutionCard";
export * from "./components/FilterItem";
export * from "./components/CourseCard2";
export * from "./components/DatePicker";

// Icons

export * from "./icons/index";

// Shared types
export * from "./types";
