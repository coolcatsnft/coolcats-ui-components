import { Avatar, AvatarView, CreateAvatarTraitsConfig, Trait, TraitImage, TraitRarity, TraitRule, TraitRuleFunction, TraitRuleType, TraitType } from "./types";
import { effects, mutations } from './rules'
import { CanvasLayer } from "../canvasUtils";

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 1000;
const BODY_OVERRIDES = [
  'CAT_2288_Skeleton', 'CAT_3330_Robot', 'CAT_4695_Lucky', 'CAT_500_Upsidedown', 'CAT_5280_Demon', 'CAT_6972_Celestial', 'CAT_8800_Angel', 'CAT_9580_Alien', 'CAT_1490_Zombie'
];
const TIGERS = ['8968', '1146', '4687', '6054', '6250', '2477', '6688', '526', '1718', '4960', '6749', '4717', '4952', '6169', '6635', '9607', '9882', '1544', '3611', '5843', '6482', '1180', '1233', '5416', '7107', '3772', '4178', '8645', '8170', '2980', '3019', '2172', '2156', '8579', '1515', '1977', '7262', '8815', '611', '6954', '1279', '6967', '8084', '5735', '3623', '5949', '6705', '3213', '8969', '6136', '2179', '7460', '1451', '9254', '1785', '5708', '5617', '4735'];


export function applyDefaultWeights(trait: Trait) {
  return {
    ...trait,
    weight: {
      [TraitType.BACKGROUND]: 0,
      [TraitType.BODY]: 1,
      [TraitType.PANTS]: 2,
      [TraitType.SHOES]: 3,
      [TraitType.SHIRT]: 4,
      [TraitType.FACE]: 5,
      [TraitType.HAT]: 6,
      [TraitType.BORDER]: 7,
      [TraitType.SIDEKICK]: 8,
      [TraitType.EFFECT]: 100
    }[trait.traitType]
  }
}

export function evaluateTraitMutateRules(trait: Trait, traits: Trait[]) {
  const rules = (trait.rules || []).filter(r => r.type === TraitRuleType.MUTATE);
  if (rules.length > 0) {
    return rules.map(r => {
      const fn = mutations[r.fn];
      if (typeof fn === 'function') {
        return fn(trait, traits)
      }

      return;
    }).filter(
      r => r
    ).reduce((cur, i) => {
      return {
        ...cur,
        ...i
      };
    }, trait);
  }

  return trait;
}

export function applyWeights(traitA: Trait, traitB: Trait) {
  const weightA = (typeof traitA.weight === 'number') ? traitA.weight : applyDefaultWeights(traitA).weight;
  const weightB = (typeof traitB.weight === 'number') ? traitB.weight : applyDefaultWeights(traitB).weight;
  return weightA - weightB;
}

/**
 * @param config 
 * @returns {CanvasLayer[]}
 */
