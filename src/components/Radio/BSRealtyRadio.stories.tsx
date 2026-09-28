import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { BSRealtyRadio } from './BSRealtyRadio';

const meta = {
    title: 'Components/Radio',
    component: BSRealtyRadio,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },

        label: {
            control: 'text',
        },

        checked: {
            control: 'boolean',
        },

        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof BSRealtyRadio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [checked, setChecked] = useState(false);

        return (
            <BSRealtyRadio
                {...args}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
        );
    },

    args: {
        size: 'medium',
        label: 'Option',
    },
};