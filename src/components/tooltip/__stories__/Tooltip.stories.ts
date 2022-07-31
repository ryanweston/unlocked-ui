import type { Meta, Story } from '@storybook/vue3'
import Tooltip from '@/components/tooltip'
import Button from '@/components/button'

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
} as Meta

const Template: Story = args => ({
  components: { Tooltip, Button },
  setup() { return { args } },
  template: `
    <Tooltip 
      v-bind="args"
    > 
      <template #activator={on}>
        <Button v-on="on">Button</Button>
      </template>
      {{ args.default }}
    </Tooltip>
  `,
})

export const Default = Template.bind({})

Default.args = {
  bottom: true,
  default: 'Tooltip',
}
