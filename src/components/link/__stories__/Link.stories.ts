import type { Meta, Story } from '@storybook/vue3'
import Link from '@/components/link'

export default {
  component: Link,
  title: 'Components/Link',
} as Meta

const Template: Story = args => ({
  components: { Link },
  setup() { return { args } },
  template: `<Link 
    v-bind="args"
  > {{ args.default }} </Link>`,
})

export const Default = Template.bind({})

Default.args = {
  href: '#',
  default: 'Back to homepage',
}
