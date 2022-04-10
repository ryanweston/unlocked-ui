import type { Meta, Story } from '@storybook/vue3'
import Button from './button.vue'

export default {
  component: Button,
  title: 'Components/Button',
} as Meta

const Template: Story = args => ({
  components: { Button },
  setup() { return { args } },
  template: '<Button v-bind="args"> {{ args.defaultSlot }} </Button>',
})

export const Default = Template.bind({})

Default.args = {
  disabled: true,
  defaultSlot: 'example',
}
