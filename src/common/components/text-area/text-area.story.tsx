import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './text-area.component';

const meta = {
  title: 'Form/Textarea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    label: 'Order details',
    placeholder: 'Enter order details',
    disabled: false,
    error: '',
    fullWidth: false,
  },
};
