import type { Meta, StoryObj } from "@storybook/react";

import { ShowInfo, ShowInfoType } from "./show-info.component";

const meta = {
  title: "Common/Show Info",
  component: ShowInfo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ShowInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    type: ShowInfoType.Error,
    children: (
      <>
        <p>oops an error occurred 😢</p>
        <p>try again later</p>
      </>
    ),
  },
};
export const Info: Story = {
  args: {
    type: ShowInfoType.Info,
    children: (
      <>
        <p>Hey this is info</p>
        <p>just letting you know</p>
      </>
    ),
  },
};
