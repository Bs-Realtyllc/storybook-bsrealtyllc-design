import './BSRealtyFilterItem.css'

export type FilterVariant = 'primary' | 'active';
/** @deprecated Misspelled — use FilterVariant */
export type FilterVarient = FilterVariant;

export interface BSRealtyFilterItemProps {
    /** Text label for filter */
    label: string;

    /** Variant of filter item */
    variant?: FilterVariant;

    /** @deprecated Misspelled — use `variant` */
    varient?: FilterVariant;

    /** Optional click handler */
    onClick?: () => void;
}

export const BSRealtyFilterItem = ({
    label,
    variant,
    varient,
    onClick
}: BSRealtyFilterItemProps) => {
    const currentVariant = variant ?? varient;

    return (
        <button
            type="button"
            className={[`bsr-filter-item`, currentVariant ? `bsr-filter-item--${currentVariant}` : ''].join(' ')}
            // Tells screen readers whether this filter is currently applied
            aria-pressed={currentVariant === 'active'}
            onClick={onClick}
        >
            <span className='bsr-filter-item_label' >{label}</span>
        </button>
    )
}
