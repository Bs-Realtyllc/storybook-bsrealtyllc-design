
import React, { forwardRef, useState } from 'react';
import './BSRealtyCheckbox.css';

export type CheckboxSize = 'small' | 'medium' | 'large';

export interface CheckboxProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        'type' | 'size' | 'color' | 'onChange'
    > {
    size?: CheckboxSize | (string & {});
    color?: string;
    checkColor?: string;
    /** Text shown next to the box (also its accessible name). Use aria-label when there's no visible text. */
    label?: React.ReactNode;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const BSRealtyCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(({
    size = 'medium',
    color,
    checkColor = 'white',
    label,
    checked,
    defaultChecked = false,
    disabled = false,
    onChange,
    className = '',
    ...props
}, ref) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);

    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : internalChecked;

    const isCustomSize =
        size !== 'small' &&
        size !== 'medium' &&
        size !== 'large';

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isControlled) {
            setInternalChecked(event.target.checked);
        }

        onChange?.(event);
    };

    return (
        <label
            className={`bsr-checkbox ${isCustomSize ? '' : `bsr-checkbox--${size}`} ${className}`.trim()}
            style={
                {
                    ...(isCustomSize && {
                        '--bsr-checkbox-size': size,
                    }),
                    ...(color && {
                        '--bsr-checkbox-color': color,
                    }),
                    '--bsr-checkbox-check-color': checkColor,
                } as React.CSSProperties
            }
        >
            <input
                {...props}
                ref={ref}
                type="checkbox"
                className="bsr-checkbox__input"
                checked={currentChecked}
                disabled={disabled}
                onChange={handleChange}
            />

            <span className="bsr-checkbox__box" aria-hidden="true" />

            {label && <span className="bsr-checkbox__label">{label}</span>}
        </label>
    );
});

BSRealtyCheckbox.displayName = 'BSRealtyCheckbox';

export default BSRealtyCheckbox;
