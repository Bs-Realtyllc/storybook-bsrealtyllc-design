import type { Meta, StoryObj } from "@storybook/react-vite";
import { BSRealtyFoundation } from "./BSRealtyFoundation";

const meta = {
  title: "Components/Foundation",
  component: BSRealtyFoundation,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Title of foundation" },
    description: { control: "text", description: "Description of foundation" },
  },
} satisfies Meta<typeof BSRealtyFoundation>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Career-Focused Learning",
    description:
      "Our licensing programs are designed to help students build practical industry knowledge while preparing confidently for state examinations and long-term professional growth.",
  },
};
