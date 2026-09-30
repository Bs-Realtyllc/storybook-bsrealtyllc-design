import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { BSRealtyTabs } from './BSRealtyTabs';

const meta = {
    title: 'Components/Tabs',
    component: BSRealtyTabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // Keep the `value` control in sync when a tab is clicked
    render: function Render(args) {
        const [, updateArgs] = useArgs();
        return (
            <BSRealtyTabs
                {...args}
                onChange={(value) => {
                    updateArgs({ value });
                    args.onChange?.(value);
                }}
            />
        );
    },
    argTypes: {
        value: {
            control: 'text',
            description: 'Controlled selected tab',
        },
        variant: {
            control: false,
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