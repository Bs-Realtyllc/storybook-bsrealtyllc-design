import type { Meta, StoryObj } from "@storybook/react-vite";
import { BSRealtyEvolutionCard } from "./BSRealtyEvolutionCard";

const meta = {
  title: "Components/EvolutionCard",
  component: BSRealtyEvolutionCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    yearRange: {
      control: "text",
      description: "Year range of Card ",
    },
    title: {
      control: "text",
      description: "Title of Card ",
    },
    description: {
      control: "text",
      description: "Description of Card ",
    },
  },
} satisfies Meta<typeof BSRealtyEvolutionCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    yearRange: "2022-2023",
    title: "Research & Foundation",
    description:
      "A research-driven foundation built under GITGI, focused on real estate investment, mortgage systems, and regulatory frameworks—leading to the establishment of BS Realty LLC in 2023 with Georgia and Texas licenses.",
  },
};
