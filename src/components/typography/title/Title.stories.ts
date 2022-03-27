import type { Meta, Story } from '@storybook/vue3'
import Title from './title.vue'

export default {
  component: Title,
  title: 'Components/Title',
} as Meta

const Template: Story = args => ({
  components: { Title },
  setup() { return { args } },
  template: '<Title v-bind="args"> {{ args.defaultSlot }} </Title>',
})

export const Default = Template.bind({})

Default.args = {
  defaultSlot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}
