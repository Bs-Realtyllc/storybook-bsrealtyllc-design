import React, { useState, useId } from 'react';
import './BSRealtyPasswordField.css';
import type { Disableable, FieldIdentity } from '../../types/shared';
import { EyeIcon, EyeOffIcon, InfoCircleIcon } from '../../icons/icons';

export type PasswordFieldState = 'default' | 'error' | 'seeing';

export interface BSRealtyPasswordFieldProps extends Disableable, FieldIdentity {
  /** Field label */
  label?: string;
  /** Placeholder text shown when field is empty */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Visual state */
  state?: PasswordFieldState;
  /** Error message shown below input in error state */
  errorMessage?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BSRealtyPasswordField = ({
  label = 'Password',
  placeholder = '',
  value,
  state = 'default',
  errorMessage = 'Your password must contain atleast 12 characters',
  disabled = false,
  onChange,
  name,
  id,
}: BSRealtyPasswordFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  // 'seeing' state starts visible, others start hidden
  const [visible, setVisible] = useState(state === 'seeing');

  const inputType = visible ? 'text' : 'password';
  const isError = state === 'error';

  return (
    <div className={`bsr-password${disabled ? ' bsr-password--disabled' : ''}`}>
      {/* Label */}
      <label className="bsr-password__label" htmlFor={inputId}>
        {label}
      </label>

      {/* Input wrapper */}
      <div className={`bsr-password__input-wrap${isError ? ' bsr-password__input-wrap--error' : ''}`}>
        <input
          id={inputId}
          name={name}
          type={inputType}
          className="bsr-password__input"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          aria-invalid={isError}
          aria-describedby={isError ? `${inputId}-error` : undefined}
          autoComplete="current-password"
        />

        {/* Toggle visibility button */}
        <button
          type="button"
          className="bsr-password__toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          tabIndex={-1}
          disabled={disabled}
        >
          {visible ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
        </button>
      </div>

      {/* Error message */}
      {isError && errorMessage && (
        <div id={`${inputId}-error`} className="bsr-password__error" role="alert">
          <InfoCircleIcon size={14} />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
