import { forwardRef } from 'react';
import './BSRealtyLinkOverlay.css'

export interface BSRealtyLinkBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**Card content, including one BSRealtyLinkOverlay */
  children?: React.ReactNode;
  /**className */
  className?: string;
}

/** Positioned container; the BSRealtyLinkOverlay inside it makes the whole box clickable. */
export const BSRealtyLinkBox = forwardRef<HTMLDivElement, BSRealtyLinkBoxProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={`bsr-link-box ${className}`}
      >
        {children}
      </div>
    )
  }
)

BSRealtyLinkBox.displayName = 'BSRealtyLinkBox';

export interface BSRealtyLinkOverlayProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**Link text (usually the card title); this is what screen readers announce */
  children?: React.ReactNode;
  /**className */
  className?: string;
}

/** The link whose click area stretches over the nearest BSRealtyLinkBox. */
export const BSRealtyLinkOverlay = forwardRef<HTMLAnchorElement, BSRealtyLinkOverlayProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <a
        {...props}
        ref={ref}
        className={`bsr-link-overlay ${className}`}
      >
        {children}
      </a>
    )
  }
)

BSRealtyLinkOverlay.displayName = 'BSRealtyLinkOverlay';
