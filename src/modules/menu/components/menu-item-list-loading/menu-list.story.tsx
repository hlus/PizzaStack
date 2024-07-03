import type { Meta, StoryObj } from "@storybook/react";

import { MenuItemListLoading } from "./menu-item-list-loading.component";

const meta = {
  title: "Menu/Menu Item List Loading",
  component: MenuItemListLoading,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MenuItemListLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: { items: 10 },
};
