import { forwardRef } from 'react';
import './BSRealtyLink.css';

export type LinkVariant = 'plain' | 'underline' | 'hoverUnderline';
export type LinkSize = 'xs' | 'small' | 'medium' | 'large';

const LINK_SIZES: readonly string[] = ['xs', 'small', 'medium', 'large'];

export interface BSRealtyLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Link visual variant */
    variant?: LinkVariant;

    /** Link size, or any CSS font-size (e.g. "1.25rem") */
    size?: LinkSize | (string & {});

    /** Link text color (defaults to the primary color) */
    color?: string;

    /** Disable the link: it can't be clicked or focused */
    disabled?: boolean;

    /** Link content */
    children?: React.ReactNode;
}

export const BSRealtyLink = forwardRef<HTMLAnchorElement, BSRealtyLinkProps>(
    (
        {
            variant = 'plain',
            size = 'medium',
            children = 'Link',
            color,
            disabled = false,
            className = '',
            style,
            href,
            onClick,
            ...props
        },
        ref
    ) => {
        const isCustomSize = !LINK_SIZES.includes(size);

        return (
            <a
                {...props}
                ref={ref}
                // No href means the browser won't navigate or focus it
                href={disabled ? undefined : href}
                role={disabled ? 'link' : props.role}
                aria-disabled={disabled || undefined}
                onClick={(e) => {
                    if (disabled) {
                        e.preventDefault();
                        return;
                    }
                    onClick?.(e);
                }}
                className={`bsr-link bsr-link--${variant} ${isCustomSize ? '' : `bsr-link--${size}`} ${className}`}
                style={{
                    ...style,
                    ...(color ? { color } : {}),
                    ...(isCustomSize ? { fontSize: size } : {}),
                }}
            >
                {children}
            </a>
        );
    }
);

BSRealtyLink.displayName = 'BSRealtyLink';
