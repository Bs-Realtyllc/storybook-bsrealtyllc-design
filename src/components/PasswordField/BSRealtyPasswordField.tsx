import React from 'react';
import type { Disableable, FieldIdentity } from '../../types/shared';
import { BSRealtyTextField } from '../TextField';

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
  /** Extra class name(s) for the root element, for project-specific styling */
  className?: string;
}

/**
 * A labelled password TextField. Reuses BSRealtyTextField so both fields share
 * one design (sizes, states, messages) and one set of accessibility fixes.
 */
export const BSRealtyPasswordField = ({
  className = '',
  label = 'Password',
  placeholder = '',
  value,
  state = 'default',
  errorMessage = 'Your password must contain at least 12 characters',
  disabled = false,
  onChange,
  name,
  id,
}: BSRealtyPasswordFieldProps) => (
  <BSRealtyTextField
    type="password"
    label={label}
    placeholder={placeholder}
    value={value}
    errorMessage={state === 'error' ? errorMessage : ''}
    // 'seeing' starts with the password visible
    defaultShowPassword={state === 'seeing'}
    disabled={disabled}
    onChange={onChange}
    name={name}
    id={id}
    autoComplete="current-password"
    className={className}
  />
);
