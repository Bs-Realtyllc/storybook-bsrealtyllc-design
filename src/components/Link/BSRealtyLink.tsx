import './BSRealtyLink.css';

export type LinkVariant = 'plain' | 'underline' | 'hoverUnderline';
export type LinkSize = 'xs' | 'small' | 'medium' | 'large';

export interface BSRealtyLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Link visual variant */
    variant?: LinkVariant;

    /** Link size */
    size?: LinkSize | string;

    /** Link text color */
    color?: string;

    /** Link content */
    children?: React.ReactNode;
}

export const BSRealtyLink = ({
    variant = 'plain',
    size = 'medium',
    children = 'Link',
    color,
    className = '',
    style,
    ...props
}: BSRealtyLinkProps) => {
    const isCustomSize = !['xs', 'small', 'medium', 'large'].includes(size);

    return (
        <a
            {...props}
            className={`bsr-link bsr-link--${variant} bsr-link--${size} ${className}`}
            style={{
                ...style,
                ...(color ? { color } : {}),
                ...(isCustomSize ? { fontSize: size } : {}),

            }}
        >
            {children}
        </a>
    );
};