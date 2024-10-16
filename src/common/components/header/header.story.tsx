import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './header.component';

const meta = {
  title: 'Common/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    categories: [
      {
        id: '22aaff0e-7429-46a9-9d41-2bc00ecd47d3',
        slug: 'pizza',
        title: 'Pizza',
      },
      {
        id: '14c5bf40-789f-4c91-827e-6a5e668dabb4',
        slug: 'drinks',
        title: 'Drinks',
      },
    ],
  },
  render: (props) => (
    <MemoryRouter>
      <Header {...props} />
    </MemoryRouter>
  ),
};

export const Loading: Story = {
  args: { isLoading: true },
  render: (props) => (
    <MemoryRouter>
      <Header {...props} />
    </MemoryRouter>
  ),
};
