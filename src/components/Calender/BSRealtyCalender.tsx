import { useEffect, useState } from 'react';
import { CalendarIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../../icons/icons';
import './BSRealtyCalender.css';

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export type CalenderVariant = 'dualMonths' | 'dualMonthsSelector' | 'singleMonth' | 'singleMonthSelector';

// Define explicit types for range and single values
export type DateRangeValue = { startDate?: string; endDate?: string };
export type SingleDateValue = string;

export interface BSRealtyCalenderProps {
    /** Value can be a single date string or a range object */
    value?: DateRangeValue | SingleDateValue;

    /** Callback fired when a date or range is selected */
    onChange?: (date: any) => void;

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
    value = '2025-09-15',
    onChange,
    variant = 'dualMonths'
}: BSRealtyCalenderProps) => {
    const isSingleVariant = variant?.includes('singleMonth');

    // Safe parser for strings ('YYYY-MM-DD')
    const parseDate = (dateInput?: string): Date | null => {
        if (!dateInput) return null;
        const parts = dateInput.split('-').map(Number);
        if (parts.length === 3 && !parts.some(isNaN)) {
            return new Date(parts[0], parts[1] - 1, parts[2]);
        }
        const parsed = new Date(dateInput);
        return isNaN(parsed.getTime()) ? null : parsed;
    };

    const formatDateToString = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Initialize states safely based on whether it's single or range
    const getInitialDates = () => {
        if (isSingleVariant && typeof value === 'string') {
            const d = parseDate(value) || new Date();
            return { current: d, start: d, end: null };
        } else if (!isSingleVariant && typeof value === 'object' && value !== null) {
            const start = parseDate(value.startDate) || new Date();
            const end = parseDate(value.endDate);
            return { current: start, start, end };
        }
        const fallback = new Date();
        return { current: fallback, start: fallback, end: null };
    };

    const initial = getInitialDates();
    const [currentDate, setCurrentDate] = useState<Date>(initial.current);
    const [startDate, setStartDate] = useState<Date | null>(initial.start);
    const [endDate, setEndDate] = useState<Date | null>(initial.end);
    const [showCalender, setShowCalender] = useState(false);

    // Synchronize props updates from Storybook/Parent
    useEffect(() => {
        if (isSingleVariant && typeof value === 'string') {
            const parsed = parseDate(value);
            if (parsed) {
                setStartDate(parsed);
                setCurrentDate(parsed);
            }
        } else if (!isSingleVariant && typeof value === 'object' && value !== null) {
            const parsedStart = parseDate(value.startDate);
            const parsedEnd = parseDate(value.endDate);
            if (parsedStart) {
                setStartDate(parsedStart);
                setCurrentDate(parsedStart);
            }
            setEndDate(parsedEnd || null);
        }
    }, [value, isSingleVariant]);

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
        const clickedDate = new Date(year, month, day);

        if (isSingleVariant) {
            setStartDate(clickedDate);
            if (onChange) {
                onChange(formatDateToString(clickedDate));
            }
            if (variant?.includes('Selector')) {
                setShowCalender(false);
            }
        } else {
            let newStart = startDate;
            let newEnd = endDate;

            if (!newStart || (newStart && newEnd)) {
                newStart = clickedDate;
                newEnd = null;
            } else if (newStart && !newEnd) {
                if (clickedDate < newStart) {
                    newStart = clickedDate;
                } else {
                    newEnd = clickedDate;
                }
            }

            setStartDate(newStart);
            setEndDate(newEnd);

            if (onChange && newStart) {
                onChange({
                    startDate: formatDateToString(newStart),
                    endDate: newEnd ? formatDateToString(newEnd) : ''
                });
            }
        }
    };

    // Header Display formatting
    const formatDisplayDate = () => {
        if (isSingleVariant || !endDate) {
            const target = startDate || currentDate;
            return `${target.getDate()} ${target.toLocaleString('default', { month: 'short' })}, ${target.getFullYear()}`;
        }
        const startStr = `${startDate!.getDate()} ${startDate!.toLocaleString('default', { month: 'short' })}, ${startDate!.getFullYear()}`;
        const endStr = `${endDate.getDate()} ${endDate.toLocaleString('default', { month: 'short' })}, ${endDate.getFullYear()}`;
        return `${startStr} - ${endStr}`;
    };

    return (
        <div className='bs-calendar'>
            {(variant === 'dualMonthsSelector' || variant === 'singleMonthSelector') && (
                <div className='bs-calendar-monthSelector' onClick={() => setShowCalender(prev => !prev)}>
                    <span className='bs-calendar-monthSelector-box'>
                        <CalendarIcon size={19} />
                        {formatDisplayDate()}
                        <span className={`bs-calendar-chevron ${showCalender ? 'open' : ''}`}>
                            <ChevronDownIcon size={19} />
                        </span>
                    </span>
                </div>
            )}
            {(!variant?.includes('Selector') || showCalender) && (
                <div className={`bs-calendar-container bs-calendar-container-${variant}`}>
                    <span onClick={handlePrevMonth} className="bs-calendar-nav-btn" aria-label="Previous Month">
                        <ChevronLeftIcon size={19} />
                    </span>

                    <div className="bs-calendar-grid-container">
                        <span className={`bs-calendar-month1-${variant}`}>
                            <MonthTable
                                data={month1}
                                startDate={startDate}
                                endDate={endDate}
                                isSingle={isSingleVariant}
                                onDayClick={handleDayClick}
                            />
                        </span>

                        {!isSingleVariant && (
                            <span className={`bs-calendar-month2-${variant}`}>
                                <MonthTable
                                    data={month2}
                                    startDate={startDate}
                                    endDate={endDate}
                                    isSingle={isSingleVariant}
                                    onDayClick={handleDayClick}
                                />
                            </span>
                        )}
                    </div>

                    <span onClick={handleNextMonth} className="bs-calendar-nav-btn" aria-label="Next Month">
                        <ChevronRightIcon size={19} />
                    </span>
                </div>
            )}
        </div>
    );
};

