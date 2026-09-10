import './BSRealtySocialIcon.css';

export interface BSRealtySocialIconProps {
    /** URL of the social icon */
    href?: string;

    /** Image path of the social icon */
    imgSrc?: string;



    /** Click handler */
    onClick?: () => void;

}

export const BSRealtySocialIcon = ({
    href,
    imgSrc,
    onClick,
}: BSRealtySocialIconProps) => {
    return (
        <a href={href} className='bsr-social-icon' onClick={onClick}>
            {imgSrc ? (
                <img className="bsr-social-icon_image "
                    src={imgSrc} alt={imgSrc} />) : null}
        </a  >

    )

}