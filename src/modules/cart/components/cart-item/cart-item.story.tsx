import type { Meta, StoryObj } from '@storybook/react';

import { CartItem } from './cart-item.component';

const meta = {
  title: 'Cart/Cart Item',
  component: CartItem,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pizza: Story = {
  args: {
    id: '1wada2da2',
    title: 'Піца баребкю',
    image: 'menu/menu-1720024683',
    amount: 2,
    price: 57,
  },
};

export const Drink: Story = {
  args: {
    id: 'awdadawdawd',
    title: 'Бонаква',
    image: 'menu/menu-1720770982',
    amount: 1,
    price: 57,
  },
};
