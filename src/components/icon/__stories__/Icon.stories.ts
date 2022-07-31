import type { Meta, Story } from '@storybook/vue3'
import { mdiAccount } from '@mdi/js'
import Icon from '../icon.vue'

export default {
  component: Icon,
  title: 'Components/Icon',
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: 'select',
    },
  },
} as Meta

const Template: Story = args => ({
  components: { Icon },
  setup() {
    const icon = mdiAccount
    return { args, icon }
  },
  template: `
  <Icon
    v-bind="args"
  > 
    {{ icon }}
  </Icon>`,
})

export const Default = Template.bind({})

Default.args = {
  size: 'md',
}
