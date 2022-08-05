import type { Meta, Story } from '@storybook/vue3'
import Subtitle from '@/components/typography/subtitle'

export default {
  component: Subtitle,
  title: 'Components/Subtitle',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [1, 2],
    },
  },
} as Meta

const Template: Story = args => ({
  components: { Subtitle },
  setup() { return { args } },
  template: '<Subtitle v-bind="args"> {{ args.default }} </Subtitle>',
})

export const One = Template.bind({})
export const Two = Template.bind({})

One.args = {
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 1,
}

Two.args = {
  ...One.args,
  size: 2,
}
