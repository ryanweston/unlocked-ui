import type { Meta, Story } from '@storybook/vue3'
import Headline from '@/components/typography/headline'

export default {
  component: Headline,
  title: 'Components/Headline',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
} as Meta

const Template: Story = args => ({
  components: { Headline },
  setup() { return { args } },
  template: '<Headline v-bind="args"> {{ args.default }} </Headline>',
})

export const One = Template.bind({})
export const Two = Template.bind({})
export const Three = Template.bind({})
export const Four = Template.bind({})
export const Five = Template.bind({})
export const Six = Template.bind({})

One.args = {
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 1,
}

Two.args = {
  ...One.args,
  size: 2,
}

Three.args = {
  ...One.args,
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 3,
}

Four.args = {
  ...One.args,
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 4,
}

Five.args = {
  ...One.args,
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 5,
}
Six.args = {
  ...One.args,
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 6,
}
