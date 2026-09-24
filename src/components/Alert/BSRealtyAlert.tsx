
import React from 'react';
import './BSRealtyAlert.css';

export type AlertVariant =
    | 'success'
    | 'error'
    | 'info'
    | 'warning';

export interface AlertProps {
    variant?: AlertVariant;
    message?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

export const BSRealtyAlert: React.FC<AlertProps> = ({
    variant = 'info',
    message,
    icon,
    children,
    className = '',
}) => {
    return (
        <div
            className={`bsr-alert bsr-alert--${variant} ${className} `.trim()}
            role="alert"
        >
            <div className="bsr-alert__content">
                {icon && (
                    <div className="bsr-alert__icon">
                        {icon}
                    </div>
                )}

                {message && (
                    <div className="bsr-alert__message">
                        {message}
                    </div>
                )}

                {children}
            </div>
        </div>
    );
};

BSRealtyAlert.displayName = 'BSRealtyAlert';

export default BSRealtyAlert;

