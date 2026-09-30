import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BSRealtyCalender } from './BSRealtyCalender';

const meta = {
    title: 'Components/Calender',
    component: BSRealtyCalender,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onChange: fn(),
    },
    argTypes: {
        value: { control: 'object' },
        variant: {
            control: 'select',
            options: ['dualMonths', 'dualMonthsSelector', 'singleMonth', 'singleMonthSelector']
        }
    }
} satisfies Meta<typeof BSRealtyCalender>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DualMonths: Story = {
    args: {
        value: { startDate: '2026-09-08', endDate: '2026-09-19' },
        variant: "dualMonths"
    },
};

export const DualMonthsWithSelector: Story = {
    args: {
        value: { startDate: '2026-09-08', endDate: '2026-09-19' },
        variant: 'dualMonthsSelector'
    },
};

export const SingleMonth: Story = {
    args: {
        value: '2026-09-15',
        variant: "singleMonth"
    },
};

export const SingleMonthWithSelector: Story = {
    args: {
        value: '2026-09-15',
        variant: 'singleMonthSelector'
    },
};

/** A month that needs six week rows — the box grows to fit them. */
export const SixWeekMonth: Story = {
    args: {
        value: '2026-08-15',
        variant: 'singleMonth'
    },
};
