import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonVariant } from './button.component';

const meta = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: Object.values(ButtonSize).filter((x) => typeof x === 'string'),
      mapping: ButtonSize,
      control: {
        type: 'select',
      },
    },
    variant: {
      options: Object.values(ButtonVariant).filter((x) => typeof x === 'string'),
      mapping: ButtonVariant,
      control: {
        type: 'select',
      },
    },
  },
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    children: 'Enter',
    size: ButtonSize.Base,
    variant: ButtonVariant.Primary,
    disabled: false,
  },
};
