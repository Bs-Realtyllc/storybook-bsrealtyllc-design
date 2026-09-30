import './BSRealtyAppStoreButton.css'
// Bundled with the package so the default badge works in any project
import appStoreBadge from '../../assets/badges/app-store-button.png'

export interface BSRealtyAppStoreButtonProps {

    /** Link URL when clicked  */
    href?: string;

    /** Source path for the App Store image */
    imageSrc?: string

    /** Optional click handler */
    onClick?: () => void;
    /** Extra class name(s) for the root element, for project-specific styling */
    className?: string;
}

export const BSRealtyAppStoreButton = ({ className = '', href, imageSrc = appStoreBadge, onClick }: BSRealtyAppStoreButtonProps) => {
    return (
        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className={`bsr-app-store_button ${className}`}>
            <img src={imageSrc} alt="Download on the App Store" />
        </a>
    )
}