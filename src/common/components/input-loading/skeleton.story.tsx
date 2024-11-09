import type { Meta, StoryObj } from '@storybook/react';

import { InputLoading } from './input-loading.component';

const meta = {
  title: 'Common/Input Loading',
  component: InputLoading,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
};
