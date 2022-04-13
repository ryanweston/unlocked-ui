import type { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import Button from './button.vue'

export default {
  component: Button,
  title: 'Components/Button',
} as Meta

const code = (args: any) => {
  if (args.group === true)
    return '<Button v-bind="args" first :active="activeRef" @click="() => {changeStatus(true)}"> {{ args.defaultSlot }} </Button><Button v-bind="args" last :active="!activeRef" @click="() => {changeStatus(false)}"> {{ args.defaultSlot }} </Button>'
  else
    return '<Button v-bind="args"> {{ args.defaultSlot }} </Button>'
}

const Template: Story = args => ({
  components: { Button },
  setup() {
    const activeRef = ref(true)
    function changeStatus(value: boolean) {
      activeRef.value = value
    }
    return { args, activeRef, changeStatus }
  },
  template: code(args),
})

export const Default = Template.bind({})
export const Secondary = Template.bind({})
export const Alternate = Template.bind({})
export const Text = Template.bind({})
export const Warning = Template.bind({})
export const Error = Template.bind({})
export const Group = Template.bind({})

Default.args = {
  defaultSlot: 'Default',
}

Secondary.args = {
  type: 'secondary',
  defaultSlot: 'Secondary',
}

Alternate.args = {
  type: 'alternate',
  defaultSlot: 'Alternate',
}

Text.args = {
  type: 'text',
  defaultSlot: 'Text',
}

Warning.args = {
  type: 'warning',
  defaultSlot: 'Warning',
}

Error.args = {
  type: 'error',
  defaultSlot: 'Error',
}

Group.args = {
  group: true,
  defaultSlot: 'Group',
}
