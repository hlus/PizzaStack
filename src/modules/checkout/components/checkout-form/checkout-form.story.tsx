import type { Meta, StoryObj } from '@storybook/react';

import { CheckoutForm } from './checkout-form.component';

const meta = {
  title: 'Checkout/Checkout Form',
  component: CheckoutForm,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CheckoutForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {};
