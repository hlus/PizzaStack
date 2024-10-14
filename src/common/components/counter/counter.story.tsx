import type { Meta, StoryObj } from "@storybook/react";

import { Counter } from "./counter.component";

const meta = {
  title: "Form/Counter",
  component: Counter,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    children: "send sms code again",
    onRestart: () => alert('kek')
  },
};
