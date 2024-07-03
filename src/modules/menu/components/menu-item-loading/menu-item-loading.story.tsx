import type { Meta, StoryObj } from "@storybook/react";

import { MenuItemLoading } from "./menu-item-loading.component";

const meta = {
  title: "Menu/Menu Item Loading",
  component: MenuItemLoading,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MenuItemLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
};
