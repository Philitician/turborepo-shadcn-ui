import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: [
        "default",
        "outline",
        "secondary",
        "destructive",
        "ghost",
        "link",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["default", "xs", "sm", "lg"],
      control: { type: "radio" },
    },
  },
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Outline = {
  args: {
    variant: "outline",
  },
};

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

export const Ghost = {
  args: {
    variant: "ghost",
  },
};

export const Link = {
  args: {
    variant: "link",
  },
};

export const ExtraSmall = {
  args: {
    size: "xs",
  },
};

export const Small = {
  args: {
    size: "sm",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};
