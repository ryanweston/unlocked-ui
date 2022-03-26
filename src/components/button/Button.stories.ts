import Button from './button.vue';

export default {
  component: Button,
  title: 'Components/Button',
};

// @ts-ignore
const Template = (args) => ({
  components: { Button },
  setup () { return { args }},
  template: `<Button v-bind="args"> {{ args.defaultSlot }} </Button`,
});

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  disabled: true,
  defaultSlot: 'example'
};
