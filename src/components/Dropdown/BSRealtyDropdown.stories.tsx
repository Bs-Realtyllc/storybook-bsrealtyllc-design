import type { Meta, StoryObj } from "@storybook/react-vite"
import { BSRealtyDropdown, type BSRealtyDropdownOption } from "./BSRealtyDropdown";
import { useState } from "react";


const options: BSRealtyDropdownOption[] = [
  {
    label: 'California',
    value: 'california',
  },
  {
    label: 'Florida',
    value: 'florida',
  },
  {
    label: 'Georgia',
    value: 'georgia',
  },
  {
    label: 'Indiana',
    value: 'indiana',
  },
  {
    label: 'New Jersey',
    value: 'new-jersey',
  },
];

const meta = {
  title: 'Components/Dropdown',
  component: BSRealtyDropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],

  argTypes: {
    options: {
      control: 'object', description: "Dropdown options"
    },

    value: {
      control: "text",
      description: 'currently selected value'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },

    disabled: {
      control: 'boolean',
      description: 'Disable the dropdown',
    },
    onChange: {
      action: 'changed',
      description: 'Called when an option is selected',
    },
  }
} satisfies Meta<typeof BSRealtyDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;


/* Default / Placeholder */
export const Default: Story = {
  args: {
    options,
    placeholder: 'Choose your state',
  },
};

/* Selected */
export const Selected: Story = {
  args: {
    options,
    value: 'georgia',
  },
};

/* Open/Interactive */
export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ minHeight: '156px' }}>
        <BSRealtyDropdown
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },

  args: {
    options,
    placeholder: "Choose your state",
  },
};

/* Disabled */

export const Disabled: Story = {
  args: {
    options,
    value: 'georgia',
    disabled: true,
  },
};


