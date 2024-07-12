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

export const General: Story = {
  args: {
    image: "menu/menu-1720024631",
    weight: 552,
    title: "Піца Маргаріта",
    ingredients:
      "(подвійна порція моцарели), Моцарела, Соус",
    price: 250,
  },
};

export const Drink: Story = {
  args: {
    image: "menu/menu-1720770982",
    weight: null,
    title: "BonAqua",
    ingredients: "",
    price: 31,
    fitImage: true,
  },
};