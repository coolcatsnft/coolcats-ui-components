import { Meta, StoryFn } from '@storybook/react';

import Header from '../Header';
import { JourneysIcon, MeowpadIcon, WalletIcon } from '../Icon';

export default {
  title: 'Header',
  component: Header
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header><img src='logo-with-text.svg' /></Header>; 
export const Basic = Template.bind({});

const Template2: StoryFn<typeof Header> = () => {
  return (
    <Header 
      icons={[
        {
          clickAction: (e) => alert('Test') as any,
          icon: <MeowpadIcon />,
          title: 'Meowpad'
        },
        {
          clickAction: (e) => alert('Test') as any,
          icon: <JourneysIcon />,
          title: 'Journeys'
        },
        {
          clickAction: (e) => alert('Test') as any,
          icon: <WalletIcon />,
          title: 'Wallet',
          active: true
        }
      ]}
    >
      <img src='logo-with-text.svg' />
    </Header>
  )
}; 
export const WithIcons = Template2.bind({});