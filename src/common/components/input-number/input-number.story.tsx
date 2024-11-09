import type { Meta, StoryObj } from '@storybook/react';

import { InputNumber } from './input-number.component';
import { InputNumberSize } from './input-number.types';

const meta = {
  title: 'Form/Input Number',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: Object.values(InputNumberSize).filter((x) => typeof x === 'string'),
      mapping: InputNumberSize,
      control: {
        type: 'select',
      },
    },
  },
  args: {},
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
};

export const WithError: Story = {
  args: {
    error: 'invalid qty',
  },
};
