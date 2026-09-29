
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyTooltip } from './BSRealtyTooltip';

const meta = {
    title: 'Components/Tooltip',
    component: BSRealtyTooltip,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        content: {
            control: 'text',
            description: 'Tooltip content',
        },

        position: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
            description: 'Tooltip position',
        },

        disabled: {
            control: 'boolean',
            description: 'Disable tooltip',
        },

        className: {
            control: false,
        },

        children: {
            control: false,
        },
    },
} satisfies Meta<typeof BSRealtyTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: 'This is a tooltip',
        position: 'top',
        children: (
            <button
                style={{
                    padding: '10px 18px',
                    border: 'none',
                    borderRadius: '6px',
                    background: '#235e94',
                    color: '#fff',
                    cursor: 'pointer',
                }}
            >
                Hover me
            </button>
        ),
    },
};

export const Top: Story = {
    args: {
        content: 'Tooltip on top',
        position: 'top',
        children: <button>Hover me</button>,
    },
};

export const Bottom: Story = {
    args: {
        content: 'Tooltip on bottom',
        position: 'bottom',
        children: <button>Hover me</button>,
    },
};

export const Left: Story = {
    args: {
        content: 'Tooltip on left',
        position: 'left',
        children: <button>Hover me</button>,
    },
};

export const Right: Story = {
    args: {
        content: 'Tooltip on right',
        position: 'right',
        children: <button>Hover me</button>,
    },
};

export const Disabled: Story = {
    args: {
        content: 'You cannot see this tooltip',
        position: 'top',
        disabled: true,
        children: <button>Hover me</button>,
    },
};
