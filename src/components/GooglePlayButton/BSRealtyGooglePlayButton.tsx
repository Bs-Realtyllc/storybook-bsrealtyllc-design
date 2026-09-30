import './BSRealtyGooglePlayButton.css';
// Bundled with the package so the default badge works in any project
import googlePlayBadge from '../../assets/badges/google-play-button.png';

export interface GooglePlayButtonProps {

    /** Link URL when clicked  */
    href?: string;

    /** Source path for the Google Play  image */
    imageSrc?: string

    /** Optional click handler */
    onClick?: () => void;
    /** Extra class name(s) for the root element, for project-specific styling */
    className?: string;
}

export const BSRealtyGooglePlayButton = ({ className = '', href, imageSrc = googlePlayBadge, onClick }: GooglePlayButtonProps) => {
    return (
        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className={`bsr-google-play-button ${className}`}>
            <img src={imageSrc} alt="Get it on Google Play" />
        </a>
    )
}