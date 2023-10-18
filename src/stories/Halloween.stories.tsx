import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { Avatar, AvatarView, TraitRarity, TraitType } from '../Avatar/types';

const pantsTraits = [
  '',
  'buttondown-tan-pants',
  'witch-skirt',
  'torn-jeans',
  'spooky-shorts',
  'spectre-pants',
  'skeleton-suit',
  'scarecrow-pants',
  'monster-pants',
  'kira-pants',
  'ghost-tail-cc',
  'bloody-jeans'
];

const hatTraits = [
  '',
  'bucket-hat-green',
  'wraith-head-cc',
  'witch-hat-cc',
  'vampire-bats-cc',
  'sheet-ghost-cc',
  'scarecrow-hat-cc',
  'red-riding-hood-cc',
  'pumpkin-stem-cc',
  'monster-bolt-cc',
  'knife-cc',
  'kira-hood-cc',
  'jiangshi-hat-cc',
  'granny-bonnet-cc',
  'ghost-pirate-hat-cc',
  'dog-hood-cc',
  'chugs-milk-cc',
  'candy-hat-cc',
  'bunny-hood',
  'boogey-hood-cc',
  'bat-buddy-cc'
]

const faceTraits = [
  '',
  'happy',
  'vampire-fangs-cc',
  'skeleton-face-paint-cc',
  'scarecrow-face-cc',
  'jiangshi-face-cc',
  'jack-o-lantern-cc',
  'clown-face-paint-cc'
]

const shirtTraits = [
  '',
  'buttondown-tan',
  'wraith-suit-cc',
  'witch-shirt',
  'vampire-suit-cc',
  'torn-tee',
  'spooky-tee',
  'spectre-tee',
  'scarecrow-shirt',
  'red-riding-dress',
  'pumpkin-suit',
  'monster-shirt',
  'kira-shirt',
  'jiangshi-gown',
  'jack-o-lantern-tee',
  'granny-gown',
  'ghostly-gown',
  'ghost-pirate-shirt',
  'dog-suit',
  'clown-gown',
  'chugs-suit',
  'bunny-suit',
  'boogey-suit',
  'bloody-tee'
]

const shoeTraits = [
  '',
  'buttondown-tan-shoes',
  'witch-shoes',
  'vampire-shoes',
  'torn-shoes',
  'spooky-shoes',
  'spectre-shoes',
  'scarecrow-shoes',
  'monster-shoes',
  'kira-shoes',
  'jiangshi-shoes',
  'jack-o-lantern-shoes',
  'granny-shoes',
  'clown-shoes',
  'bunny-shoes',
  'bloody-shoes',
]

const sidekicks = [
  '', 'bones', 'milo', 'swordsman-bones-red'
];

export default {
  title: 'Halloween',
  component: AvatarCanvas,
  args: {
    face: 'happy',
    hat: 'bucket-hat-green',
    shirt: 'buttondown-tan',
    pants: 'buttondown-tan-pants',
    shoes: 'buttondown-tan-shoes',
    background: 'cool_2',
    skin: '',
    sidekick: '',
    type: 'CAT',
    tokenId: '',
    baseUrl: 'https://content.coolcatsnft.com/avatar/cat/$traitType/',
    view: 'FULL',
    bordered: false
  },
  argTypes: {
    bordered: {
      control: 'boolean'
    },
    view: {
      control: 'select',
      options: ['FULL', 'FRONT']
    },
    face: {
      control: 'select',
      options: faceTraits
    },
    background: {
      control: 'select',
      options: [
        'cool_2',
        'white',
        'fracture',
        'wandering-moonlight',
        'talking-trees',
        'spooky-tree',
        'mausoleum',
        'haunted-house',
        'dark-forest-path',
      ]
    },
    skin: {
      control: 'select',
      options: [
        '',
        'mechanical-x-ray-suit-cc'
      ]
    },
    hat: {
      control: 'select',
      options: hatTraits
    },
    shirt: {
      control: 'select',
      options: shirtTraits
    },
    pants: {
      control: 'select',
      options: pantsTraits
    },
    baseUrl: {
      control: 'select',
      options: ['https://content.coolcatsnft.com/avatar/cat/$traitType/', 'https://content.coolcatsnft.com/avatar/cat2000x2000/$traitType/']
    },
    shoes: {
      control: 'select',
      options: shoeTraits
    },
    sidekick: {
      control: 'select',
      options: sidekicks
    },
    tokenId: {
      control: 'select',
      options: [
        '',
        '500',
        '2288',
        '3330',
        '4695',
        '5280',
        '6972',
        '8800',
        '9580',
        '1490',
        '8968' // Tiger
      ]
    }
  }
  
} as Meta<typeof AvatarCanvas>;

const HalloweenCatTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  const { pants, shirt, face, shoes, hat, sidekick, skin, tokenId, background } = args as any;
  const traits = (background ? [
    {
      type: Avatar.CAT,
      view: AvatarView.FULL,
      traitType: TraitType.BACKGROUND,
      name: background,
      rarity: TraitRarity.COMMON,
      images: [
        {
          uri: `${background}.png`
        }
      ],
      rules: []
    }
  ] : [] as any).concat(
    hat ? [
      {
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.HAT,
        name: hat,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${hat}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    face ? [
      {
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.FACE,
        name: face,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${face}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    skin ? [
      {
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.SKIN,
        name: skin,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${skin}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    pants ? [
      {
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.PANTS,
        name: pants,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${pants}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    shirt ? [
      {
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.SHIRT,
        name: shirt,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${shirt}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    shoes ? [
      {
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.SHOES,
        name: shoes,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${shoes}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    sidekick ? [
      {
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.SIDEKICK,
        name: sidekick,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${sidekick}.png`
          }
        ],
        rules: []
      }
    ] : []
  );
  
  return (
    <AvatarCanvas 
      {...args}
      traits={traits}
      type={Avatar.CAT}
      tokenId={tokenId}
      height={400}
      width={400}
    />
  )
}

export const Cat = HalloweenCatTemplate.bind({});