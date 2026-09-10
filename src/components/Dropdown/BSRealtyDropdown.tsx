import './BSRealtyDropdown.css'
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../../icons";

export interface BSRealtyDropdownOption {
    label: string;
    value: string;
}

export interface BSRealtyDropdownProps {
    /** Options List */
    options: BSRealtyDropdownOption[];

    /** Value of selected option */
    value?: string;

    /** Placeholder text */
    placeholder?: string;

    /** onChange Handler */
    onChange?: (value: string) => void;

    /** Disable dropdown */
    disabled?: boolean;
}

export const BSRealtyDropdown = ({
    options,
    value,
    placeholder = "Select an option",
    onChange,
    disabled = false
}: BSRealtyDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(
        (option) => option.value === value
    );

    const handleSelect = (option: BSRealtyDropdownOption) => {
        onChange?.(option.value);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bsr-dropdown" ref={dropdownRef}>

            <div
                className={`bsr-dropdown_input-wrapper ${isOpen ? "bsr-dropdown_trigger--open" : ""
                    }`}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                <input
                    type="text"
                    className="bsr-dropdown_input"
                    value={selectedOption?.label || ""}
                    placeholder={placeholder}
                    readOnly
                    disabled={disabled}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                />

                <ChevronDownIcon />
            </div>

            {isOpen && (
                <ul
                    className="bsr-dropdown_menu"
                    role="listbox"
                >
                    {options.map((option) => {
                        const isSelected = option.value === value;

                        return (
                            <li
                                key={option.value}
                                className={`bsr-dropdown_option ${isSelected
                                    ? "bsr-dropdown_option--selected"
                                    : ""
                                    }`}
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => handleSelect(option)}
                            >
                                {option.label}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};