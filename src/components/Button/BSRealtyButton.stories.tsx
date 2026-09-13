import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BSRealtyButton } from './BSRealtyButton';

const MessageCircleIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ArrowRightIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const icons = {
  leftIcon: <MessageCircleIcon size={18} />,
  rightIcon: <ArrowRightIcon size={18} />,
};

const meta = {
  title: 'Components/Button',
  component: BSRealtyButton,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'Button visual variant',
    },

    size: {
      control: 'select',
      options: ['xs', 'xs-medium', 'small', 'medium', 'large', 'xl', '2xl'],
      description: 'Button size',
    },

    disabled: {
      control: 'boolean',
    },

    showLeftIcon: {
      control: 'boolean',
    },

    showRightIcon: {
      control: 'boolean',
    },

    leftIcon: {
      control: false,
    },

    rightIcon: {
      control: false,
    },

    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },

    className: {
      control: 'text',
    },
  },

  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof BSRealtyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// Primary

export const PrimaryMedium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Buttons',
    ...icons,
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Buttons',
    leftIcon: <MessageCircleIcon size={16} />,
    rightIcon: <ArrowRightIcon size={16} />,
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Buttons',
    leftIcon: <MessageCircleIcon size={20} />,
    rightIcon: <ArrowRightIcon size={20} />,
  },
};

export const PrimaryXL: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    label: 'Buttons',
    leftIcon: <MessageCircleIcon size={22} />,
    rightIcon: <ArrowRightIcon size={22} />,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Buttons',
    disabled: true,
    ...icons,
  },
};

// Secondary

export const SecondaryMedium: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Buttons',
    ...icons,
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    label: 'Buttons',
    leftIcon: <MessageCircleIcon size={20} />,
    rightIcon: <ArrowRightIcon size={20} />,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Buttons',
    disabled: true,
    ...icons,
  },
};

// Text

export const TextMedium: Story = {
  args: {
    variant: 'text',
    size: 'medium',
    label: 'Buttons',
    ...icons,
  },
};

export const TextLarge: Story = {
  args: {
    variant: 'text',
    size: 'large',
    label: 'Buttons',
    leftIcon: <MessageCircleIcon size={20} />,
    rightIcon: <ArrowRightIcon size={20} />,
  },
};

export const TextDisabled: Story = {
  args: {
    variant: 'text',
    size: 'medium',
    label: 'Buttons',
    disabled: true,
    ...icons,
  },
};

// Icon variations

export const NoIcons: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Buttons',
    showLeftIcon: false,
    showRightIcon: false,
    ...icons,
  },
};

export const LeftIconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Buttons',
    showLeftIcon: true,
    showRightIcon: false,
    ...icons,
  },
};

export const RightIconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Buttons',
    showLeftIcon: false,
    showRightIcon: true,
    ...icons,
  },
};
