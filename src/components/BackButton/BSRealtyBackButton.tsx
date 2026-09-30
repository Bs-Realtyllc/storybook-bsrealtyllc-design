import { ChevronLeftIcon } from '../../icons';
import './BSRealtyBackButton.css'

export interface BSRealtyBackButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    /** Label text for the back button */
    label?: string;

    /** Click handler function */
    onClick?: () => void;
}

export const BSRealtyBackButton = ({
    label = 'Back',
    onClick,
    className = '',
    type = 'button',
    ...props
}: BSRealtyBackButtonProps) => {
    return (
        <button
            {...props}
            type={type}
            onClick={onClick}
            className={`bsr-back-button ${className}`}
        >
            <ChevronLeftIcon height={36} width={30} />
            <span className='bsr-back-button_label'>{label}</span>
        </button>
    )
}
