import { Meta, Story } from "@storybook/react";
import React from "react";

import ButtonGroup, { ButtonGroupProps } from "./ButtonGroup";

export default {
  args: { children: "ButtonGroup" },
  argTypes: { className: { control: { type: null } } },
  component: ButtonGroup,
  parameters: {
    edgeToEdge: false,
    withSurface: false
  },
  title: "Components/ButtonGroup"
} as Meta;

export const Default: Story<ButtonGroupProps> = args => <ButtonGroup {...args} />;
