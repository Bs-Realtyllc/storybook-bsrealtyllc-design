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

    /** Extra class name(s) for the root element, for project-specific styling */
    className?: string;
}

export const BSRealtyActionCateg = ({
    className = '',
    title,
    description,
    icon,
    onClick,
}: BSRealtyActionCategProps) => {
    // A real <button>: Enter and Space work, and it's announced as a button.
    // Buttons can only hold inline content, so the title/description are spans.
    return (
        <button
            type="button"
            onClick={onClick}
            className={`bsr-action-categ ${className}`}
        >
            <span className="bsr-action-categ-wrapper" aria-hidden="true">{icon}</span>
            <span className="bsr-action-categ_text">
                <span className="bsr-action-categ__title">{title}</span>
                <span className="bsr-action-categ__description">{description}</span>
            </span>
        </button>
    )
}
