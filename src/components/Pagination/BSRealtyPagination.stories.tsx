import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { BSRealtyPagination } from './BSRealtyPagination';

const meta = {
    title: 'Components/Pagination',
    component: BSRealtyPagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        currentPage: {
            control: {
                type: 'number',
                min: 1,
            },
            description: 'Current active page',
        },

        totalPages: {
            control: {
                type: 'number',
                min: 1,
            },
            description: 'Total number of pages',
        },

        disabled: {
            control: 'boolean',
            description: 'Disable pagination',
        },
    },
} satisfies Meta<typeof BSRealtyPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentPage: 1,
        totalPages: 5,
    },
    render: (args) => {
        const [page, setPage] = useState(args.currentPage);

        return (
            <BSRealtyPagination
                {...args}
                currentPage={page}
                onPageChange={setPage}
            />
        );
    },
};

export const MiddlePage: Story = {


    args: {
        currentPage: 6,
        totalPages: 15,
    },
    render: (args) => {
        const [page, setPage] = useState(args.currentPage);

        return (
            <BSRealtyPagination
                {...args}
                currentPage={page}
                onPageChange={setPage}
            />
        );
    },
};

export const Disabled: Story = {
    args: {
        currentPage: 2,
        totalPages: 5,
        disabled: true,
    },
};