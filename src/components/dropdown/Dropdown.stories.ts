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
    { name: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui' },
    { name: 'Web3 components', href: '/web3', disabled: false },
    { name: 'Figma UI kit', href: '#', disabled: true },
  ],
  text: 'Example',
}
