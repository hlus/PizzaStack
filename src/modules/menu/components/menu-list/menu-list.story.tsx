import type { Meta, StoryObj } from "@storybook/react";

import { MenuList } from "./menu-list.component";
import pizzaMock from "@app/mock/pizza-category.json";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@app/core/apollo-client";

const meta = {
  title: "Menu/Menu List",
  component: MenuList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    items: pizzaMock,
  },
  render: (props) => (
    <ApolloProvider client={apolloClient}>
      <MenuList {...props} />
    </ApolloProvider>
  ),
};
