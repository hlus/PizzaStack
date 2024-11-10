import type { Meta, StoryObj } from '@storybook/react';

import { CartSidebar } from './cart-sidebar.component';

const meta = {
  title: 'Cart/Cart Sidebar',
  component: CartSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CartSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const View: Story = {
  args: {
    items: [
      {
        title: 'Піца баребкю',
        image: 'menu/menu-1720024683',
        count: 2,
        price: 150,
      },
      {
        title: 'Піца qweqw',
        image: 'menu/menu-1720024683',
        count: 2,
        price: 100,
      },
      {
        title: 'Піца 123',
        image: 'menu/menu-1720024683',
        count: 1,
        price: 75,
      },
      {
        title: 'Піца 123',
        image: 'menu/menu-1720024683',
        count: 1,
        price: 75,
      },
      {
        title: 'Піца 123',
        image: 'menu/menu-1720024683',
        count: 1,
        price: 75,
      },
      {
        title: 'Бонаква',
        image: 'menu/menu-1720770982',
        count: 1,
        price: 57,
      },
    ],
  },
};
