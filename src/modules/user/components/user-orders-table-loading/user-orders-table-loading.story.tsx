import type { Meta, StoryObj } from '@storybook/react';

import { UserOrdersTableLoading } from './user-orders-table-loading.component';

const meta = {
  title: 'User/Orders table loading component',
  component: UserOrdersTableLoading,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof UserOrdersTableLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
};
