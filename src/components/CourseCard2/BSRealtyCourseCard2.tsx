import './BSRealtyCourseCard2.css'

export type CourseVariant = 'Default' | 'withLearners'


export interface BSRealtyCourseCard2Props {
    /**Image url of course card 2 */
    imgSrc: string;

    /** Title of Course card 2 */
    title: string;

    /** price of course card 2 */
    price?: string;

    /**Credit hrs */
    creditHrs: number;

    /**Varient */
    variant?: CourseVariant;

    /**Learners number */
    learners?: number;
}

export const ClockIcon = ({ size = 24 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"

    >
        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const BookOpenIcon = ({ size = 24 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M11 5.73188V17.6485M11 17.6485C12.0706 16.9373 13.524 16.5002 15.125 16.5002C16.726 16.5002 18.1794 16.9373 19.25 17.6485V5.73188C18.1794 5.02062 16.726 4.5835 15.125 4.5835C13.524 4.5835 12.0706 5.02062 11 5.73188C9.92943 5.02062 8.47595 4.5835 6.875 4.5835C5.27405 4.5835 3.82057 5.02062 2.75 5.73188V17.6485C3.82057 16.9373 5.27405 16.5002 6.875 16.5002C8.47595 16.5002 9.92943 16.9373 11 17.6485Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const QuestionMarkCircleIcon = ({ size = 24 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M8.22766 9C8.77678 7.83481 10.2584 7 12.0001 7C14.2092 7 16.0001 8.34315 16.0001 10C16.0001 11.3994 14.7224 12.5751 12.9943 12.9066C12.4519 13.0106 12.0001 13.4477 12.0001 14M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DownloadIcon = ({ size = 24 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M8 12L12 16L16 12M12 16L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DocumentIcon = ({ size = 24 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M7 21H17C18.1046 21 19 20.1046 19 19V9.41421C19 9.149 18.8946 8.89464 18.7071 8.70711L13.2929 3.29289C13.1054 3.10536 12.851 3 12.5858 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/** Icons */
export const CheckCircleIcon = ({ size = 24 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const BSRealtyCourseCard2 = ({
    imgSrc,
    title,
    price,
    creditHrs,
    variant,
    learners
}: BSRealtyCourseCard2Props) => {
    const course = title.trim().split(/\s+/)[0];
    return (
        <div className='bsr-course-card2'>

            <img src={imgSrc} alt={imgSrc} className='bsr-course-card2__image' />


            {/* Content */}
            <div className={`bsr-course-card2__content,  bsr-course-card2--${variant}`}>
                {/* Heading title/price text */}
                <div className='bsr-course-card2__information'>
                    <h3 className='bsr-course-card2__title'>{title}</h3>
                    <p className='bsr-course-card2__price'>{price}</p>

                    {variant === 'withLearners' ? (
                        <p className='bsr-course-card2__learners'>{learners} Learners already enrolled</p>
                    ) : null

                    }
                </div>

                {/* Details  */}
                <div className='bsr-course-card2__details'>
                    <p className='bsr-course-card2__feature-title' >This Course Includes</p>
                    <ul className='bsr-course-card2__feature-list'>
                        <li >
                            <ClockIcon size={22} />{creditHrs} Credit Hours ({course} Required)
                        </li>
                        <li>
                            <BookOpenIcon size={22} /> PSI Exam Preparation
                        </li>
                        <li>
                            <QuestionMarkCircleIcon size={22} /> Practice Quizzer & Exam
                        </li>
                        <li>
                            <DownloadIcon size={22} /> Downloadable Resources
                        </li>
                        <li>
                            <DocumentIcon size={22} /> Certificate of Completion
                        </li>
                        <li>
                            <CheckCircleIcon size={22} /> State Approved Curriculum
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}