export function createAvatarCanvasLayers(
  config: CreateAvatarTraitsConfig
) {
  const {
    view,
    type,
    tokenId,
    traits, 
    width, 
    height,
    baseUrl
  } = config;

  const hasSidekick = traits.find(t => t.traitType === TraitType.SIDEKICK && t.name !== 'no sidekick');

  const LEGENDARY_OVERRIDE = BODY_OVERRIDES.find(o => type === Avatar.CAT && tokenId ? o.startsWith(`${type || ''}_${tokenId || ''}`) : false);
  const LEGENDARY_OVERRIDE_TRAIT = {
    type: type || Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.BODY,
    name: (LEGENDARY_OVERRIDE || '___').split('_')[2],
    rarity: TraitRarity.LEGENDARY,
    images: [
      {
        uri: `${(LEGENDARY_OVERRIDE || '___').split('_')[1]}.png`
      }
    ],
    rules: []
  } as Trait;

  const isUpsideDown = LEGENDARY_OVERRIDE === 'CAT_500_Upsidedown';
  const isTiger = typeof tokenId === 'string' && TIGERS.includes(tokenId) && type === Avatar.CAT;

  const bodyImages = [
    isTiger ? { uri: 'tiger.png', weight: 100 } : undefined
  ].filter(i => i).concat(
    type === Avatar.CAT ? [
      {
        uri: 'cc-body.png',
        weight: 1
      },
      {
        uri: 'cc-arms.png',
        weight: 2
      },
      {
        uri: 'cc-head.png',
        weight: 3
      },
      {
        uri: 'cc-whiskers.png',
        weight: 4
      }
    ] : undefined
  ).filter(i => i) as TraitImage[]

  const body = {
    type,
    view: AvatarView.FULL,
    traitType: TraitType.BODY,
    name: 'body',
    rarity: TraitRarity.NONE,
    images: bodyImages,
    rules: []
  }

  // Add body trait
  const traitsIncludingBody = traits.concat(
    [body]
  ).map(t => t.traitType === TraitType.BODY ? {
    ...t,
    images: LEGENDARY_OVERRIDE ? LEGENDARY_OVERRIDE_TRAIT.images : t.images,
  } : t).concat(
    LEGENDARY_OVERRIDE && !traits.find(t => t.traitType === TraitType.BACKGROUND) ? [{
      ...LEGENDARY_OVERRIDE_TRAIT,
      traitType: TraitType.BACKGROUND
    }] : []
  ).map(t => {
    // Apply special rules for upside down cat...!
    if (type === Avatar.CAT && tokenId === '500' && ![TraitType.BACKGROUND, TraitType.BODY].includes(t.traitType)) {
      return {
        ...t,
        rules: [{
          fn: TraitRuleFunction.EFFECT_UPSIDE_DOWN,
          type: TraitRuleType.EFFECT
        }].concat(t.rules || [])
      }
    }

    return t;
  });

  // Map out traits into the Layered canvas config.  
  // This may require reducing as some layers will have multiple images
  const sortedTraits = traitsIncludingBody.map((trait: Trait) => {
    // Apply default rules
    return {
      ...trait,
      rules: (trait.rules || []).concat(
        trait.type === 'CAT' && trait.traitType === TraitType.PANTS ? [
          {
            fn: TraitRuleFunction.MOVE_PANTS_OVER_SHIRT,
            type: TraitRuleType.MUTATE
          }
        ] : []
      ).concat(
        trait.type === 'CAT' && trait.traitType === TraitType.PANTS ? [
          {
            fn: TraitRuleFunction.MOVE_PANTS_UNDER_SHIRT,
            type: TraitRuleType.MUTATE
          }
        ] : []
      )
    }
  }).map((trait: Trait) => {
    // Apply any trait mutations necessary
    // Mutate any images with mutate rules
    return evaluateTraitMutateRules(
      trait,
      traits
    );
  }).filter(t => {
    if (hasSidekick && view === AvatarView.FRONT) {
      return t.traitType !== TraitType.SIDEKICK;
    }

    return true;
  }).map((trait: Trait) => {
    if (view === AvatarView.FRONT && trait.traitType !== TraitType.BACKGROUND) {
      return {
        ...trait,
        offsetY: isUpsideDown ? ((height || CANVAS_HEIGHT) * -1.1) : ((height || CANVAS_HEIGHT) / 10),
        offsetX: ((width || CANVAS_WIDTH) * -1) / 2,
        width: (width || CANVAS_WIDTH) * 2,
        height: (height || CANVAS_HEIGHT) * 2
      }
    }

    if (hasSidekick 
      && view === AvatarView.FULL 
      && trait.traitType !== TraitType.BACKGROUND 
      && trait.traitType !== TraitType.SIDEKICK
    ) {
      return {
        ...trait,
        offsetX: (width || CANVAS_WIDTH) * (isUpsideDown ? -0.11 : 0.11)
      }
    }
    return trait;
  }).sort((a: Trait, b: Trait) => {
    return applyWeights(a, b);
  });

  return sortedTraits.reduce((layers: CanvasLayer[], trait: Trait) => {
    // Apply any effects
    const canvasEffects = traits.filter(
      (i: Trait) => i.traitType === TraitType.EFFECT
    ).reduce((traitEffects: Function[], trait: Trait) => {
      const funcs = (trait.rules || []).filter(
        (r: TraitRule) => r.type === TraitRuleType.EFFECT && typeof effects[r?.fn || ''] === 'function'
      ).map(tr => effects[tr?.fn || ''] as Function);
  
      return traitEffects.concat(funcs);
    }, []).concat(
      trait.traitType !== TraitType.EFFECT ? (trait.rules || []).filter(
        r => r.type === TraitRuleType.EFFECT
      ).map(
        e => effects[e.fn] as Function
      ) : []
    );

    // Transform the trait layer into a canvas layer
    const newLayer = trait.images.sort((a: TraitImage, b: TraitImage) => {
      return (a?.weight || 0) - (b?.weight || 0);
    }).reduce((newLayers: CanvasLayer[], traitImage: TraitImage) => {
      return newLayers.concat([
        {
          src: `${(baseUrl || '').replace('$traitType', trait.traitType.toLowerCase())}${traitImage.uri}`,
          height: trait.height || height || CANVAS_HEIGHT,
          width: trait.width || width || CANVAS_WIDTH,
          x: typeof trait.offsetX === 'number' ? trait.offsetX : 0,
          y: typeof trait.offsetY === 'number' ? trait.offsetY : 0,
          canvasCallbacks: canvasEffects,
          rotate: (trait.rules || []).find(r => r.fn === TraitRuleFunction.EFFECT_UPSIDE_DOWN) ? 180 : undefined
        }
      ])
    }, []);
    return layers.concat(newLayer);
  }, []);
}