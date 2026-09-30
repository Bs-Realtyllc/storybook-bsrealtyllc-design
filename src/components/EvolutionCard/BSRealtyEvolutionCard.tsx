import './BSRealtyEvolutionCard.css'

export interface BSRealtyEvolutionCardProps {
    /** Year range displayed at the top */
    yearRange: string;

    /**Title of card */
    title: string;

    /**Description text  */
    description: string;
    /** Extra class name(s) for the root element, for project-specific styling */
    className?: string;
}

export const BSRealtyEvolutionCard = ({
    className = '',
    yearRange,
    title,
    description,
}: BSRealtyEvolutionCardProps) => {
    return (
        <div className={`bsr-evolution-card ${className}`}>
            <div className='bsr-evolution-card_year'><span className='bsr-evolution-card_year-range'>{yearRange}</span></div>
            <div className='bsr-evolution-card_text'>
                <h3 className='bsr-evolution-card_title'>{title}</h3>
                <p className='bsr-evolution-card_description'>{description}</p>
            </div>
        </div>
    )
}