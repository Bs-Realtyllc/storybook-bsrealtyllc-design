import React, { useState } from 'react';
import './BSRealtyFileUpload.css';

export interface BSRealtyFileUploadProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Label text */
    label?: string;

    /** Left icon */
    leftIcon?: React.ReactNode;

    /** Custom class name */
    className?: string;

    /** Message shown when no file is selected */
    emptyMessage?: string;

    /** Callback when a file is selected (the first file when `multiple` is set) */
    onFileSelect?: (file: File | null) => void;
}

export const BSRealtyFileUpload = ({
    label = 'Upload file',
    leftIcon,
    className = '',
    emptyMessage,
    onFileSelect,
    onChange,
    disabled,
    ...props
}: BSRealtyFileUploadProps) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = Array.from(e.target.files ?? []);

        setSelectedFiles(files);
        onFileSelect?.(files[0] ?? null);
        onChange?.(e);
    };

    return (
        <div className="bsr-file-upload-wrapper">

            {/* Upload button */}
            <label
                className={`bsr-file-upload ${disabled ? 'bsr-file-upload--disabled' : ''} ${className}`}
            >
                {/* Visually hidden, but still reachable with Tab and opened with Enter/Space */}
                <input
                    {...props}
                    type="file"
                    disabled={disabled}
                    className="bsr-file-upload__input"
                    onChange={handleFileChange}
                />

                {leftIcon && (
                    <span className="bsr-file-upload__icon" aria-hidden="true">
                        {leftIcon}
                    </span>
                )}

                <span className="bsr-file-upload__label">
                    {label}
                </span>
            </label>

            {/* File name(s), announced to screen readers when they change */}
            <div className="bsr-file-upload__file-name" aria-live="polite">
                {selectedFiles.length > 0
                    ? selectedFiles.map((file) => file.name).join(', ')
                    : emptyMessage}
            </div>

        </div>
    );
};
