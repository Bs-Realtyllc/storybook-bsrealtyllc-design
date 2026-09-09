import './BSRealtyEvolutionCard.css'

export interface BSRealtyEvolutionCardProps {
    /** Year range displayed at the top */
    yearRange: string;

    /**Title of card */
    title: string;

    /**Description text  */
    description: string;
}

export const BSRealtyEvolutionCard = ({
    yearRange,
    title,
    description,
}: BSRealtyEvolutionCardProps) => {
    return (
        <div className='bsr-evolution-card'>
            <div className='bsr-evolution-card_year'><span className='bsr-evolution-card_year-range'>{yearRange}</span></div>
            <div className='bsr-evolution-card_text'>
                <h3 className='bsr-evolution-card_title'>{title}</h3>
                <p className='bsr-evolution-card_description'>{description}</p>
            </div>
        </div>
    )
}