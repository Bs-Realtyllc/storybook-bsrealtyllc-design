import type { Meta, StoryObj } from "@storybook/react-vite";

import { BSRealtyBreadcrumb } from "./BSRealtyBreadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: BSRealtyBreadcrumb,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Breadcrumb items",
    },
    separator: {
      control: "text",
      description: "Separator displayed between breadcrumb items",
    },
    testId: {
      control: "text",
      description: "Test ID for testing",
    },
  },
} satisfies Meta<typeof BSRealtyBreadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Testimonials",
        active: true,
      },
    ],
    separator: "/",
    testId: "breadcrumb",
  },
};
