import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./footer.component";

const meta = {
  title: "Common/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {args: {}};
