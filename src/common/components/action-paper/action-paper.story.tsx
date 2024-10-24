import type { Meta, StoryObj } from '@storybook/react';

import { ActionPaper } from './action-paper.component';
import { ActionPaperFooter } from '../action-paper-footer/action-paper-footer.component';

const meta = {
  title: 'Common/Action paper',
  component: ActionPaper,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ActionPaper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    title: 'Personal data',
    children: <button>123</button>,
  },
};

export const ViewWithFooter: Story = {
  args: {
    title: 'Personal Info',
    children: <button>123</button>,
    footer: <ActionPaperFooter>123</ActionPaperFooter>,
  },
};
