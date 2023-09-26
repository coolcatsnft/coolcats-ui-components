import { Meta, StoryFn } from '@storybook/react';

import LabelComponent from '../Label';

export default {
  title: 'Label',
  component: LabelComponent
} as Meta<typeof LabelComponent>;

const Template: StoryFn<typeof LabelComponent> = (args) => <LabelComponent {...args}>Label Example</LabelComponent>; 
export const Basic = Template.bind({});