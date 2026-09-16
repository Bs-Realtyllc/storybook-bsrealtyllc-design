import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BSRealtyCalender.css';

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export interface BSRealtyCalenderProps {
    /** Initial starting date for the calendar view */
    initialDate?: Date;
}

interface MonthData {
    monthName: string;
    days: (number | null)[];
}

export const BSRealtyCalender: React.FC<BSRealtyCalenderProps> = ({ initialDate = new Date(2025, 0, 1) }) => {
    const [currentDate, setCurrentDate] = useState<Date>(initialDate);

    const firstMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const secondMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const getMonthData = (year: number, month: number): MonthData => {
        const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7; // Monday = 0
        const totalDays = new Date(year, month + 1, 0).getDate();
        const monthName = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

        const days: (number | null)[] = [];
        for (let i = 0; i < firstDayIndex; i++) {
            days.push(null);
        }
        for (let i = 1; i <= totalDays; i++) {
            days.push(i);
        }
        return { monthName, days };
    };

    const month1 = getMonthData(firstMonthDate.getFullYear(), firstMonthDate.getMonth());
    const month2 = getMonthData(secondMonthDate.getFullYear(), secondMonthDate.getMonth());

    return (
        <div className="bs-calendar-container">
            {/* Navigation Header */}
            <div className="bs-calendar-header">
                <button
                    onClick={handlePrevMonth}
                    className="bs-calendar-nav-btn"
                    aria-label="Previous Month"
                >
                    {'<'}
                    {/* <ChevronLeft size={20} color="#374151" /> */}
                </button>
                <button
                    onClick={handleNextMonth}
                    className="bs-calendar-nav-btn"
                    aria-label="Next Month"
                >
                    {'>'}
                    {/* <ChevronRight size={20} color="#374151" /> */}
                </button>
            </div>

            {/* Dual Month Grid */}
            <div className="bs-calendar-grid-container">
                <MonthTable data={month1} />
                <MonthTable data={month2} />
            </div>
        </div>
    );
};

interface MonthTableProps {
    data: MonthData;
}

const MonthTable: React.FC<MonthTableProps> = ({ data }) => (
    <div className="bs-calendar-month-wrapper">
        <div className="bs-calendar-month-title">
            {data.monthName}
        </div>
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
                        <button className="bs-calendar-day-btn">
                            {day}
                        </button>
                    )}
                </div>
            ))}
        </div>
    </div>
);