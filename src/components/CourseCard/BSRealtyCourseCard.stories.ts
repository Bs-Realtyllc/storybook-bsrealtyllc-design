import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyCourseCard } from './BSRealtyCourseCard';
import { fn } from 'storybook/test';

const meta = {
    title: 'Components/CourseCard',
    component: BSRealtyCourseCard,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: {
        onClick: fn(),
    },
    argTypes: {
        title: { control: 'text', description: 'Course card title' },
        description: { control: 'text', description: 'Course summary description' },
        imageUrl: { control: 'text', description: 'Header image URL' },
        actionText: { control: 'text', description: 'Action link text' },
    },
} satisfies Meta<typeof BSRealtyCourseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Real Estate Licensing Course',
        description: 'Start your journey toward becoming a licensed real estate professional with expert-led training, exam preparation, and industry-focused learning.',
        actionText: 'Learn More',
    },
};