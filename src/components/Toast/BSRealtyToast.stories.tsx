
import type { Meta, StoryObj } from '@storybook/react';
import { BSRealtyToast } from './BSRealtyToast';

const meta = {
    title: 'Components/Toast',
    component: BSRealtyToast,
    parameters: {
        layout: 'centered',
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
            description: 'Toast duration in milliseconds',
        },
    },
} satisfies Meta<typeof BSRealtyToast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        variant: 'success',
        message: 'Toast successfully.',
        isOpen: true,
        duration: 3000,
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        message: 'Something went wrong.',
        isOpen: true,
        duration: 3000,
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        message: 'Toast warning.',
        isOpen: true,
        duration: 3000,
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        message: 'Toast info.',
        isOpen: true,
        duration: 3000,
    },
};
import { useState } from 'react';

export const SuccessDemo: any = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <button type="button" onClick={() => setIsOpen(true)}>
                    Show Toast
                </button>

                <BSRealtyToast
                    variant='success'
                    message="Your changes have been saved successfully."
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    duration={3000}
                />
            </>
        );
    },
};