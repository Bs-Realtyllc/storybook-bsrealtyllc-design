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

    /** Callback when a file is selected */
    onFileSelect?: (file: File | null) => void;
}

export const BSRealtyFileUpload = ({
    label = 'Upload file',
    leftIcon,
    className = '',
    emptyMessage,
    accept,
    onFileSelect,
    ...props
}: BSRealtyFileUploadProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0] || null;

        setSelectedFile(file);
        onFileSelect?.(file);
    };

    return (
        <div className="bsr-file-upload-wrapper">

            {/* Upload button */}
            <label className={`bsr-file-upload ${className}`}>
                <input
                    type="file"
                    accept={accept}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    {...props}
                />

                {leftIcon && (
                    <span className="bsr-file-upload__icon">
                        {leftIcon}
                    </span>
                )}

                <span className="bsr-file-upload__label">
                    {label}
                </span>
            </label>

            {/* File name */}
            <div className="bsr-file-upload__file-name">
                {selectedFile ? (
                    selectedFile.name
                ) : (
                    emptyMessage
                )}
            </div>

        </div>
    );
};
