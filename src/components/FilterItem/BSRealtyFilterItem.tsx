import './BSRealtyFilterItem.css'

export type FilterVarient = 'primary' | 'active';

export interface BSRealtyFilterItemProps {
    /** Text label for filter */
    label: string;

    /** Variant of filter item */
    varient?: FilterVarient;

    /** Optional click handler */
    onClick?: () => void;
}

export const BSRealtyFilterItem = ({
    label,
    varient,
    onClick
}: BSRealtyFilterItemProps) => {
    return (
        <button className={[`bsr-filter-item`, varient ? `bsr-filter-item--${varient}` : ''].join(' ')} onClick={onClick}>
            <span className='bsr-filter-item_label' >{label}</span>
        </button>
    )
}