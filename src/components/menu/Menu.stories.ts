import type { Meta, Story } from '@storybook/vue3'
import Menu from '@/components/menu'

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
    { text: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text' },
    { text: 'Our mission', href: '#', size: 'small', type: 'text' },
    { text: 'Roadmap', href: 'https://github.com/orgs/UnlockedUI/projects/1', size: 'small', type: 'text', disabled: true },
    { text: 'Install Unlocked', href: '#', size: 'small', type: 'primary', disabled: false },
  ],
  brand: 'Unlocked',
  logoHref: '/',
}
