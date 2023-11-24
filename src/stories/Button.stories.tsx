import { Meta, StoryFn } from '@storybook/react';

import Button from '../Button';
import { ProgressToTickIcon, YoutubeIcon } from '../Icon';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' }
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>Button text</Button>; 
const WithPromiseTemplate: StoryFn<typeof Button> = (args) => {
  const onClick = () => {
    return new Promise((res: any) => {
      setTimeout(() => {
        res();
      }, 5000);
    })
  }

  return (
    <Button {...args} onClick={onClick}>Promise Button</Button>
  )
};
const CircleTemplate: StoryFn<typeof Button> = (args) => {
  return (
    <Button {...args} $circle />
  )
};
const CircleWithIconTemplate: StoryFn<typeof Button> = (args) => {
  return (
    <Button {...args} $circle>
      <YoutubeIcon />
    </Button>
  )
};
const ButtonWithIconTemplate: StoryFn<typeof Button> = (args) => {
  return (
    <Button {...args}>
      <i>
        <YoutubeIcon />
      </i>
      Watch on Youtube
    </Button>
  )
};
const LoadingButtonTemplate: StoryFn<typeof Button> = (args) => {
  return (
    <Button {...args} disabled>
      <i>
        <ProgressToTickIcon />
      </i>
      Please wait
    </Button>
  )
};

export const Primary = Template.bind({});
export const WithPromise = WithPromiseTemplate.bind({});
export const Circle = CircleTemplate.bind({});
export const CircleWithIcon = CircleWithIconTemplate.bind({});
export const ButtonWithIcon = ButtonWithIconTemplate.bind({});
export const Loading = LoadingButtonTemplate.bind({});