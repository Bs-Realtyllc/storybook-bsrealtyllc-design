import './BSRealtyAppStoreButton.css'

export interface BSRealtyAppStoreButtonProps {

    /** Link URL when clicked  */
    href?: string;

    /** Source path for the Google Play  image */
    imageSrc?: string

    /** Optional click handler */
    onClick?: () => void;
}

export const BSRealtyAppStoreButton = ({ href, imageSrc = '/app-store-button.png', onClick }: BSRealtyAppStoreButtonProps) => {
    return (
        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className="bsr-app-store_button">
            <img src={imageSrc} alt={imageSrc} />
        </a>
    )
}