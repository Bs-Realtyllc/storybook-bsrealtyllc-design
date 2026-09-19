import { useEffect, useRef, useState } from 'react';
import './BSRealtyDatePicker.css';
import { CalendarIcon } from '../../icons';

export type DateFormat =
    | 'YYYY-MM-DD'
    | 'DD-MM-YYYY'
    | 'MM-DD-YYYY';

export interface BSRealtyDatePickerProps {
    /**Date formate */
    dateFormat: DateFormat;

    /**Label for date picker */
    label?: string;

    /**Value of date picker */
    value: string;

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
    value,
    onChange,
}: BSRealtyDatePickerProps) => {
    const dateInputRef = useRef<HTMLInputElement>(null);

    const [selectedDate, setSelectedDate] = useState(value);

    useEffect(() => {
        setSelectedDate(value);
    }, [value]);

    const handleDateChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const date = event.target.value;

        if (!date) return;

        setSelectedDate(date);
        onChange?.(date);
    };

    const handleCalendarClick = () => {
        dateInputRef.current?.showPicker?.();
    };

    return (
        <div className="bst-date-picker">
            <label
                htmlFor="bst-date-picker-input"
                className="bst-date-picker_label"
            >
                {label}
            </label>

            <div className="bst-date-picker_wrapper">

                {/* Visible input */}
                <input
                    id="bst-date-picker-input"
                    type="text"
                    className="bst-date-picker_input"
                    value={formatDateString(selectedDate, dateFormat)}
                    readOnly
                    placeholder={dateFormat}
                />

                {/* Calendar button */}
                <button
                    type="button"
                    className="bst-date-picker_calendar-button"
                    onClick={handleCalendarClick}
                    aria-label="Open calendar"
                >
                    <CalendarIcon size={20} />
                </button>

                {/* Native calendar */}
                <input
                    ref={dateInputRef}
                    type="date"
                    className="bst-hidden-date-input"
                    value={selectedDate}
                    onChange={handleDateChange}
                />

            </div>
        </div>
    );
};