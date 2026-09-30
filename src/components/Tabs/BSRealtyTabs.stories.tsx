import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyTabs } from './BSRealtyTabs';

const meta = {
    title: 'Components/Tabs',
    component: BSRealtyTabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {


        value: {
            control: 'text',
            description: 'Controlled selected tab',
        },
        variant: {
            control: 'select', options: ['default', 'underline', 'outline'], description: 'Tabs visual variant',
        },
        disabled: {
            control: 'boolean', description: 'Disable all tabs',
        },
        className: {
            control: 'text',
        },
        onChange: {
            action: 'tab changed',
        },
    },
} satisfies Meta<typeof BSRealtyTabs>;

export default meta;

type Story = StoryObj<typeof meta>;



export const Default: Story = {
    args: {
        tabs: [
            {
                value: 'personal_info',
                label: 'Personal Info',
            },
            {
                value: 'organization',
                label: 'Organization',
            },
            {
                value: 'security',
                label: 'Security',
            },
            {
                value: 'notifications',
                label: 'Notifications',
            },
        ],
        value: 'personal_info',

    },
};

// export const Outline: Story = {
//     args: {
//         variant: 'outline',
//         tabs: [
//             {
//                 value: 'overview',
//                 label: 'Overview',
//             },
//             {
//                 value: 'details',
//                 label: 'Details',
//             },
//             {
//                 value: 'settings',
//                 label: 'Settings',
//             },
//         ],
//         value: 'overview',

//     },
// };

export const WithDisabledTab: Story = {
    args: {
        tabs: [
            {
                value: 'personal_info',
                label: 'Personal Info',
            },
            {
                value: 'organization',
                label: 'Organization',
            },
            {
                value: 'security',
                label: 'Security',
            },
            {
                value: 'notifications',
                label: 'Notifications',
                disabled: true
            },
        ],
        value: 'personal_info',

    },
};