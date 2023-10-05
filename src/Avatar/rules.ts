import { Avatar, AvatarView, Trait, TraitRuleFunction, TraitRuleFunctionMap, TraitType } from "./types";

export const EFFECT_BLACK_AND_WHITE = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
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

export const EFFECT_OUTLINE = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  return EFFECT_OUTLINE_PARENT(canvas, ctx, [35], [31], [32]);
};

export const EFFECT_OUTLINE_LEFT_CAT = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  const bounds = Array.from(Array(10).keys()).map(i => i + 29);
  return EFFECT_OUTLINE_PARENT(
    canvas,
    ctx, 
    bounds,
    bounds,
    bounds
  );
};

export const EFFECT_INVERSE = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data }= imgData;

  for (let i = 0; i < data.length; i += 4) {
    data[i + 0] = data[i + 0] ^ 255;
    data[i + 1] = data[i + 1] ^ 255;
    data[i + 2] = data[i + 2] ^ 255;
  }
  
  ctx.putImageData(imgData, 0, 0);
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

const APPLY_TRAIT_RULE = (
  trait: Trait,
  traits: Trait[],
  targetIsOneOf: string[],
  exceptionTraitType: TraitType,
  shouldInclude: string[]
) => {
  const targetException = traits.find(t => t.traitType === exceptionTraitType);
  if (targetException
    && targetIsOneOf.includes(targetException.name)
    && shouldInclude.includes(trait.name)
  ) {
    return `${targetException.traitType} ${targetException.name} should not include ${trait.traitType} ${trait.name}`;
  }
}

export const EXCEPTION_TV_FACE_1 = (trait: Trait, traits: Trait[]) => {
  return APPLY_TRAIT_RULE(
    trait,
    traits,
    ['tvface bobross', 'tvface xp', 'tvface 404', 'tvface nosignal'],
    TraitType.FACE,
    [ 'none', 'admiral', 'admiral pink', 'afro black', 'afro brown', 'afro rainbow unicorn', 'antlers',
      'apple', 'arrowhead', 'astro', 'astro cheeks', 'astro fishbowl', 'beanie black', 'beanie blue',
      'beanie orange', 'beanie red', 'beret black', 'beret green', 'beret pink', 'beret red', 'bow', 'bucket hat blue',
      'bucket hat green', 'bucket hat tan', 'bucket hat white', 'candle', 'costume dragon', 'costume frog', 'costume gorilla',
      'cowboy black', 'cowboy brown', 'crown black', 'crown fire', 'crown gold', 'cupcake', 'deepsea bronze', 'deepsea orange',
      'dutch', 'flower blue', 'flower pink', 'flower red', 'goggles seaweed', 'halo', 'halo fire', 'hat black', 'hat skull',
      'hat visor blue', 'hat visor yellow', 'hat white', 'headband blue', 'headband red', 'helm army', 'helm biker', 'helm bronze',
      'helm silver', 'horns', 'knight black', 'knight blue', 'knight red', 'mohawk green', 'mohawk purple', 'mohawk red',
      'mullet blonde', 'mullet brown', 'ninja black', 'ninja blue', 'ninja red', 'nurse', 'piercings', 'pirate black', 'pirate red',
      'prince', 'sunhat black', 'sunhat tan', 'sunhat white', 'sushi', 'top hat', 'unicorn horn', 'visor green', 'visor purple',
      'wreath', 'wreath flowers'
    ],
  )
}

export const EXCEPTION_SHADOWWOLF_RULE_1 = (trait: Trait, traits: Trait[]) => {
  return APPLY_TRAIT_RULE(
    trait,
    traits,
    ['Astro', 'Cat Costume', 'Fishbowl'],
    TraitType.HAT,
    ["Boss", "Celestial Blue", "Celestial Pink", "Dueler", "Lord Red", "Necklace Flint", "Necklace Jaw", "Necklace Teeth", "Overalls Skull", "Scarf Plaid", "Scarf Red", "Wreath Rainbow", "Wreath Red"]
  )
}

export const EXCEPTION_SHADOWWOLF_RULE_2 = (trait: Trait, traits: Trait[]) => {
  return APPLY_TRAIT_RULE(
    trait,
    traits,
    ["Pilot"],
    TraitType.HAT,
    ["Frustrated", "Big Eyes", "Classic", "Crazy", "Cute", "Dots", "Ender", "Red Eyes", "Shadow Wolf", "Sunglasses Round", "Sunglasses Sleek", "Three Eyes", "Tired", "Wide Eye", "XO"]
  )
}

export const EXCEPTION_SHADOWWOLF_RULE_3 = (trait: Trait, traits: Trait[]) => {
  return APPLY_TRAIT_RULE(
    trait,
    traits,
    ["Mask Village", "Masquerade"],
    TraitType.HAT,
    ["Big Eyes", "Classic", "Crazy", "Dots", "Ender", "Face Face", "Glow", "Red Eyes", "Shadow Wolf", "Sunglasses Round", "Tired", "Wide Eye", "XO"]
  )
}

export const EXCEPTION_SHADOWWOLF_RULE_4 = (trait: Trait, traits: Trait[]) => {
  return APPLY_TRAIT_RULE(
    trait,
    traits,
    ["Astro"],
    TraitType.HAT,
    ["Boss", "Buttondown Indigo", "Buttondown Brown", "Celestial Blue", "Celestial Pink", "Chain", "Chain Medallion", 
    "Dueler", "Lord Red", "Necklace Flint", "Necklace Jaw", "Necklace Teeth", "Overalls Skull", "Scarf Plaid",
    "Scarf Red", "Sleeve Fire", "Sleeve Flower", "Sleeve Moon", "Sleeve Mushroom", "Sleeve Star", "Sleeve Symbol"]
  )
}

export const EXCEPTION_SHADOWWOLF_RULE_5 = (trait: Trait, traits: Trait[]) => {
  return APPLY_TRAIT_RULE(
    trait,
    traits,
    ["Sunglasses Round"],
    TraitType.FACE,
    ["Disguise Fish", "Masquerade"]
  )
}

export const exceptions = {
  [Avatar.CAT]: {
    [AvatarView.FRONT]: {
      [TraitType.HAT]: [EXCEPTION_TV_FACE_1],
    },
    [AvatarView.LEFT]: {
      [TraitType.HAT]: [EXCEPTION_TV_FACE_1],
    }
  },
  [Avatar.SHADOWWOLF]: {
    [AvatarView.RIGHT]: {
      [TraitType.SHIRT]: [EXCEPTION_SHADOWWOLF_RULE_1, EXCEPTION_SHADOWWOLF_RULE_4],
      [TraitType.FACE]: [EXCEPTION_SHADOWWOLF_RULE_2, EXCEPTION_SHADOWWOLF_RULE_3],
      [TraitType.HAT]: [EXCEPTION_SHADOWWOLF_RULE_5]
    }
  }
};

export const effects = {
  [TraitRuleFunction.EFFECT_BLACK_AND_WHITE]: EFFECT_BLACK_AND_WHITE,
  [TraitRuleFunction.EFFECT_OUTLINE]: EFFECT_OUTLINE,
  [TraitRuleFunction.EFFECT_INVERSE]: EFFECT_INVERSE,
  [TraitRuleFunction.EFFECT_OUTLINE_LEFT_CAT]: EFFECT_OUTLINE_LEFT_CAT,
} as TraitRuleFunctionMap;

export const mutations = {
  [TraitRuleFunction.HIDE_VISOR]: HIDE_VISOR_IF
} as TraitRuleFunctionMap;

export default {
  exceptions,
  mutations
}