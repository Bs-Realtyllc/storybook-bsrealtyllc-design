import type { Meta, StoryObj } from '@storybook/react';
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
type Story = StoryObj<typeof BSRealtyCalender>;

export const DualMonths: Story = {
    args: {
        value: { startDate: '2025-01-01', endDate: '2025-09-01' },
        variant: "dualMonths"
    },
};

export const DualMonthsWithSelector: Story = {
    args: {
        value: { startDate: '2025-01-01', endDate: '2025-09-01' },
        variant: 'dualMonthsSelector'
    },
};

export const SingleMonth: Story = {
    args: {
        value: '2025-09-15',
        variant: "singleMonth"
    },
};

export const SingleMonthWithSelector: Story = {
    args: {
        value: '2025-09-15',
        variant: 'singleMonthSelector'
    },
};