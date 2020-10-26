import { Meta, Story } from "@storybook/react";
import React from "react";

import Button, { ButtonProps } from "./Button";

export default {
  args: { children: "Button" },
  argTypes: { className: { control: { type: null } } },
  component: Button,
  parameters: {
    edgeToEdge: false,
    withSurface: false
  },
  title: "Components/Button"
} as Meta;

export const Default: Story<ButtonProps> = args => <Button {...args} />;
