/**
 * Shared icon set for BSRealty* components.
 *
 * Each icon here is used by two or more components. Previously they were
 * copy-pasted inline into every component that needed them — sometimes
 * with slightly different geometry between copies (e.g. two different
 * eye/eye-off icons). Consolidating them here means a Figma icon update
 * only needs to happen in one place, and every consumer stays in sync.
 *
 * Icons used by only one component stay defined locally in that
 * component's file — there's no benefit to centralizing a one-off.
 *
 * All icons accept a `size` prop (default 20) and forward standard SVG
 * props so callers can pass aria-hidden, className, etc.
 */
import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Icon size in px (applied to both width and height) */
  size?: number;
}

/** Eye — password/content visible. Used by TextField and PasswordField. */
export const EyeIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/** Eye off — password/content hidden. Used by TextField and PasswordField. */
export const EyeOffIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

/** Info circle — used for validation/error messages. Used by TextField and PasswordField. */
export const InfoCircleIcon = ({ size = 16, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

/** Chevron down — expand/collapse and dropdown indicator. Used by FAQ and Navbar. */
export const ChevronDownIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);



/** Chevron left — used for back buttons and navigation. */
export const ChevronLeftIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M21 30L9 18L21 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Arrow right — used for action buttons and navigation. */
export const ArrowRight = ({ size = 14, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M8.08333 10.0833L12.75 5.41667L8.08333 0.75M12.75 5.41667L0.75 5.41667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
