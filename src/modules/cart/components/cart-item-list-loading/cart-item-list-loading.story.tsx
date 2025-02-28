import type { Meta, StoryObj } from '@storybook/react';

import { CartItemListLoading } from './cart-item-list-loading.component';

const meta = {
  title: 'Cart/Cart Item List Loading',
  component: CartItemListLoading,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CartItemListLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
};
