import React, { useState, forwardRef } from 'react';
import './BSRealtyTextField.css';
import type { Disableable, FieldIdentity, AriaLabelled } from '../../types/shared';
import { EyeIcon, EyeOffIcon, InfoCircleIcon } from '../../icons/icons';

export type TextFieldVariant = 'default' | 'error' | 'success';
export type TextFieldState = 'default' | 'hover' | 'focus' | 'filled' | 'disabled' | 'typing';

export interface BSRealtyTextFieldProps extends Disableable, FieldIdentity, AriaLabelled {
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
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const BSRealtyTextField = forwardRef<HTMLInputElement, BSRealtyTextFieldProps>(({
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
  onChange,
  onFocus,
  onBlur,
  name,
  id,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const isControlled = value !== undefined;
  const inputValue = isControlled ? value : internalValue;
  const hasValue = Boolean(inputValue && inputValue.length > 0);
  
  // Determine the actual variant based on error/success messages
  const actualVariant = errorMessage ? 'error' : successMessage ? 'success' : variant;
  
  // Determine display message
  const displayMessage = errorMessage || successMessage;
  const messageId = id ? `${id}-message` : undefined;

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
    <div className="bsr-textfield">
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
          name={name}
          id={id}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy || messageId}
          aria-invalid={actualVariant === 'error'}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            className="bsr-textfield__icon-button"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
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
          <InfoCircleIcon size={16} />
          <span>{displayMessage}</span>
        </div>
      )}
    </div>
  );
});

BSRealtyTextField.displayName = 'BSRealtyTextField';