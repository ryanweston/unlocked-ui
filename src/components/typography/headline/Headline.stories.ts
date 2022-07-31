import type { Meta, Story } from '@storybook/vue3'
import Headline from './headline.vue'

export default {
  component: Headline,
  title: 'Components/Headline',
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
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 2,
}

Three.args = {
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 3,
}

Four.args = {
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 4,
}

Five.args = {
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 5,
}
Six.args = {
  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 6,
}
