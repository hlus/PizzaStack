import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input.component";

const meta = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    label: "Phone number",
    placeholder: "phone number",
  },
};

export const WithError: Story = {
  args: {
    label: "Phone number",
    placeholder: "phone number",
    value: "+3809511111111",
    error: "invalid phone number",
  },
};
