import './BSRealtyDropdown.css'
import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
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

    /** Accessible name for the dropdown (e.g. "Property type"). Defaults to the placeholder. */
    'aria-label'?: string;
}

export const BSRealtyDropdown = ({
    options,
    value,
    placeholder = "Select an option",
    onChange,
    disabled = false,
    'aria-label': ariaLabel,
}: BSRealtyDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    // Option highlighted by the keyboard while the menu is open
    const [activeIndex, setActiveIndex] = useState(-1);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const listboxId = useId();

    const selectedIndex = options.findIndex((option) => option.value === value);
    const selectedOption = options[selectedIndex];

    const open = () => {
        if (disabled) return;
        setIsOpen(true);
        setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    };

    const close = () => {
        setIsOpen(false);
        setActiveIndex(-1);
    };

    const handleSelect = (option: BSRealtyDropdownOption) => {
        onChange?.(option.value);
        close();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (disabled) return;

        if (!isOpen) {
            if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
                event.preventDefault();
                open();
            }
            return;
        }

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                setActiveIndex((i) => Math.min(i + 1, options.length - 1));
                break;
            case 'ArrowUp':
                event.preventDefault();
                setActiveIndex((i) => Math.max(i - 1, 0));
                break;
            case 'Home':
                event.preventDefault();
                setActiveIndex(0);
                break;
            case 'End':
                event.preventDefault();
                setActiveIndex(options.length - 1);
                break;
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (options[activeIndex]) handleSelect(options[activeIndex]);
                break;
            case 'Escape':
            case 'Tab':
                close();
                break;
        }
    };

    // Keep the keyboard-highlighted option scrolled into view
    useEffect(() => {
        if (!isOpen || activeIndex < 0) return;
        const option = listRef.current?.children[activeIndex] as HTMLElement | undefined;
        option?.scrollIntoView?.({ block: 'nearest' });
    }, [isOpen, activeIndex]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setActiveIndex(-1);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const optionId = (index: number) => `${listboxId}-option-${index}`;

    return (
        <div className="bsr-dropdown" ref={dropdownRef}>

            <div
                className={`bsr-dropdown_input-wrapper ${isOpen ? "bsr-dropdown_trigger--open" : ""
                    }`}
                onClick={() => (isOpen ? close() : open())}
            >
                <input
                    type="text"
                    className="bsr-dropdown_input"
                    value={selectedOption?.label || ""}
                    placeholder={placeholder}
                    readOnly
                    disabled={disabled}
                    role="combobox"
                    aria-label={ariaLabel ?? placeholder}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? listboxId : undefined}
                    aria-activedescendant={isOpen && activeIndex >= 0 ? optionId(activeIndex) : undefined}
                    onKeyDown={handleKeyDown}
                />

                <ChevronDownIcon />
            </div>

            {isOpen && (
                <ul
                    ref={listRef}
                    id={listboxId}
                    className="bsr-dropdown_menu"
                    role="listbox"
                >
                    {options.map((option, index) => {
                        const isSelected = option.value === value;

                        return (
                            <li
                                key={option.value}
                                id={optionId(index)}
                                className={[
                                    'bsr-dropdown_option',
                                    isSelected && 'bsr-dropdown_option--selected',
                                    index === activeIndex && 'bsr-dropdown_option--active',
                                ].filter(Boolean).join(' ')}
                                role="option"
                                aria-selected={isSelected}
                                onMouseEnter={() => setActiveIndex(index)}
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
