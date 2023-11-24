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
          src: 'https://content.coolcatsnft.com/avatar/shadowwolf/background/primal-1.png'
        },
        {
          src: 'https://content.coolcatsnft.com/avatar/cat/body/cc-body.png'
        },
        {
          src: 'https://content.coolcatsnft.com/avatar/cat/body/cc-arms.png',
        },
        {
          src: 'https://content.coolcatsnft.com/avatar/cat/body/cc-head.png'
        },
        {
          src: 'https://content.coolcatsnft.com/avatar/cat/body/cc-whiskers.png'
        }
      ]}
      height={800}
      width={800}
    />
  )
}

export const AvatarBody = Template5.bind({});

const Template6: StoryFn<typeof LayeredCanvas> = (args) => {
  return (
    <LayeredCanvas 
      {...args}
      layers={[
        {
          src: 'https://content.coolcatsnft.com/avatar/shadowwolf/background/primal-1.png'
        },
        {
          src: 'https://coolcats.com/images/about-cool-cats.png',
          x: (400 - 263) / 2,
          y: (400 - 317) / 2,
          width: 263,
          height: 317,
          sticker: true
        }
      ]}
      height={400}
      width={400}
    />
  )
}

export const StickerEffect = Template6.bind({});

const OfflineTemplate: StoryFn<typeof LayeredCanvas> = (args) => {
  return (
    <LayeredCanvas 
      {...args}
      layers={[
        {
          src: 'cool_2.png'
        },
        {
          src: 'chugs-surprised.png',
          height: 200,
          width: 200,
          sticker: true,
          x: 100,
          y: 100
        }
      ]}
      height={400}
      width={400}
    />
  )
}

export const Offline = OfflineTemplate.bind({});