import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./skeleton.component";

const meta = {
  title: "Common/Skeleton",
  component: Skeleton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    width: 34,
    height: 19,
  },
};
