import { CanvasLayer } from "../canvasUtils";
import { Avatar, AvatarView, Trait, TraitRuleFunction, TraitRuleFunctionMap, TraitRuleType, TraitType } from "./types";

export const EFFECT_BLACK_AND_WHITE = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, layer: CanvasLayer) => {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data }= imgData;

  // loop through all pixels
  // each pixel is decomposed in its 4 rgba values
  for (let i = 0; i < data.length; i += 4) {
    // get the medium of the 3 first values ( (r+g+b)/3 )
    const med = (data[i] + data[i + 1] + data[i + 2]) / 3;

    // set it to each value (r = g = b = med)
    data[i + 0] = med;
    data[i + 1] = med;
    data[i + 2] = med;
  }
  
  // redraw the new computed image
  ctx.putImageData(imgData, 0, 0);
};

export const EFFECT_STICKER = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, layer: CanvasLayer, createCanvas: Function, index: number) => {
  
};

export const EFFECT_OUTLINE_PARENT = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, r: number[], g: number[], b: number[]) => {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data }= imgData;

  for (let i = 0; i < data.length; i += 4) {
    if (!r.includes(data[i + 0]) && !g.includes(data[i + 1]) && !b.includes(data[i + 2])) {
      data[i + 0] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
};

export const EFFECT_OUTLINE = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, layer: CanvasLayer) => {
  return EFFECT_OUTLINE_PARENT(canvas, ctx, [35], [31], [32]);
};

export const EFFECT_OUTLINE_LEFT_CAT = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, layer: CanvasLayer) => {
  const bounds = Array.from(Array(10).keys()).map(i => i + 29);
  return EFFECT_OUTLINE_PARENT(
    canvas,
    ctx, 
    bounds,
    bounds,
    bounds
  );
};

export const EFFECT_INVERSE = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, layer: CanvasLayer) => {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data }= imgData;

  for (let i = 0; i < data.length; i += 4) {
    data[i + 0] = data[i + 0] ^ 255;
    data[i + 1] = data[i + 1] ^ 255;
    data[i + 2] = data[i + 2] ^ 255;
  }
  
  ctx.putImageData(imgData, 0, 0);
};

export const EFFECT_UPSIDE_DOWN = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, layer: CanvasLayer) => {};
export const EFFECT_FLIP_HORIZONTAL = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, layer: CanvasLayer) => {};

const Sr = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
  Sg = [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255],
  Sb = [53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 61, 61, 61, 62, 62, 63, 63, 63, 64, 65, 65, 65, 66, 66, 67, 67, 67, 68, 69, 69, 69, 70, 70, 71, 71, 72, 73, 73, 73, 74, 74, 75, 75, 76, 77, 77, 78, 78, 79, 79, 80, 81, 81, 82, 82, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 89, 90, 90, 91, 91, 93, 93, 94, 94, 95, 95, 96, 97, 98, 98, 99, 99, 100, 101, 102, 102, 103, 104, 105, 105, 106, 106, 107, 108, 109, 109, 110, 111, 111, 112, 113, 114, 114, 115, 116, 117, 117, 118, 119, 119, 121, 121, 122, 122, 123, 124, 125, 126, 126, 127, 128, 129, 129, 130, 131, 132, 132, 133, 134, 134, 135, 136, 137, 137, 138, 139, 140, 140, 141, 142, 142, 143, 144, 145, 145, 146, 146, 148, 148, 149, 149, 150, 151, 152, 152, 153, 153, 154, 155, 156, 156, 157, 157, 158, 159, 160, 160, 161, 161, 162, 162, 163, 164, 164, 165, 165, 166, 166, 167, 168, 168, 169, 169, 170, 170, 171, 172, 172, 173, 173, 174, 174, 175, 176, 176, 177, 177, 177, 178, 178, 179, 180, 180, 181, 181, 181, 182, 182, 183, 184, 184, 184, 185, 185, 186, 186, 186, 187, 188, 188, 188, 189, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 193, 194, 194, 194, 195, 196, 196, 196, 197, 197, 197, 198, 199];

const Snoise = 10;

