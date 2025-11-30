import { ToggleButton } from "@repo/primitives/button/ToggleButton"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

const meta = {
  title: "Primitives/Button/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof ToggleButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Toggle Me",
    pressed: false,
  },
  render: (args) => {
    const [pressed, setPressed] = useState(args.pressed)
    return (
      <ToggleButton {...args} pressed={pressed} onChange={(newPressed) => setPressed(newPressed)} />
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false)
    return (
      <div className="flex items-center gap-4">
        <ToggleButton size="sm" pressed={pressed} onChange={setPressed}>
          Small
        </ToggleButton>
        <ToggleButton size="md" pressed={pressed} onChange={setPressed}>
          Medium
        </ToggleButton>
        <ToggleButton size="lg" pressed={pressed} onChange={setPressed}>
          Large
        </ToggleButton>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled",
    pressed: false,
    disabled: true,
  },
}

export const Pressed: Story = {
  args: {
    children: "Pressed",
    pressed: true,
  },
}
