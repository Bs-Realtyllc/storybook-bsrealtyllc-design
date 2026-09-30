
import React from 'react';
import './BSRealtyNotification.css';

export interface NotificationProps {
    /** Icon of notification button.*/
    icon?: React.ReactNode;
    /** Whether to display the unread notification indicator. */
    showIndicator?: boolean;
    /** Background color of the notification button.*/
    backgroundColor?: string;
    /** Color of the unread notification indicator.*/
    indicatorColor?: string;
    /**Optional click handler. */
    onClick?: () => void;
    /** Disables the notification button.*/
    disabled?: boolean;

    /** Additional class names for styling.*/
    className?: string;

    /** Accessible name for the icon-only button */
    ariaLabel?: string;
}

export const BSRealtyNotification: React.FC<NotificationProps> = ({
    icon,
    showIndicator = false,
    backgroundColor,
    indicatorColor,
    onClick,
    disabled = false,
    className = '',
    ariaLabel = 'Notifications',
}) => {
    return (
        <button
            type="button"
            className={`bsr-notification  ${className} `.trim()}
            onClick={onClick}
            disabled={disabled}
            aria-label={showIndicator ? `${ariaLabel} (unread)` : ariaLabel}
            style={{
                backgroundColor,
            }}
        >
            <span className='bsr-notification__wraper'>
                <span className="bsr-notification__icon" aria-hidden="true">
                    {icon}
                </span>

                {showIndicator && (
                    <span
                        className="bsr-notification__indicator"
                        style={{
                            backgroundColor: indicatorColor,
                        }}
                    />
                )}
            </span>
        </button>
    );
};

BSRealtyNotification.displayName = 'BSRealtyNotification';