export const EFFECT_SEPIA = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, layer: CanvasLayer) => {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imgData;

  for (let i = 0; i < data.length; i += 4) {
    data[i + 0] = Sr[data[i + 0]];
    data[i + 1] = Sg[data[i + 1]];
    data[i + 2] = Sb[data[i + 2]];

    // apply noise
    if (Snoise > 0) {
      const noise = Math.round(Snoise - Math.random() * Snoise);

      for(let j = 0; j < 3; j++) {
        const iPN = noise + data[i + j];
        data[i + j] = (iPN > 255) ? 255 : iPN;
      }
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
};

const ROBES = [
  'robe white', 'robe king', 'robe blue', 'robe red', 'toga'
];
const PANTS = [
  'lederhosen', 'nurse', 'overalls yellow', 'overalls blue', 'overalls flannel', 'overalls pink', 'overalls red'
];
const WOLFPANTS = [
  'overalls skull'
]
const SHIRTS = [
  'dueler', 'scarf plaid', 'scarf red', 'chain', 'necklace flint', 'necklace jaw', 'necklace teeth'
];
const OVERSHIRTS = [
  'pinstripe vest', 'dress'
]

export const MOVE_PANTS_UNDER_SHIRT = (trait: Trait, traits: Trait[]) => {
  if (trait.type === Avatar.CAT 
    && trait.traitType === TraitType.PANTS 
    && traits.find(
      t => t.traitType === TraitType.SHIRT && ROBES.includes(t.name.split('-').join(' ').toLowerCase())
    )
  ) {
    return {
      ...trait,
      weight: 2
    }
  }

  return trait;
};

export const MOVE_PANTS_OVER_SHIRT = (trait: Trait, traits: Trait[]) => {
  if (trait.traitType === TraitType.PANTS 
    && (
      (trait.type === Avatar.CAT && PANTS.includes(trait.name.split('-').join(' ').toLowerCase()))
      || (trait.type === Avatar.SHADOWWOLF && WOLFPANTS.includes(trait.name.split('-').join(' ').toLowerCase()))
    ) && !traits.find(
      t => t.traitType === TraitType.SHIRT && ROBES.includes(t.name.split('-').join(' ').toLowerCase())
    )
  ) {
    return {
      ...trait,
      weight: 4.5
    }
  }

  return trait;
};

export const MOVE_SHIRTS_OVER_HATS = (trait: Trait, traits: Trait[]) => {
  if (trait.traitType === TraitType.SHIRT 
    && SHIRTS.includes(trait.name.split('-').join(' ').toLowerCase()) 
  ) {
    return {
      ...trait,
      weight: 6.5
    }
  }
  if (trait.traitType === TraitType.PANTS 
    && OVERSHIRTS.includes(trait.name.split('-').join(' ').toLowerCase()) 
    && traits.find(
      t => t.traitType === TraitType.SHIRT && OVERSHIRTS.includes(t.name.split('-').join(' ').toLowerCase())
    )
  ) {
    return {
      ...trait,
      weight: 4.5
    }
  }

  return trait;
};

export const HIDE_VISOR_IF = (trait: Trait, traits: Trait[]) => {
  if (traits.find(t => t.traitType === TraitType.FACE && t.name.includes('tvface'))) {
    return {
      ...trait,
      images: trait.images.filter(i => !i.uri.includes('screen'))
    }
  }

  return trait;
};

export const COMIC_CON_PLACEMENT = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar, view?: AvatarView) => {
  if (trait.traitType === TraitType.BORDER || trait.traitType === TraitType.BACKGROUND) {
    return trait;
  }

  if (view === AvatarView.HEAD) {
    return {
      ...trait,
      width: (width || 2000) * 1.5,
      height: (height || 2000) * 1.5,
      offsetX: (width * -0.09) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1),
      offsetY: (height * 0.35) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1)
    }
  }
  
  return {
    ...trait,
    width: (width || 2000) * 1,
    height: (height || 2000) * 1,
    offsetX: (width * 0.165) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1),
    offsetY: (height * 0.4) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1)
  }
};

