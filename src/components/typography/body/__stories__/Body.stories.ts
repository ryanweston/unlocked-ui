import type { Meta, Story } from '@storybook/vue3'
import Body from '@/components/typography/body'

export default {
  component: Body,
  title: 'Components/Body',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [1, 2],
    },
  },
} as Meta

const Template: Story = args => ({
  components: { Body },
  setup() { return { args } },
  template: '<Body v-bind="args"> {{ args.default }} </Body>',
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
