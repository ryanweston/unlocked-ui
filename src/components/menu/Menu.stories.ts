import type { Meta, Story } from '@storybook/vue3'
import Menu from './menu.vue'

export default {
  component: Menu,
  title: 'Components/Menu',
} as Meta

const Template: Story = args => ({
  components: { Menu },
  setup() { return { args } },
  template: '<Menu v-bind="args" logoHref="/"/>',
})

export const Default = Template.bind({})

Default.args = {
  navigation: [
    { name: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text' },
    { name: 'Our mission', href: '#', size: 'small', type: 'text', disabled: true },
    { name: 'Roadmap', href: 'https://github.com/orgs/UnlockedUI/projects/1', size: 'small', type: 'text' },
    {
      name: 'Products',
      href: 'https://github.com/orgs/UnlockedUI',
      size: 'small',
      type: 'text',
      items: [
        { name: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text' },
        { name: 'Our mission', href: '#', size: 'small', type: 'text', disabled: true },
      ],
    },
    { name: 'Coming soon', href: '#', size: 'small', type: 'default', disabled: true },
  ],
  title: 'Unlocked',
  logoHref: '/',
}
