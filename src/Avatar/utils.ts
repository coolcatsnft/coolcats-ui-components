import { Avatar, AvatarView, CreateAvatarTraitsConfig, Trait, TraitImage, TraitRarity, TraitRule, TraitRuleFunction, TraitRuleType, TraitType } from "./types";
import { effects, mutations } from './rules'
import { CanvasLayer } from "../canvasUtils";

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 1000;
const BODY_OVERRIDES = [
  'CAT_2288_Skeleton', 'CAT_3330_Robot', 'CAT_4695_Lucky', 'CAT_500_Upsidedown', 'CAT_5280_Demon', 'CAT_6972_Celestial', 'CAT_8800_Angel', 'CAT_9580_Alien', 'CAT_1490_Zombie',
  'SHADOWWOLF_3928_Blood Moon', 'SHADOWWOLF_4953_Poison Mushroom', 'SHADOWWOLF_5769_Blue Flame', 'SHADOWWOLF_6092_Lotus Flower', 'SHADOWWOLF_3572_Dark Star'
];
const TIGERS = ['8968', '1146', '4687', '6054', '6250', '2477', '6688', '526', '1718', '4960', '6749', '4717', '4952', '6169', '6635', '9607', '9882', '1544', '3611', '5843', '6482', '1180', '1233', '5416', '7107', '3772', '4178', '8645', '8170', '2980', '3019', '2172', '2156', '8579', '1515', '1977', '7262', '8815', '611', '6954', '1279', '6967', '8084', '5735', '3623', '5949', '6705', '3213', '8969', '6136', '2179', '7460', '1451', '9254', '1785', '5708', '5617', '4735'];
const TRIBAL = ['4687', '4483', '4734', '4782', '4932', '4974', '4975', '4216', '3979', '1867', '4406', '4418', '4369', '4152', '4050', '4089', '4075', '5036', '5120', '5164', '319', '60', '377', '279', '889', '1500', '1491', '728', '1146', '607', '960', '658', '1269', '1249', '830', '1329', '1609', '1559', '1801', '1873', '5019', '5192', '5184', '5228', '5521', '5499', '4976', '5421', '749', '1509', '5638', '6007', '6063', '6165', '6245', '5750', '5830', '5842', '5855', '5911', '312', '1504', '3612', '3005', '3059', '3117', '3146', '3172', '3184', '3191', '3322', '3476', '3491', '3544', '3568', '3604', '2306', '2463', '2581', '2615', '10', '521', '4271', '4972'];
const SKELETON = ['4668', '4517', '4802', '4955', '974', '2132', '4245', '4336', '2075', '4277', '1162', '1735', '4058', '1354', '5343', '5518', '5763', '6033', '6183', '213', '292', '1927', '1483', '1113', '1510', '1724', '747', '1632', '862', '484', '532', '1093', '1017', '1200', '1234', '1356', '1362', '117', '141', '1431', '3255', '3296', '3354', '3448', '3480', '3482', '3547', '3559', '2361', '2428', '2483', '2612', '2790', '2907', '3831', '776', '1834', '1159', '362'];
const SCHOLARS = ['6229', '5636', '5694', '5696', '5718', '5772', '5776', '5789', '5790', '5805', '5825', '5858', '5958', '5964', '5983', '5986', '6015', '6094', '6097', '6105', '6114', '6138', '6157', '6176', '6185'];

export function applyDefaultWeights(trait: Trait) {
  return {
    ...trait,
    weight: {
      [TraitType.BACKGROUND]: 0,
      [TraitType.BODY]: 1,
      [TraitType.SKIN]: 1.5,
      [TraitType.PANTS]: 2,
      [TraitType.SHOES]: 3,
      [TraitType.SHIRT]: 4,
      [TraitType.FACE]: 5,
      [TraitType.HAT]: 6,
      [TraitType.BORDER]: 7,
      [TraitType.SIDEKICK]: 8,
      [TraitType.ACCESSORY]: 9,
      [TraitType.EFFECT]: 100
    }[trait.traitType]
  }
}

