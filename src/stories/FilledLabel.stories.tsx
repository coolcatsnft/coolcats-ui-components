import { Meta, StoryFn } from '@storybook/react';
import FilledLabel from '../FilledLabel';

export default {
  title: 'Filled Label',
  component: FilledLabel,
  argTypes: {
    $size: { control: 'select', options: ['normal', 'large'] }
  },
} as Meta<typeof FilledLabel>;

const Template: StoryFn<typeof FilledLabel> = (args) => <FilledLabel {...args}>Label text</FilledLabel>; 
export const Basic = Template.bind({});