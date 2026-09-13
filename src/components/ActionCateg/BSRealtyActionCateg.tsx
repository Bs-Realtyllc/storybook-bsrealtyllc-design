import './BSRealtyActionCateg.css'

export interface BSRealtyActionCategProps {
    /** The main heading of the card */
    title?: string;
    /** Subtitle or description text */
    description?: string;
    /** Icon element rendered on the left */
    icon?: React.ReactNode;

    /** Click handler */
    onClick?: () => void;

}

export const BSRealtyActionCateg = ({
    title,
    description,
    icon,
    onClick,
}: BSRealtyActionCategProps) => {
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            className='bsr-action-categ'
        >
            <div className="bsr-action-categ-wrapper">{icon}</div>
            <div className="bsr-action-categ_text">
                <h4 className="bsr-action-categ__title">{title}</h4>
                <p className="bsr-action-categ__description">{description}</p>
            </div>
        </div >
    )
}