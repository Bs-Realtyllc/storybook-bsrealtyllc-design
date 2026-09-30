import { useEffect, useRef } from 'react';
import './BSRealtyToast.css';

export type ToastVariant = 'success' | 'error' | 'info' | 'warning';

export interface BSRealtyToastProps {
    /** Toast visual variant */
    variant?: ToastVariant;

    /** Toast message */
    message?: string;

    /** Controls whether the toast is visible */
    isOpen: boolean;

    /** Called when the toast is closed. The close button is hidden when omitted. */
    onClose?: () => void;

    /** Auto-close duration in milliseconds (0 disables auto-close) */
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
    // Keep the latest onClose without restarting the timer when the parent re-renders
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    useEffect(() => {
        if (!isOpen || duration <= 0) return;

        const timer = setTimeout(() => {
            onCloseRef.current?.();
        }, duration);

        return () => clearTimeout(timer);
    }, [isOpen, duration]);

    if (!isOpen) return null;

    return (
        <div
            className={`bsr-toast bsr-toast--${variant} ${className}`}
            role={variant === 'error' ? 'alert' : 'status'}
        >
            <span className="bsr-toast__message">
                {message}
            </span>

            {onClose && (
                <button
                    type="button"
                    className="bsr-toast__close"
                    onClick={onClose}
                    aria-label="Close toast"
                >
                    ×
                </button>
            )}
        </div>
    );
};
