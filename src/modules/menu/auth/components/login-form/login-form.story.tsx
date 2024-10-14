import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './login-form.component'

const meta = {
  title: 'Auth/Login Form',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const View: Story = {
  args: {},
}
