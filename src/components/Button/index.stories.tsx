import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    kind: 'filled',
    children: 'Filled',
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    kind: 'outlined',
    children: 'Outlined',
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    kind: 'text',
    children: (
      <>
        Text
        <ChevronRightIcon />
      </>
    ),
    disabled: false,
  },
};
