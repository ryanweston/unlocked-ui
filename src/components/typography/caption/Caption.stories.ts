import type { Meta, Story } from '@storybook/vue3'
import Caption from './caption.vue'

export default {
  component: Caption,
  title: 'Components/Caption',
} as Meta

const Template: Story = args => ({
  components: { Caption },
  setup() { return { args } },
  template: '<Caption v-bind="args"> {{ args.default }} </Caption>',
})

export const Default = Template.bind({})

Default.args = {
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}
