import React, { useState, forwardRef, useId } from 'react';
import './BSRealtyTextField.css';
import type { Disableable, FieldIdentity, AriaLabelled } from '../../types/shared';
import { EyeIcon, EyeOffIcon, InfoCircleIcon } from '../../icons/icons';
import { iconSizeStyle } from '../../icons/iconSize';

export type TextFieldVariant = 'default' | 'error' | 'success';
export type TextFieldState = 'default' | 'hover' | 'focus' | 'filled' | 'disabled' | 'typing';

export interface BSRealtyTextFieldProps extends Disableable, FieldIdentity, AriaLabelled {
  /** Visible label above the field */
  label?: string;
  /** Input placeholder text */
  placeholder?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  /** Current value */
  value?: string;
  /** Default value for uncontrolled component */
  defaultValue?: string;
  /** Visual variant */
  variant?: TextFieldVariant;
  /** Required field */
  required?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Success message to display */
  successMessage?: string;
  /** Show password toggle for password fields */
  showPasswordToggle?: boolean;
  /** Start with the password visible (password fields only) */
  defaultShowPassword?: boolean;
  /** Browser autofill hint, e.g. "email" or "current-password" */
  autoComplete?: string;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Extra class name(s) for the root element, for project-specific styling */
  className?: string;
}

/** Filled exclamation circle shown inside the field in the error state (Figma 123:1303) */
const FieldErrorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z" fill="currentColor" />
  </svg>
);

/** Filled check circle shown inside the field in the success state (Figma 123:1298) */
const FieldSuccessIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="currentColor" />
  </svg>
);

export const BSRealtyTextField = forwardRef<HTMLInputElement, BSRealtyTextFieldProps>(({
  className = '',
  label,
  placeholder = 'Input placeholder',
  type = 'text',
  value,
  defaultValue,
  variant = 'default',
  disabled = false,
  required = false,
  errorMessage = '',
  successMessage = '',
  showPasswordToggle = type === 'password',
  defaultShowPassword = false,
  autoComplete,
  onChange,
  onFocus,
  onBlur,
  name,
  id,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}, ref) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(defaultShowPassword);

  const isControlled = value !== undefined;
  const inputValue = isControlled ? value : internalValue;
  const hasValue = Boolean(inputValue && inputValue.length > 0);

  // Determine the actual variant based on error/success messages
  const actualVariant = errorMessage ? 'error' : successMessage ? 'success' : variant;

  // Determine display message
  const displayMessage = errorMessage || successMessage;
  // Always linked to the input, whether or not an id was passed
  const messageId = displayMessage ? `${inputId}-message` : undefined;

  const hasPasswordToggle = showPasswordToggle && type === 'password';
  // The toggle already sits at the right edge, so password fields skip the status icon
  const statusIcon = hasPasswordToggle
    ? null
    : actualVariant === 'error'
      ? <FieldErrorIcon />
      : actualVariant === 'success'
        ? <FieldSuccessIcon />
        : null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`bsr-textfield${disabled ? ' bsr-textfield--disabled' : ''} ${className}`}>
      {label && (
        <label className="bsr-textfield__label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <div
        className={[
          'bsr-textfield__container',
          `bsr-textfield__container--${actualVariant}`,
          isFocused && 'bsr-textfield__container--focused',
          hasValue && 'bsr-textfield__container--filled',
          disabled && 'bsr-textfield__container--disabled',
        ].filter(Boolean).join(' ')}
      >
        <input
          ref={ref}
          type={inputType}
          className="bsr-textfield__input"
          placeholder={placeholder}
          value={inputValue}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          name={name}
          id={inputId}
          aria-label={ariaLabel}
          aria-describedby={[ariaDescribedBy, messageId].filter(Boolean).join(' ') || undefined}
          aria-invalid={actualVariant === 'error'}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {statusIcon && (
          <span className={`bsr-textfield__status-icon bsr-textfield__status-icon--${actualVariant}`}>
            {statusIcon}
          </span>
        )}

        {hasPasswordToggle && (
          <button
            type="button"
            className="bsr-textfield__icon-button"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
            disabled={disabled}
          >
            {showPassword ? <EyeOffIcon style={iconSizeStyle('sm')} /> : <EyeIcon style={iconSizeStyle('sm')} />}
          </button>
        )}
      </div>

      {displayMessage && (
        <div
          className={[
            'bsr-textfield__message',
            `bsr-textfield__message--${actualVariant}`,
          ].join(' ')}
          id={messageId}
        >
          <InfoCircleIcon aria-hidden="true" />
          <span>{displayMessage}</span>
        </div>
      )}
    </div>
  );
});

BSRealtyTextField.displayName = 'BSRealtyTextField';
