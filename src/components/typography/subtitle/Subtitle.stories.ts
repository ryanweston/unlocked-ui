import type { Meta, Story } from '@storybook/vue3'
import Subtitle from './subtitle.vue'

export default {
  component: Subtitle,
  title: 'Components/Subtitle',
} as Meta

const Template: Story = args => ({
  components: { Subtitle },
  setup() { return { args } },
  template: '<Subtitle v-bind="args"> {{ args.default }} </Subtitle>',
})

export const Default = Template.bind({})

Default.args = {
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}
