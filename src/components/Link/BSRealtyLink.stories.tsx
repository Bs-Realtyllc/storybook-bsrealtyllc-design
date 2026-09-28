import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyLink } from './BSRealtyLink';

const meta = {
    title: 'Components/Link',
    component: BSRealtyLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {
        variant: {
            control: 'select',
            options: ['plain', 'underline', 'hoverUnderline'],
            description: 'Visual style of the link',
        },

        size: {
            control: 'select',
            options: ['xs', 'small', 'medium', 'large'],
            description: 'Size of the link',
        },

        color: {
            control: 'color',
            description: 'Text color of the link',
        },

        children: {
            control: 'text',
            description: 'Content of the link',
        },

        href: {
            control: 'text',
            description: 'URL of the link',
        },
    },

    args: {
        children: 'Link',
        href: 'https://google.com',
        variant: 'plain',
        size: 'medium',
        color: '#235E94',
    },
} satisfies Meta<typeof BSRealtyLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Plain: Story = {};

export const Underline: Story = {
    args: {
        variant: 'underline',
    },
};

export const HoverUnderline: Story = {
    args: {
        variant: 'hoverUnderline',
    },
};