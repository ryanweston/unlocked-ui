import type { Meta, Story } from '@storybook/vue3'
import Dropdown from './dropdown.vue'

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
} as Meta

const Template: Story = args => ({
  components: { Dropdown },
  setup() { return { args } },
  template: `<Dropdown 
    v-bind="args"
  />`,
})

export const Default = Template.bind({})

Default.args = {
  items: [
    { text: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui' },
    { text: 'Web3 components', href: '/web3', disabled: false },
    { text: 'Figma UI kit', href: '#', disabled: true },
  ],
  text: 'Example',
}
