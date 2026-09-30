
import React from 'react';
import './BSRealtyTooltip.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface BSRealtyTooltipProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
    /** Text displayed inside the tooltip */
    content: React.ReactNode;

    /** Position of the tooltip */
    position?: TooltipPosition;

    /** Element that triggers the tooltip */
    children: React.ReactNode;

    /** Disable the tooltip */
    disabled?: boolean;

    /** Custom class name */
    className?: string;
}

export const BSRealtyTooltip = ({
    content,
    position = 'top',
    children,
    disabled = false,
    className = '',
    ...props
}: BSRealtyTooltipProps) => {
    if (disabled) {
        return <>{children}</>;
    }

    return (
        <div
            className={`bsr-tooltip-wrapper ${className} `}
            {...props}
        >
            {children}

            <div
                role="tooltip"
                className={`bsr-tooltip bsr-tooltip--${position} `}
            >
                {content}
            </div>
        </div>
    );
};

