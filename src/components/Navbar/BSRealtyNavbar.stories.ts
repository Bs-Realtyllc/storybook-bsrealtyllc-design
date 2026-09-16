import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BSRealtyNavbar } from './BSRealtyNavbar';

const meta: Meta<typeof BSRealtyNavbar> = {
  title: 'Components/Navbar',
  component: BSRealtyNavbar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f0f1f2' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    logo: { control: 'text', description: 'Image src for the logo' },
    activeItem: {
      control: 'select',
      options: [
        undefined,
        'Properties',
        'Financing',
        'Property Services',
        'Education',
        'About',
        'Contact',
      ],
      description: 'Currently active nav item label',
    },
    onLoginClick: { action: 'loginClicked' },
  },
  args: {
    onLoginClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof BSRealtyNavbar>;

/** Default navbar with all six nav items and no active state. */
export const Default: Story = {
  args: {},
};

/** Navbar with "Properties" marked as the active page. */
export const ActiveProperties: Story = {
  args: {
    activeItem: 'Properties',
  },
};

/** Navbar with "About" marked as the active page. */
export const ActiveAbout: Story = {
  args: {
    activeItem: 'About',
  },
};

/** Navbar with "Contact" marked as the active page (Contact has no chevron). */
export const ActiveContact: Story = {
  args: {
    activeItem: 'Contact',
  },
};

/** Custom nav items — useful for demonstrating flexible composition. */
export const CustomNavItems: Story = {
  args: {
    navItems: [
      { label: 'Buy', hasDropdown: true },
      { label: 'Sell', hasDropdown: true },
      { label: 'Rent', hasDropdown: true },
      { label: 'Blog', hasDropdown: false },
    ],
    activeItem: 'Buy',
  },
};
