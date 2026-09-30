import { useEffect, useId, useRef, useState } from 'react';
import './BSRealtyDatePicker.css';
import { CalendarIcon } from '../../icons';
import { BSRealtyCalender } from '../Calender';

export type DateFormat =
    | 'YYYY-MM-DD'
    | 'DD-MM-YYYY'
    | 'MM-DD-YYYY';

export interface BSRealtyDatePickerProps {
    /**Format used to display the date (the value itself is always YYYY-MM-DD) */
    dateFormat?: DateFormat;

    /**Label for date picker */
    label?: string;

    /**Selected date in YYYY-MM-DD format ('' for none) */
    value?: string;

    /**Called with the new date in YYYY-MM-DD format, or '' when cleared */
    onChange?: (value: string) => void;
}

const formatDateString = (
    date: string,
    format: DateFormat
): string => {
    if (!date) return '';

    const [year, month, day] = date.split('-');

    if (!year || !month || !day) {
        return date;
    }

    switch (format) {
        case 'DD-MM-YYYY':
            return `${day}-${month}-${year}`;

        case 'MM-DD-YYYY':
            return `${month}-${day}-${year}`;

        case 'YYYY-MM-DD':
        default:
            return `${year}-${month}-${day}`;
    }
};

export const BSRealtyDatePicker = ({
    dateFormat = 'YYYY-MM-DD',
    label = 'Select Date',
    value = '',
    onChange,
}: BSRealtyDatePickerProps) => {
    const inputId = useId();
    const popoverId = useId();
    const rootRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const calendarButtonRef = useRef<HTMLButtonElement>(null);

    const [selectedDate, setSelectedDate] = useState(value);
    const [isOpen, setIsOpen] = useState(false);

    // Follow `value` when the parent changes it
    const [prevValue, setPrevValue] = useState(value);
    if (prevValue !== value) {
        setPrevValue(value);
        setSelectedDate(value);
    }

    const close = (returnFocus = false) => {
        setIsOpen(false);
        if (returnFocus) calendarButtonRef.current?.focus();
    };

    // Close when clicking outside the picker
    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event: MouseEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        return () => document.removeEventListener('mousedown', handlePointerDown);
    }, [isOpen]);

    // Move focus into the calendar: the selected day, else today, else the first day
    useEffect(() => {
        if (!isOpen) return;

        const popover = popoverRef.current;
        const target =
            popover?.querySelector<HTMLButtonElement>('.bs-calendar-day-btn[aria-pressed="true"]') ??
            popover?.querySelector<HTMLButtonElement>('.bs-calendar-day-btn.today') ??
            popover?.querySelector<HTMLButtonElement>('.bs-calendar-day-btn');
        target?.focus();
    }, [isOpen]);

    const selectDate = (date: string) => {
        setSelectedDate(date);
        onChange?.(date);
    };

    const handleCalendarChange = (date: string | { startDate?: string; endDate?: string }) => {
        if (typeof date !== 'string') return;
        selectDate(date);
        close(true);
    };

    return (
        <div className="bst-date-picker" ref={rootRef}>
            <label
                htmlFor={inputId}
                className="bst-date-picker_label"
            >
                {label}
            </label>

            <div className="bst-date-picker_wrapper">

                {/* Visible input */}
                <input
                    id={inputId}
                    type="text"
                    className="bst-date-picker_input"
                    value={formatDateString(selectedDate, dateFormat)}
                    readOnly
                    placeholder={dateFormat}
                    aria-haspopup="dialog"
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? popoverId : undefined}
                    onClick={() => setIsOpen(true)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === 'ArrowDown') {
                            event.preventDefault();
                            setIsOpen(true);
                        }
                    }}
                />

                {/* Clear button */}
                {selectedDate && (
                    <button
                        type="button"
                        className="bst-date-picker_clear-button"
                        onClick={() => selectDate('')}
                        aria-label="Clear date"
                    >
                        ×
                    </button>
                )}

                {/* Calendar button */}
                <button
                    ref={calendarButtonRef}
                    type="button"
                    className="bst-date-picker_calendar-button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Open calendar"
                    aria-haspopup="dialog"
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? popoverId : undefined}
                >
                    <CalendarIcon size={20} />
                </button>
            </div>

            {/* Our calendar, shown below the field */}
            {isOpen && (
                <div
                    ref={popoverRef}
                    id={popoverId}
                    role="dialog"
                    aria-label="Choose date"
                    className="bst-date-picker_popover"
                    onKeyDown={(event) => {
                        if (event.key === 'Escape') {
                            event.stopPropagation();
                            close(true);
                        }
                    }}
                >
                    <BSRealtyCalender
                        variant="singleMonth"
                        value={selectedDate}
                        onChange={handleCalendarChange}
                    />
                </div>
            )}
        </div>
    );
};
