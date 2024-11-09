import type { Meta, StoryObj } from '@storybook/react';

import { UpdateInfoLoading } from './update-info-loading.component';

const meta = {
  title: 'User/Update Info Loading',
  component: UpdateInfoLoading,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof UpdateInfoLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
};
