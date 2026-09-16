import type { Meta, StoryObj } from '@storybook/react';
import { BSRealtyCalender } from './BSRealtyCalender';

const meta: Meta<typeof BSRealtyCalender> = {
    title: 'Components/BSRealtyCalender',
    component: BSRealtyCalender,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BSRealtyCalender>;

export const Default: Story = {
    args: {
        initialDate: new Date(2025, 0, 1),
    },
};