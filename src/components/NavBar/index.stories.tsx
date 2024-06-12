import type { Meta as MetaObj, StoryObj } from '@storybook/react';

import NavBar from '@/components/NavBar';

type Story = StoryObj<typeof NavBar>;
type Meta = MetaObj<typeof NavBar>;

export const Navigation: Story = {
  args: {
    navItems: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
    ],
    type: 'navigation',
  },
};

export const Footer: Story = {
  args: {
    ...Navigation.args,
    type: 'footer',
  },
};

export default { component: NavBar } as Meta;
