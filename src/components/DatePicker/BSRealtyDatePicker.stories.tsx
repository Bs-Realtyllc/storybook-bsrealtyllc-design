import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BSRealtyDatePicker } from './BSRealtyDatePicker';

const meta = {
    title: 'Components/DatePicker',
    component: BSRealtyDatePicker,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    args: {
        onChange: fn(),
    },

    argTypes: {
        label: {
            control: 'text',
            description: 'Date picker label',
        },

        dateFormat: {
            control: 'select',
            options: [
                'YYYY-MM-DD',
                'DD-MM-YYYY',
                'MM-DD-YYYY',
            ],
            description: 'Format used to display the selected date',
        },

        value: {
            control: 'text',
            description: 'Selected date in YYYY-MM-DD format',
        },

        onChange: {
            description: 'Called when a date is selected',
        },
    },
} satisfies Meta<typeof BSRealtyDatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Select Date',
        dateFormat: 'YYYY-MM-DD',
        value: '',
    },
};
export const SelectedDate: Story = {
    args: {
        label: 'Select Date',
        dateFormat: 'YYYY-MM-DD',
        value: '2026-09-15',
    },
};