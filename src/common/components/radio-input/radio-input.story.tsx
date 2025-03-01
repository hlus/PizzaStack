import type { Meta, StoryObj } from '@storybook/react';

import { RadioInput } from './radio-input.component';

const meta = {
  title: 'Form/RadioInput',
  component: RadioInput,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof RadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    value: 'cash',
    label: 'Cash',
    name: 'payment-method',
    defaultChecked: false,
  },
};
