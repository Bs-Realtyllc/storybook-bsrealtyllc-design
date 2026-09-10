import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyTestimonial } from './BSRealtyTestimonial';

const meta = {
  title: 'Components/Testimonial',
  component: BSRealtyTestimonial,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
    },
    quote: { control: 'text' },
    name: { control: 'text' },
    avatarUrl: { control: 'text' },
    avatarInitials: { control: 'text' },
  },
} satisfies Meta<typeof BSRealtyTestimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Default (initials fallback) ───────────────────────────

export const Default: Story = {
  args: {
    quote:
      'Buying our first home felt overwhelming, but the BS Realty team made the entire process simple and stress-free. Their guidance helped us find the perfect property within our budget.',
    name: 'Rachel Hadid',
    rating: 5,
  },
};

// ── With avatar photo ─────────────────────────────────────

export const WithAvatar: Story = {
  args: {
    quote:
      'The team was incredibly responsive and professional. They found us the perfect investment property in record time.',
    name: 'James Thornton',
    rating: 4.5,
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
  },
};

// ── Four stars ────────────────────────────────────────────

export const FourStars: Story = {
  args: {
    quote:
      'Great service overall. A few minor hiccups along the way but the team was quick to resolve them. Would definitely recommend.',
    name: 'Maria Santos',
    rating: 4,
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
  },
};

// ── Shorter quote ─────────────────────────────────────────

export const ShortQuote: Story = {
  args: {
    quote: 'Absolutely fantastic experience. Will use again!',
    name: 'Ali Hassan',
    rating: 5,
  },
};

// ── Three stars ───────────────────────────────────────────

export const ThreeStars: Story = {
  args: {
    quote:
      'Decent service. The property search took longer than expected but the outcome was satisfactory.',
    name: 'Priya Nair',
    rating: 3,
    avatarInitials: 'PN',
  },
};
