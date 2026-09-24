import { useEffect } from 'react';
import './BSRealtyToast.css';

export type ToastVariant = 'success' | 'error' | 'info' | 'warning';

export interface BSRealtyToastProps {
    /** Toast visual variant */
    variant?: ToastVariant;

    /** Toast message */
    message?: string;

    /** Controls whether the toast is visible */
    isOpen: boolean;

    /** Called when the toast is closed */
    onClose?: () => void;

    /** Auto-close duration */
    duration?: number;

    /** Additional CSS class */
    className?: string;
}

export const BSRealtyToast = ({
    variant = 'info',
    message = '',
    isOpen,
    onClose,
    duration = 3000,
    className = '',
}: BSRealtyToastProps) => {
    useEffect(() => {
        if (!isOpen || !onClose || duration <= 0) return;

        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [isOpen, duration, onClose]);

    if (!isOpen) return null;

    return (
        <button
            className={`bsr-toast bsr-toast--${variant} ${className}`}
            role="alert"
            aria-live="polite"
        >
            <span className="bsr-toast__message">
                {message}
            </span>

            <button
                type="button"
                className="bsr-toast__close"
                onClick={onClose}
                aria-label="Close toast"
            >
                ×
            </button>
        </button>
    );
};