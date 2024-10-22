import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import { UserDropdownLink } from './user-dropdown-link.component';

const meta = {
  title: 'Auth/User Dropdown Link',
  component: UserDropdownLink,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof UserDropdownLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {},
  render: (props) => (
    <MemoryRouter>
      <UserDropdownLink {...props}>Your profile</UserDropdownLink>
    </MemoryRouter>
  ),
};
