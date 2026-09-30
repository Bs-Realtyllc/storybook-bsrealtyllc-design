
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyTooltip } from './BSRealtyTooltip';
import { BSRealtyButton } from '../Button';

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

const triggerButton = (
    <BSRealtyButton
        label="Hover me"
        size="small"
        showLeftIcon={false}
        showRightIcon={false}
    />
);

export const Default: Story = {
    args: {
        content: 'This is a tooltip',
        position: 'top',
        children: triggerButton,
    },
};

export const Top: Story = {
    args: {
        content: 'Tooltip on top',
        position: 'top',
        children: triggerButton,
    },
};

export const Bottom: Story = {
    args: {
        content: 'Tooltip on bottom',
        position: 'bottom',
        children: triggerButton,
    },
};

export const Left: Story = {
    args: {
        content: 'Tooltip on left',
        position: 'left',
        children: triggerButton,
    },
};

export const Right: Story = {
    args: {
        content: 'Tooltip on right',
        position: 'right',
        children: triggerButton,
    },
};

export const Disabled: Story = {
    args: {
        content: 'You cannot see this tooltip',
        position: 'top',
        disabled: true,
        children: triggerButton,
    },
};
