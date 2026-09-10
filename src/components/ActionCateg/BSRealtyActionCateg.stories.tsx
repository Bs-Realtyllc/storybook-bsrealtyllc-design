
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BSRealtyActionCateg } from './BSRealtyActionCateg';

const HomeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const meta = {
  title: 'Components/ActionCateg',
  component: BSRealtyActionCateg,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {
    onClick: fn(),
  },

  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the card',
    },

    description: {
      control: 'text',
      description: 'Description of the card',
    },

    icon: {
      control: false,
      description: 'Icon displayed on the left side of the card',
    },

    onClick: {
      action: 'clicked',
      description: 'Callback triggered when the card is clicked',
    },
  },
} satisfies Meta<typeof BSRealtyActionCateg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Buy a Home',
    description: 'Find homes and connect with agents.',
    icon: <HomeIcon />,
  },
};

