import type { Meta, StoryObj } from "@storybook/react-vite";
import { BSRealtyBackButton } from "./BSRealtyBackButton";
import { fn } from "storybook/test";

const meta = {
  title: "Components/BackButton",
  component: BSRealtyBackButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Button text label" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof BSRealtyBackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "Back" } };
