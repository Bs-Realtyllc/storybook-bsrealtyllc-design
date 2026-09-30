import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { useArgs } from 'storybook/preview-api';
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
    // Keep the `checked` control in sync when the radio is clicked
    render: function Render(args) {
        const [, updateArgs] = useArgs();

        return (
            <BSRealtyRadio
                {...args}
                onChange={(e) => updateArgs({ checked: e.target.checked })}
            />
        );
    },

    args: {
        size: 'medium',
        label: 'Option',
        checked: false,
    },
};

const groupOptions = [
    { value: 'buy', label: 'Buy' },
    { value: 'rent', label: 'Rent' },
    { value: 'sell', label: 'Sell' },
    { value: 'lease', label: 'Lease (unavailable)', disabled: true },
];

const RadioGroupDemo = (args: Story['args']) => {
    const [selected, setSelected] = useState('buy');

    return (
        <div
            role="radiogroup"
            aria-label="Property intent"
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
            {groupOptions.map((option) => (
                <BSRealtyRadio
                    key={option.value}
                    size={args?.size}
                    name="property-intent"
                    value={option.value}
                    label={option.label}
                    disabled={option.disabled}
                    checked={selected === option.value}
                    onChange={(e) => setSelected(e.target.value)}
                />
            ))}
        </div>
    );
};

/** Options sharing a `name` form one group: Tab reaches the group, arrow keys move between options. */
export const Group: Story = {
    args: {
        size: 'medium',
    },
    argTypes: {
        label: { table: { disable: true } },
        checked: { table: { disable: true } },
        disabled: { table: { disable: true } },
    },
    render: (args) => <RadioGroupDemo {...args} />,
};
