import React, { useState } from 'react';
import './BSRealtySearchbar.css';

export interface BSRealtySearchbarProps {
  /** Placeholder text */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Submit handler */
  onSearch?: (value: string) => void;
    /** Extra class name(s) for the root element, for project-specific styling */
    className?: string;
}

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10.5" y1="10.5" x2="13.5" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BSRealtySearchbar = ({
    className = '',
  placeholder = 'Search by location, property type, city or ZIP code',
  value,
  onChange,
  onSearch,
}: BSRealtySearchbarProps) => {
  const [internalValue, setInternalValue] = useState('');
  const isControlled = value !== undefined;
  const inputValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch?.(inputValue);
  };

  return (
    <div className={`bsr-searchbar ${className}`}>
      <span className="bsr-searchbar__icon">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="bsr-searchbar__input"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        aria-label="Search"
      />
    </div>
  );
};
