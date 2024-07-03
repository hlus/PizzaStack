import type { Meta, StoryObj } from "@storybook/react";

import { MenuItem } from "./menu-item.component";

const meta = {
  title: "Menu/Menu Item",
  component: MenuItem,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    image: "menu/menu-172000716",
    weight: 555,
    title: "Піца Мангеттен",
    ingredients:
      "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо",
    price: 215,
  },
};
