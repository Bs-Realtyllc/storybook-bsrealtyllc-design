import { forwardRef } from 'react';
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

export const BSRealtyRadio = forwardRef<HTMLInputElement, BSRealtyRadioProps>(
    (
        {
            size = 'medium',
            label,
            disabled = false,
            className = '',
            ...props
        },
        ref
    ) => {
        return (
            <label
                className={`bsr-radio-wrapper ${disabled ? 'bsr-radio-wrapper--disabled' : ''
                    } ${className}`}
            >
                <input
                    {...props}
                    ref={ref}
                    type="radio"
                    disabled={disabled}
                    className="bsr-radio__input"
                />

                <span aria-hidden="true" className={`bsr-radio bsr-radio--${size}`}>
                    <span className="bsr-radio__dot" />
                </span>

                {label && (
                    <span className="bsr-radio__label">
                        {label}
                    </span>
                )}
            </label>
        );
    }
);

BSRealtyRadio.displayName = 'BSRealtyRadio';
