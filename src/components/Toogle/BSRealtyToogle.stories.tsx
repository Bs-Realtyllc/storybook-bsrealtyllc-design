
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyToogle } from './BSRealtyToogle';

const meta = {
    title: 'Components/Toogle',
    component: BSRealtyToogle,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Toggle size',
        },

        checked: {
            control: 'boolean',
            description: 'Toggle checked state',
        },

        defaultChecked: {
            control: 'boolean',
            description: 'Initial toggle state',
        },

        disabled: {
            control: 'boolean',
            description: 'Disable the toggle',
        },

        className: {
            control: false,
        },

        onChange: {
            action: 'changed',
        },
    },
} satisfies Meta<typeof BSRealtyToogle>;

export default meta;

type Story = StoryObj<typeof meta>;

/* Default */
export const Default: Story = {
    args: {
        size: 'medium',
        defaultChecked: false,
    },
};

/* Active */
export const Active: Story = {
    args: {
        size: 'medium',
        defaultChecked: true,
    },
};

/* Disabled */
export const Disabled: Story = {
    args: {
        size: 'medium',
        defaultChecked: false,
        disabled: true,
    },
};

/* Disabled Active */
export const DisabledActive: Story = {
    args: {
        size: 'medium',
        defaultChecked: true,
        disabled: true,
    },
};
