import type { CSSProperties } from 'react';

/** Steps of the --bsr-icon-size-* scale in tokens.css (12px → 24px). */
export type IconSizeToken = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/** CSS value for an icon-size token, e.g. iconSizeVar('sm') → "var(--bsr-icon-size-sm)" */
export const iconSizeVar = (token: IconSizeToken) => `var(--bsr-icon-size-${token})`;

/**
 * Inline style that sizes an icon from a token, so each project can re-theme
 * icon sizes by overriding the token. CSS width/height win over the SVG's own
 * width/height attributes, so any icon that forwards `style` works:
 *   <EyeIcon style={iconSizeStyle('sm')} />
 */
export const iconSizeStyle = (token: IconSizeToken): CSSProperties => ({
    width: iconSizeVar(token),
    height: iconSizeVar(token),
});
