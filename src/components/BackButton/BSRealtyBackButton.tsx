import { ChevronLeftIcon } from '../../icons';
import './BSRealtyBackButton.css'

export interface BSRealtyBackButtonProps {
    /** Label text for the back button */
    label?: string;

    /** Click handler function */
    onClick?: () => void;
}

export const BSRealtyBackButton = ({
    label,
    onClick
}: BSRealtyBackButtonProps) => {
    return (
        <button type='button' onClick={onClick}
            className='bsr-back-button'>
            <ChevronLeftIcon height={36} width={30} />
            <span className='bsr-back-button_label'>{label}</span>
        </button>
    )
}