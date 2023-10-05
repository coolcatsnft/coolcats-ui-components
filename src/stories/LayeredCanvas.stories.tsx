import { Meta, StoryFn } from '@storybook/react';

import LayeredCanvas from '../LayeredCanvas';

export default {
  title: 'Layered Canvas',
  component: LayeredCanvas,
  argTypes: {
    bordered: { control: 'boolean' }
  },
} as Meta<typeof LayeredCanvas>;

const Template: StoryFn<typeof LayeredCanvas> = (args) => {
  return (
    <LayeredCanvas 
      {...args}
      layers={[
        {
          src: 'https://coolcats.com/images/memes/chugs.png'
        }
      ]}
      height={400}
      width={400}
    />
  )
}

export const SingleLayer = Template.bind({});

const Template2: StoryFn<typeof LayeredCanvas> = (args) => {
  return (
    <LayeredCanvas 
      {...args}
      layers={[
        {
          src: 'https://coolcats.com/images/memes/chugs.png'
        },
        {
          text: `I'M SMOL`,
          width: 300,
          height: 100,
          x: 50,
          y: 50,
          minFontSize: 20,
          maxFontSize: 30,
          shadow: true,
          font: 'Young Serif'
        }
      ]}
      height={400}
      width={400}
    />
  )
}

export const TextLayer = Template2.bind({});

const Template3: StoryFn<typeof LayeredCanvas> = (args) => {
  return (
    <LayeredCanvas 
      {...args}
      layers={[
        {
          src: 'https://coolcats.com/images/memes/chugs.png',
          background: 'inherit',
          x: 200,
          y: 200,
          height: 200,
          width: 200
        }
      ]}
      height={400}
      width={400}
    />
  )
}

export const OffsetImageWithFirstPixelMappedToBackground = Template3.bind({});

const Template4: StoryFn<typeof LayeredCanvas> = (args) => {
  return (
    <LayeredCanvas 
      {...args}
      layers={[
        {
          src: 'https://coolcats.com/images/memes/chugs.png'
        },
        {
          src: 'https://coolcats.com/images/cc-logo-small.png',
          width: 158 / 2,
          height: 49 / 2,
          x: 15,
          y: 360
        },
        {
          text: `I'M SMOL`,
          width: 300,
          height: 100,
          x: 50,
          y: 50,
          minFontSize: 20,
          maxFontSize: 50,
          shadow: true
        }
      ]}
      height={400}
      width={400}
    />
  )
}

export const MultipleImages = Template4.bind({});

const Template5: StoryFn<typeof LayeredCanvas> = (args) => {
  return (
    <LayeredCanvas 
      {...args}
      layers={[
        {
          src: 'cc-arms.png'
        },
        {
          src: 'cc-body.png'
        },
        {
          src: 'cc-head.png'
        },
        {
          src: 'cc-whiskers.png'
        }
      ]}
      height={800}
      width={800}
    />
  )
}

export const AvatarBody = Template5.bind({});