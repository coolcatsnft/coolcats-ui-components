import { Meta, StoryFn } from '@storybook/react';

import Dots from '../Dots';

export default {
  title: 'Dots',
  component: Dots,
  argTypes: {
    absolute: { control: 'boolean' }
  },
} as Meta<typeof Dots>;

const Template: StoryFn<typeof Dots> = (args) => <Dots {...args} />; 
export const Primary = Template.bind({});

Primary.args = {
  absolute: false
};