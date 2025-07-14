import type { Meta, StoryObj } from '@storybook/react';

import { UserOrders } from './user-orders.component';

const meta = {
  title: 'User/Orders table',
  component: UserOrders,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof UserOrders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
};