function evaluateRule(rules: TraitRule[], trait: Trait, traits: Trait[], width: number, height: number) {
  return rules.map(r => {
    const fn = mutations[r.fn];
    if (typeof fn === 'function') {
      return fn(trait, traits, width, height);
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

export function evaluateTraitMutateAllRules(trait: Trait, traits: Trait[], width: number, height: number) {
  const rules = traits.reduce((rules: TraitRule[], trait: Trait) => {
    return rules.concat((trait?.rules || []).filter(r => r.type === TraitRuleType.MUTATE_ALL));
  }, []);

  return evaluateRule(rules, trait, traits, width, height);
}

export function evaluateTraitMutateRules(trait: Trait, traits: Trait[], width: number, height: number) {
  const rules = (trait.rules || []).filter(r => r.type === TraitRuleType.MUTATE);
  
  return evaluateRule(rules, trait, traits, width, height);
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

  const LEGENDARY_OVERRIDE = BODY_OVERRIDES.find(o => tokenId ? o.split('_').slice(0, 2).join('_') === `${type || ''}_${tokenId || ''}` : false);
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
  const isTribal = typeof tokenId === 'string' && TRIBAL.includes(tokenId) && type === Avatar.SHADOWWOLF;
  const isSkeleton = typeof tokenId === 'string' && SKELETON.includes(tokenId) && type === Avatar.SHADOWWOLF;
  const isScholar = typeof tokenId === 'string' && SCHOLARS.find(s => s === tokenId) && type === Avatar.SHADOWWOLF;

  const bodyImages = [
    isTiger ? { uri: 'tiger.png', weight: 100 } : undefined
  ].concat(
    isTribal ? [{ uri: 'tribal.png', weight: 100 }] : undefined
  ).concat(
    isSkeleton ? [{ uri: 'skeleton.png', weight: 100 }] : undefined
  ).concat(
    isScholar ? [{ uri: `${tokenId}.png`, weight: 100 }] : undefined
  ).concat(
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
  ).concat(
    type === Avatar.SHADOWWOLF ? [
      {
        uri: 'sw-feet.png',
        weight: 1
      },
      {
        uri: 'sw-body.png',
        weight: 2
      },
      {
        uri: 'sw-shoulders.png',
        weight: 3
      },
      {
        uri: 'sw-arms.png',
        weight: 4
      },
      {
        uri: 'sw-cheeks.png',
        weight: 5
      },
      {
        uri: 'sw-head.png',
        weight: 6
      },
      {
        uri: 'sw-ears.png',
        weight: 7
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
    return evaluateTraitMutateAllRules(t, traits, width || CANVAS_WIDTH, height || CANVAS_HEIGHT);
  }).map(t => {
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

    if (isScholar && t.traitType === TraitType.FACE) {
      return {
        ...t,
        weight: 6.6
      }
    }

    if (isScholar && t.traitType === TraitType.BODY) {
      return {
        ...t,
        weight: 6.5
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
        trait.traitType === TraitType.PANTS ? [
          {
            fn: TraitRuleFunction.MOVE_PANTS_OVER_SHIRT,
            type: TraitRuleType.MUTATE
          },
          {
            fn: TraitRuleFunction.MOVE_PANTS_UNDER_SHIRT,
            type: TraitRuleType.MUTATE
          }
        ] : []
      ).concat(
        trait.traitType === TraitType.SHIRT && type === Avatar.SHADOWWOLF ? [
          {
            fn: TraitRuleFunction.MOVE_SHIRTS_OVER_HATS,
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
      traits,
      width || CANVAS_WIDTH,
      height || CANVAS_HEIGHT
    );
  }).filter(t => {
    if (view === AvatarView.FRONT) {
      return t.traitType !== TraitType.SIDEKICK;
    }

    return true;
  }).map((trait: Trait) => {
    if (view === AvatarView.FRONT && trait.traitType !== TraitType.BACKGROUND && trait.traitType !== TraitType.BORDER
      && typeof trait.offsetX !== 'number'
    ) {
      return {
        ...trait,
        offsetY: isUpsideDown ? ((height || CANVAS_HEIGHT) * -1.1) : ((height || CANVAS_HEIGHT) / 10),
        offsetX: ((width || CANVAS_WIDTH) * -1) / 2,
        width: (width || CANVAS_WIDTH) * 2,
        height: (height || CANVAS_HEIGHT) * 2
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
          rotate: (trait.rules || []).find(r => r.fn === TraitRuleFunction.EFFECT_UPSIDE_DOWN) ? 180 : undefined,
          background: trait.background,
          parentBackground: trait.parentBackground
        }
      ])
    }, []);
    return layers.concat(newLayer);
  }, []);
}