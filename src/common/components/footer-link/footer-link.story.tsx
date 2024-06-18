import type { Meta, StoryObj } from "@storybook/react";

import { FooterLink } from "./footer-link.component";

const meta = {
  title: "Common/Footer link",
  component: FooterLink,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof FooterLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    href: "tel:+380441234567",
    children: "044 123 45 67",
  },
  render: (props) => (
    <ul>
      <FooterLink {...props} />
    </ul>
  ),
};
