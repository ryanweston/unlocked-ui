import type { Meta, Story } from '@storybook/vue3'
import Link from './link.vue'

export default {
  component: Link,
  title: 'Components/Link',
} as Meta

const Template: Story = args => ({
  components: { Link },
  setup() { return { args } },
  template: `<Link 
    v-bind="args"
  > {{ args.defaultSlot }} </Link>`,
})

export const Default = Template.bind({})

Default.args = {
  href: '#',
  defaultSlot: 'Back to homepage',
}
