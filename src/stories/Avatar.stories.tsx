import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { Avatar, AvatarView, TraitRarity, TraitType } from '../Avatar/types';

export default {
  title: 'Avatar',
  component: AvatarCanvas,
  args: {
    baseUrl: 'https://content.coolcatsnft.com/avatar/cat2000x2000/$traitType/',
    width: 400,
    height: 400,
    view: 'FULL'
  }
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
    />
  )
}

export const Cat4710 = Cat4710Template.bind({});

const WithBonesTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.SIDEKICK,
        name: 'bones',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'bones.png'
          }
        ],
        rules: []
      }])}
    />
  )
}

export const WithBones = WithBonesTemplate.bind({});

const WithMiloTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.SIDEKICK,
        name: 'milo',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'milo.png'
          }
        ],
        rules: []
      }])}
    />
  )
}

export const WithMilo = WithMiloTemplate.bind({});

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
    />
  )
}

export const InverseEffect = InverseTemplate.bind({});

const GownWhiteTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      traits={GownTraits}
    />
  )
}

export const GownWhite = GownWhiteTemplate.bind({});

const GownShoesTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      traits={Cat4710Traits.filter(t => t.traitType !== TraitType.SHOES).concat(GownTraits.filter(t => t.traitType === TraitType.SHOES))}
    />
  )
}

export const GownShoes = GownShoesTemplate.bind({});