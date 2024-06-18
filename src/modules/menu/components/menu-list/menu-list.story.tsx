import type { Meta, StoryObj } from "@storybook/react";

import { MenuList } from "./menu-list.component";

const meta = {
  title: "Menu/Menu List",
  component: MenuList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
};
