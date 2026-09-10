import './BSRealtyCourseCard.css'
import { ArrowRight } from "../../icons/icons"

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
                <> <button type="button" className="bsr-course-card_action" onClick={onClick}><span>{actionText}</span> <ArrowRight size={14} className="bsr-arrow-right" /></button>
                </>
            ) : null}

        </div>
    )
}