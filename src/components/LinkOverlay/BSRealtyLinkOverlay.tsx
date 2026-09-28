import './BSRealtyLinkOverlay.css'

export interface BSRealtyLinkOverlayProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**Content insid link overlay */
  children?: React.ReactNode;
  /**className */
  className?: string;
}
export const BSRealtyLinkOverlay = ({
  children,
  className = '',
  ...props
}: BSRealtyLinkOverlayProps) => {
  return (
    <a
      {...props}
      className={`bsr-link-overlay ${className}`}
    >
      {children}
    </a>
  )
}
