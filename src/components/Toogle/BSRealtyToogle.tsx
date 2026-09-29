
import React, { forwardRef } from 'react';
import './BSRealtyToogle.css';

export type ToogleSize = 'small' | 'medium' | 'large';

export interface BSRealtyToogleProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        'type' | 'size'
    > {
    /** Toggle size */
    size?: ToogleSize;

    /** Disable toggle */
    disabled?: boolean;

    /** Custom class name */
    className?: string;
}

export const BSRealtyToogle = forwardRef<HTMLInputElement, BSRealtyToogleProps>(
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
                className={`bsr-toogle-wrapper ${disabled ? 'bsr-toogle-wrapper--disabled' : ''
                    } `}
            >
                <input
                    {...props}
                    ref={ref}
                    type="checkbox"
                    disabled={disabled}
                    className="bsr-toogle__input"
                />

                <span
                    aria-hidden="true"
                    className={`bsr-toogle bsr-toogle--${size} ${className} `}
                >
                    <span className="bsr-toogle__thumb" />
                </span>
            </label>
        );
    }
);

BSRealtyToogle.displayName = 'BSRealtyToogle';


