import type { Meta, StoryObj } from '@storybook/react';

import { CartItemLoading } from './cart-item-loading.component';

const meta = {
  title: 'Cart/Cart Item Loading',
  component: CartItemLoading,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CartItemLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
};
