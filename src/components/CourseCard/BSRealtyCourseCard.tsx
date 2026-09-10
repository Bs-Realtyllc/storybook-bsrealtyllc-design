import './BSRealtyCourseCard.css'

export interface BSRealtyCourseCardProps {
    /**  Image URL for course card */
    imageUrl: string;

    /** Title of course */
    title: string;

    /** Description/Summary of course */
    description: string;

    /** Text for action link */
    actionText?: string;

    /** Click handler for action link */
    onClick?: () => void;

}

// ArrowRight icon
const ArrowRightIcon = () => (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.08333 10.0833L12.75 5.41667L8.08333 0.75M12.75 5.41667L0.75 5.41667" stroke="#25282D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

export const BSRealtyCourseCard = ({
    imageUrl,
    title,
    description,
    actionText = 'Learn More',
    onClick,

}: BSRealtyCourseCardProps) => {
    return (
        <div className={['bsr-course-card'].join(' ')}>
            <div className="bsr-course-card_image-container">
                <img src={imageUrl} alt={title} className="bsr-course-card_image" />
            </div>

            <div className="bsr-course-card_content">
                <h2 className="bsr-course-card_title">{title}</h2>
                <p className="bsr-course-card_description">{description}</p>

            </div>
            {actionText ? (
                <> <button type="button" className="bsr-course-card_action" onClick={onClick}>{actionText} <ArrowRightIcon /></button>
                </>
            ) : null}

        </div>
    )
}