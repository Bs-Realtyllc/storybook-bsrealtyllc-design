
import React, { useState } from 'react';
import './BSRealtyCheckbox.css';

export type CheckboxSize = 'small' | 'medium' | 'large';

export interface CheckboxProps {
    size?: CheckboxSize | string;
    color?: string;
    checkColor?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const BSRealtyCheckbox: React.FC<CheckboxProps> = ({
    size = 'medium',
    color,
    checkColor = 'white',
    checked,
    defaultChecked = false,
    disabled = false,
    onChange,
    className = '',
}) => {
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
            className={`bsr-checkbox bsr-checkbox--${size} ${className}`.trim()}
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
                type="checkbox"
                checked={currentChecked}
                disabled={disabled}
                onChange={handleChange}
            />

            <span className="bsr-checkbox__box" />
        </label>
    );
};

BSRealtyCheckbox.displayName = 'BSRealtyCheckbox';

export default BSRealtyCheckbox;