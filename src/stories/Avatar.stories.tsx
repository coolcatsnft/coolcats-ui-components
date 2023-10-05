import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { Avatar, AvatarView, TraitRarity, TraitType } from '../Avatar/types';

export default {
  title: 'Avatar',
  component: AvatarCanvas
} as Meta<typeof AvatarCanvas>;

const BlueCatTraits = [
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.BODY,
    name: 'blue cat skin',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'cc-body.png'
      },
      {
        uri: 'cc-arms.png'
      },
      {
        uri: 'cc-head.png'
      },
      {
        uri: 'cc-whiskers.png'
      }
    ]
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.BACKGROUND,
    name: 'cool_2',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'cool_2.png'
      }
    ]
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.FACE,
    name: 'happy',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'happy.png'
      }
    ],
    rules: []
  }
]

const BlueCatTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      traits={BlueCatTraits}
      height={400}
      width={400}
    />
  )
}

export const BlueCat = BlueCatTemplate.bind({});

const Cat4710Traits = [
  ...BlueCatTraits,
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.SHIRT,
    name: 'buttondown tan',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'buttondown-tan.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.PANTS,
    name: 'buttondown tan pants',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'buttondown-tan-pants.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.SHOES,
    name: 'buttondown tan shoes',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'buttondown-tan-shoes.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.HAT,
    name: 'bucket hat green',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'bucket-hat-green.png'
      }
    ],
    rules: []
  }
]

const GownTraits = [
  ...BlueCatTraits,
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.SHIRT,
    name: 'gown white',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'gown-white.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.PANTS,
    name: 'gown white pants',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'gown-white-pants.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.SHOES,
    name: 'gown white shoes',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'gown-white-shoes.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.HAT,
    name: 'bucket hat green',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'bucket-hat-green.png'
      }
    ],
    rules: []
  }
]

const Cat4710Template: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      traits={Cat4710Traits}
      height={400}
      width={400}
    />
  )
}

export const Cat4710 = Cat4710Template.bind({});

const BlackAndWhiteRules = [
  {
    type: "EFFECT",
    fn: "EFFECT_BLACK_AND_WHITE"
  }
] as any;

const BlackAndWhiteTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
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
      height={400}
      width={400}
    />
  )
}

export const BlackAndWhiteEffect = BlackAndWhiteTemplate.bind({});

const InverseRules = [
  {
    type: "EFFECT",
    fn: "EFFECT_INVERSE"
  }
] as any;

const InverseTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'black and white',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: InverseRules
      }])}
      height={400}
      width={400}
    />
  )
}

export const InverseEffect = InverseTemplate.bind({});

const GownWhiteTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      traits={GownTraits}
      height={400}
      width={400}
    />
  )
}

export const GownWhite = GownWhiteTemplate.bind({});

const GownShoesTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      traits={Cat4710Traits.filter(t => t.traitType !== TraitType.SHOES).concat(GownTraits.filter(t => t.traitType === TraitType.SHOES))}
      height={400}
      width={400}
    />
  )
}

export const GownShoes = GownShoesTemplate.bind({});