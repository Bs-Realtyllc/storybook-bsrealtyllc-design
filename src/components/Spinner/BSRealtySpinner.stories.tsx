
import type { Meta, StoryObj } from '@storybook/react';
import { BSRealtySpinner } from './BSRealtySpinner';

const meta = {
    title: 'Components/Spinner',
    component: BSRealtySpinner,
    tags: ['autodocs'],

    argTypes: {
        size: {
            control: 'text',
        },

        color: {
            control: 'color',
        },

        className: {
            control: 'text',
        },

        ariaLabel: {
            control: 'text',
        },
    },
} satisfies Meta<typeof BSRealtySpinner>;

export default meta;

type Story = StoryObj<typeof BSRealtySpinner>;

export const Small: Story = {
    args: {
        size: 'small',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
    },
};


export const CustomSizeAndColor: Story = {
    args: {
        size: '32px',
        color: '#9c27b0',
    },
};
