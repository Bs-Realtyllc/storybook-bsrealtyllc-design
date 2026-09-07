import './BSRealtyFoundation.css'

export interface BSRealtyFoundationProps {
    /**Heading / title of foundation card */
    title: string;

    /**Descriptions of foundation card */
    description: string;

}

export const BSRealtyFoundation = ({
    title,
    description
}: BSRealtyFoundationProps) => {
    return (
        <div className='bsr-foundation'>
            <div className='bsr-foundation_text'>
                <h3 className='bsr-foundation_title'>{title}</h3>
                <p className='bsr-foundation_description'>{description}</p>
            </div>
        </div>
    )
}