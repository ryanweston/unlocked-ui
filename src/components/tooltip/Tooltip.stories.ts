import type { Meta, Story } from '@storybook/vue3'
import Button from '../button/button.vue'
import Tooltip from './tooltip.vue'

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
        <Button v-on="on">Wow</Button>
      </template>
      {{ args.defaultSlot }}
    </Tooltip>
  `,
})

export const Default = Template.bind({})

Default.args = {
  bottom: true,
  defaultSlot: 'Back to homepage',
}
