import type { Meta, Story } from '@storybook/vue3'
import { mdiAccount } from '@mdi/js'
import Icon from '@/components/icon'

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

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Contrast = Template.bind({})

Primary.args = {
  size: 'md',
  type: 'primary',
}

Secondary.args = {
  size: 'md',
  type: 'secondary',
}

Contrast.args = {
  size: 'md',
  type: 'contrast',
}
