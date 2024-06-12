import type { Meta as MetaObj, StoryObj } from '@storybook/react';

import NavItem from '@/Components/NavItem';

type Meta = MetaObj<typeof NavItem>;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    href: '/Headphones',
    children: 'Headphones',
  },
};

export default { component: NavItem } as Meta;
