import type { Meta, Story } from '@storybook/vue3'
import Icon from './icon.vue'

export default {
  component: Icon,
  title: 'Components/Icon',
} as Meta

const Template: Story = args => ({
  components: { Icon },
  setup() { return { args } },
  template: `<Icon
    v-bind="args"
  />`,
})

export const Default = Template.bind({})

Default.args = {
  // items: [
  //   { name: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui' },
  //   { name: 'Web3 components', href: '/web3', disabled: false },
  //   { name: 'Figma UI kit', href: '#', disabled: true },
  // ],
  // text: 'Example',
}
