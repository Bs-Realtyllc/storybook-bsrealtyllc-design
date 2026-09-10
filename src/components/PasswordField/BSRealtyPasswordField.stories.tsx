import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyPasswordField } from './BSRealtyPasswordField';

const meta = {
  title: 'Components/PasswordField',
  component: BSRealtyPasswordField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'error', 'seeing'],
      description: 'Visual state of the field',
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof BSRealtyPasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Default (hidden) ──────────────────────────────────────
export const Default: Story = {
  args: {
    state: 'default',
    label: 'Password',
    value: 'Alex@1234567',
  },
};

// ── Seeing (visible text) ─────────────────────────────────
export const Seeing: Story = {
  args: {
    state: 'seeing',
    label: 'Password',
    value: 'Alex@1234567',
  },
};

// ── Error ─────────────────────────────────────────────────
export const Error: Story = {
  args: {
    state: 'error',
    label: 'Password',
    value: 'short',
    errorMessage: 'Your password must contain atleast 12 characters',
  },
};

// ── Empty placeholder ─────────────────────────────────────
export const Empty: Story = {
  args: {
    state: 'default',
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

// ── Disabled ──────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    state: 'default',
    label: 'Password',
    value: 'Alex@1234567',
    disabled: true,
  },
};
