import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { Avatar, AvatarView, TraitRarity, TraitRuleFunction, TraitRuleType, TraitType } from '../Avatar/types';

export default {
  title: 'Avatar',
  component: AvatarCanvas,
  args: {
    baseUrl: 'https://content.coolcatsnft.com/avatar/cat2000x2000/$traitType/',
    width: 400,
    height: 400,
    view: 'FULL',
    type: 'CAT'
  }
} as Meta<typeof AvatarCanvas>;

const BlueCatTraits = [
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
      type={Avatar.CAT}
      traits={BlueCatTraits}
    />
  )
}

export const BlueCat = BlueCatTemplate.bind({});

const WolfTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      baseUrl={args.baseUrl?.replace('/cat', '/shadowwolf')}
      type={Avatar.SHADOWWOLF}
      traits={[
        {
          type: Avatar.SHADOWWOLF,
          view: args.view,
          traitType: TraitType.FACE,
          name: 'shadow wolf',
          rarity: TraitRarity.COMMON,
          images: [
            {
              uri: 'shadow-wolf.png'
            }
          ],
          rules: []
        }
      ]}
    />
  )
}

export const Wolf = WolfTemplate.bind({});

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
      type={Avatar.CAT}
      traits={Cat4710Traits}
    />
  )
}

export const Cat4710 = Cat4710Template.bind({});

const WithBonesTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
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

const MiloTrait = {
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
};

const WithMiloTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([MiloTrait])}
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
      type={Avatar.CAT}
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
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
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
      type={Avatar.CAT}
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

const StickerRules = [
  {
    type: "EFFECT",
    fn: "EFFECT_STICKER"
  }
] as any;

const StickerTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.BORDER,
        name: 'comic con',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'comic-con.png'
          }
        ],
        rules: [{
          type: 'MUTATE_ALL',
          fn: 'COMIC_CON_PLACEMENT'
        }] as any
      }]).concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'sticker',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: StickerRules
      }])}
    />
  )
}

export const StickerEffect = StickerTemplate.bind({});

const GownWhiteTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={GownTraits}
    />
  )
}

export const GownWhite = GownWhiteTemplate.bind({});

const GownShoesTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.filter(t => t.traitType !== TraitType.SHOES).concat(GownTraits.filter(t => t.traitType === TraitType.SHOES))}
    />
  )
}

export const GownShoes = GownShoesTemplate.bind({});

const CustomBackgroundAndEffectTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={
        Cat4710Traits.concat([MiloTrait]).concat([{
          type: Avatar.CAT,
          view: AvatarView.FULL,
          traitType: TraitType.BORDER,
          name: 'comic con',
          rarity: TraitRarity.COMMON,
          weight: 200,
          images: [
            {
              uri: 'comic-con.png'
            }
          ],
          rules: [
            {
              type: TraitRuleType.MUTATE_ALL,
              fn: TraitRuleFunction.COMIC_CON_PLACEMENT
            }
          ] as any
        }] as any)
      }
    />
  )
}

export const CustomBackgroundAndEffect = CustomBackgroundAndEffectTemplate.bind({});

const CustomBackgroundAndEffectTemplate2: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={
        Cat4710Traits.concat([MiloTrait]).concat([{
          type: Avatar.CAT,
          view: AvatarView.FULL,
          traitType: TraitType.BORDER,
          name: 'homer nft',
          rarity: TraitRarity.COMMON,
          weight: 200,
          images: [
            {
              uri: 'homer-nft.png'
            }
          ],
          rules: [
            {
              type: TraitRuleType.MUTATE_ALL,
              fn: TraitRuleFunction.HOMER_NFT_PLACEMENT
            }
          ] as any
        }] as any)
      }
    />
  )
}

export const HomerBorder = CustomBackgroundAndEffectTemplate2.bind({});

const ExplorerTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      tokenId='1'
      baseUrl='https://content.coolcatsnft.com/avatar/explorer2000x2000/$traitType/'
      type={Avatar.EXPLORER}
      traits={[]}
    />
  )
}

export const Explorer = ExplorerTemplate.bind({});

const ChristmasCardTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.BORDER,
        name: 'christmas card',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'card-border.png'
          }
        ],
        rules: [{
          type: 'MUTATE_ALL',
          fn: 'CHRISTMAS_CARD_PLACEMENT'
        }] as any
      }]).concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'sticker',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: StickerRules
      }])}
    />
  )
}

export const ChristmasCard = ChristmasCardTemplate.bind({});

const WootTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.BORDER,
        name: 'woot',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'woot.png'
          }
        ],
        rules: [{
          type: 'MUTATE_ALL',
          fn: TraitRuleFunction.WOOT_PLACEMENT
        }] as any
      }])}
    />
  )
}

export const Woot = WootTemplate.bind({});

const OfflineAvatarTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      baseUrl=''
      height={4000}
      width={4000}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
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

export const OfflineAvatar = OfflineAvatarTemplate.bind({});