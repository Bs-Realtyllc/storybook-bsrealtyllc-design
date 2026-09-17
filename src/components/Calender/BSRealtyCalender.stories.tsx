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
        value: { control: 'date' },
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
        value: 1789582500000,
        variant: "dualMonths"
    },
};

export const DualMonthsWithSelector: Story = {
    args: {
        value: 1789582500000,
        variant: 'dualMonthsSelector'
    },
};

export const SingleMonth: Story = {
    args: {
        value: 1789582500000,
        variant: "singleMonth"
    },
};

export const SingleMonthWithSelector: Story = {
    args: {
        value: 1789582500000,
        variant: 'singleMonthSelector'
    },
};