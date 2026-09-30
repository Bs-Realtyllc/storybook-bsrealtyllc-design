import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BSRealtyToast } from './BSRealtyToast';
import { BSRealtyButton } from '../Button';

const meta = {
    title: 'Components/Toast',
    component: BSRealtyToast,
    parameters: {
        layout: 'centered',
        // The toast is position: fixed, so give each story its own iframe on the
        // Docs page — otherwise every open toast stacks in the same corner.
        docs: { story: { inline: false, height: '120px' } },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['success', 'error', 'warning', 'info'],
        },
        message: {
            control: 'text',
            description: 'Message for toast',
        },
        isOpen: {
            control: 'boolean',
        },
        duration: {
            control: 'number',
            description: 'Toast duration in milliseconds (0 disables auto-close)',
        },
    },
    args: {
        isOpen: true,
        // 0 keeps the static variant stories on screen; see Interactive for auto-close
        duration: 0,
        onClose: fn(),
    },
} satisfies Meta<typeof BSRealtyToast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        variant: 'success',
        message: 'Toast successfully.',
    },
};

export const ErrorToast: Story = {
    name: 'Error',
    args: {
        variant: 'error',
        message: 'Something went wrong.',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        message: 'Toast warning.',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        message: 'Toast info.',
    },
};

const InteractiveDemo = (args: Story['args']) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <BSRealtyButton
                label="Show Toast"
                size="small"
                showLeftIcon={false}
                showRightIcon={false}
                onClick={() => setIsOpen(true)}
            />

            <BSRealtyToast
                {...args}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export const Interactive: Story = {
    args: {
        variant: 'success',
        message: 'Your changes have been saved successfully.',
        duration: 3000,
    },
    render: (args) => <InteractiveDemo {...args} />,
};
