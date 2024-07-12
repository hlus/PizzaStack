import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./link.component";

const meta = {
  title: "Common/Link",
  component: Link,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    url: "#",
    children: "Pizza"
  },
};
