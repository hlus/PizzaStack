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

export const View: Story = {
  args: {},
};
