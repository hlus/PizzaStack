import { Controller, useForm } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './radio-group.component';

const meta = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    options: [
      { label: 'Cash', value: 'cash' },
      { label: 'Card', value: 'card' },
    ],
    name: 'payment-method',
  },
};

export const YupTemplate: Story = {
  args: {
    options: [
      { label: 'Cash', value: 'cash' },
      { label: 'Card', value: 'card' },
    ],
    name: 'payment-method',
  },
  render: (props) => {
    const { control, handleSubmit } = useForm({
      defaultValues: { paymentType: 'cash' },
    });

    const onSubmit = (data: any) => {
      alert(JSON.stringify(data));
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="paymentType"
          render={({ field }) => <RadioGroup {...props} {...field} />}
        />
        <button type="submit">Submit</button>
      </form>
    );
  },
};
