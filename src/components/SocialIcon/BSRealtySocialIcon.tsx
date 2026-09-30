import './BSRealtySocialIcon.css';

export interface BSRealtySocialIconProps {
    /** URL of the social icon */
    href?: string;

    /** Image path of the social icon */
    imgSrc?: string;

    /** Name of the network, read by screen readers (e.g. "Facebook") */
    label: string;

    /** Click handler */
    onClick?: () => void;

    /** Extra class name(s) for the root element, for project-specific styling */
    className?: string;
}

export const BSRealtySocialIcon = ({
    className = '',
    href,
    imgSrc,
    label,
    onClick,
}: BSRealtySocialIconProps) => {
    return (
        <a href={href} className={`bsr-social-icon ${className}`} onClick={onClick} aria-label={label}>
            {imgSrc ? (
                <img className="bsr-social-icon_image"
                    src={imgSrc} alt="" />) : null}
        </a>

    )

}
