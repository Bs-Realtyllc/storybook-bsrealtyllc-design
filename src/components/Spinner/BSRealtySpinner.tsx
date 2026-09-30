
import React from 'react';
import './BSRealtySpinner.css';

export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerProps {
  
    size?: SpinnerSize | string;

    color?: string;

    className?: string;

    ariaLabel?: string;
}

export const BSRealtySpinner: React.FC<SpinnerProps> = ({
    size = 'medium',
    color,
    className = '',
    ariaLabel = 'Loading',
}) => {
    const isCustomSize =
        size !== 'small' &&
        size !== 'medium' &&
        size !== 'large';

    return (
        <span
            className={`bsr-spinner ${!isCustomSize ? `bsr-spinner--${size}` : ''
                } ${className} `.trim()}
            style={
                {
                    ...(isCustomSize && {
                        '--bsr-spinner-size': size,
                    }),
                    ...(color && {
                        '--bsr-spinner-color': color,
                    }),
                } as React.CSSProperties
            }
            role="status"
            aria-label={ariaLabel}
        />
    );
};

export default BSRealtySpinner;
