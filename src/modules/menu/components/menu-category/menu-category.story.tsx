import { ApolloProvider } from "@apollo/client";
import type { Meta, StoryObj } from "@storybook/react";

import pizzaMock from "@app/mock/pizza-category.json";
import { apolloClient } from "@app/core/apollo-client";
import { MenuCategory } from "./menu-category.component";

const meta = {
  title: "Menu/Menu Category",
  component: MenuCategory,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MenuCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    category: {
      id: "22aaff0e-7429-46a9-9d41-2bc00ecd47d3",
      slug: "pizza",
      title: "Pizza",
      menu_items: pizzaMock,
    },
  },
  render: (props) => (
    <ApolloProvider client={apolloClient}>
      <MenuCategory {...props} />
    </ApolloProvider>
  ),
};
