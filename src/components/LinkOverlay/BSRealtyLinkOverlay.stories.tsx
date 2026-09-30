import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BSRealtyLinkBox, BSRealtyLinkOverlay } from './BSRealtyLinkOverlay';
import { BSRealtyButton } from '../Button';

const meta = {
    title: 'Components/LinkOverlay',
    component: BSRealtyLinkOverlay,
    subcomponents: { BSRealtyLinkBox },

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
            description: 'Link text (the card title)',
        },

        className: {
            control: 'text',
            description: 'Custom CSS class',
        },
    },

    args: {
        href: '#',
        children: 'Employee Management',
        onClick: fn(),
    },
} satisfies Meta<typeof BSRealtyLinkOverlay>;

export default meta;

type Story = StoryObj<typeof meta>;

const cardStyle = {
    width: '320px',
    padding: '24px',
    border: '1px solid var(--bsr-color-border-kpi)',
    borderRadius: 'var(--bsr-radius-lg)',
    background: 'var(--bsr-color-white)',
    fontFamily: 'var(--bsr-font-family-primary)',
    color: 'var(--bsr-color-text-body)',
};

/** Click anywhere on the card to follow the title link. */
export const Default: Story = {
    render: (args) => (
        <BSRealtyLinkBox style={cardStyle}>
            <h3 style={{ margin: '0 0 8px' }}>
                <BSRealtyLinkOverlay {...args} />
            </h3>

            <p style={{ margin: '0' }}>
                Click anywhere on this card to open the page.
            </p>
        </BSRealtyLinkBox>
    ),
};

/** Buttons and other links inside the box still work on their own. */
export const WithNestedAction: Story = {
    args: {
        children: '12 Maple Street, Austin',
    },
    render: (args) => (
        <BSRealtyLinkBox style={cardStyle}>
            <h3 style={{ margin: '0 0 8px' }}>
                <BSRealtyLinkOverlay {...args} />
            </h3>

            <p style={{ margin: '0 0 16px' }}>
                3 bed · 2 bath · 1,850 sq ft
            </p>

            <BSRealtyButton
                label="Save"
                size="small"
                variant="secondary"
                showLeftIcon={false}
                showRightIcon={false}
                onClick={fn()}
            />
        </BSRealtyLinkBox>
    ),
};
