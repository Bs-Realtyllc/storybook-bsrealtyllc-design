
import type { Meta, StoryObj } from '@storybook/react';
import { BSRealtyAlert } from './BSRealtyAlert';
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '../../icons';

// interface IconProps extends React.SVGProps<SVGSVGElement> {
//     size?: number;
// }



const meta = {
    title: 'Components/Alert',
    component: BSRealtyAlert,
    tags: ['autodocs'],

    argTypes: {
        variant: {
            control: 'select',
            options: [
                'success',
                'error',
                'info',
                'warning',
            ],
        },

        message: {
            control: 'text',
        },

        className: {
            control: 'text',
        },

        icon: {
            control: false,
        },
    },
} satisfies Meta<typeof BSRealtyAlert>;

export default meta;

type Story = StoryObj<typeof BSRealtyAlert>;

export const Success: Story = {
    args: {
        variant: 'success',
        icon: <SuccessIcon size={20} />,
        message: 'Your changes have been saved successfully.',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        icon: <ErrorIcon size={20} />,
        message: 'Something went wrong. Please try again.',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        icon: <InfoIcon size={20} />,
        message: 'Your account information has been updated.',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        icon: <WarningIcon size={20} />,
        message: 'Please review the information before continuing.',
    },
};
