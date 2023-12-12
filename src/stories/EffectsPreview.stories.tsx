import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { Avatar, AvatarView, TraitRarity, TraitRuleFunction, TraitRuleType, TraitType } from '../Avatar/types';

export default {
  title: 'EffectsPreview',
  component: AvatarCanvas,
  args: {
    baseUrl: '/',
    width: 400,
    height: 400,
    view: 'FULL',
    type: 'NONE'
  }
} as Meta<typeof AvatarCanvas>;

const BlueCatTraits = [
  {
    type: Avatar.NONE,
    view: AvatarView.FULL,
    traitType: TraitType.BACKGROUND,
    name: 'background',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'preview.png'
      }
    ],
    rules: []
  }
]

const BlackAndWhiteRules = [
  {
    type: "EFFECT",
    fn: "EFFECT_BLACK_AND_WHITE"
  }
] as any;

const BlueCatTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.NONE}
      traits={BlueCatTraits.concat([{
        type: Avatar.NONE,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'black and white',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: BlackAndWhiteRules
      }])}
    />
  )
}

export const BlueCat = BlueCatTemplate.bind({});

const SepiaRules = [
  {
    type: "EFFECT",
    fn: "EFFECT_SEPIA"
  }
] as any;

const SepiaTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.NONE}
      traits={BlueCatTraits.concat([{
        type: Avatar.NONE,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'Sepia',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: SepiaRules
      }])}
    />
  )
}

export const SepiaEffect = SepiaTemplate.bind({});