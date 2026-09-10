/**
 * @bsrealty/design-system — public entry point.
 *
 * Consumers can import from here directly:
 *   import { BSRealtyButton, BSRealtyTextField } from '@bsrealty/design-system';
 *
 * ...or deep-import a single component (see package.json "exports"):
 *   import { BSRealtyButton } from '@bsrealty/design-system/Button';
 *
 * Both paths are backed by the same per-component barrel files below, so
 * there is exactly one place (each component's own index.ts) that decides
 * what that component publicly exports.
 */

// Components
export * from './components/Avatar';
export * from './components/Button';
export * from './components/FAQ';
export * from './components/Navbar';
export * from './components/PasswordField';
export * from './components/PropertyCard';
export * from './components/SearchBar';
export * from './components/ServiceCard';
export * from './components/StarRating';
export * from './components/Testimonial';
export * from './components/TextField';
export * from './components/Typography';
export * from './components/CourseCard';
export * from './components/GooglePlayButton';

// Icons
export * from './icons';

// Shared types
export * from './types';
