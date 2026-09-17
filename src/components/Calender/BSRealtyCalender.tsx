import  { useEffect, useState } from 'react';
import { CalendarIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../../icons/icons'
import './BSRealtyCalender.css';

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export type CalenderVariant = 'dualMonths' | 'dualMonthsSelector' | 'singleMonth' | 'singleMonthSelector';

export interface BSRealtyCalenderProps {
    /** Selected date value */
    value?: Date | number;

    /** Callback fired when a date is selected */
    onChange?: (date: Date) => void;

    /** Calendar variant */
    variant?: CalenderVariant;
}

interface MonthData {
    year: number;
    month: number;
    monthName: string;
    days: (number | null)[];
}

export const BSRealtyCalender = ({
    value = new Date(2025, 0, 1),
    onChange,
    variant = 'dualMonths'
}: BSRealtyCalenderProps) => {
    const parseDate = (dateInput: Date | number | string) => { return new Date(dateInput); }

    const [currentDate, setCurrentDate] = useState<Date>(() => parseDate(value));
    const [selectedDate, setSelectedDate] = useState<Date>(() => parseDate(value));
    const [showCalender, setShowCalender] = useState(false)

    useEffect(() => {
        if (value) {
            const parsed = parseDate(value);
            setSelectedDate(parsed);
            setCurrentDate(parsed);

        }
    }, [value]);

    const firstMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const secondMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const getMonthData = (year: number, month: number): MonthData => {
        const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7;
        const totalDays = new Date(year, month + 1, 0).getDate();
        const monthName = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

        const days: (number | null)[] = [];
        for (let i = 0; i < firstDayIndex; i++) {
            days.push(null);
        }
        for (let i = 1; i <= totalDays; i++) {
            days.push(i);
        }
        return { year, month, monthName, days };
    };

    const month1 = getMonthData(firstMonthDate.getFullYear(), firstMonthDate.getMonth());
    const month2 = getMonthData(secondMonthDate.getFullYear(), secondMonthDate.getMonth());

    const handleDayClick = (year: number, month: number, day: number) => {
        const newDate = new Date(year, month, day);
        setSelectedDate(newDate);
        if (onChange) {
            onChange(newDate);
        }
        if (variant?.includes('Selector')) {
            setShowCalender(false);
        }
    };

    const day = selectedDate.getDate();
    const monthStr = selectedDate.toLocaleString('default', { month: 'short' });
    const yearNum = selectedDate.getFullYear();
    const formattedDate = `${day} ${monthStr}, ${yearNum}`;

    return (
        <div className='bs-calendar'>
            {(variant === 'dualMonthsSelector' || variant === 'singleMonthSelector') && (
                <div className={`bs-calendar-monthSelector`} onClick={() => setShowCalender(prev => !prev)}>

                    <span className='bs-calendar-monthSelector-box'>
                        <CalendarIcon size={19} />
                        {formattedDate}
                        <span className={`bs-calendar-chevron ${showCalender ? 'open' : ''}`}>
                            <ChevronDownIcon size={19} />
                        </span>
                    </span>

                </div>
            )}
            {(!variant?.includes('Selector') || showCalender) && (
                <div className={`bs-calendar-container bs-calendar-container-${variant}`}>
                    <span
                        onClick={handlePrevMonth}
                        className="bs-calendar-nav-btn"
                        aria-label="Previous Month"
                    >
                        <ChevronLeftIcon size={19} />
                    </span>

                    <div className="bs-calendar-grid-container">
                        <span className={`bs-calendar-month1-${variant}`}>
                            <MonthTable data={month1} onDayClick={handleDayClick} />
                        </span>
                        <span className={`bs-calendar-month2-${variant}`}>

                            <MonthTable
                                data={month2}
                                onDayClick={handleDayClick}
                            />
                        </span>
                    </div>

                    <span
                        onClick={handleNextMonth}
                        className="bs-calendar-nav-btn"
                        aria-label="Next Month"
                    >
                        <ChevronRightIcon size={19} />
                    </span>
                </div>
            )}
        </div>
    );
};

interface MonthTableProps {
    data: MonthData;
    onDayClick: (year: number, month: number, day: number) => void;
}

const MonthTable = ({ data, onDayClick }: MonthTableProps) => (
    <div className="bs-calendar-month-wrapper">
        <div className="bs-calendar-month-title">
            {data.monthName}
        </div>

        <div className='bs-calender-week-day'>
            <div className="bs-calendar-weekdays">
                {DAYS_OF_WEEK.map((day) => (
                    <span key={day} className="bs-calendar-weekday">
                        {day}
                    </span>
                ))}
            </div>
            <div className="bs-calendar-days">
                {data.days.map((day, index) => (
                    <div key={index} className="bs-calendar-day-cell">
                        {day && (
                            <button
                                type='button'
                                className="bs-calendar-day-btn"
                                onClick={() => onDayClick(data.year, data.month, day)}
                            >
                                {day}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
);