export const WOOT_PLACEMENT = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar, view?: AvatarView) => {
  if (![TraitType.BODY, TraitType.FACE, TraitType.HAT].includes(trait.traitType)) {
    return {
      ...trait,
      weight: -1
    };
  }
  
  if (trait.traitType === TraitType.BORDER) {
    return {
      ...trait,
      weight: 0
    };
  }
  
  return {
    ...trait,
    width: (width || 2000) * 1.2,
    height: (height || 2000) * 1.2,
    offsetX: (width * 0.135) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1),
    offsetY: (height * 0.48) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1)
  }
};

export const HOMER_NFT_PLACEMENT = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar, view?: AvatarView) => {
  if (trait.traitType === TraitType.BORDER || trait.traitType === TraitType.BACKGROUND) {
    return trait;
  }

  if (view === AvatarView.HEAD) {
    return {
      ...trait,
      width: (width || 2000) * 0.7,
      height: (height || 2000) * 0.7,
      offsetX: (width * 0.4) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1),
      offsetY: (height * 0.45) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1)
    }
  }
  
  return {
    ...trait,
    width: (width || 2000) * 0.25,
    height: (height || 2000) * 0.25,
    offsetX: (width * 0.625) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1),
    offsetY: (height * 0.46) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1)
  }
};

export const CHRISTMAS_CARD_PLACEMENT = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar) => {
  if (trait.traitType === TraitType.BORDER || trait.traitType === TraitType.BACKGROUND) {
    return trait;
  }

  if (trait.traitType === TraitType.SIDEKICK) {
    return {
      ...trait,
      weight: -1
    };
  }
  
  return {
    ...trait,
    width: (width || 2000) * 1,
    height: (height || 2000) * 1,
    offsetX: (width * 0) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1),
    offsetY: (height * 0.3) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1)
  }
};

export const MILK_CHUG = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar) => {
  if (trait.traitType === TraitType.BORDER || trait.traitType === TraitType.BACKGROUND) {
    return trait;
  }

  if (
    trait.traitType === TraitType.SIDEKICK 
    || trait.traitType === TraitType.PANTS 
    || trait.traitType === TraitType.ACCESSORY 
    || trait.traitType === TraitType.SHOES
  ) {
    return {
      ...trait,
      weight: -1
    };
  }

  const offsetX = 0.045;
  
  return {
    ...trait,
    images: trait.traitType === TraitType.BODY ? trait.images.filter(
      i => !['sw-feet.png', '1-socks.png', '2-socks.png'].includes(i.uri)
    ) : trait.images,
    offsetX: (width * offsetX) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1),
    offsetY: (height * 0.01) * ((type === Avatar.CAT && tokenId === '500') ? -1 : 1)
  }
};

export const HIDE_FACE_FOR_MECHANICAL = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar) => {
  if (
    (trait.traitType === TraitType.FACE || (trait.traitType === TraitType.SHOES && trait.type === Avatar.SHADOWWOLF))
    && traits.find(t => t.traitType === TraitType.SKIN && t.name.toLowerCase().includes('mechanical'))
  ) {
    return {
      ...trait,
      weight: -1
    };
  }
  
  return trait;
};

export const HIDE_LEGS_AND_FEET = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar) => {
  if (trait.traitType === TraitType.SHOES) {
    return {
      ...trait,
      weight: -1
    };
  }

  if (trait.traitType === TraitType.BODY) {
    return {
      ...trait,
      images: trait.images.filter(i => (!i.uri.includes('body') && !i.uri.includes('feet') && !i.uri.includes('-socks')))
    };
  }
  
  return trait;
};

function isShirtAccessory(trait: Trait) {
  return trait.traitType === TraitType.SHIRT 
  && (
    ['university-sweatshirt-coffee', 'snowman-body'].includes(trait.name?.toLowerCase().replace(' ', '-'))
    || trait.name.includes('coffee')
  )
}

export const FLIP_SIDEKICK = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar) => {
  if (trait.traitType === TraitType.SIDEKICK
    && (traits.find(t => t.traitType === TraitType.ACCESSORY && t.name !== 'no accessory')
      && !traits.find(isShirtAccessory)
    )
  ) {
    return {
      ...trait,
      rules: (trait.rules || []).concat({
        fn: TraitRuleFunction.EFFECT_FLIP_HORIZONTAL,
        type: TraitRuleType.EFFECT
      })
    };
  }
  
  return trait;
}

