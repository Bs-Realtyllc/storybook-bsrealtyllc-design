import type { Meta, StoryObj } from '@storybook/react';
import bellIcon from '../../assets/icons/bell.svg';
import { BSRealtyNotification } from './BSRealtyNotification';

const meta: Meta<typeof BSRealtyNotification> = {
    title: 'Components/Notification',
    component: BSRealtyNotification,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BSRealtyNotification>;

export const Default: Story = {
    args: {
        icon: (
            <img
                src={bellIcon}
                alt=""
                width={20}
                height={20}
            />
        ),
        showIndicator: false,
    },
};

export const WithIndicator: Story = {
    args: {
        icon: (
            <img
                src={bellIcon}
                alt=""
                width={20}
                height={20}
            />
        ),
        showIndicator: true,
    },
};

export const Disabled: Story = {
    args: {
        icon: (
            <img
                src={bellIcon}
                alt=""
                width={20}
                height={20}
            />
        ),
        disabled: true,
    },
};