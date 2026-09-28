import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyLinkOverlay } from './BSRealtyLinkOverlay';

const meta = {
    title: 'Components/LinkOverlay',
    component: BSRealtyLinkOverlay,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        href: {
            control: 'text',
            description: 'URL of the link',
        },

        children: {
            control: 'text',
            description: 'Content inside the link overlay',
        },

        className: {
            control: 'text',
            description: 'Custom CSS class',
        },
    },

    args: {
        href: '#',
        children: 'Click anywhere on this card',
    },
} satisfies Meta<typeof BSRealtyLinkOverlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <BSRealtyLinkOverlay {...args}>
            <div
                style={{
                    width: '320px',
                    padding: '24px',
                    border: '1px solid #D9E1E8',
                    borderRadius: '8px',
                    background: '#FFFFFF',
                }}
            >
                <h3 style={{ margin: '0 0 8px' }}>
                    Employee Management
                </h3>

                <p style={{ margin: '0' }}>
                    Click anywhere on this card to open the page.
                </p>
            </div>
        </BSRealtyLinkOverlay>
    ),
};

