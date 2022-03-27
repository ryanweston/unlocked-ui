import AppBar from './appBar.vue'

export default {
  component: AppBar,
  title: 'Components/AppBar',
}

// @ts-expect-error because it's broken
const Template = args => ({
  components: { AppBar },
  setup() { return { args } },
  template: '<AppBar v-bind="args" logoHref="/"/>',
})

export const Default = Template.bind({})

// @ts-expect-error because it's broken
Default.args = {
  navigation: [
    { name: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text' },
    { name: 'Our mission', href: '#', size: 'small', type: 'text', disabled: true },
    { name: 'Roadmap', href: 'https://github.com/orgs/UnlockedUI/projects/1', size: 'small', type: 'text' },
    { name: 'Products', href: 'https://github.com/orgs/UnlockedUI', size: 'small', type: 'text' },
    { name: 'Coming soon', href: '#', size: 'small', type: 'default', disabled: true },
  ],
  title: 'Unlocked',
  logoHref: '/',
}
