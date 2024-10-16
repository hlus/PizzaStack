import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import { UserDropdown } from './user-dropdown.component';

const meta = {
  title: 'Auth/User Dropdown',
  component: UserDropdown,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof UserDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
  render: (props) => (
    <MemoryRouter>
      <div className="p-4 shadow flex justify-end">
        <UserDropdown {...props} />
      </div>
    </MemoryRouter>
  ),
};
