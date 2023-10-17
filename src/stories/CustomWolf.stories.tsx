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
  'Necklace Flint',
  'Necklace Jaw',
  'Necklace Teeth',
  'Scarf Plaid',
  'Scarf Red',
  'Shirt Claw',
  'Shirt Metal',
  'Shirt Ripped',
  'Shirt WLTC',
  'Sweater Skull',
  'Sweater Spider',
  'Wreath Rainbow',
  'Wreath Red',
  'Box Cardboard',
  'Pinstripe Vest',
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

const pantsTraits = [
  '',
  'astro',
  'astro-black',
  'astro-orange',
  'bandana-green',
  'bandana-purple',
  'bandana-red',
  'baseball-blue',
  'baseball-red',
  'buttondown-black-flannel',
  'buttondown-blue-flannel',
  'buttondown-red-flannel',
  'buttondown-green',
  'buttondown-tan',
  'chain',
  'combat-black',
  'combat-green',
  'costume-dragon',
  'costume-frog',
  'costume-gorilla',
  'costume-hotdog',
  'cowboy-black',
  'cowboy-brown',
  'deepsea-bronze',
  'deepsea-orange',
  'epaulette-black',
  'epaulette-red',
  'epaulette-white',
  'gown-black',
  'gown-purple',
  'gown-white',
  'hoodie-purple',
  'hoodie-red',
  'hoodie-black',
  'shirt-bowtie',
  'shirt-white',
  'shirt-yellow',
  'knight',
  'knight-black',
  'knight-leather',
  'labcoat',
  'lederhosen',
  'monk',
  'mononoke',
  'ninja-black',
  'ninja-blue',
  'ninja-red',
  'nurse',
  'overalls-blue',
  'overalls-flannel',
  'overalls-pink',
  'overalls-red',
  'overalls-yellow',
  'overalls-skull',
  'pirate-black',
  'pirate-red',
  'punk',
  'robe-blue',
  'robe-king',
  'robe-red',
  'robe-white',
  'sweater-black',
  'sweater-green-chain',
  'sweater-orange',
  'sweater-pink',
  'tshirt-red',
  'tshirt-blue',
  'tshirt-green',
  'tshirt-metal',
  'tshirt-pink',
  'tshirt-white',
  'tshirt-yellow',
  'tanktop-orange',
  'tanktop-pink',
  'tanktop-sailor-black',
  'tanktop-sailor-blue',
  'tanktop-sailor-red',
  'tanktop-tattoo',
  'tanktop-white',
  'tiger',
  'toga',
  'viking-brown',
  'viking-navy',
  'wetsuit',
  'winter-blue',
  'winter-red',
  'work-blue',
  'work-red'
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
    baseUrl: 'https://content.coolcatsnft.com/avatar/shadowwolf/$traitType/',
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
      options: pantsTraits
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
      options: ['https://content.coolcatsnft.com/avatar/shadowwolf/$traitType/', 'https://content.coolcatsnft.com/avatar/shadowwolf2000x2000/$traitType/']
    },
    tokenId: {
      control: 'select',
      options: [
        '',
        '6',
        '10',
        '4953', // Poison Mushroom
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