import type { Meta, StoryObj } from '@storybook/react';

import { UpdateInfo } from './update-info.component';

const meta = {
  title: 'User/Update Info',
  component: UpdateInfo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof UpdateInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
};
