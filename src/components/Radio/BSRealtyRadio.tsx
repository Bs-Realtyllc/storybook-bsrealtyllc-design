import './BSRealtyRadio.css';

export type RadioSize = 'small' | 'medium' | 'large';

export interface BSRealtyRadioProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        'type' | 'size'
    > {
    /** Radio button size */
    size?: RadioSize;

    /** Radio label */
    label?: string;

    /** Custom class name */
    className?: string;
}

export const BSRealtyRadio = ({
    size = 'medium',
    label,
    disabled = false,
    className = '',
    onClick,
    ...props
}: BSRealtyRadioProps) => {
    return (
        <label
            className={`bsr-radio-wrapper ${disabled ? 'bsr-radio-wrapper--disabled' : ''
                } ${className}`}
        >
            <input
                {...props}
                type="radio"
                disabled={disabled}
                className="bsr-radio__input"
                onClick={(e) => {
                    if (props.checked) {
                        e.currentTarget.checked = false;
                    }

                    onClick?.(e);
                }}
            />

            <span className={`bsr-radio bsr-radio--${size}`}>
                <span className="bsr-radio__dot" />
            </span>

            {label && (
                <span className="bsr-radio__label">
                    {label}
                </span>
            )}
        </label>
    );
};

