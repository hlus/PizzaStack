import type { Meta, StoryObj } from "@storybook/react";

import { HeaderCategoryLink } from "./header-category-link.component";

const meta = {
  title: "Common/Header Category Link",
  component: HeaderCategoryLink,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HeaderCategoryLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    url: "#",
    children: "Pizza"
  },
};
