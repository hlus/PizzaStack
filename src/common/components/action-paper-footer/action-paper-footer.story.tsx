import type { Meta, StoryObj } from '@storybook/react';

import { ActionPaperFooter } from './action-paper-footer.component';

const meta = {
  title: 'Common/Action paper footer',
  component: ActionPaperFooter,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ActionPaperFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    children: <div>123</div>
  },
};
