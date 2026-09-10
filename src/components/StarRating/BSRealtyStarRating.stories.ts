import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyStarRating } from './BSRealtyStarRating';

const meta = {
  title: 'Components/StarRating',
  component: BSRealtyStarRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      description: 'Rating value (0–5, supports 0.5 increments)',
    },
    size: {
      control: { type: 'number', min: 12, max: 48, step: 2 },
      description: 'Star size in px',
    },
    maxStars: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Total number of stars',
    },
    readOnly: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof BSRealtyStarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FiveStars: Story = {
  args: { rating: 5 },
};

export const FourHalfStars: Story = {
  args: { rating: 4.5 },
};

export const FourStars: Story = {
  args: { rating: 4 },
};

export const ThreeHalfStars: Story = {
  args: { rating: 3.5 },
};

export const ThreeStars: Story = {
  args: { rating: 3 },
};

export const HalfStar: Story = {
  args: { rating: 0.5 },
};

export const NoStars: Story = {
  args: { rating: 0 },
};

export const LargeSize: Story = {
  args: { rating: 4.5, size: 28 },
};

export const SmallSize: Story = {
  args: { rating: 4, size: 14 },
};
