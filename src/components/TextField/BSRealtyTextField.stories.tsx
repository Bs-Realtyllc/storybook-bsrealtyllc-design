import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyTextField } from './BSRealtyTextField';

const meta = {
  title: 'Components/TextField',
  component: BSRealtyTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url'],
      description: 'Input type',
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Visual variant',
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    errorMessage: { control: 'text' },
    successMessage: { control: 'text' },
    showPasswordToggle: { control: 'boolean' },
  },
  args: {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
  },
} satisfies Meta<typeof BSRealtyTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Default States ──────────────────────────────────────────────

/** Default — Empty field ready for input (Figma Default state) */
export const Default: Story = {
  args: {
    placeholder: 'Input placeholder',
  },
};

/** Filled — Field with user input (Figma Filled state) */
export const Filled: Story = {
  args: {
    placeholder: 'Input placeholder',
    value: 'User input text',
  },
};

/** Disabled — Non-interactive field (Figma Disabled state) */
export const Disabled: Story = {
  args: {
    placeholder: 'Input placeholder',
    disabled: true,
  },
};

/** Disabled with Value — Disabled field containing text */
export const DisabledWithValue: Story = {
  args: {
    placeholder: 'Input placeholder',
    value: 'Cannot edit this text',
    disabled: true,
  },
};

// ── Validation States ────────────────────────────────────────────

/** Error — Field with validation error (Figma Error variant) */
export const Error: Story = {
  args: {
    placeholder: 'Input placeholder',
    value: 'invalid@email',
    errorMessage: 'Please enter a valid email address.',
    type: 'email',
  },
};

/** Error Empty — Error state without user input */
export const ErrorEmpty: Story = {
  args: {
    placeholder: 'Email address',
    errorMessage: 'Please enter a valid email address.',
    type: 'email',
  },
};

/** Success — Field with successful validation (Figma Success variant) */
export const Success: Story = {
  args: {
    placeholder: 'Email address',
    value: 'user@example.com',
    successMessage: 'Email address is valid.',
    type: 'email',
  },
};

// ── Input Types ──────────────────────────────────────────────────

/** Email — Email input field with validation */
export const Email: Story = {
  args: {
    placeholder: 'Enter your email address',
    type: 'email',
    required: true,
  },
};

/** Password — Password field with visibility toggle */
export const Password: Story = {
  args: {
    placeholder: 'Enter your password',
    type: 'password',
    showPasswordToggle: true,
    required: true,
  },
};

/** Password Filled — Password field with hidden input */
export const PasswordFilled: Story = {
  args: {
    placeholder: 'Enter your password',
    type: 'password',
    value: 'secretpassword123',
    showPasswordToggle: true,
  },
};

/** Phone — Tel input for phone numbers */
export const Phone: Story = {
  args: {
    placeholder: '(555) 123-4567',
    type: 'tel',
    value: '',
  },
};

/** URL — URL input field */
export const Website: Story = {
  args: {
    placeholder: 'https://example.com',
    type: 'url',
  },
};

// ── Interactive Examples ─────────────────────────────────────────

/** Form Field — Complete form field example */
export const FormField: Story = {
  args: {
    placeholder: 'john@example.com',
    type: 'email',
    required: true,
    id: 'email-field',
    name: 'email',
    'aria-label': 'Email Address',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <label htmlFor="email-field" style={{ 
        display: 'block', 
        marginBottom: '8px', 
        fontFamily: 'Lato, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        color: '#25282d'
      }}>
        Email Address {args.required && <span style={{ color: '#dc2626' }}>*</span>}
      </label>
      <BSRealtyTextField {...args} />
    </div>
  ),
};

/** Validation Flow — Shows error then success */
export const ValidationFlow: Story = {
  args: {
    placeholder: 'Enter email address',
    type: 'email',
  },
  render: () => {
    const [value, setValue] = React.useState('invalid@');
    const [showSuccess, setShowSuccess] = React.useState(false);
    
    const isValidEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (isValidEmail(e.target.value)) {
        setTimeout(() => setShowSuccess(true), 500);
      } else {
        setShowSuccess(false);
      }
    };
    
    return (
      <div style={{ width: '400px' }}>
        <BSRealtyTextField 
          value={value}
          onChange={handleChange}
          type="email"
          placeholder="Enter email address"
          errorMessage={!showSuccess && value.length > 0 && !isValidEmail(value) ? 'Please enter a valid email address.' : undefined}
          successMessage={showSuccess ? 'Email address is valid!' : undefined}
        />
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#6b7280' }}>
          Try typing: invalid@ → user@example.com
        </div>
      </div>
    );
  },
};

/** Responsive Layout — Shows components in mobile and desktop layouts */
export const ResponsiveLayout: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div style={{ 
      padding: '24px',
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      backgroundColor: '#f9fafb'
    }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Contact Form</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <BSRealtyTextField placeholder="Full Name" type="text" />
          <BSRealtyTextField placeholder="Email Address" type="email" />
          <BSRealtyTextField placeholder="Phone Number" type="tel" />
          <BSRealtyTextField placeholder="Property Type" type="text" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Login Form</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <BSRealtyTextField 
            placeholder="Email Address" 
            type="email" 
            value="user@bsrealty.com"
            successMessage="Email verified"
          />
          <BSRealtyTextField 
            placeholder="Password" 
            type="password" 
            showPasswordToggle={true}
            value="secretpassword"
          />
        </div>
      </div>
    </div>
  ),
};