export const FLIP_ACCESSORY = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar) => {
  if (trait.traitType === TraitType.ACCESSORY
    && traits.find(isShirtAccessory)
  ) {
    return {
      ...trait,
      rules: (trait.rules || []).concat({
        fn: TraitRuleFunction.EFFECT_FLIP_HORIZONTAL,
        type: TraitRuleType.EFFECT
      })
    };
  }
  
  return trait;
};

export const HIDE_ARMS = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar) => {
  if (trait.traitType === TraitType.BODY
    && traits.find(isShirtAccessory)
  ) {
    return {
      ...trait,
      images: trait.images.filter(i => !i.uri.includes('arms') && !i.uri.includes('gloves'))
    };
  }
  
  return trait;
};

export const HIDE_CHEEKS = (trait: Trait, traits: Trait[], width: number, height: number, tokenId?: string, type?: Avatar) => {
  if (trait.traitType === TraitType.BODY) {
    return {
      ...trait,
      images: trait.images.filter(i => i.uri !== 'sw-cheeks.png')
    };
  }
  
  return trait;
};

export const exceptions = {};

export const effects = {
  [TraitRuleFunction.EFFECT_BLACK_AND_WHITE]: EFFECT_BLACK_AND_WHITE,
  [TraitRuleFunction.EFFECT_OUTLINE]: EFFECT_OUTLINE,
  [TraitRuleFunction.EFFECT_INVERSE]: EFFECT_INVERSE,
  [TraitRuleFunction.EFFECT_OUTLINE_LEFT_CAT]: EFFECT_OUTLINE_LEFT_CAT,
  [TraitRuleFunction.EFFECT_STICKER]: EFFECT_STICKER,
  [TraitRuleFunction.EFFECT_UPSIDE_DOWN]: EFFECT_UPSIDE_DOWN,
  [TraitRuleFunction.EFFECT_FLIP_HORIZONTAL]: EFFECT_FLIP_HORIZONTAL,
  [TraitRuleFunction.EFFECT_SEPIA]: EFFECT_SEPIA,
} as TraitRuleFunctionMap;

export const mutations = {
  [TraitRuleFunction.HIDE_VISOR]: HIDE_VISOR_IF,
  [TraitRuleFunction.MOVE_PANTS_UNDER_SHIRT]: MOVE_PANTS_UNDER_SHIRT,
  [TraitRuleFunction.MOVE_PANTS_OVER_SHIRT]: MOVE_PANTS_OVER_SHIRT,
  [TraitRuleFunction.MOVE_SHIRTS_OVER_HATS]: MOVE_SHIRTS_OVER_HATS,
  [TraitRuleFunction.COMIC_CON_PLACEMENT]: COMIC_CON_PLACEMENT,
  [TraitRuleFunction.HOMER_NFT_PLACEMENT]: HOMER_NFT_PLACEMENT,
  [TraitRuleFunction.CHRISTMAS_CARD_PLACEMENT]: CHRISTMAS_CARD_PLACEMENT,
  [TraitRuleFunction.MILK_CHUG]: MILK_CHUG,
  [TraitRuleFunction.HIDE_FACE_FOR_MECHANICAL]: HIDE_FACE_FOR_MECHANICAL,
  [TraitRuleFunction.WOOT_PLACEMENT]: WOOT_PLACEMENT,
  [TraitRuleFunction.HIDE_LEGS_AND_FEET]: HIDE_LEGS_AND_FEET,
  [TraitRuleFunction.FLIP_ACCESSORY]: FLIP_ACCESSORY,
  [TraitRuleFunction.FLIP_SIDEKICK]: FLIP_SIDEKICK,
  [TraitRuleFunction.HIDE_ARMS]: HIDE_ARMS,
  [TraitRuleFunction.HIDE_CHEEKS]: HIDE_CHEEKS
} as TraitRuleFunctionMap;

export default {
  exceptions,
  mutations
}