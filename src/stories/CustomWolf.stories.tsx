import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { Avatar, AvatarView, TraitRarity, TraitType } from '../Avatar/types';

const hatTraits = [
  '', 
  'Banana Peel',
  'Beanie Orange',
  'Bone',
  'Broken',
  'Crooked',
  'Flower Blue',
  'Flower Red',
  'Headband Black',
  'Headband White',
  'Magic Candle',
  'Muffin',
  'Sushi',
  'Newsboy',
  'Marksman',
  'Poison Apple',
  'Flies',
  'Pigtails',
  'Beanie Black',
  'Backwards Hat Black',
  'Backwards Hat Pink',
  'Backwards Hat White',
  'Bow',
  'Brain',
  'Decay',
  'Ghost',
  'Raven',
  'Red Hat',
  'Snow Goggles',
  'Sorcerer Novice',
  'Straw Hat',
  'Party Hat',
  'Pirate Blackbeard',
  'Tesla',
  'Bamboo Hat',
  'Bug Hat',
  'Creature Blue',
  'Creature Red',
  'Disguise Fish',
  'Disguise Rat',
  'Disguise Sheep',
  'Flame Head',
  'Jester Black',
  'Jester Pink',
  'Mask Village',
  'Masquerade',
  'Skull',
  'Pirate Davy Jones',
  'Lunar',
  'Radiant',
  'Astro',
  'Boss',
  'Cat Costume',
  'Celestial Pink',
  'Celestial Blue',
  'Creature Black',
  'Crown',
  'Fishbowl',
  'Flames',
  'Goddess',
  'Mushroom',
  'Sorcerer Crystal',
  'Sorcerer Druid',
  'Pilot',
  'Clown'
];

const shirtTraits = [
  '',
  'Buttondown Indigo',
  'Buttondown Brown',
  'Caveman',
  'Chain',
  'Leaf',
  'Necklace Flint',
  'Necklace Jaw',
  'Necklace Teeth',
  'Scarf Plaid',
  'Scarf Red',
  'Shirt Claw',
  'Shirt Metal',
  'Shirt Ripped',
  'Shirt WLTC',
  'Sleeve Symbol',
  'Sweater Skull',
  'Sweater Spider',
  'Tribal',
  'Wreath Rainbow',
  'Wreath Red',
  'Box Cardboard',
  'Pinstripe Vest',
  'Overalls Skull',
  'Caveman Leopard',
  'Chain Medallion',
  'Cloak Air',
  'Cloak Fire',
  'Cloak Grass',
  'Cloak Water',
  'Coat Military',
  'Cyberpunk Blue',
  'Cyberpunk Black',
  'Cyberpunk Pink',
  'Dapper',
  'Dress',
  'Hoodie VHS',
  'Insect',
  'Katana Black',
  'Kimono Emerald',
  'Kimono Flowers',
  'Kimono Indigo',
  'Leather',
  'Lord Blue',
  'Puffy Coat',
  'Trickster',
  'Astro',
  'Boss',
  'Cat Costume',
  'Celestial Pink',
  'Celestial Blue',
  'Dueler',
  'King Black',
  'Lord Red',
  'Puffy Coat Sparkle',
  'Samurai Black',
  'Shaman',
  'Skeleton',
  'Traveling Merchant',
  'Varsity Torn',
  'Wings',
  'Clown',
  'Box Chugs',
  'Bush',
  'Cloak Rouge',
  'Diver Orange',
  'Diver Blue',
  'Fire Princess',
  'Gem',
  'Jester Pink',
  'Jester Black',
  'Katana Pattern',
  'King Brown',
  'Masquerade',
  'Samurai Blue',
  'Samurai Red',
  'Varsity',
  'Hoodie Chugs'
];

const faceTraits = [
  '',
  'Blank',
  'Blep',
  'Cute',
  'Crazy',
  'Empty',
  'Evil',
  'Frustrated',
  'Ghoul',
  'Happy',
  'Joy',
  'Sad',
  'Shocked',
  'Wide Eye',
  'Sunglasses Round',
  'Sunglasses Sleek',
  'Three Eyes',
  'Ziggy',
  'Big Eyes',
  'Classic',
  'Dots',
  'Ender',
  'Face Face',
  'Glow',
  'Red Eyes',
  'Shadow Wolf',
  'Tired',
  'Stache',
  'XO'
];

const sidekicks = [
  '', 'bones', 'milo', 'swordsman-bones-red'
];

export default {
  title: 'Custom Avatar',
  component: AvatarCanvas,
  args: {
    face: 'big-eyes',
    hat: '',
    shirt: '',
    pants: '',
    shoes: '',
    sidekick: '',
    tokenId: '',
    baseUrl: 'https://content.coolcatsnft.com/avatar/shadowwolves/$traitType/',
    view: 'FULL',
    type: 'SHADOWWOLF',
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
    hat: {
      control: 'select',
      options: hatTraits
    },
    face: {
      control: 'select',
      options: faceTraits
    },
    shirt: {
      control: 'select',
      options: shirtTraits
    },
    pants: {
      control: 'select',
      options: shirtTraits
    },
    shoes: {
      control: 'select',
      options: shirtTraits
    },
    sidekick: {
      control: 'select',
      options: sidekicks
    },
    baseUrl: {
      control: 'select',
      options: ['https://content.coolcatsnft.com/avatar/shadowwolves/$traitType/', 'https://content.coolcatsnft.com/avatar/shadowwolves2000x2000/$traitType/']
    },
    tokenId: {
      control: 'select',
      options: [
        '',
        '4687', // Tribal
        '4668', // Skele
        '3928', // Blood Moon
        '3572', // Dark Star

        // Scholars
        '6229', '5636', '5694', '5696', '5718', '5772', '5776', '5789', '5790', '5805', '5825', '5858', '5958', '5964', '5983', '5986', '6015', '6094', '6097', '6105', '6114', '6138', '6157', '6176', '6185'
      ]
    }
  }
  
} as Meta<typeof AvatarCanvas>;

const Wolftraits = [
  {
    type: Avatar.SHADOWWOLF,
    view: AvatarView.FULL,
    traitType: TraitType.BACKGROUND,
    name: 'primal 1',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'primal-1.png'
      }
    ],
    rules: []
  }
]

const WolfTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  const { pants, shirt, face, hat, sidekick, tokenId, shoes } = args as any;
  const traits = Wolftraits.concat(
    hat ? [
      {
        type: Avatar.SHADOWWOLF,
        view: AvatarView.FULL,
        traitType: TraitType.HAT,
        name: hat,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${hat.toLowerCase().replace(' ', '-')}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    pants ? [
      {
        type: Avatar.SHADOWWOLF,
        view: AvatarView.FULL,
        traitType: TraitType.PANTS,
        name: pants,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${pants.toLowerCase().replace(' ', '-')}-pants.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    shirt ? [
      {
        type: Avatar.SHADOWWOLF,
        view: AvatarView.FULL,
        traitType: TraitType.SHIRT,
        name: shirt,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${shirt.toLowerCase().replace(' ', '-')}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    face ? [
      {
        type: Avatar.SHADOWWOLF,
        view: AvatarView.FULL,
        traitType: TraitType.FACE,
        name: face,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${face.toLowerCase().replace(' ', '-')}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    sidekick ? [
      {
        type: Avatar.SHADOWWOLF,
        view: AvatarView.FULL,
        traitType: TraitType.SIDEKICK,
        name: sidekick,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${sidekick.toLowerCase().replace(' ', '-')}.png`
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
      height={400}
      width={400}
    />
  )
}

export const Wolf = WolfTemplate.bind({});