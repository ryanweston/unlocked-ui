import type { Meta, Story } from '@storybook/vue3'
import Body from './body.vue'

export default {
  component: Body,
  title: 'Components/Body',
} as Meta

const Template: Story = args => ({
  components: { Body },
  setup() { return { args } },
  template: '<Body v-bind="args"> {{ args.defaultSlot }} </Body>',
})

export const Default = Template.bind({})

Default.args = {
  defaultSlot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}
