
import React, { forwardRef } from 'react';
import './BSRealtyToggle.css'
export type ToggleSize = 'small' | 'medium' | 'large';

export interface BSRealtyToggleProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        'type' | 'size'
    > {
    /** Toggle size */
    size?: ToggleSize;

    /** Disable toggle */
    disabled?: boolean;

    /** Custom class name */
    className?: string;
}

export const BSRealtyToggle = forwardRef<HTMLInputElement, BSRealtyToggleProps>(
    (
        {
            size = 'medium',
            disabled = false,
            className = '',
            ...props
        },
        ref
    ) => {
        return (
            <label
                className={`bsr-toggle-wrapper ${disabled ? 'bsr-toggle-wrapper--disabled' : ''
                    } ${className}`.trim()}
            >
                <input
                    {...props}
                    ref={ref}
                    type="checkbox"
                    disabled={disabled}
                    className="bsr-toggle__input"
                />

                <span
                    aria-hidden="true"
                    className={`bsr-toggle bsr-toggle--${size}  `}
                >
                    <span className="bsr-toggle__thumb" />
                </span>
            </label>
        );
    }
);

BSRealtyToggle.displayName = 'BSRealtyToggle';