interface MonthTableProps {
    data: MonthData;
    startDate: Date | null;
    endDate: Date | null;
    isSingle: boolean;
    onDayClick: (year: number, month: number, day: number) => void;
}

const MonthTable = ({ data, startDate, endDate, isSingle, onDayClick }: MonthTableProps) => {
    const isCurrentDay = (day: number) => {
        const today = new Date();
        return (
            today.getFullYear() === data.year &&
            today.getMonth() === data.month &&
            today.getDate() === day
        );
    };

    const getDayState = (day: number) => {
        const currentDateObj = new Date(data.year, data.month, day);
        const time = currentDateObj.setHours(0, 0, 0, 0);

        const startTime = startDate ? new Date(startDate).setHours(0, 0, 0, 0) : null;
        const endTime = endDate ? new Date(endDate).setHours(0, 0, 0, 0) : null;

        const isStart = startTime === time;
        const isEnd = endTime === time;
        const isInRange = !isSingle && startTime && endTime && time > startTime && time < endTime;
        const isToday = isCurrentDay(day);

        return { isStart, isEnd, isInRange, isToday };
    };

    return (
        <div className="bs-calendar-month-wrapper">
            <div className="bs-calendar-month-title">
                {data.monthName}
            </div>

            <div className='bs-calender-week-day'>
                <div className="bs-calendar-weekdays">
                    {DAYS_OF_WEEK.map((day) => (
                        <span key={day} className="bs-calendar-weekday">{day}</span>
                    ))}
                </div>
                <div className="bs-calendar-days">
                    {data.days.map((day, index) => {
                        if (!day) return <div key={index} className="bs-calendar-day-cell" />;

                        const { isStart, isEnd, isInRange, isToday } = getDayState(day);
                        let classNames = "bs-calendar-day-btn";
                        if (isToday) classNames += " today";
                        if (isStart && isSingle) classNames += " selected";
                        if (isStart && !isSingle) classNames += " range-start";
                        if (isEnd && !isSingle) classNames += " range-end";
                        if (isInRange) classNames += " in-range";

                        return (
                            <div key={index} className="bs-calendar-day-cell">
                                <button
                                    type='button'
                                    className={classNames}
                                    onClick={() => onDayClick(data.year, data.month, day)}
                                >
                                    {day}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};