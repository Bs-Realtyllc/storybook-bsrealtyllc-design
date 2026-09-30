import type { Meta, StoryObj } from "@storybook/react-vite";
import { BSRealtyFilterItem } from "./BSRealtyFilterItem";
import { fn } from "storybook/test";

const meta = {
  title: "Components/FilterItem",
  component: BSRealtyFilterItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["primary", "active"],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof BSRealtyFilterItem>;

export default meta;
type Story = StoryObj<typeof BSRealtyFilterItem>;

export const Primary: Story = {
  args: {
    label: "General",
    variant: "primary",
  },
};

export const Active: Story = {
  args: {
    label: "General",
    variant: "active",
  },
};
