
import type { Meta, StoryObj } from '@storybook/react';
import { BSRealtyCheckbox } from './BSRealtyCheckbox';

const meta = {
    title: 'Components/Checkbox',
    component: BSRealtyCheckbox,
    tags: ['autodocs'],

    argTypes: {
        size: {
            control: 'text',
            description:
                'Checkbox size. Example: small, medium, large, 30px',
        },

        color: {
            control: 'color',
            description: 'Custom checkbox color',
        },

        checkColor: {
            control: 'color',
            description: 'Custom tick color',
        },

        checked: {
            control: 'boolean',
            description: 'Controlled checked state',
        },

        defaultChecked: {
            control: 'boolean',
            description: 'Initial checked state',
        },

        disabled: {
            control: 'boolean',
        },

        onChange: {
            action: 'changed',
        },

        className: {
            control: 'text',
        },
    },
} satisfies Meta<typeof BSRealtyCheckbox>;

export default meta;

type Story = StoryObj<typeof BSRealtyCheckbox>;

export const Unchecked: Story = {
    args: {
        defaultChecked: false,
    },
};

export const Checked: Story = {
    args: {
        defaultChecked: true,
    },
};

export const Disabled: Story = {
    args: {
        defaultChecked: false,
        disabled: true,
    },
};

export const CheckedDisabled: Story = {
    args: {
        defaultChecked: true,
        disabled: true,
    },
};

export const Small: Story = {
    args: {
        defaultChecked: true,
        size: 'small',
    },
};

export const Medium: Story = {
    args: {
        defaultChecked: true,
        size: 'medium',
    },
};

export const Large: Story = {
    args: {
        defaultChecked: true,
        size: 'large',
    },
};

export const CustomSizeAndColor: Story = {
    args: {
        defaultChecked: true,
        size: '28px',
        color: '#e91e63',
        checkColor: '#ffffff',
    },
};

export const CustomTickColor: Story = {
    args: {
        defaultChecked: true,
        color: '#1e3a5f',
        checkColor: '#facc15',
    },
};

