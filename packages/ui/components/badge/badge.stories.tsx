import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  argTypes: {
    variant: {
      options: ["default", "secondary", "destructive", "outline", "green"],
      control: { type: "select" },
    },
  },
  args: {
    children: "Badge",
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};

export const Destructive = {
  args: {
    variant: "destructive",
  },
};

export const Outline = {
  args: {
    variant: "outline",
  },
};

export const Green = {
  args: {
    variant: "green",
  },
};
