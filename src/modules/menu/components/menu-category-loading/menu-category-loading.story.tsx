import type { Meta, StoryObj } from "@storybook/react";

import { MenuCategoryLoading } from "./menu-category-loading.component";

const meta = {
  title: "Menu/Menu Category Loading",
  component: MenuCategoryLoading,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MenuCategoryLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {};
