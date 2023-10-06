import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { Avatar, AvatarView, TraitRarity, TraitType } from '../Avatar/types';

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

const hatTraits = [
  '', 'admiral','admiral-pink','afro-black','afro-brown','afro-rainbow-unicorn','antlers','apple','arrowhead','astro','astro-cheeks','astro-fishbowl','beanie-black','beanie-blue','beanie-orange','beanie-red','beret-black','beret-green','beret-pink','beret-red','bow','bucket-hat-blue','bucket-hat-green','bucket-hat-tan','bucket-hat-white','candle','costume-dragon','costume-frog','costume-gorilla','cowboy-black','cowboy-brown','crown-black','crown-fire','crown-gold','cupcake','deepsea-bronze','deepsea-orange','dutch','flower-blue','flower-pink','flower-red','goggles-seaweed','halo','halo-fire','hat-black','hat-skull','hat-visor-blue','hat-visor-yellow','hat-white','headband-blue','headband-red','helm-army','helm-biker','helm-bronze','helm-silver','horns','knight-black','knight-blue','knight-red','mohawk-green','mohawk-purple','mohawk-red','mullet-blonde','mullet-brown','ninja-black','ninja-blue','ninja-red','nurse','piercings','pirate-black','pirate-red','prince','sunhat-black','sunhat-tan','sunhat-white','sushi','top-hat','tvhead-grey','tvhead-purple','tvhead-white','unicorn-horn','visor-green','visor-purple','wreath','wreath-flowers'
]

const faceTraits = [
  '', 'angry','angry-cute','angry-scar','beard-brown','beard-pirate','beard-tan','derp','ditto','dizzy','double-face','face-face','glasses','glasses-funny','glossy','grin','happy','happy-cute','hearts','mononoke','mummy','ninja-black','ninja-blue','ninja-red','owo','pixel','rich','shocked','smirk','stunned','sunglasses-blue','sunglasses-cool','sunglasses-cowboy','sunglasses-heart','sunglasses-pixel','sunglasses-squad','sunglasses-yellow','three-eyes','tired','tvface-404','tvface-bobross','tvface-nosignal','tvface-xp','unamused','uwu','wink','zombie'
]

const shirtTraits = [
  '', 'astro','astro-black','astro-orange','bandana-green','bandana-purple','bandana-red','baseball-blue','baseball-red','buttondown-black-flannel','buttondown-blue-flannel','buttondown-green','buttondown-red-flannel','buttondown-tan','chain','combat-black','combat-green','costume-dragon','costume-frog','costume-gorilla','costume-hotdog','cowboy-black','cowboy-brown','deepsea-bronze','deepsea-orange','epaulette-black','epaulette-red','epaulette-white','gown-black','gown-purple','gown-white','hoodie-black','hoodie-purple','hoodie-red','knight','knight-black','knight-leather','labcoat','lederhosen','monk','mononoke','ninja-black','ninja-blue','ninja-red','nurse','overalls-blue','overalls-flannel','overalls-pink','overalls-red','overalls-yellow','pirate-black','pirate-red','punk','robe-blue','robe-king','robe-red','robe-white','shirt-bowtie','shirt-white','shirt-yellow','sweater-black','sweater-green-chain','sweater-orange','sweater-pink','tanktop-orange','tanktop-pink','tanktop-sailor-black','tanktop-sailor-blue','tanktop-sailor-red','tanktop-tattoo','tanktop-white','tiger','toga','tshirt-blue','tshirt-green','tshirt-metal','tshirt-pink','tshirt-red','tshirt-white','tshirt-yellow','viking-brown','viking-navy','wetsuit','winter-blue','winter-red','work-blue','work-red'
]

const shoeTraits = [
  '', 'astro','astro-black','astro-orange','bandana-green','bandana-purple','bandana-red','baseball-blue','baseball-red','buttondown-black-flannel','buttondown-blue-flannel','buttondown-green','buttondown-red-flannel','buttondown-tan','chain','combat-black','combat-green','cowboy-black','cowboy-brown','deepsea-bronze','deepsea-orange','epaulette-black','epaulette-red','epaulette-white','gown-black','gown-purple','gown-white','hoodie-black','hoodie-purple','hoodie-red','knight','knight-black','knight-leather','labcoat','lederhosen','monk','mononoke','ninja-black','ninja-blue','ninja-red','nurse','overalls-blue','overalls-flannel','overalls-pink','overalls-red','overalls-yellow','pirate-black','pirate-red','punk','robe-blue','robe-king','robe-red','robe-white','shirt-bowtie','shirt-white','shirt-yellow','sweater-black','sweater-green-chain','sweater-orange','sweater-pink','tanktop-orange','tanktop-pink','tanktop-sailor-black','tanktop-sailor-blue','tanktop-sailor-red','tanktop-tattoo','tanktop-white','toga','tshirt-blue','tshirt-green','tshirt-metal','tshirt-pink','tshirt-red','tshirt-white','tshirt-yellow','viking-brown','viking-navy','winter-blue','winter-red','work-blue','work-red'
]

const sidekicks = [
  '', 'bones', 'milo', 'swordsman-bones-red'
];

export default {
  title: 'Custom Avatar',
  component: AvatarCanvas,
  args: {
    face: 'happy',
    hat: '',
    shirt: '',
    pants: '',
    shoes: '',
    sidekick: '',
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
    shoes: {
      control: 'select',
      options: shoeTraits
    },
    sidekick: {
      control: 'select',
      options: sidekicks
    }
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
    ],
    rules: []
  }
]

const BlueCatTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  
  const { pants, shirt, face, shoes, hat, sidekick } = args as any;
  const traits = BlueCatTraits.concat(
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
    pants ? [
      {
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.PANTS,
        name: pants,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${pants}-pants.png`
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
            uri: `${shoes}-shoes.png`
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
      height={400}
      width={400}
    />
  )
}

export const BlueCat = BlueCatTemplate.bind({});