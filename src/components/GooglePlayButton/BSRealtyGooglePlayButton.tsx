import './BSRealtyGooglePlayButton.css';

export interface GooglePlayButtonProps {

    /** Link URL when clicked  */
    href?: string;

    /** Source path for the Google Play  image */
    imageSrc?: string

    /** Optional click handler */
    onClick?: () => void;
}

export const BSRealtyGooglePlayButton = ({ href, imageSrc = '/google-play-button.png', onClick }: GooglePlayButtonProps) => {
    return (
        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className="bsr-google-play-button">
            <img src={imageSrc} alt={imageSrc} />
        </a>
    )
}